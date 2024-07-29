 export const setToken = (tokenValue) => {
    return localStorage.setItem('accessToken', tokenValue);
}

export const getToken = () => {
    return localStorage.getItem('accessToken');
}
