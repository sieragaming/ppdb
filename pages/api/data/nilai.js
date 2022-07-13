import connectDB from "../../../utils/connectDB";
import DataNilai from "../../../models/dataNilaiModels";
import auth from "../../../middleware/auth"

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await nilai(req, res)
      break;
  }
}

const nilai = async (req, res) => {

  try {
    const result = await auth(req, res)
    if (!result) return res.status(400).json({ err: 'Gagal' })

    const { nilai } = req.body
    console.log(nilai)

    if (!nilai)
      return res.status(400).json({ err: 'Tolong Isi Data Di Bawah Ini' })

    const newData = new DataNilai({
      user: result.id, nilai
    })

    await newData.save()

    res.json({ msg: 'Data Berhasil Terkirim' })

  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}