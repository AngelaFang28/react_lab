import React from 'react'

export default function UserInformation(props) {
    const{changeState, forwardedRef} = props;
    return (
        <div>
            <div>
                <label>Username:</label>
                    <input  type="text"
                            name="username"
                            onChange={changeState}
                            ref={forwardedRef}/>               
            </div>
            <div>
                <label>Password:</label>
                <input type="text"
                       name="password"/>       
            </div>
        </div>
    )
}
