import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: { type: String, required: true }, // base64 o URL de Cloudinary
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Project', ProjectSchema);
