
import "./Modal.scss";
const Modal = ({children, isOpen, closeModal}) =>{
    const handleModalContainerClick = (e) => e.stopPropagation();
    return (
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            {/* <div className="modal-container" onClick={handleModalContainerClick}>
                <button className="modal-close" onClick={closeModal}>X</button>
                {children}
            </div> */}
            <div className="modal-dialog" onClick={handleModalContainerClick}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Nuevo colaborador</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer" >
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                            <button type="button" className="btn btn-primary">Understood</button> */}
                            <button type="button" class="btn modal-btn-close" onClick={closeModal} style={{fontSize:"12px"}}>CANCELAR</button>
                            <button type="button" class="btn modal-btn-save" style={{fontSize:"12px"}}>GUARDAR COLABORADOR</button>

                            {/* <button type="button" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button> */}
                        </div>
                    </div>
                </div>
        </article>
    )
}

export default Modal