import connectDB from "../../../utils/connectDB";
import DataIjasah from "../../../models/dataUpIjaModels";
import auth from "../../../middleware/auth"

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await ijasah(req, res)
      break;
  }
}

const ijasah = async (req, res) => {

  try {
    const result = await auth(req, res)
    if (!result) return res.status(400).json({ err: 'Gagal' })

    const { ijasah } = req.body

    if (ijasah.length === 0)
      return res.status(400).json({ err: 'Tolong Isi Yang Data Di Bawah Ini' })

    const newData = new DataIjasah({
      user: result.id, ijasah
    })

    await newData.save()

    res.json({ msg: 'Data Berhasil Terkirim' })

  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}