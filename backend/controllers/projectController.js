import Project from '../models/Project.js';

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({}).sort({ createdAt: -1 });
        res.json({
            success: true,
            message: 'Projects retrieved successfully',
            data: projects
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Public
export const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (project) {
            res.json({
                success: true,
                message: 'Project retrieved successfully',
                data: project
            });
        } else {
            res.status(404).json({ success: false, message: 'Project not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Create a project
// @route   POST /api/projects/admin
// @access  Private/Admin
export const createProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        const createdProject = await project.save();
        res.status(201).json({
            success: true,
            message: 'Project created successfully',
            data: createdProject
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Update a project
// @route   PUT /api/projects/admin/:id
// @access  Private/Admin
export const updateProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        
        if (project) {
            Object.assign(project, req.body);
            const updatedProject = await project.save();
            res.json({
                success: true,
                message: 'Project updated successfully',
                data: updatedProject
            });
        } else {
            res.status(404).json({ success: false, message: 'Project not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Delete a project
// @route   DELETE /api/projects/admin/:id
// @access  Private/Admin
export const deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (project) {
            await Project.deleteOne({ _id: project._id });
            res.json({ success: true, message: 'Project removed successfully' });
        } else {
            res.status(404).json({ success: false, message: 'Project not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
