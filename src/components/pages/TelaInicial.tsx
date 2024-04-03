import { Link } from "react-router-dom"
import React from "react-router-dom"
import "./TelaInicial.css"

function Telainicial() {
  

    return (
      <>
      <header>
        
        <img src="src/img/image.webp" className='centro-imagem'/>
        
      
      
      </header>
    

      <Link to="/"><button name="Coloque a API">Voltar</button></Link>
      <div className="container">

        <div><h2>O que deseja Fazer?</h2><input type="text" className="input-box-saldo"/></div>

        <button className="botoes-banco">Sacar</button>
        <button className="botoes-banco">Depositar</button>
        <button className="botoes-banco">transações</button>
        <input type="text" className="input-box"/>
      </div>
      </>
    )
  }
  
  export default Telainicial
  