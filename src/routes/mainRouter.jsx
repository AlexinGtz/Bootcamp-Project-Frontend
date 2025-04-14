import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '../pages/MainPage/MainPage'
import { Login } from '../pages/Login/Login'
import { SubjectHomework } from '../pages/SubjectHomework/SubjectHomework'

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
    },
    {
        path: '/subject/subject-homeworks/:subjectId?',
        element: (
            <SubjectHomework />
        )
    },

])
