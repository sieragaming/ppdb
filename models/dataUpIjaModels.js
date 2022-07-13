import mongoose from "mongoose";

const ijasahSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  ijasah: {
    type: Array,
    required: true
  }
}, {
  timestamps: true
})

let Dataset = mongoose.models.ijasah || mongoose.model('ijasah', ijasahSchema)
export default Dataset
