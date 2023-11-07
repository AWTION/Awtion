import "./Input.scss"

export default function Input({ type, onChangeHandler, placeholder, label, value, name, error, errorMesage }) {

    return (<div>
        <label>{label}
            <input type={type}
                placeholder={placeholder}
                onChange={onChangeHandler}
                value={value}
                name={name}
            />
            {error ? <> {errorMesage}</> : ""}
        </label>
    </div>)
}