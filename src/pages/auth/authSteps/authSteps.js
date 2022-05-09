import TranslateService from "../../../services/translate-service";
import Input from "../../../components/input/input";
import Button from "../../../components/button/button";
import Alert from "../../../components/alert/alert";
import Logo from '../../../assets/images/login/Logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./authSteps.scss";

export default function AuthSteps() {
  //VALUES FORM
  const [form, setForm] = useState({
    email: "",
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
    copyForm.isValid = copyForm.email;
    setForm(copyForm);
  };

  //LOGIN EVENT
  const send = async (event) => {
    event.preventDefault();
    try {
      setRequest({ errorMessage: "", isSending: true });
    } catch (error) {
      setRequest({ errorMessage: error.message, isSending: false });
    }
  };

  return (
    <div className="authSteps-page">
      <div className="mt-64">
        <form className="" onSubmit={send}>
          <img src={Logo} className="login-image" alt="" />
          <h1 className="heading-h4">{TranslateService.get("login.auth.tittle")}</h1>
          <p className="login-description">{TranslateService.get("login.auth.description")}</p>
          <Alert text={TranslateService.get("login.error")}></Alert>
          <Input
            className="mb-6"
            type="text"
            label={TranslateService.get("login.auth.label")}
            value={form.email}
            onChange={(event) => handleInput("email", event.target.value)}
          />
          {/* {request.errorMessage && <Alert className="mb-6" text={request.errorMessage} /> }                            */}
          <Button onClick={send} disabled={!form.isValid || request.isSending}>
            {request.isSending && <FontAwesomeIcon icon={faSpinner} spin={true} />} {TranslateService.get("login.auth.btn")}
          </Button>
          <a href="/" className="login_link">
            {TranslateService.get("login.auth.reenviar")}
          </a>
        </form>
      </div>
    </div>
  );
}
