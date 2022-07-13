import connectDB from "../../../utils/connectDB";
import DataPribadi from "../../../models/dataPribadiModels";
import auth from "../../../middleware/auth"

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await pribadi(req, res)
      break;
  }
}

const pribadi = async (req, res) => {

  try {
    const result = await auth(req, res)
    if (!result) return res.status(400).json({ err: 'Gagal' })

    const { jalur, nama, jenis, agama, tempat, tanggal, alamat, nohp } = req.body

    if (!jalur || !nama || !jenis || !agama || !tempat || !tanggal || !alamat || !nohp)
      return res.status(400).json({ err: 'Tolong Isi Yang Data Di Bawah Ini' })

    const newData = new DataPribadi({
      user: result.id, jalur, nama, jenis, agama, tempat, tanggal, alamat, nohp
    })

    await newData.save()

    res.json({ msg: 'Data Berhasil Terkirim' })

  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}