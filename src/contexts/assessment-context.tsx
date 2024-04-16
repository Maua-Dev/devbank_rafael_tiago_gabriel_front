import { createContext, useState, ReactNode } from "react"

type ValoresDaContaType = {
    api : string,
    name: string,
    agency: string,
    account: string,
    current_balance: number,
    total: number,
    notas2: number,
    notas5: number,
    notas10: number,
    notas20: number,
    notas50: number,
    notas100: number,
    notas200: number,

    setApi: React.Dispatch<React.SetStateAction<string>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setAgency: React.Dispatch<React.SetStateAction<string>>,
    setConta: React.Dispatch<React.SetStateAction<string>>,
    setSaldo: React.Dispatch<React.SetStateAction<number>>,
    setTotal: React.Dispatch<React.SetStateAction<number>>,
    setNotas2: React.Dispatch<React.SetStateAction<number>>,
    setNotas5: React.Dispatch<React.SetStateAction<number>>,
    setNotas10: React.Dispatch<React.SetStateAction<number>>,
    setNotas20: React.Dispatch<React.SetStateAction<number>>,
    setNotas50: React.Dispatch<React.SetStateAction<number>>,
    setNotas100: React.Dispatch<React.SetStateAction<number>>,
    setNotas200: React.Dispatch<React.SetStateAction<number>>,
}

const defaultValoresDaConta: ValoresDaContaType = {
    api: "",
    name: "",
    agency: "",
    account: "",
    current_balance: 0,
    total: 0,
    notas2: 0,
    notas5: 0,
    notas10: 0,
    notas20: 0,
    notas50: 0,
    notas100: 0,
    notas200: 0,

    setApi: ()=> {},
    setName: ()=> {},
    setAgency: ()=> {},
    setConta: ()=> {},
    setSaldo: ()=> {},
    setTotal: ()=> {},
    setNotas2: ()=> {},
    setNotas5: ()=> {},
    setNotas10: ()=> {},
    setNotas20: ()=> {},
    setNotas50: ()=> {},
    setNotas100: ()=> {},
    setNotas200: ()=> {},
}

export const ValoresDaConta = createContext<ValoresDaContaType>(defaultValoresDaConta);

export const DadosConta = ({ children }: { children: ReactNode }) => {
    const [api, setApi] = useState<string>("")
    const [name,setName] = useState<string>("")
    const [agency,setAgency] = useState<string>("")
    const [account,setConta] = useState<string>("")
    const [current_balance,setSaldo] = useState<number>(0)
    const [total,setTotal] = useState<number>(0)
    const [notas2,setNotas2] = useState<number>(0)
    const [notas5,setNotas5] = useState<number>(0)
    const [notas10,setNotas10] = useState<number>(0)
    const [notas20,setNotas20] = useState<number>(0)
    const [notas50,setNotas50] = useState<number>(0)
    const [notas100,setNotas100] = useState<number>(0)
    const [notas200,setNotas200] = useState<number>(0)


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
            notas2,
            setNotas2,
            notas5,
            setNotas5,
            notas10,
            setNotas10,
            notas20,
            setNotas20,
            notas50,
            setNotas50,
            notas100,
            setNotas100,
            notas200,
            setNotas200,
         }}>
            { children }
        </ValoresDaConta.Provider>
    );
};