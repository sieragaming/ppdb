import React, { useContext, useState } from 'react'
import LayoutDashboard from '../../components/Layout-Dashboard'
import LayoutNavsAf from '../../components/Layout-NavsAf'
import { useRouter } from 'next/router'
import { postData } from '../../utils/fetchData'
import { DataContext } from '../../store/GlobalState'

const DataOrtu = () => {
  const initialState = { namaAy: '', perAy: '', nohpAy: '', namaIb: '', perIb: '', nohpIb: '', namaWa: '', perWa: '', nohpWa: '' }
  const [data, setData] = useState(initialState)
  const { namaAy, perAy, nohpAy, namaIb, perIb, nohpIb, namaWa, perWa, nohpWa } = data

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
    const res = await postData('data/ortu', { ...data }, auth.token)
    if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

    return (
      dispatch({ type: 'NOTIFY', payload: { success: res.msg } }),
      console.log(data),
      router.push("/formAfirmasi/dataSekolah")
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
                    <label htmlFor="ayah" className="form-label">Nama Ayah<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="text" id="ayah" name='namaAy' value={namaAy} onChange={handleChangeInput} className="form-control" />
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="perayah" className="form-label">Pekerjaan Ayah<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="text" id="perayah" name='perAy' value={perAy} onChange={handleChangeInput} className="form-control" />
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="nohpay" className="form-label">No Handphone Ayah<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="text" id="nohpay" name='nohpAy' value={nohpAy} onChange={handleChangeInput} className="form-control" />
                  </div>
                </div>
                <hr />

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="ibu" className="form-label">Nama Ibu<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="text" id="Ibu" name='namaIb' value={namaIb} onChange={handleChangeInput} className="form-control" />
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="peribu" className="form-label">Pekerjaan Ibu<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="text" id="peribu" name='perIb' value={perIb} onChange={handleChangeInput} className="form-control" />
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="nohibu" className="form-label">No Handphone Ibu<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="text" id="nohibu" name='nohpIb' value={nohpIb} onChange={handleChangeInput} className="form-control" />
                  </div>
                </div>
                <hr />

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="wali" className="form-label">Nama Wali<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="text" id="wali" name='namaWa' value={namaWa} onChange={handleChangeInput} className="form-control" />
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="perwali" className="form-label">Pekerjaan Wali<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="text" id="perwali" name='perWa' value={perWa} onChange={handleChangeInput} className="form-control" />
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="nohwali" className="form-label">No Handphone Wali<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="text" id="nohwali" name='nohpWa' value={nohpWa} onChange={handleChangeInput} className="form-control" />
                  </div>
                </div>

                <div className="align-items-center mb-3 d-grid gap-2 d-md-flex justify-content-md-end">
                  <button type="submit" className=" btn btn-primary btn-lg ">Kirim Data / Lanjutkan</button>
                </div>
              </form>
            </div>
          </div>
        </LayoutNavsAf>
      </LayoutDashboard>
    </>
  )
}

export default DataOrtu