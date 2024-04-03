import { Link, useLocation } from "react-router-dom"
import "./TelaInicial.css"
import axios from "axios"
import { useEffect, useState } from "react"

function Telainicial() {
  
  const [name,setName] = useState<string>()
  const [agency,setAgencia] = useState<string>()
  const [account,setConta] = useState<string>()
  const [current_balance,setSaldo] = useState<string>()

   const api = "https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/"

  const requestApi = async () => {
     const response = await axios.get(api)
     setName(response.data.name)
     setAgencia(response.data.agency)
     setConta(response.data.account)
     setSaldo(response.data.current_balance)
  }
   useEffect(() => {
      requestApi()
   }, [])

    return (
      <>
      <header>
      <div>
          <h2 className="dados-conta">{name}</h2>
          <h2 className="dados-conta">{agency}</h2>
          <h2 className="dados-conta">{account}</h2>
          <h2 className="dados-conta">{current_balance}</h2>
        </div>
        <img src="src/img/image.webp" className='centro-imagem'/>
      </header>
    
      <div className="container">

        <div>
          <h2>O que deseja Fazer?</h2>
          <text type="text" className="input-box-saldo"/>
        </div>

          <button className="botoes-banco">Sacar</button>
          <button className="botoes-banco">Depositar</button>
          <button className="botoes-banco">transações</button>

      <Link to="/"><button name="Coloque a API">Voltar</button></Link>
      </div>
      </>
    )
  }
  
  export default Telainicial
  


