import Skill from '../models/Skill.js';

// @desc    Get all skills
// @route   GET /api/skills
// @access  Public
export const getSkills = async (req, res) => {
    try {
        const skills = await Skill.find({});
        res.json({
            success: true,
            message: 'Skills retrieved successfully',
            data: skills
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Create a skill category
// @route   POST /api/skills/admin
// @access  Private/Admin
export const createSkill = async (req, res) => {
    try {
        const skill = new Skill(req.body);
        const createdSkill = await skill.save();
        res.status(201).json({
            success: true,
            message: 'Skill created successfully',
            data: createdSkill
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Update a skill
// @route   PUT /api/skills/admin/:id
// @access  Private/Admin
export const updateSkill = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);
        if (skill) {
            Object.assign(skill, req.body);
            const updatedSkill = await skill.save();
            res.json({
                success: true,
                message: 'Skill updated successfully',
                data: updatedSkill
            });
        } else {
            res.status(404).json({ success: false, message: 'Skill not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Delete a skill
// @route   DELETE /api/skills/admin/:id
// @access  Private/Admin
export const deleteSkill = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);
        if (skill) {
            await Skill.deleteOne({ _id: skill._id });
            res.json({ success: true, message: 'Skill removed successfully' });
        } else {
            res.status(404).json({ success: false, message: 'Skill not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
