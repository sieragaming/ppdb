import connectDB from "../../../utils/connectDB";
import Users from "../../../models/userModels";
import jwt from "jsonwebtoken";
import { createAccessToken } from '../../../utils/generateToken'

connectDB()

export default async (req, res) => {
  try {
    const rf_token = req.cookies.refreshToken;
    if (!rf_token) return res.status(400).json({ err: 'Tolong Login Terlebih Dahulu' })

    const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN)
    if (!result) return res.status(400).json({ err: 'Token Sudah Kadaluarsa' })

    const user = await Users.findById(result.id)
    if (!user) return res.status(400).json({ err: 'Akun Tidak Ada' })

    const access_token = createAccessToken({ id: user._id })

    res.json({ msg: "Login Berhasil", access_token, user: { username: user.username, email: user.email, role: user.role, avatar: user.avatar, root: user.root } })
  } catch (error) {
    return res.status(500).json({ err: error.message })
  }
}
