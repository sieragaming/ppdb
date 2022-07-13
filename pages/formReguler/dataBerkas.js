import React, { useState, useContext } from 'react'
import LayoutDashboard from '../../components/Layout-Dashboard'
import LayoutNavsReg from '../../components/Layout-NavsReg'
import { useRouter } from 'next/router'
import { postData } from '../../utils/fetchData'
import { DataContext } from '../../store/GlobalState'
import { imageUpload } from '../../utils/uploadImage'

const DataBerkas = () => {
  const [foto, setFoto] = useState([])
  const [ijasah, setIjasah] = useState([])

  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  const router = useRouter()

  const handleChangeFile1 = (e) => {
    dispatch({ type: 'NOTIFY', payload: {} })
    let newImages = []
    let num = 0
    let err = ''
    const files = [...e.target.files]

    if (files.length === 0)
      return dispatch({ type: 'NOTIFY', payload: { error: 'File Tidak Ada' } })

    files.forEach(file => {
      if (file.size > 1024 * 1024)
        return err = 'File Kebesaran Maximal 1mb'

      if (file.type !== 'image/jpeg' && file.type !== 'image/png')
        return err = 'Image format is incorrect.'

      num += 1;
      if (num <= 2) newImages.push(file)
      return newImages;
    })

    if (err) dispatch({ type: 'NOTIFY', payload: { error: err } })

    const imgCount = foto.length
    if (imgCount + newImages.length > 5)
      return dispatch({ type: 'NOTIFY', payload: { error: 'Pilih 5 Gambar' } })
    setFoto([...foto, ...newImages])
  }

  const handleFoto = async (e) => {
    e.preventDefault()
    if (foto.length === 0)
      return dispatch({ type: 'NOTIFY', payload: { error: 'Tolong Isi Data' } })

    dispatch({ type: 'NOTIFY', payload: { loading: true } })
    let media = []
    const imgNewURL = foto.filter(img => !img.url)
    const imgOldURL = foto.filter(img => img.url)

    if (imgNewURL.length > 0) media = await imageUpload(imgNewURL)

    let res;
    res = await postData('data/foto', { ...foto, foto: [...imgOldURL, ...media] }, auth.token)
    if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

    return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
  }

  const handleChangeFile2 = (e) => {
    dispatch({ type: 'NOTIFY', payload: {} })
    let newImages = []
    let num = 0
    let err = ''
    const files = [...e.target.files]

    if (files.length === 0)
      return dispatch({ type: 'NOTIFY', payload: { error: 'File Tidak Ada' } })

    files.forEach(file => {
      if (file.size > 1024 * 1024)
        return err = 'File Kebesaran Maximal 1mb'

      if (file.type !== 'image/jpeg' && file.type !== 'image/png')
        return err = 'Image format is incorrect.'

      num += 1;
      if (num <= 2) newImages.push(file)
      return newImages;
    })

    if (err) dispatch({ type: 'NOTIFY', payload: { error: err } })

    const imgCount = ijasah.length
    if (imgCount + newImages.length > 5)
      return dispatch({ type: 'NOTIFY', payload: { error: 'Pilih 5 Gambar' } })
    setIjasah([...ijasah, ...newImages])
  }

  const handleIjasah = async (e) => {
    e.preventDefault()
    if (ijasah.length === 0)
      return dispatch({ type: 'NOTIFY', payload: { error: 'Tolong Isi Data' } })

    dispatch({ type: 'NOTIFY', payload: { loading: true } })
    let media = []
    const imgNewURL = ijasah.filter(img => !img.url)
    const imgOldURL = ijasah.filter(img => img.url)

    if (imgNewURL.length > 0) media = await imageUpload(imgNewURL)

    let res;
    res = await postData('data/ijasah', { ...ijasah, ijasah: [...imgOldURL, ...media] }, auth.token)
    if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

    return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push("/dashboard")
  }
  return (
    <>
      <LayoutDashboard>
        <LayoutNavsReg>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="foto" className="form-label">Foto 4 X 6 <sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-7">
                    <input type="file" id="foto" onChange={handleChangeFile1} multiple accept="image/*" className="form-control " />
                  </div>
                  <div className="col col-md-2">
                    <button type='button' className='btn btn-success' onClick={handleFoto}>Upload</button>
                  </div>
                </div>

                <div className="row align-items-center mb-3">
                  <div className="col col-md-3 ">
                    <label htmlFor="berkas1" className="form-label">Scan Ijazah Asli / Ijazah Sementara<sup className="text-danger">*</sup></label>
                  </div>
                  <div className="col col-md-7">
                    <input type="file" id="berkas1" onChange={handleChangeFile2} multiple accept="image/*" className="form-control" />
                  </div>
                  <div className="col col-md-2">
                    <button type='button' className='btn btn-success' onClick={handleIjasah}>Upload</button>
                  </div>
                </div>

                <div className="align-items-center mb-3 d-grid gap-2 d-md-flex justify-content-md-end">
                  <button type="submit" className=" btn btn-primary btn-lg ">Selesai</button>
                </div>
              </form>
            </div>
          </div>
        </LayoutNavsReg>
      </LayoutDashboard>
    </>
  )
}

export default DataBerkas