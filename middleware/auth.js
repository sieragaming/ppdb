import jwt from 'jsonwebtoken'
import Users from '../models/userModels'

const auth = async (req, res) => {
  const token = req.headers.authorization;
  console.log(token)
  if (!token) return res.status(400).json({ err: 'Gagal Di Identifikasikan' })

  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN)
  if (!decoded) return res.status(400).json({ err: 'Gagal Di Identifikasikan' })

  const user = await Users.findOne({ _id: decoded.id })

  return user;
}

export default auth