import './MainPage.css'
import { setUserData } from '../../redux/reducers/userReducer';
import { useSelector } from 'react-redux';


export const MainPage = () => {
    const { userData } = useSelector((appState) => ({
        userData: appState.userData
    }) )
    
    return (
        <div>
            <h1>Welcome to the app</h1>        
            <h2>User: {userData.firstName} {userData.lastName} </h2>
            <h2>Type: {userData.userType}</h2>
        </div>
    );
}