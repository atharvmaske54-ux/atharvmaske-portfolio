import Contact from '../models/Contact.js';

// @desc    Submit a contact form
// @route   POST /api/contact
// @access  Public
export const submitContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const contact = await Contact.create({
            name,
            email,
            subject,
            message
        });

        res.status(201).json({
            success: true,
            message: 'Message sent successfully',
            data: contact
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Get all contact messages
// @route   GET /api/contact/admin
// @access  Private/Admin
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({}).sort({ createdAt: -1 });
        res.json({
            success: true,
            message: 'Contacts retrieved successfully',
            data: contacts
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Delete a contact message
// @route   DELETE /api/contact/admin/:id
// @access  Private/Admin
export const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (contact) {
            await Contact.deleteOne({ _id: contact._id });
            res.json({ success: true, message: 'Message removed successfully' });
        } else {
            res.status(404).json({ success: false, message: 'Message not found' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
