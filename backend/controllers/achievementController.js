import Achievement from '../models/Achievement.js';

// @desc    Get all achievements
// @route   GET /api/achievements
// @access  Public
export const getAchievements = async (req, res) => {
    try {
        const achievements = await Achievement.find({});
        res.json({
            success: true,
            message: 'Achievements retrieved successfully',
            data: achievements
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Create an achievement
// @route   POST /api/achievements/admin
// @access  Private/Admin
export const createAchievement = async (req, res) => {
    try {
        const achievement = new Achievement(req.body);
        const createdAchievement = await achievement.save();
        res.status(201).json({
            success: true,
            message: 'Achievement created successfully',
            data: createdAchievement
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Update an achievement
// @route   PUT /api/achievements/admin/:id
// @access  Private/Admin
export const updateAchievement = async (req, res) => {
    try {
        const achievement = await Achievement.findById(req.params.id);
        if (achievement) {
            Object.assign(achievement, req.body);
            const updatedAchievement = await achievement.save();
            res.json({
                success: true,
                message: 'Achievement updated successfully',
                data: updatedAchievement
            });
        } else {
            res.status(404).json({ success: false, message: 'Achievement not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Delete an achievement
// @route   DELETE /api/achievements/admin/:id
// @access  Private/Admin
export const deleteAchievement = async (req, res) => {
    try {
        const achievement = await Achievement.findById(req.params.id);
        if (achievement) {
            await Achievement.deleteOne({ _id: achievement._id });
            res.json({ success: true, message: 'Achievement removed successfully' });
        } else {
            res.status(404).json({ success: false, message: 'Achievement not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
