const Toast = ({ msg, handleShow, bgColor }) => {
  return (
    <div className={`toast show position-fixed ${bgColor} text-light`} role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="true" style={{ top: '100px', right: '15px', zIndex: 9, minWidth: '280px' }}>
      <div className={`toast-header ${bgColor} text-light`}>
        <strong className="me-auto">{msg.title}</strong>
        <button type="button" className="btn-close " data-bs-dismiss="toast" aria-label="Close" onClick={handleShow}></button>
      </div >
      <div className="toast-body">
        {msg.msg}
      </div>
    </div >
  )
}
export default Toast