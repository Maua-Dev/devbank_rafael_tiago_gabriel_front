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
      <div className="TelaInicial">
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
			<div className="janela-acoes">
				<div className="container-botoes-saldo">
          <Registro tipo={'saque'} valor={0} data={0} saldo={0}></Registro>
      <button className="botao-voltar" onClick={voltar}>
        Voltar
      </button>
			</div>
    </div>
    </div>
    </div>
  )
}

