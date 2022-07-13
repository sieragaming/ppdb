import mongoose from "mongoose";

const pribadiSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  jalur: {
    type: String,
    required: true,
    trim: true,
  },
  nama: {
    type: String,
    required: true,
    trim: true,
  },
  jenis: {
    type: String,
    required: true,
  },
  agama: {
    type: String,
    required: true,
  },
  tempat: {
    type: String,
    required: true,
  },
  tanggal: {
    type: Date,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  nohp: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true
})

let Dataset = mongoose.models.pribadi || mongoose.model('pribadi', pribadiSchema)
export default Dataset
