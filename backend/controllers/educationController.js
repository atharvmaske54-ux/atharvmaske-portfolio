import Education from '../models/Education.js';

// @desc    Get all education
// @route   GET /api/education
// @access  Public
export const getEducation = async (req, res) => {
    try {
        const edu = await Education.find({}).sort({ year: -1 });
        res.json({
            success: true,
            message: 'Education retrieved successfully',
            data: edu
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Create education
// @route   POST /api/education/admin
// @access  Private/Admin
export const createEducation = async (req, res) => {
    try {
        const edu = new Education(req.body);
        const createdEdu = await edu.save();
        res.status(201).json({
            success: true,
            message: 'Education created successfully',
            data: createdEdu
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Update education
// @route   PUT /api/education/admin/:id
// @access  Private/Admin
export const updateEducation = async (req, res) => {
    try {
        const edu = await Education.findById(req.params.id);
        if (edu) {
            Object.assign(edu, req.body);
            const updatedEdu = await edu.save();
            res.json({
                success: true,
                message: 'Education updated successfully',
                data: updatedEdu
            });
        } else {
            res.status(404).json({ success: false, message: 'Education not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Delete education
// @route   DELETE /api/education/admin/:id
// @access  Private/Admin
export const deleteEducation = async (req, res) => {
    try {
        const edu = await Education.findById(req.params.id);
        if (edu) {
            await Education.deleteOne({ _id: edu._id });
            res.json({ success: true, message: 'Education removed successfully' });
        } else {
            res.status(404).json({ success: false, message: 'Education not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
