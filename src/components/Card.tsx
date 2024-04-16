import { /*useContext,*/ useEffect, useState } from 'react'
import '../styles/Card.css'
// import { ValoresDaConta } from '../contexts/assessment-context'

interface CardProps {
  valor: number
}

export default function Card({ valor}: CardProps) {
  
  const [quantidade, setQuantidade ] = useState(0)

  // const { setNotas2, setNotas5, setNotas10, setNotas20, setNotas100, setNotas50, setNotas200 } = useContext(ValoresDaConta)
  
  const handleMinus = () => {
    if (quantidade > 0){
      setQuantidade((quantidadeAtual => quantidadeAtual - 1))
    }
  }
  
  const handlePlus = () => {
    setQuantidade((quantidadeAtual) => quantidadeAtual + 1)
  }

  useEffect(() => {
    // if (valor == 2) 
    //   setNotas2(quantidade)
    // else if (valor == 5) 
    //   setNotas5(quantidade)
    // else if (valor == 10) 
    //   setNotas10(quantidade)
    // else if (valor == 20) 
    //   setNotas20(quantidade)
    // else if (valor == 50) 
    //   setNotas50(quantidade)
    // else if (valor == 100) 
    //   setNotas100(quantidade)
    // else if (valor == 200) 
    //   setNotas200(quantidade)
 }, [quantidade])


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