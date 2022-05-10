import TranslateService from "../../../../services/translate-service";
import ButtonDasboard from "../../../../components/button_dasboard/button-dasboard";
import Input from "../../../../components/input/input";
import Img_Test from "../../../../assets/images/dashboard/Ellipse 14.png";

import "./profile.scss";

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-menu">
        <div className="profile-menu-tittle">
          <h1> {TranslateService.get("profile.tittle")}</h1>
          <p className="profile-menu-tittle-p">{TranslateService.get("profile.description")}</p>
        </div>
        <div className="profile-menu-buttons">
          <span className="profile-menu-buttons-span">
            <ButtonDasboard className="white">{TranslateService.get("profile.btn.cancel")}</ButtonDasboard>
          </span>
          <ButtonDasboard className="blue">{TranslateService.get("profile.btn.save")} </ButtonDasboard>
        </div>
      </div>
      <div className="profile-information">
        <div className="row">
          <div className="col-2">
            <div className="profile-information-tittle">
              <h2>{TranslateService.get("profile.form.tittle")}</h2>
              <p className="profile-information-description">{TranslateService.get("profile.form.description")}</p>
            </div>
          </div>
          <div className="col-10">
            <div className="profile-information-form">
              <div className="row">
                <div className="col-6">
                  <Input label={TranslateService.get("profile.input.name")} />
                  <Input label={TranslateService.get("profile.input.lastName")} />
                  <Input label={TranslateService.get("profile.input.email")} />
                </div>
                <div className="col-6">
                  <div className="profile-information-form-img">{TranslateService.get("profile.image.tittle")}</div>
                  <div className="profile-information-form-btn-img">
                    <img src={Img_Test} className="profile-image" alt="" />
                    <ButtonDasboard className="white">{TranslateService.get("profile.image.button")}</ButtonDasboard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-security">
          <div className="row">
            <div className="col-2">
              <div className="profile-information-tittle-security">
                <h2>{TranslateService.get("profile.security.tittle")}</h2>
                <p className="profile-information-description">{TranslateService.get("profile.security.description")}</p>
              </div>
            </div>
            <div className="col-10">
              <div className="profile-information-form-security">
                <div className="row">
                  <div className="col-7">
                    <h3>{TranslateService.get("profile.password.tittle")}</h3>
                    <p className="profile-information-form-security-p">{TranslateService.get("profile.password.description")}</p>
                  </div>
                  <div className="col-5 profile-information-form-security-btn">
                    <ButtonDasboard className="white">{TranslateService.get("profile.password.btn")}</ButtonDasboard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile
