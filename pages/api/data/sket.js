import connectDB from "../../../utils/connectDB";
import DataSket from "../../../models/dataSketModels";
import auth from "../../../middleware/auth"

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await sket(req, res)
      break;
  }
}

const sket = async (req, res) => {

  try {
    const result = await auth(req, res)
    if (!result) return res.status(400).json({ err: 'Gagal' })

    const { sket } = req.body

    if (sket.length === 0)
      return res.status(400).json({ err: 'Tolong Isi Yang Data Di Bawah Ini' })

    const newData = new DataSket({
      user: result.id, sket
    })

    await newData.save()

    res.json({ msg: 'Data Berhasil Terkirim' })

  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}