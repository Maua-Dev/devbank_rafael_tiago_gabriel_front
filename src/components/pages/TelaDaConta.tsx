import './TelaDaConta.css'
import { Link } from "react-router-dom"

function TelaDaConta() {
  

    return (
      <>
        <header></header>
          <div className='centered-container'>
            <div><img src="src/img/image.webp" className='centro-imagem' /></div>
            <form>
              <input name="" className='input-box' />
            </form>
            <Link to="/home"><button> Acessar </button></Link>
          </div>
      </>
    )
  }
  
  export default TelaDaConta