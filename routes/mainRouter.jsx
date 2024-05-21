import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '../pages/MainPage/MainPage'

export const mainRouter = createBrowserRouter([
    {
        path: '/',
        element: (
            <MainPage />
        ),
    }
])