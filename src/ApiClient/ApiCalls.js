import axios from 'axios';

export const login = async (payload) => {
    try {
        let { data } = await axios.post("http://localhost:4000/api/auth/login", payload);
        localStorage.setItem('token', data.token);
        return data.username;
    }
    catch (error) {
        console.log(error);
    }
}

export const register = async (payload) => {
    try {
        let { data } = await axios.post("http://localhost:4000/api/auth/register", payload);
        localStorage.setItem('token', data.token);
        return data.username;
    }
    catch (error) {
        console.log(error);
    }
}

export const getUserName = async () => {
    try {
        return new Promise(async function (resolve, reject) {
            const {data} = await axios.get("http://localhost:4000/api/auth/getUserName", { 'headers': { 'token': localStorage.getItem('token') } });
            resolve(data.username);
        });
    }
    catch (error) {
        console.log(error);
    }
}




