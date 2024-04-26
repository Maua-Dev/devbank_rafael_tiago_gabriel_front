import { Link, useNavigate } from "react-router-dom"
import "../styles/TelaHome.css"
import axios from "axios"
import { useContext, useEffect } from "react"
import { ValoresDaConta } from "../contexts/assessment-context"

function Telainicial() {

  const { setName, setAgency, setConta, setSaldo, setValor2, setValor5, setValor10, setValor20, setValor50, setValor100, setValor200, api, name, agency, account, current_balance} = useContext(ValoresDaConta)

  const requestApi = async () => {
     const response = await axios.get( api )
     setName(response.data.name)
     setAgency(response.data.agency)
     setConta(response.data.account)
     setSaldo(response.data.current_balance)
  }

   useEffect(() => {
    setValor2(0)
    setValor5(0)
    setValor10(0)
    setValor20(0)
    setValor50(0)
    setValor100(0)
    setValor200(0)
    requestApi()
   }, [])

const navigate = useNavigate()

const sacar = () => {
  navigate("/sacar")
}
const depositar = () => {
  navigate("/depositar")
}
const transacoes = () => {
  navigate('/transacoes')
}


    return (
      <div className="TelaInicial">
      <header className="Header">
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
      </header>
      <div className="janela-acoes-home">
        <div className="container-botoes-saldo">

          <div className="box-saldo">
            <div className="oq-fazer">
              <h2>O que deseja fazer?</h2>
            </div>
            <div className="saldo-box">
              <h2 className="saldo">Saldo atual: R$ {current_balance}</h2>
            </div>
          </div>
            <div className="box-acoes">
              <button className="botoes-banco" onClick={sacar}>Sacar <img src="src/img/sacar.png" width={160}/> </button>
              <button className="botoes-banco" onClick={depositar}>Depositar <img src="src/img/depositar.png" width={160}/> </button>
              <button className="botoes-banco" onClick={transacoes}>Transações <img src="src/img/transacao.png" width={160}/> </button>
            </div>
            <div className="bottom">
              <Link to="/"><button className="botao-voltar">Voltar</button></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Telainicial
