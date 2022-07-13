import React, { useContext, useState } from 'react'
import LayoutDashboard from '../../components/Layout-Dashboard'
import LayoutNavsAf from '../../components/Layout-NavsAf'
import { useRouter } from 'next/router'
import { postData } from '../../utils/fetchData'
import { DataContext } from '../../store/GlobalState'

const DataNilai = () => {

  const initialState = { nilai: '' }
  const [data, setData] = useState(initialState)
  const { nilai } = data

  const [nilai1, setNilai1] = useState('')
  const [nilai2, setNilai2] = useState('')
  const [nilai3, setNilai3] = useState('')
  const [nilai4, setNilai4] = useState('')
  const [nilai5, setNilai5] = useState('')
  const [score, setScore] = useState('')

  const router = useRouter()

  const { state, dispatch } = useContext(DataContext)
  const { auth } = state


  const handleSkor = (e) => {
    e.preventDefault()
    let nilais1 = parseInt(nilai1)
    let nilais2 = parseInt(nilai2)
    let nilais3 = parseInt(nilai3)
    let nilais4 = parseInt(nilai4)
    let nilais5 = parseInt(nilai5)
    let result = ((nilais1 + nilais2 + nilais3 + nilais4 + nilais5) / 5 * 10)
    setScore(parseInt(result))

  }

  const handleChangeInput = e => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(nilai)
    const res = await postData('data/nilai', { ...data }, auth.token)
    if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

    return (
      dispatch({ type: 'NOTIFY', payload: { success: res.msg } }),
      router.push("/formAfirmasi/dataBerkas")
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
                    <label htmlFor="nilai1" className="form-label">Nilai Total Rata-Rata Raport Kelas 4 Semester 1<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="number" id="nilai1" name='nilai1' onChange={e => setNilai1(e.target.value)} value={nilai1} className="form-control" />
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="nilai2" className="form-label">Nilai Total Rata-Rata Raport Kelas 4 Semester 2<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="number" id="nilai2" name='nilai2' onChange={e => setNilai2(e.target.value)} value={nilai2} className="form-control" />
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="nilai1" className="form-label">Nilai Total Rata-Rata Raport Kelas 5 Semester 1<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="number" id="nilai3" name='nilai3' onChange={e => setNilai3(e.target.value)} value={nilai3} className="form-control" />
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="nilai2" className="form-label">Nilai Total Rata-Rata Raport Kelas 5 Semester 2<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="number" id="nilai4" name='nilai4' onChange={e => setNilai4(e.target.value)} value={nilai4} className="form-control" />
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="nilai1" className="form-label">Nilai Total Rata-Rata Raport Kelas 6 Semester 1<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="number" id="nilai5" name='nilai5' onChange={e => setNilai5(e.target.value)} value={nilai5} className="form-control" />
                  </div>
                </div>

                <div className="row align-items-center mb-3 d-flex gap-2 d-md-flex justify-content-md-end">
                  <div className="col col-md-4 ">
                    <div className='row'>
                      <div className='col col-md-6'>
                        <button type="button" className=" btn btn-primary" onClick={handleSkor}>Total nilai</button>
                      </div>
                      <div className='col col-md-6'>
                        <h6>{score}</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="nilai" className="form-label">Masukan Score Yang Di Peroleh<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-9">
                    <input type="text" id="nilai" name='nilai' onChange={handleChangeInput} value={nilai} className="form-control" />
                  </div>
                </div>

                <div className="align-items-center mb-3 d-grid gap-2 d-md-flex justify-content-md-end">
                  <button type="submit" className=" btn btn-primary btn-lg ">Kirim & Lanjutkan</button>
                </div>
              </form>
            </div>
          </div>
        </LayoutNavsAf >
      </LayoutDashboard >
    </>
  )
}

export default DataNilai