import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
    year: { type: String, required: true },
    title: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String },
    responsibilities: [{ type: String }]
}, {
    timestamps: true
});

const Experience = mongoose.model('Experience', experienceSchema);
export default Experience;
