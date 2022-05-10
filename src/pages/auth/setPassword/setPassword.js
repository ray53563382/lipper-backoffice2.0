import TranslateService from "../../../services/translate-service";
import Input from "../../../components/input/input";
import Button from "../../../components/button/button";
import Logo from "../../../assets/images/login/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./setPassword.scss";

export default function SetPassword() {
  //VALUES FORM
  const [form, setForm] = useState({
    email: "",
    password: "",
    isValid: false,
  });

  //CREATE REQUEST
  const [request, setRequest] = useState({
    errorMessage: "",
    isSending: undefined,
  });

  //ADD VALUE TO INPUTS
  const handleInput = (field, value) => {
    let copyForm = { ...form };
    copyForm[field] = value;
    copyForm.isValid = copyForm.email && copyForm.password;
    setForm(copyForm);
  };

  //LOGIN EVENT
  const login = async (event) => {
    event.preventDefault();
    try {
      setRequest({ errorMessage: "", isSending: true });
    } catch (error) {
      setRequest({ errorMessage: error.message, isSending: false });
    }
  };

  return (
    <div className="setPassword-page">
      <div className="setPassword-template">
        <div className="setPassword-form">
          <form className="" onSubmit={login}>
            <img src={Logo} className="setPassword-image" alt="" />
            <h1 className="heading-h4 setPassword-tittle">{TranslateService.get("password.tittle")}</h1>
            <p className="setPassword-description">{TranslateService.get("password.description")}</p>
            {/* <Alert text={TranslateService.get("login.error")}></Alert> */}
            <div className="setPassword-input-email">
              <Input
                className="mb-6"
                type="password"
                label={TranslateService.get("password.label.password_1")}
                value={form.email}
                onChange={(event) => handleInput("email", event.target.value)}
              />
            </div>
            <div className="setPassword-input-password">
              <Input
                className="mb-6"
                type="password"
                label={TranslateService.get("password.label.password_2")}
                value={form.password}
                onChange={(event) => handleInput("password", event.target.value)}
              />
            </div>
            {/* {request.errorMessage && <Alert className="mb-6" text={request.errorMessage} /> }    */}
            <div className="setPassword-button">
              <Button onClick={login} disabled={!form.isValid || request.isSending}>
                {request.isSending && <FontAwesomeIcon icon={faSpinner} spin={true} />} {TranslateService.get("password.btn")}
              </Button>
            </div>
            <a href="/" className="setPassword_link">
              ¿Olvidaste tu contraseña?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
