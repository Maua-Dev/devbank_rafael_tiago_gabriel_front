import { Link } from "react-router-dom"
import "./TelaInicial.css"
import axios from "axios"
import { useContext, useEffect } from "react"
import { ValoresDaConta } from "../../contexts/assessment-context"

function Telainicial() {

   const { setName, setAgency, setConta, setSaldo, api, name, agency, account, current_balance} = useContext(ValoresDaConta)

  const requestApi = async () => {
     const response = await axios.get( api )
     setName(response.data.name)
     setAgency(response.data.agency)
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
            <button className="botoes-banco">Sacar <img src="src/img/sacar.png" width={160}/> </button>
            <button className="botoes-banco">Depositar <img src="src/img/depositar.png" width={160}/> </button>
            <button className="botoes-banco">Transações <img src="src/img/transacao.png" width={160}/> </button>
          </div>

      <text type="text" className="input-box-saldo"/>
      <><br/></>
      <Link to="/"><button name="Coloque a API">Voltar</button></Link>
      </div>
      </>
    )
  }
  
  export default Telainicial