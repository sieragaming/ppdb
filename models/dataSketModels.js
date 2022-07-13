import mongoose from "mongoose";

const sketSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  sket: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

let Dataset = mongoose.models.sket || mongoose.model('sket', sketSchema)
export default Dataset
