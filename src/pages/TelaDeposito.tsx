import { Link } from "react-router-dom";
import Card from '../components/Card'

export function TelaDeposito() {
    return (
        <body>
            <h1>Tela de Depósito</h1>
            <Link to="/home"><button>Voltar</button></Link>
            <Card valor={10} quantidade={0}/>
        </body>
    )
}