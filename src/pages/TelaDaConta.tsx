import { useContext, useEffect } from 'react'
import '../styles/TelaDaConta.css'
import { ValoresDaConta } from '../contexts/assessment-context'
import { useNavigate } from 'react-router-dom'

function TelaDaConta() {

  const { api, setApi } = useContext(ValoresDaConta)
  const navigate = useNavigate()
  
  
  const pegar = () => {
    const chave =  "https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/"
    
    if (api === chave){
      setApi(chave)
      navigate("/home")
    }  
    else {
      alert("Coloque a api correta!")
    }
  }
  
  
  useEffect(() => {
    setApi("")
 }, [])
  
    return (
  
      <div className='TelaDaConta'>
          <div className='centered-container'>
            <header>
              <img src="src/img/image.webp" className='centro-imagem-login' />
            </header>
            <div className='janela-input'>
              <h1 className='instrucoes'>Coloque o link da sua conta:</h1>
              <input id="validarApi" name="" className='input-box' onChange={(event) => setApi(event.target.value)}/>
              <button className='botao-login' onClick={pegar} id="pegar"> Logar </button>
            </div>
          </div>
      </div>
    )
    }
  
  export default TelaDaConta
