import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '../pages/MainPage/MainPage'
import { Login } from '../pages/Login/Login'

export const mainRouter = createBrowserRouter([
    {
        path: '/',
        element: (
            <MainPage />
        ),
    },
    {
        path: '/login',
        element: (
            <Login />
        )
    }
])