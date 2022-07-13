import React, { useContext, useState } from 'react'
import LayoutDashboard from '../../components/Layout-Dashboard'
import LayoutNavsAf from '../../components/Layout-NavsAf'
import { useRouter } from 'next/router'
import { postData } from '../../utils/fetchData'
import { DataContext } from '../../store/GlobalState'

const DataSekolah = () => {
  const initialState = { sekolah: '', alamat: '' }
  const [data, setData] = useState(initialState)
  const { sekolah, alamat } = data

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
    const res = await postData('data/sekolah', { ...data }, auth.token)
    if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

    return (
      dispatch({ type: 'NOTIFY', payload: { success: res.msg } }),
      console.log(data),
      router.push("/formAfirmasi/dataNilai")
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
                    <label htmlFor="sekolah" className="form-label">Nama Asal Sekolah<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="text" id="sekolah" name="sekolah" value={sekolah} onChange={handleChangeInput} className="form-control" />
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="alamatsek" className="form-label">Alamat Asal Sekolah<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <textarea className="form-control" name="alamat" value={alamat} onChange={handleChangeInput} id="alamatsek"></textarea>
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

export default DataSekolah