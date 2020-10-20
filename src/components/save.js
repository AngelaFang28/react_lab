import React from 'react'
import { useHistory } from 'react-router-dom'

const Save = props =>  {
    const {username, password} =  (props.location && props.location.userinfo)||{};
    const history = useHistory()
    const backToHome = ()=>{
        history.push('/');
    }
    return (
        <div>
            <h2>Hello {username}</h2>
            <span>Your profile is saved now!</span>
            <button onClick={backToHome}>Back to my page</button>
        </div>
    )
}
export default Save;