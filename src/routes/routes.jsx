import { createBrowserRouter, Navigate, Outlet } from "react-router";
import Home from "../components/Home/Home"
import Products from "../components/Products/Products"
import Cart from "../components/Cart/Cart"
import LoginForm from "../components/LoginForm/LoginForm";
import NotFound from "../components/NotFound/NotFound";
import Navbar from "../components/Navbar/Navbar";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
        return <Navigate to={'/login'} replace />
    }
    else {
        return <Outlet />
    }
}
const RootLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: '*',
                element: <NotFound />
            },
            {
                element: <ProtectedRoute />,
                children: [
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
                ]

            }
        ]

    },
    {
        path: '/login',
        element: <LoginForm />
    },
])