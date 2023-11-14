function Modal({vContent, vNum, onClose}){

    return(
      <>
        <div className="modal">
          <div>
            <h3>title</h3>
            <p>{vContent[vNum]}</p>
          </div>
          <div className="btnWrap">
            <button onClick={onClose}>close</button>
          </div>
        </div>
      </>
    )
  }

  export default Modal;