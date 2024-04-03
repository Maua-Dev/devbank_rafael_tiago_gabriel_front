import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaDaConta from "./components/pages/TelaDaConta";
import TelaInicial from "./components/pages/TelaInicial";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component = {TelaDaConta} path="/" element={<TelaDaConta />} />
                <Route Component = {TelaInicial} path="/home" element={<TelaInicial />} />
            </Routes>
        </BrowserRouter>
    )
}