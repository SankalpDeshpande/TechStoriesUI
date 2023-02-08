import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUserName } from '../ApiClient/ApiCalls';
import { UserContext } from '../Contexts/UserContext'
import Feed from './Feed';
import './Home.css';
import RightPanel from './RightPanel';
import ProfileInfo from './ProfileInfo';

export default function Home() {
    const { userName, setUserName } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/');
            return;
        }
        getUserName()
            .then((username) => {
                setUserName(username);
            })
            .catch((err) => {
                localStorage.removeItem("token");
                navigate('/');
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className='home'>
            <ProfileInfo />
            <Feed />
            <RightPanel />
        </div>
    )
}
