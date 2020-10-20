import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Logout() {
    const history = useHistory();
    const backToHome = ()=>{
        history.push('/');
    }
    return (
        <div>
            <h2>You have logged out!</h2>
            <button onClick={backToHome}>Back to home</button>
        </div>
    )
}
