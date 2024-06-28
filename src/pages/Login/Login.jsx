import { useState } from 'react'
import './Login.css'
import { API } from '../../api'
import { useNavigate } from 'react-router-dom';
import { setUserData } from '../../redux/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { enqueueSnackbar } from 'notistack';
import { setToken } from '../../helpers/local';
import { BannerApp } from '../../components/BannerApp/BannerApp';

const APIConnection = new API();

export const Login = () => {
    const [ userEmail, setUserEmail ] = useState('pedro@pe.com')
    const [ userPassword, setUserPassword ] = useState('raccoon')
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const detectEnterKeyDown = (e) => {
        if(e.key === 'Enter') {
            handleButtonLoginClick();
        }
    }

    const handleButtonLoginClick = async () => {
        
        if(!userEmail || userEmail.trim() === '') {
            enqueueSnackbar("Email not provided", {variant: 'error'})
            return
        }

        if(!userPassword || userPassword.trim() === '') {
            enqueueSnackbar("Password not provided", {variant: 'error'})
            return
        }

        if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(userEmail)) {
            enqueueSnackbar("Not a valid email format", {variant: 'error'})
            return
        }

        const loginRes = await APIConnection.login(userEmail, userPassword);
        
        setToken(loginRes.data.accessToken)

        dispatch(setUserData({
            userType: loginRes.data.userType,
            firstName:loginRes.data.firstName,
            lastName: loginRes.data.lastName
        }))
        
        navigate('/')

    }

    return (
        <div>
            <BannerApp />
            <div className='loginContainer'>
                <input 
                    className='loginInput' 
                    type='text'
                    placeholder="email"
                    value={userEmail}
                    onChange={(e) => { setUserEmail(e.target.value) } }
                    onKeyDown={detectEnterKeyDown}
                />
                <input 
                    className='loginInput'
                    type='password'
                    placeholder="password"
                    value={userPassword}
                    onChange={(e) => { setUserPassword(e.target.value) } }
                    onKeyDown={detectEnterKeyDown}
                />
                <button className='loginButton' onClick={handleButtonLoginClick }>
                    Log in
                </button>
            </div>
        </div>
    );
}