import { /* Link*/ useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ValoresDaConta } from '../contexts/assessment-context'
import '../styles/TelaTransacoes.css'
import Registro from '../components/Registro'
import Alert from '@mui/material/Alert';

interface Register {
  tipo: string;
  valor:number;
  hora: string;
  saldo: number;
}

export function TelaTransacoes() {
  const [historico, setHistorico] = useState<Register[]>([])
  const { api, name, agency, account } = useContext(ValoresDaConta)

  const navigate = useNavigate()

  const voltar = () => {
    navigate('/home')
  }

  const requestHistory = async () => {
    const response = await axios.get(api + "/history")
    const totalTransacoes = response.data.all_transactions
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    totalTransacoes.map((data: {type: any; value: any; timestamp: any; current_balance:any;}) => {
      const transacao: Register = {
        tipo: data.type,
        valor: data.value,
        hora: data.timestamp,
        saldo: data.current_balance,
      }
      setHistorico((t)=>[...t,transacao])
    })
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
              {historico.length === 0 ? <Alert variant='filled' severity='warning'>Nenhuma transação feita.</Alert> : null}
            </div>
            <div className='registros'>
              {historico != undefined ? historico.map((transacao) => {const dataHora = new Date(transacao.hora)
              // eslint-disable-next-line react/jsx-key
              return (<Registro tipo={transacao.tipo} valor={transacao.valor} data={dataHora.toLocaleString()} saldo={transacao.saldo}/>)}): null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

