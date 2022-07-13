import mongoose from "mongoose";

const nilaiSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  nilai: {
    type: Number,
  }
}, {
  timestamps: true
})

let Dataset = mongoose.models.nilai || mongoose.model('nilai', nilaiSchema)
export default Dataset
