import { Link } from "react-router-dom"
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
      <header className="Header">
        <div>
          <div>
            <img src="src/img/image.webp" className='centro-imagem'/>
          </div>
          <div className="box-dados-conta">
            <h2 className="dados-conta">
              Nome: {name}<br/>
              Agência: {agency}<br/>
              Conta: {account}
            </h2>
          </div>
        </div>
      </header>
    
      <div className="container-botoes-saldo">

        <div className="box-saldo">
          <div className="oq-fazer">
            <h2>O que deseja Fazer?</h2>
          </div>
          <div className="saldo-box">
            <h2 className="saldo">Saldo atual: R$ {current_balance}</h2>
          </div>
        </div>

          <div className="box-acoes">
            <button className="botoes-banco">Sacar</button>
            <button className="botoes-banco">Depositar</button>
            <button className="botoes-banco">Transações</button>
          </div>

      <Link to="/"><button name="Coloque a API">Voltar</button></Link>
      <text type="text" className="input-box-saldo"/>
      </div>
      </>
    )
  }
  
  export default Telainicial