import { useState } from 'react'
import '../styles/Card.css'

interface CardProps {
  valor: number
}

export default function Card({ valor}: CardProps) {
  
  const [quantidade, setQuantidade ] = useState(0)
  
  const handleMinus = () => {
    if (quantidade > 0){
      setQuantidade((quantidadeAtual => quantidadeAtual - 1))
    }
  }
  
  const handlePlus = () => {
    setQuantidade((quantidadeAtual) => quantidadeAtual + 1)
  }

  return (
    <div className='quadrado-geral'>
        <div className='janela-valor'>
            <h1 className='unidade'>R$</h1> <h1 className='valor'>{valor}</h1>
        </div>
        <div className='janela-quantidade'>
            <div className='janela-guia-quantidade'>
                <h1 className='guia-quantidade'>Quantidade</h1>
            </div>
            <div className='janela-indicador-quantidade'>
                <button onClick={handleMinus}>-</button>
                <h1 className='indicador-quantidade'>{quantidade}</h1>
                <button onClick={handlePlus}>+</button>
            </div>
        </div>
    </div>
  )
}