import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home"
import Products from "../components/Products/Products"
import Cart from "../components/Cart/Cart"
import LoginForm from "../components/LoginForm/LoginForm";
import NotFound from "../components/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/products',
        element: <Products />
    },
    {
        path: '/cart',
        element: <Cart />
    },
    {
        path: '/login',
        element: <LoginForm />
    },
    {
        path: '*',
        element: <NotFound />
    }
])