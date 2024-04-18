import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaLogin from "./pages/TelaLogin";
import TelaHome from "./pages/TelaHome";
import { TelaSacar } from "./pages/TelaSacar";
import { TelaDeposito } from "./pages/TelaDeposito";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component = {TelaLogin} path="/" element={<TelaLogin />} />
                <Route Component = {TelaHome} path="/home" element={<TelaHome />} />
                <Route Component={TelaSacar} path="/sacar" element={<TelaSacar />} />
                <Route Component={TelaDeposito} path="/depositar" element={<TelaDeposito />} /> 
            </Routes>
        </BrowserRouter>
    )
}