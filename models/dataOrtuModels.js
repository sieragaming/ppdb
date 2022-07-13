import mongoose from "mongoose";

const ortuSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  namaAy: {
    type: String,
    required: true,
  },
  perAy: {
    type: String,
    required: true,
  },
  nohpAy: {
    type: Number,
    required: true,
  },
  namaIb: {
    type: String,
    required: true,
  },
  perIb: {
    type: String,
    required: true,
  },
  nohpIb: {
    type: Number,
    required: true,
  },
  namaWa: {
    type: String,
  },
  perWa: {
    type: String,
  },
  nohpWa: {
    type: String
  }
}, {
  timestamps: true
})

let Dataset = mongoose.models.ortu || mongoose.model('ortu', ortuSchema)
export default Dataset
