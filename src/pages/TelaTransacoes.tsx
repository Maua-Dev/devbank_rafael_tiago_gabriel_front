import { /* Link*/ useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import axios from 'axios'
import { ValoresDaConta } from '../contexts/assessment-context'
import '../styles/TelaTransacoes.css'

export function TelaTransacoes() {
  const { setName, setAgency, setConta, setSaldo, api } =
    useContext(ValoresDaConta)

  const requestApi = async () => {
    const response = await axios.get(api)
    setName(response.data.name)
    setAgency(response.data.agency)
    setConta(response.data.account)
    setSaldo(response.data.current_balance)
  }
  const navigate = useNavigate()

  const voltar = () => {
    navigate('/home')
  }

  useEffect(() => {
    requestApi()
  }, [])

  return (
    <div className="bottom">
      <button className="botao-voltar" onClick={voltar}>
        Voltar
      </button>
    </div>
  )
}

