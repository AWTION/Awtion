import "./Input.scss"

export default function Input({ type, onChangeHandler, placeholder, label, value, name }) {
    <div>
        <label>{label}</label>
        <input type={type}
            placeholder={placeholder}
            onChange={onChangeHandler}
            value={value}
            name={name}
        />
    </div>

}