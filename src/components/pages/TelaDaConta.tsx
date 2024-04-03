import './TelaDaConta.css'
import { Link } from "react-router-dom"
import React from "react-router-dom"

function TelaDaConta() {
  
  
    return (
      <>
        <header></header>
          <div className='centered-container'>
            <div><img src="src/img/image.webp" className='centro-imagem-login' /></div>
            <form>
              <input name="" className='input-box' />
            </form>
            <Link to="/home"><button className='botao-login'> Acessar </button></Link>
          </div>
      </>
    )
  }
  
  export default TelaDaConta