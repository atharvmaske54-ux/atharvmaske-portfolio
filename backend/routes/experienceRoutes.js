import express from 'express';
import { getExperience, createExperience, updateExperience, deleteExperience } from '../controllers/experienceController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getExperience);

router.post('/admin', protect, createExperience);
router.put('/admin/:id', protect, updateExperience);
router.delete('/admin/:id', protect, deleteExperience);

export default router;
