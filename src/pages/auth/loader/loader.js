
import TranslateService from "../../../services/translate-service";
import Success from "../../../assets/images/login/Success.png";
import "./loader.scss";


export default function Loader() {
  return (
    <div className="loader-page">
        <img src={Success} className="loader-image" alt="" />
        <h1 className="heading-h4 loader-tittle">{TranslateService.get("loader.tittle")}</h1>
        <p className="loader-description">{TranslateService.get("loader.description")}</p>
    </div>
  );
}
