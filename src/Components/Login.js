import React from 'react'
import { useState } from 'react';
import { login, register } from '../ApiClient/ApiCalls';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        if (isLogin) {
            await (login({ mail, password }));
        } else {
            await (register({ mail, password, firstName, lastName }));
        }
        navigate('/home');
    }
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/home');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <button onClick={() => setIsLogin(true)}>Log in</button>
            <button onClick={() => setIsLogin(false)}>Sign up</button>
            <form onSubmit={handleSubmit}>
                <div>
                    {
                        !isLogin && <div>
                            <input name="firstName" type="text" placeholder='First Name' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                            <input name="lastName" type="text" placeholder='Last Name' value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                        </div>
                    }
                    <input name="mail" type="email" placeholder='Email' value={mail} onChange={(e) => { setMail(e.target.value) }} />
                    <br />
                    <input name="password" type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <br />
                    <button type='submit' >{isLogin ? 'Login' : 'Signup'}</button>
                </div>

            </form>
        </div>
    )
}
