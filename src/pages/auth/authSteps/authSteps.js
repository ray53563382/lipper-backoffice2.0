import TranslateService from "../../../services/translate-service";
import Input from "../../../components/input/input";
import Button from "../../../components/button/button";
import Logo from "../../../assets/images/login/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./authSteps.scss";

export default function AuthSteps() {
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
    <div className="authSteps-page">
      <div className="authSteps-template">
        <div className="authSteps-form">
          <form className="" onSubmit={login}>
            <img src={Logo} className="authSteps-image" alt="" />
            <h1 className="heading-h4 authSteps-tittle">{TranslateService.get("login.auth.tittle")}</h1>
            <p className="authSteps-description">{TranslateService.get("login.auth.description")}</p>
            {/* <Alert text={TranslateService.get("login.error")}></Alert> */}
            <div className="authSteps-input-email">
              <Input
                className="mb-6"
                type="email"
                label={TranslateService.get("login.auth.label")}
                value={form.email}
                onChange={(event) => handleInput("email", event.target.value)}
              />
            </div>
            {/* {request.errorMessage && <Alert className="mb-6" text={request.errorMessage} /> }    */}
            <div className="authSteps-button">
              <Button onClick={login} disabled={!form.isValid || request.isSending}>
                {request.isSending && <FontAwesomeIcon icon={faSpinner} spin={true} />} {TranslateService.get("login.auth.btn")}
              </Button>
            </div>
            <a href="/" className="authSteps_link">
              {TranslateService.get("login.auth.reenviar")}
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
