import React, {useState,useEffect, useRef}from 'react'
import { useHistory } from "react-router-dom";
import UserInformation from './userInformation'




export default function Login(props) {
    const [state, setState] = useState({
        username:"",
        password:""
    });
    const history = useHistory();
    const inputRef = useRef();

   
    useEffect(() => {
        inputRef.current.focus();
    })


    const handleChange = (event)=>{
        const { name, value } = event.target;
        setState((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };

    const redirectToMyPage = (e)=>{
        e.preventDefault();
        history.push({
            pathname:'/mypage',
            state
        });
    }

    const registerForm = (e)=>{
        e.preventDefault();
        history.push({
            pathname:'/registration',
        });
    }

   

    return( 
        <div>
            <UserInformation changeState = {handleChange} forwardedRef={inputRef}/>
            <div>
                <button onClick = {registerForm}>Register</button>
                <button onClick={redirectToMyPage}>Login</button>
            </div>
        </div>
    )
}
