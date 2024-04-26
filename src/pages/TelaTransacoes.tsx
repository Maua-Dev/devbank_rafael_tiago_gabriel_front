import { /* Link*/ useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import axios from 'axios'
import { ValoresDaConta } from '../contexts/assessment-context'
import '../styles/TelaTransacoes.css'
import Registro from '../components/Registro'

export function TelaTransacoes() {
  const { api, name, agency, account } = useContext(ValoresDaConta)

  const navigate = useNavigate()

  const voltar = () => {
    navigate('/home')
  }

  const requestHistory = async () => {
    const response = await axios.get(api + "/history")
    const totalTransacoes = response.data.all_transactions
    console.log(totalTransacoes)
  }

  useEffect(() => {
    requestHistory();
  }, [])

  return (
    <div className="bottom">
      <div className="TelaInicial-transacoes">
        <header className="Header">
          <div>
            <img src ="src/img/image.webp" className="centro-imagem" />
          </div>
          <div className="box-dados-conta">
            <h2 className="dados-conta">
              Nome: {name}<br/>
              Agência: {agency}<br/>
              Conta: {account}
            </h2>
          </div>
        </header>
        <div className="janela-acoes-transacoes">
          <div className="container-botoes-saldo-transacoes">
            <div className='voltar'>
              <button className="botao-voltar-transacoes" onClick={voltar}>VOLTAR</button>
            </div>
            <div className='registros'>
              <Registro tipo={'saque'} valor={0} data={0} saldo={0}></Registro>
              <Registro tipo={'deposit'} valor={0} data={0} saldo={0}></Registro>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

