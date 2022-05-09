import "./alert.scss";
import IMAGE from '../../assets/images/login/icon.png';

export default function Alert(props) {
  return (
    <div className="alert-component">
        <img src={IMAGE} alt={"alert"} className="alert-component-image" />
      <p className="alert-component-p"> <span>{props.text}</span></p>
    </div>
  );
}
