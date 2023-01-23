import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUserName } from '../ApiClient/ApiCalls';
import { UserContext } from '../Contexts/UserContext'

export default function Home() {
    const { userName, setUserName } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/');
        }
        getUserName().then((username)=>{
            setUserName(username);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>home {userName}</div>
    )
}
