import Experience from '../models/Experience.js';

// @desc    Get all experience
// @route   GET /api/experience
// @access  Public
export const getExperience = async (req, res) => {
    try {
        const exp = await Experience.find({}).sort({ year: -1 });
        res.json({
            success: true,
            message: 'Experience retrieved successfully',
            data: exp
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Create experience
// @route   POST /api/experience/admin
// @access  Private/Admin
export const createExperience = async (req, res) => {
    try {
        const exp = new Experience(req.body);
        const createdExp = await exp.save();
        res.status(201).json({
            success: true,
            message: 'Experience created successfully',
            data: createdExp
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Update experience
// @route   PUT /api/experience/admin/:id
// @access  Private/Admin
export const updateExperience = async (req, res) => {
    try {
        const exp = await Experience.findById(req.params.id);
        if (exp) {
            Object.assign(exp, req.body);
            const updatedExp = await exp.save();
            res.json({
                success: true,
                message: 'Experience updated successfully',
                data: updatedExp
            });
        } else {
            res.status(404).json({ success: false, message: 'Experience not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Delete experience
// @route   DELETE /api/experience/admin/:id
// @access  Private/Admin
export const deleteExperience = async (req, res) => {
    try {
        const exp = await Experience.findById(req.params.id);
        if (exp) {
            await Experience.deleteOne({ _id: exp._id });
            res.json({ success: true, message: 'Experience removed successfully' });
        } else {
            res.status(404).json({ success: false, message: 'Experience not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
