import { useEffect, useState } from 'react';
import '../styles/Registro.css'


interface registroProps{
    tipo: string;
    valor: number;
    data: number;
    saldo: number;
}

export default function Registro({tipo, valor, data, saldo}: registroProps){

    const [isDeposit, setDeposit] = useState<boolean>(false)

    useEffect(() => {
        if (tipo === 'deposit') {
            setDeposit(true);
        } else {
            setDeposit(false);
        }
    }, [tipo]);
    
    return (
        <div className="quadro-total">
            <div className={isDeposit ? 'tipo-deposito' : 'tipo'}>
                {isDeposit ? "DEPÓSITO" : "SAQUE"}
            </div>
            <div className='textos'>
                <div className="texto">VALOR: R${valor}</div>
                <div className="texto">DATA: {data}</div>
                <div className="texto">SALDO: R${saldo}</div>
            </div>
        </div>
    )
}