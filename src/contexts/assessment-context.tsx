import { createContext, useState, ReactNode } from "react"

type ValoresDaContaType = {
    api : string,
    name: string,
    agency: string,
    account: string,
    current_balance: number,
    total: number,
    valor2: number,
    valor5: number,
    valor10: number,
    valor20: number,
    valor50: number,
    valor100: number,
    valor200: number,

    setApi: React.Dispatch<React.SetStateAction<string>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setAgency: React.Dispatch<React.SetStateAction<string>>,
    setConta: React.Dispatch<React.SetStateAction<string>>,
    setSaldo: React.Dispatch<React.SetStateAction<number>>,
    setTotal: React.Dispatch<React.SetStateAction<number>>,
    setValor2: React.Dispatch<React.SetStateAction<number>>,
    setValor5: React.Dispatch<React.SetStateAction<number>>,
    setValor10: React.Dispatch<React.SetStateAction<number>>,
    setValor20: React.Dispatch<React.SetStateAction<number>>,
    setValor50: React.Dispatch<React.SetStateAction<number>>,
    setValor100: React.Dispatch<React.SetStateAction<number>>,
    setValor200: React.Dispatch<React.SetStateAction<number>>,
}

const defaultValoresDaConta: ValoresDaContaType = {
    api: "",
    name: "",
    agency: "",
    account: "",
    current_balance: 0,
    total: 0,
    valor2: 0,
    valor5: 0,
    valor10: 0,
    valor20: 0,
    valor50: 0,
    valor100: 0,
    valor200: 0,

    setApi: ()=> {},
    setName: ()=> {},
    setAgency: ()=> {},
    setConta: ()=> {},
    setSaldo: ()=> {},
    setTotal: ()=> {},
    setValor2: ()=> {},
    setValor5: ()=> {},
    setValor10: ()=> {},
    setValor20: ()=> {},
    setValor50: ()=> {},
    setValor100: ()=> {},
    setValor200: ()=> {},
}

export const ValoresDaConta = createContext<ValoresDaContaType>(defaultValoresDaConta);

export const DadosConta = ({ children }: { children: ReactNode }) => {
    const [api, setApi] = useState<string>("")
    const [name,setName] = useState<string>("")
    const [agency,setAgency] = useState<string>("")
    const [account,setConta] = useState<string>("")
    const [current_balance,setSaldo] = useState<number>(0)
    const [total,setTotal] = useState<number>(0)
    const [valor2,setValor2] = useState<number>(0)
    const [valor5,setValor5] = useState<number>(0)
    const [valor10,setValor10] = useState<number>(0)
    const [valor20,setValor20] = useState<number>(0)
    const [valor50,setValor50] = useState<number>(0)
    const [valor100,setValor100] = useState<number>(0)
    const [valor200,setValor200] = useState<number>(0)


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
            total,
            setTotal,
            valor2,
            setValor2,
            valor5,
            setValor5,
            valor10,
            setValor10,
            valor20,
            setValor20,
            valor50,
            setValor50,
            valor100,
            setValor100,
            valor200,
            setValor200,
         }}>
            { children }
        </ValoresDaConta.Provider>
    );
};