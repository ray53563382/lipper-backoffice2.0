import './button.scss';

export default function Button(props) {
    return (
        <button 
            className={ 'form-button-component ' + props.className } 
            onClick={props.onClick} 
            disabled={props.disabled !== undefined ? props.disabled: false}>
                {props.children}
        </button>
    );
}
