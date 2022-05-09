import TranslateService from "../../../services/translate-service";
import Input from "../../../components/input/input";
import Button from "../../../components/button/button";
import Alert from "../../../components/alert/alert";
import Logo from '../../../assets/images/login/Logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./login.scss";

export default function Login() {
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
    <div className="login-page">
      <div className="mt-64">
        <form className="" onSubmit={login}>
          <img src={Logo} className="login-image"  alt=""/> 
          <h1 className="heading-h4">{TranslateService.get("login.title")}</h1>
          <p className="login-description">{TranslateService.get("login.description")}</p>

          <Alert text={TranslateService.get("login.error")}></Alert>
          <Input
            className="mb-6"
            type="email"
            label={TranslateService.get("login.label.email")}
            value={form.email}
            onChange={(event) => handleInput("email", event.target.value)}
          />
          <Input
            className="mb-6"
            type="password"
            label={TranslateService.get("login.label.password")}
            value={form.password}
            onChange={(event) => handleInput("password", event.target.value)}
          />
          {/* {request.errorMessage && <Alert className="mb-6" text={request.errorMessage} /> }                            */}
          <Button onClick={login} disabled={!form.isValid || request.isSending}>
            {request.isSending && <FontAwesomeIcon icon={faSpinner} spin={true} />} {TranslateService.get("login.btn")}
          </Button>

          <a href="/" className="login_link">¿Olvidaste tu contraseña?</a>
        </form>
      </div>
    </div>
  );
}
