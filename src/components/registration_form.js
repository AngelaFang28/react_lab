import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import UserInformation from './userInformation'

const Registration = props => {
    const [userinfo, setUserinfo] = useState({
        username:"",
        password:""
    })
    const history = useHistory()
    const handleSave = ()=>{
        history.push({
            pathname:'/save',
            userinfo
        });
    }

    const handleChange = (event)=>{
        const { name, value } = event.target;
        setUserinfo((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };

    return (
        <div>
            <h2>Registration Profile</h2>
            <UserInformation changeState = {handleChange}/>
            <div>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default Registration;