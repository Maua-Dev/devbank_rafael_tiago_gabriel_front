import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaDaConta from "./components/pages/TelaDaConta";
import TelaInicial from "./components/pages/TelaInicial";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaDaConta />} />
                <Route path="/." element={<TelaInicial />} />
            </Routes>
        </BrowserRouter>
    )
}