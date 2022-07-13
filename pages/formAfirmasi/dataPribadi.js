import React, { useContext, useState } from 'react'
import LayoutDashboard from '../../components/Layout-Dashboard'
import LayoutNavsAf from '../../components/Layout-NavsAf'
import { DataContext } from '../../store/GlobalState'
import { useRouter } from 'next/router'
import { postData } from '../../utils/fetchData'

const DataPribadi = () => {
  const initialState = { jalur: 'Afirmasi', nama: '', jenis: '', agama: '', tempat: '', tanggal: '', alamat: '', nohp: '' }
  const [data, setData] = useState(initialState)
  const { jalur, nama, jenis, agama, tempat, tanggal, alamat, nohp } = data

  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  const handleChangeInput = e => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await postData('data/pribadi', { ...data }, auth.token)
    if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

    return (
      dispatch({ type: 'NOTIFY', payload: { success: res.msg } }),
      console.log(data),
      router.push("/formAfirmasi/dataOrtu")
    )

  }

  return (
    <>
      <LayoutDashboard>
        <LayoutNavsAf>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="jalur" onChange={handleChangeInput} className="form-label">Jalur Pendaftaran</label>
                  </div>
                  <div className="col col-md-9">
                    <input type="text" name="jalur" id="jalur" value={jalur} className="form-control" readOnly />
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="nama" className="form-label">Nama Lengkap<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="text" name="nama" value={nama} onChange={handleChangeInput} id="nama" className="form-control" />
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="nama" className="form-label">Jenis Kelamin<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <select className='form-select' id='jenis' name="jenis" value={jenis} onChange={handleChangeInput}>
                      <option value="">Pilih Jenis Kelamin</option>
                      <option value="laki">Laki - Laki</option>
                      <option value="perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="nama" className="form-label">Agama<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <select className='form-select' id='agama' name="agama" value={agama} onChange={handleChangeInput}>
                      <option value="">Pilih Agama</option>
                      <option value="islam">Islam</option>
                      <option value="kristen">Kristen</option>
                      <option value="katolik">Katolik</option>
                      <option value="hindu">Hindu</option>
                      <option value="budha">Budha</option>
                      <option value="konghuchu">Konghuchu</option>
                    </select>
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="tempat" className="form-label">Tempat Lahir<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="text" id="tempat" name="tempat" value={tempat} onChange={handleChangeInput} className="form-control" />
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="tanggal" className="form-label">Tanggal Lahir<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="date" id="tanggal" name="tanggal" value={tanggal} onChange={handleChangeInput} className="form-control" />
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="alamat" className="form-label">Alamat Tempat Tinggal<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <textarea className="form-control" name="alamat" value={alamat} onChange={handleChangeInput} id="alamat"></textarea>
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="nohp" className="form-label">Nomor Handphone<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="number" name="nohp" value={nohp} onChange={handleChangeInput} id="nohp" className="form-control" />
                  </div>
                </div>

                <div className="align-items-center mb-3 d-grid gap-2 d-md-flex justify-content-md-end">
                  <button type="submit" className=" btn btn-primary btn-lg ">Kirim & Lanjutkan</button>
                </div>
              </form>
            </div>
          </div>
        </LayoutNavsAf>
      </LayoutDashboard>
    </>
  )
}

export default DataPribadi