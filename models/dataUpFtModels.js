import mongoose from "mongoose";

const fotoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  foto: {
    type: Array,
    required: true
  }
}, {
  timestamps: true
})

let Dataset = mongoose.models.foto || mongoose.model('foto', fotoSchema)
export default Dataset
