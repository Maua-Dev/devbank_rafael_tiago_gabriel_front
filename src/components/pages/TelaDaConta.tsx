import { useContext } from 'react'
import './TelaDaConta.css'
import { ValoresDaConta } from '../../contexts/assessment-context'

function TelaDaConta() {

  const { api, setApi } = useContext(ValoresDaConta)
  
  

  const pegar = () => {
    const chave =  "https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/"

    if (api === chave){
      setApi(chave)
      window.location.href = "/home"
    }  
    else {
      alert("Coloque a api correta!")
    }
  }


    return (
  
      <div className='TelaDaConta'>
          <div className='centered-container'>
            <header>
              <img src="src/img/image.webp" className='centro-imagem-login' />
            </header>
            <input id="validarApi" name="" className='input-box' onChange={(event) => setApi(event.target.value)}/>
            <button className='botao-login' onClick={pegar} id="pegar"> Logar </button>
          </div>
      </div>
    )
    }
  
  export default TelaDaConta
