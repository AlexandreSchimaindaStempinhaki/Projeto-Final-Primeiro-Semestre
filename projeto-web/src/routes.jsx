import { createBrowserRouter, } from "react-router-dom";
import { Login } from "./pages/login";
import { Cadastro } from "./pages/cadastro";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },

    {
        path: "/cadastro",
        element: <Cadastro />
    }
])

export default router;