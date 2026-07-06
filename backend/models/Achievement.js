import mongoose from 'mongoose';

const achievementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    value: { type: String, required: true },
    description: { type: String }
}, {
    timestamps: true
});

const Achievement = mongoose.model('Achievement', achievementSchema);
export default Achievement;
