import Input from "../../../../components/input/input";
import person1 from '../../../../assets/images/dashboard/persons-demo/person1.png'
import person2 from '../../../../assets/images/dashboard/persons-demo/person2.png'
import person3 from '../../../../assets/images/dashboard/persons-demo/person3.png'
import person4 from '../../../../assets/images/dashboard/persons-demo/person4.png'
import person5 from '../../../../assets/images/dashboard/persons-demo/person5.png'
import Modals from "../../../../components/modal-structure/modal-structure";
import * as Icon from 'react-bootstrap-icons';
import "./collaborators.scss";


const Collaborators = () => {
    return (
        <div>
            <Modals />
            <hr />
            <h1>Collaborators</h1>
            <div>
                <Input
                    className="mb-6"
                    type="text"
                    placeholder="Buscar un colaborador..."
                />
                
                <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle btn-colaborator" data-bs-toggle="dropdown" aria-expanded="false">
                        NUEVO COLABORADOR
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <div className="dropdown-item">
                                <div className="dropdown-row ">
                                    <Icon.PersonFill className="dropdown-icon"/>
                                    <div className="dropdown-text">
                                            <strong >Carga individual</strong>
                                            <br />
                                            Añade uno a la vez
                                    </div>                                    
                                </div>
                            </div>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                            <div className="dropdown-item">
                                <div className="dropdown-row ">
                                    {/* <Icon.Upload className="dropdown-icon"/> */}
                                    <Icon.CapslockFill className="dropdown-icon"/>
                                    <div className="dropdown-text">
                                        <strong >Carga masiva</strong>
                                        <br />
                                        Añade varios archivos .XLS
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
            <table className="table-content table-striped table-hover">
                <thead className="thead-gray">
                    <tr>
                        <th>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                NOMBRE Y PERFIL
                            </label>
                        </th>
                        <th>TELÉFONO</th>
                        <th>CORREO ELECTRÓNICO</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="td-row-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                <img src={person1} className="img-user" alt="" />
                                <label className="form-check-label" htmlFor="flexCheckDefault1">
                                    <strong>Miguel Correa</strong> <br />
                                    Agente
                                </label>
                            </div>
                        </td>
                        <td>904-674-1310</td>
                        <td>Elmer_Parker78@gmail.com</td>
                        <td>
                            <button type="button" className="btn btn-outline-secondary button-action-trash">
                                <Icon.TrashFill />
                            </button>
                            <button type="button" className="btn btn-outline-secondary button-action-pencil">
                                <Icon.PencilFill />
                            </button>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <div className="td-row-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                <img src={person2} className="img-user" alt="" />
                                <label className="form-check-label" htmlFor="flexCheckDefault2">
                                    <strong>Miguel Correa</strong> <br />
                                    Agente
                                </label>
                            </div>
                        </td>
                        <td>411-263-0345</td>
                        <td>Casper39@hotmail.com</td>
                        <td>
                            <button type="button" className="btn btn-outline-secondary button-action-trash">
                                <Icon.TrashFill />
                            </button>
                            <button type="button" className="btn btn-outline-secondary button-action-pencil">
                                <Icon.PencilFill />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="td-row-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                <img src={person3} className="img-user" alt="" />
                                <label className="form-check-label" htmlFor="flexCheckDefault3">
                                    <strong>Miguel Correa</strong> <br />
                                    Agente
                                </label>
                            </div>
                        </td>
                        <td>269-959-5175</td>
                        <td>Nels.Trantow@gmail.com</td>
                        <td>
                            <button type="button" className="btn btn-outline-secondary button-action-trash">
                                <Icon.TrashFill />
                            </button>
                            <button type="button" className="btn btn-outline-secondary button-action-pencil">
                                <Icon.PencilFill />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="td-row-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                                <img src={person4} className="img-user" alt="" />
                                <label className="form-check-label" htmlFor="flexCheckDefault4">
                                    <strong>Miguel Correa</strong> <br />
                                    Agente
                                </label>
                            </div>
                        </td>
                        <td>269-959-5175</td>
                        <td>Nels.Trantow@gmail.com</td>
                        <td>
                            <button type="button" className="btn btn-outline-secondary button-action-trash">
                                <Icon.TrashFill />
                            </button>
                            <button type="button" className="btn btn-outline-secondary button-action-pencil">
                                <Icon.PencilFill />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="td-row-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                                <img src={person5} className="img-user" alt="" />
                                <label className="form-check-label" htmlFor="flexCheckDefault5">
                                    <strong>Miguel Correa</strong> <br />
                                    Agente
                                </label>
                            </div>
                        </td>
                        <td>269-959-5175</td>
                        <td>Nels.Trantow@gmail.com</td>
                        <td>
                            <button type="button" className="btn btn-outline-secondary button-action-trash">
                                <Icon.TrashFill />
                            </button>
                            <button type="button" className="btn btn-outline-secondary button-action-pencil">
                                <Icon.PencilFill />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Collaborators