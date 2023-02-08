import React, { useContext } from 'react'
import { UserContext } from '../Contexts/UserContext'

export default function ProfileInfo() {
    const { userName } = useContext(UserContext);
    return (
        <div className='profileInfo'>
            {userName}
        </div>
    )
}
