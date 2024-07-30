import './MainPage.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from "../../helpers/local"; 

export const MainPage = () => {   

    const navigate = useNavigate()

    useEffect(() => {      
        if(!getToken()) {
            navigate('/login')
        }
    }, [])

    return (
        <div>
            <h1>Welcome to the app</h1>
        </div>
    );
}