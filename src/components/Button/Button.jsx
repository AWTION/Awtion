
import "./Button.scss"
const Button = ({icon, label}) => {
  return (
   <button className="Button">
    <img src={icon}/> 
    {label}
   </button>
  )
}

export default Button
