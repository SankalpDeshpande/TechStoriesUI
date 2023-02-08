import React, { useContext } from 'react'
import { useState } from 'react';
import { login, register } from '../ApiClient/ApiCalls';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import mailImg from '../assets/mail.png';
import passwordImg from '../assets/password.png';
import { UserContext } from '../Contexts/UserContext';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const { error, setError } = useContext(UserContext);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        if (isLogin) {
            await (login({ mail, password }, setError));
        } else {
            await (register({ mail, password, firstName, lastName }, setError));
        }
        navigate('/home');
    }
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/home');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        setMail("");
        setPassword("");
        setFirstName("");
        setLastName("");
    }, [isLogin])
    return (
        <div className='loginDiv'>

            <div className='switchBtns'>
                <button className={isLogin ? 'switchBtn selectedBtn' : 'switchBtn'} onClick={() => setIsLogin(true)}>Log in</button>
                <button className={isLogin ? 'switchBtn' : 'switchBtn selectedBtn'} onClick={() => setIsLogin(false)}>Sign up</button>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    {
                        !isLogin && <div className='nameFields'>
                            <input name="firstName" type="text" placeholder='First Name' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                            <input name="lastName" type="text" placeholder='Last Name' value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                        </div>
                    }
                    <div className='iconInput'>
                        <div className='iconLogin'>
                            <img src={mailImg} />
                        </div>
                        <div className='inputLogin'>
                            <input name="mail" type="email" placeholder='Email' value={mail} onChange={(e) => { setMail(e.target.value) }} />
                        </div>
                    </div>

                    <div className='iconInput'>
                        <div className='iconLogin'>
                            <img src={passwordImg} />
                        </div>
                        <div className='inputLogin'>
                            <input name="password" type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                    </div>


                    <button className='LoginSignupBtn' type='submit' >{isLogin ? 'Login' : 'Signup'}</button>


                </div>
                <div className='errorMsg'>
                    {error}
                </div>

            </form>
        </div>
    )
}
