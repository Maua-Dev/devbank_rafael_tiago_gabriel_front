import { useContext } from 'react'
import './TelaDaConta.css'
import { Link } from "react-router-dom"
import { ValoresDaConta } from '../../contexts/assessment-context'

function TelaDaConta() {

  const { setApi } = useContext(ValoresDaConta)

    return (
  
      <div className='TelaDaConta'>
          <div className='centered-container'>
            <header>
              <img src="src/img/image.webp" className='centro-imagem-login' />
            </header>
            <input name="" className='input-box' onChange={(event) => setApi (event.target.value)}/>
            <Link to="/home"><button className='botao-login'> Logar </button></Link>
          </div>
      </div>
    )
  }
  
  export default TelaDaConta