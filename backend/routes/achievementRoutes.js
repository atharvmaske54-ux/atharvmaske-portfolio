import express from 'express';
import { getAchievements, createAchievement, updateAchievement, deleteAchievement } from '../controllers/achievementController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAchievements);

router.post('/admin', protect, createAchievement);
router.put('/admin/:id', protect, updateAchievement);
router.delete('/admin/:id', protect, deleteAchievement);

export default router;
