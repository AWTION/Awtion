
import "./Button.scss"
const Button = ({icon, label, variant ,type, ...others }) => {
  return (
   <button className="button" type={type || "button"} {...others}>

    <img src={icon} /> 
    {label}
   </button>
  )
}

export default Button
