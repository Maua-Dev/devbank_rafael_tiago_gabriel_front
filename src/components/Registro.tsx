import '../styles/Registro.css'


interface registroProps{
    tipo: string;
    valor: number;
    data: number;
    saldo: number;
}

export default function Registro({tipo, valor, data, saldo}: registroProps){
    return (
        <div className="quadro-total">
            <div className="tipo">
                {tipo}
            </div>
            <div className='textos'>
                <div className="texto">VALOR: R${valor}</div>
                <div className="texto">DATA: {data}</div>
                <div className="texto">SALDO: R${saldo}</div>
            </div>
        </div>
    )
}