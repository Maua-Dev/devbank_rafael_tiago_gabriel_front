import { createContext, useState, ReactNode } from "react"

type ValoresDaContaType = {
    api : string,
    name: string,
    agency: string,
    account: string,
    current_balance: number,

    setApi: React.Dispatch<React.SetStateAction<string>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setAgency: React.Dispatch<React.SetStateAction<string>>,
    setConta: React.Dispatch<React.SetStateAction<string>>,
    setSaldo: React.Dispatch<React.SetStateAction<number>>,
}

const defaultValoresDaConta: ValoresDaContaType = {
    api: "",
    name: "",
    agency: "",
    account: "",
    current_balance: 0,

    setApi: ()=> {},
    setName: ()=> {},
    setAgency: ()=> {},
    setConta: ()=> {},
    setSaldo: ()=> {},
}

export const ValoresDaConta = createContext<ValoresDaContaType>(defaultValoresDaConta);

export const DadosConta = ({ children }: { children: ReactNode }) => {
    const [api, setApi] = useState<string>("")
    const [name,setName] = useState<string>("")
    const [agency,setAgency] = useState<string>("")
    const [account,setConta] = useState<string>("")
    const [current_balance,setSaldo] = useState<number>(0)

    return (
        <ValoresDaConta.Provider value = {{ 
            api,
            setApi,
            name,
            setName,
            agency,
            setAgency,
            account,
            setConta,
            current_balance,
            setSaldo,
         }}>
            { children }
        </ValoresDaConta.Provider>
    );
};