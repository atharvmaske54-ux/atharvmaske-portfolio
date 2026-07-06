import Admin from '../models/Admin.js';
import generateToken from '../utils/generateToken.js';

// @desc    Register a new admin
// @route   POST /api/auth/register
// @access  Public (in real-world, protect this to prevent anyone becoming admin)
export const registerAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const adminExists = await Admin.findOne({ email });

        if (adminExists) {
            return res.status(400).json({ success: false, message: 'Admin already exists' });
        }

        const admin = await Admin.create({
            name,
            email,
            password
        });

        if (admin) {
            res.status(201).json({
                success: true,
                message: 'Admin registered successfully',
                data: {
                    _id: admin._id,
                    name: admin.name,
                    email: admin.email,
                    token: generateToken(admin._id)
                }
            });
        } else {
            res.status(400).json({ success: false, message: 'Invalid admin data' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Auth admin & get token
// @route   POST /api/auth/login
// @access  Public
export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });

        if (admin && (await admin.matchPassword(password))) {
            res.json({
                success: true,
                message: 'Login successful',
                data: {
                    _id: admin._id,
                    name: admin.name,
                    email: admin.email,
                    token: generateToken(admin._id)
                }
            });
        } else {
            res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Get admin profile
// @route   GET /api/auth/profile
// @access  Private
export const getAdminProfile = async (req, res) => {
    try {
        const admin = await Admin.findById(req.admin._id);

        if (admin) {
            res.json({
                success: true,
                message: 'Profile retrieved',
                data: {
                    _id: admin._id,
                    name: admin.name,
                    email: admin.email
                }
            });
        } else {
            res.status(404).json({ success: false, message: 'Admin not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
