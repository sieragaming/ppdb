import connectDB from "../../../utils/connectDB";
import DataSekolah from "../../../models/dataSekolahModels";
import auth from "../../../middleware/auth"

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await sekolah(req, res)
      break;
  }
}

const sekolah = async (req, res) => {

  try {
    const result = await auth(req, res)
    if (!result) return res.status(400).json({ err: 'Gagal' })

    const { sekolah, alamat } = req.body

    if (!sekolah || !alamat)
      return res.status(400).json({ err: 'Tolong Isi Yang Data Di Bawah Ini' })

    const newData = new DataSekolah({
      user: result.id, sekolah, alamat
    })

    await newData.save()

    res.json({ msg: 'Data Berhasil Terkirim' })

  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}