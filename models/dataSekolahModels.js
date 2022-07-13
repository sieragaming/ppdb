import mongoose from "mongoose";

const sekolahSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  sekolah: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
})

let Dataset = mongoose.models.sekolah || mongoose.model('sekolah', sekolahSchema)
export default Dataset
