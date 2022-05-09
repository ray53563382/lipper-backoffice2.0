import "./input.scss";

export default function Input(props) {
  return (
    <div className={"form-control-component"}>
      <label className="label">{props.label}</label>
      <div className={props.className}>
        <input type={props.type || "text"} autoComplete="off" />
      </div>
    </div>
  );
}
