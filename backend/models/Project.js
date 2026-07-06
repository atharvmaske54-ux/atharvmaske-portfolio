import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    role: { type: String, required: true },
    techStack: [{ type: String }],
    image: { type: String },
    githubLink: { type: String },
    liveLink: { type: String },
    caseStudyLink: { type: String },
    featured: { type: Boolean, default: false }
}, {
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);
export default Project;
