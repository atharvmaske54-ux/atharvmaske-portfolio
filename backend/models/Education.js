import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
    degree: { type: String, required: true },
    institute: { type: String, required: true },
    location: { type: String },
    year: { type: String, required: true },
    description: { type: String },
    subjects: [{ type: String }]
}, {
    timestamps: true
});

const Education = mongoose.model('Education', educationSchema);
export default Education;
