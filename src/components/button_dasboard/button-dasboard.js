import './button-dashboard.scss';

export default function ButtonDashboard(props) {
    console.log(props);
    return (
        <button 
            className={ 'form-button-dasboard-component ' + props.className  } 
            onClick={props.onClick} 
            disabled={props.disabled !== undefined ? props.disabled: false}>
                {props.children}
        </button>
    );
}
