import React, { useState } from 'react';
import fire from '../../config/Fire';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password).then( (u)=>{
        }).catch((error)=>{
            console.log(error);
        })
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }

    return (
        <form>
            <h1>Hello</h1>
            <p>Enter email: user@user.com</p>
            <input
                type="text"
                value={email}
                onChange={handleEmail}
            />
            <p>Enter password: useruser</p>
            <input
                type="text"
                value={password}
                onChange={handlePassword}
            />
            <button onClick={login}>Login</button>
        </form>
    );
}

export default Login;