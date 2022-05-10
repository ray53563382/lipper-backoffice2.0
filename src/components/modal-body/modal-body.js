import Modal from "../modal-body/modal-body.scss"
import { useModal } from "../../services/modal-open"
const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    return (
        <div>
            <h2>
                Modales
            </h2>
            <button onClick={openModal1}> Modal  1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <form>
                    <div className="row">
                        <div className="col-4">
                            <div className="form-group">
                                <h4 className="modal-title-content">Datos</h4>
                                <p className="modal-subtitle-content">Información básica del colaborador</p>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">NOMBRE*</label>
                                <input type="email" className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">APELLIDO*</label>
                                <input type="text" className="form-control" id="password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">ROL*</label>
                                <select className="form-select modal-select" aria-label="Default select example">
                                    <option selected></option>
                                    <option value="1">Agente</option>
                                    <option value="2">Otro</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"40px"}}>
                        <div className="col-4">
                            <div className="form-group">
                                <h4 className="modal-title-content">Contacto</h4>
                                <p className="modal-subtitle-content">Puntos de contacto con el colaborador</p>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">NÚMERO DE TELÉFONO</label>
                                <input type="email" className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">CORREO ELECTRÓNICO*</label>
                                <input type="text" className="form-control" id="password"/>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>
            <button onClick={openModal2}> Modal  </button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Otro modal</h3>
                <p>
                    Otro TEXTO
                </p>
            </Modal>
        </div>
    )
}

export default Modals