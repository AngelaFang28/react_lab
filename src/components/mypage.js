import React, {useState, useContext}from 'react'
import { useHistory } from 'react-router-dom'



const Mypage = props => {
    const {username, password} =  (props.location && props.location.state)||{};
    const history = useHistory();
    const handleLogout = ()=>{
        history.push('logout')
    };
    return (
        <div>
            <h2>Hello {username}</h2>
            <h2>Welcome to your page</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Mypage;