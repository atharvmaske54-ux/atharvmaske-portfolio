import express from 'express';
import { body } from 'express-validator';
import { submitContact, getContacts, deleteContact } from '../controllers/contactController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validateRequest } from '../middleware/validateMiddleware.js';

const router = express.Router();

// Validation rules
const contactValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please include a valid email'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('message').notEmpty().withMessage('Message is required')
];

router.post('/', contactValidation, validateRequest, submitContact);
router.get('/admin', protect, getContacts);
router.delete('/admin/:id', protect, deleteContact);

export default router;
