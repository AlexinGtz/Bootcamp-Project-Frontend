import axios from "axios";
import { enqueueSnackbar } from 'notistack';


export class API {
    axiosInstance;
    constructor() {;
        this.axiosInstance = axios.create({
            baseURL: "http://localhost:3000",
            timeout: 30000
        });
        
        this.axiosInstance.interceptors.response.use((response => response.data), (error) => {

            if(error.response.status === 403) {
                localStorage.clear();
                window.location.href = "/login"
            }

            if(error.response.data.message) {
                enqueueSnackbar(error.response.data.message, {variant: 'error'})
            }
        })
    }

    async login(userEmail, userPassword) {
        return this.axiosInstance.post('/login', {
            userEmail,
            userPassword
        });
    }
}