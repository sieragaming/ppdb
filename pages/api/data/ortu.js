import connectDB from "../../../utils/connectDB";
import DataOrtu from "../../../models/dataOrtuModels";
import auth from "../../../middleware/auth"

connectDB()

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await ortu(req, res)
      break;
  }
}

const ortu = async (req, res) => {

  try {
    const result = await auth(req, res)
    if (!result) return res.status(400).json({ err: 'Gagal' })

    const { namaAy, perAy, nohpAy, namaIb, perIb, nohpIb, namaWa, perWa, nohpWa } = req.body

    if (!namaAy || !perAy || !nohpAy || !namaIb || !perIb || !nohpIb || !namaWa || !perWa || !nohpWa)
      return res.status(400).json({ err: 'Tolong Isi Yang Data Di Bawah Ini' })

    const newData = new DataOrtu({
      user: result.id, namaAy, perAy, nohpAy, namaIb, perIb, nohpIb, namaWa, perWa, nohpWa
    })

    await newData.save()

    res.json({ msg: 'Data Berhasil Terkirim' })

  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}