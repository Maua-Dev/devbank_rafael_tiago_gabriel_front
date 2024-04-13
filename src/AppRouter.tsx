import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaDaConta from "./pages/TelaDaConta";
import TelaInicial from "./pages/TelaInicial";
import { TelaSacar } from "./pages/TelaSacar";
import { TelaDeposito } from "./pages/TelaDeposito";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component = {TelaDaConta} path="/" element={<TelaDaConta />} />
                <Route Component = {TelaInicial} path="/home" element={<TelaInicial />} />
                <Route Component={TelaSacar} path="/sacar" element={<TelaSacar />} />
                <Route Component={TelaDeposito} path="/depositar" element={<TelaDeposito />} /> 
            </Routes>
        </BrowserRouter>
    )
}