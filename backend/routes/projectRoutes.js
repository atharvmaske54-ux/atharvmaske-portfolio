import express from 'express';
import { getProjects, getProjectById, createProject, updateProject, deleteProject } from '../controllers/projectController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getProjectById);

router.post('/admin', protect, createProject);
router.put('/admin/:id', protect, updateProject);
router.delete('/admin/:id', protect, deleteProject);

export default router;
