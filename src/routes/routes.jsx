import { createBrowserRouter, Navigate, Outlet } from "react-router";
import Home from "../components/Home/Home"
import Products from "../components/Products/Products"
import Cart from "../components/Cart/Cart"
import LoginForm from "../components/LoginForm/LoginForm";
import NotFound from "../components/NotFound/NotFound";
import Navbar from "../components/Navbar/Navbar";
import Cookies from "js-cookie";
import ProductItemDetails from "../components/Products/ProductItemDetails";

const ProtectedRoute = () => {
    const jwtToken = Cookies.get('jwt_token')
    return jwtToken === undefined ? <Navigate to={'/login'} replace /> : <Outlet />
}
const PublicRoute = () => {
    const jwtToken = Cookies.get('jwt_token')
    return jwtToken !== undefined ? <Navigate to={'/'} replace /> : <Outlet />
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
                    {
                        path: 'products/:id',
                        element: <ProductItemDetails />
                    }
                ]

            }
        ]

    },
    {

        element: <PublicRoute />,
        children: [
            {
                path: '/login',
                element: <LoginForm />
            }
        ]
    },
])