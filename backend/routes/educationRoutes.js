import express from 'express';
import { getEducation, createEducation, updateEducation, deleteEducation } from '../controllers/educationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getEducation);

router.post('/admin', protect, createEducation);
router.put('/admin/:id', protect, updateEducation);
router.delete('/admin/:id', protect, deleteEducation);

export default router;
