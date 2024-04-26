import { useContext, useEffect, useState } from 'react'
import '../styles/TelaLogin.css'
import { ValoresDaConta } from '../contexts/assessment-context'
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert';


function TelaDaConta() {
  const [isAPIcolocada, setAPIcolocada] = useState<boolean>(false)
  const { api, setApi } = useContext(ValoresDaConta)
  const navigate = useNavigate()
  
  const pegar = () => {
    const chave =  "https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/"
    
    if (api === chave){
      navigate("/home")
    }
    else {
      setAPIcolocada(true)
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
            {isAPIcolocada ? <Alert variant='filled' severity='error'>ERRO! Coloque uma API válida</Alert> : null}
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
