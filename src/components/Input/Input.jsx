import "./Input.scss"

export default function Input({ type, onChangeHandler, placeholder, label }) {
    <div>
        <label>{label}</label>
        <input type={type}
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    </div>

}