import { useContext, useEffect, useState } from 'react'
import '../styles/Card.css'
import { ValoresDaConta } from '../contexts/assessment-context'

interface CardProps {
  nota: number
}

export default function Card({nota}: CardProps) {
  
  const [quantidade, setQuantidade ] = useState(0)

  const { setValor2, setValor5, setValor10, setValor20, setValor100, setValor50, setValor200 } = useContext(ValoresDaConta)
  
  const handleMinus = () => {
    if (quantidade > 0){
      setQuantidade((quantidadeAtual => quantidadeAtual - 1))
    }
  }
  
  const handlePlus = () => {
    setQuantidade((quantidadeAtual) => quantidadeAtual + 1)
  }

  useEffect(() => {
    if (nota == 2) 
      setValor2(quantidade)       //Mudados o nome de cada variavel de notas, ao invés de guardar a quantidade apenas, eles vão abrigar a quantidade x valor da nota
    else if (nota == 5)             //Troquei/inverti o nome das variáveis nota e valor, agr nota é a valor que colocamos para aparecer da cédula (R${Nota}) e valor é a variável do context q abrigará os valores de cada cédula(card) individual
      setValor5(quantidade)
    else if (nota == 10) 
      setValor10(quantidade)
    else if (nota == 20) 
      setValor20(quantidade)
    else if (nota == 50) 
      setValor50(quantidade)
    else if (nota == 100) 
      setValor100(quantidade)
    else if (nota == 200) 
      setValor200(quantidade) 
 }, [quantidade])


  return (
    <div className='quadrado-geral'>
        <div className='janela-valor'>
            <h1 className='unidade'>R$</h1> <h1 className='valor'>{nota}</h1>
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