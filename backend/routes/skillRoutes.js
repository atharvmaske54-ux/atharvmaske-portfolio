import express from 'express';
import { getSkills, createSkill, updateSkill, deleteSkill } from '../controllers/skillController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getSkills);

router.post('/admin', protect, createSkill);
router.put('/admin/:id', protect, updateSkill);
router.delete('/admin/:id', protect, deleteSkill);

export default router;
