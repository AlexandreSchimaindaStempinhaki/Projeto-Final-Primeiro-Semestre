import { createBrowserRouter, } from "react-router-dom";
import { Login } from "./pages/login";
import { Cadastro } from "./pages/cadastro";
import { Senha } from "./pages/senha";
import { Produtos } from "./pages/produtos";
import { Vendas } from "./pages/vendas";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },

    {
        path: "/cadastro",
        element: <Cadastro />
    },

    {
        path: "/senha",
        element: <Senha />
    },

    {
        path: "/produtos",
        element: <Produtos />
    },

    {
        path: "/vendas",
        element: <Vendas />
    }
])

export default router;