import "./modal-structure.scss";
const Modal = ({ modalBody, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-dialog" onClick={handleModalContainerClick}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Nuevo colaborador
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">{modalBody}</div>
          <div className="modal-footer">
            <button type="button" className="btn modal-btn-close" onClick={closeModal} style={{ fontSize: "12px" }}>
              CANCELAR
            </button>
            <button type="button" className="btn modal-btn-save" style={{ fontSize: "12px" }}>
              GUARDAR COLABORADOR
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Modal;
