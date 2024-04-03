import { Link } from "react-router-dom"
import "./TelaInicial.css"
// import axios from "axios"
// import { useEffect } from "react"

function Telainicial() {
  
  // const [name, setName] = useState<string>()

  // const api = "URL context"

  //const requestApi = async () => {
  //   const response = axios.get(api)
  //   setName(response.data.name)
  //}
  // useEffect(() => {
  //    requestApi()
  // }, [])

    return (
      <>
      <header>
        <img src="src/img/image.webp" className='centro-imagem'/>
      </header>
    
      <div className="container">

        <div>
          <h2>O que deseja Fazer?</h2>
          <text type="text" className="input-box-saldo"/>
        </div>

          <button className="botoes-banco">Sacar</button>
          <button className="botoes-banco">Depositar</button>
          <button className="botoes-banco">transações</button>
          <input type="text" className="input-box"/>

      <Link to="/"><button name="Coloque a API">Voltar</button></Link>
      </div>
      </>
    )
  }
  
  export default Telainicial
  



//CONTEXT

// type VariaveisGlobaisType = {
//   api: string,
//   nome: string,
//   agencia: string,
//   conta: string,
//   credito: number,

//   setApi: React.Dispatch<React.SetStateAction<string>>;
//   setNome: React.Dispatch<React.SetStateAction<string>>;
//   setAgencia: React.Dispatch<React.SetStateAction<string>>;
//   setConta: React.Dispatch<React.SetStateAction<string>>;
//   setCredito: React.Dispatch<React.SetStateAction<string>>;

// } 
// const defaultVariaveisGlobais: VariaveisGlobaisType = {
//   api: "",
//   nome: "",
//   agencia: "",
//   conta: "",
//   credito: 0,

//   setApi: () => {},
//   setNome: () => {},
//   setAgencia: () => {},
//   setConta: () => {},
//   setCredito: () => {}
// }

// export const VariaveisGlobais = createContext <VariaveisGlobaisType>(defaultVariaveisGlobais);

