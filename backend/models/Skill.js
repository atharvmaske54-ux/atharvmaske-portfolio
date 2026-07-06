import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
    category: { type: String, required: true },
    skills: [{ type: String }]
}, {
    timestamps: true
});

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;
