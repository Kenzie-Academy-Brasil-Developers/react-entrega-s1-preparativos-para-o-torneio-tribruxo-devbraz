import './styles.css'


function ButtonComponent({onClick, className, children}) {

  return (

    <button onClick={onClick} className={className} >{children}</button>

  )

}

export default ButtonComponent