import axios from 'axios';

export const login = async (payload, setError) => {
    try {
        let { data } = await axios.post("http://localhost:4000/api/auth/login", payload);
        localStorage.setItem('token', data.token);
        return data.username;
    }
    catch (error) {
        setError(error.response.data.msg);
    }
}

export const register = async (payload, setError) => {
    try {
        let { data } = await axios.post("http://localhost:4000/api/auth/register", payload);
        localStorage.setItem('token', data.token);
        return data.username;
    }
    catch (error) {
        setError(error.response.data.msg);
    }
}

export const getUserName = async () => {
    try {
        const { data } = await axios.get("http://localhost:4000/api/auth/getUserName",
            { 'headers': { 'token': localStorage.getItem('token') } });
        return data.username;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

export const createBlog = async (payload) => {
    try {
        let { data } = await axios.post("http://localhost:4000/api/blog/create", payload,
        { 'headers': { 'token': localStorage.getItem('token') } });
    }
    catch (error) {
        // setError(error.response.data.msg);
    }
}

export const getBlogs = async () => {
    try {
        const { data } = await axios.get("http://localhost:4000/api/blog/blogs",
            { 'headers': { 'token': localStorage.getItem('token') } });
        return data.blogs;
    }
    catch (error) {
        throw new Error(error.message);
    }
}



