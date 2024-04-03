import { useState } from 'react'
import './TelaDaConta.css'
import { Link } from "react-router-dom"


function TelaDaConta() {

  const [api, setApi] = useState<string>("")

    return (
      <>
        <header></header>
          <div className='centered-container'>
            <div><img src="src/img/image.webp" className='centro-imagem-login' /></div>
            <form>
              <input name="" className='input-box' onChange={(event) => setApi(event.target.value)}/>
            </form>
            <Link to="/home"><button className='botao-login'> Logar </button></Link>
          </div>
      </>
    )
  }
  
  export default TelaDaConta