import React, { useState } from 'react';

const ControllForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, name);
        // console.log("Submitted");

    }
    const handlePasswordOnchange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
        
        if(password.length < 6){
            setError("password must be 6 characters or longer.");
        } else {
            setError("");
        }
    }
    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handleNamed = e => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNamed} defaultValue={name} type="text" name="name" id="" placeholder='name'/>
                <br />
                <input onChange={handleEmailChange} defaultValue={email} type="email" name="email" id="" placeholder='enter email' required/>
                <br />
                <input onChange={handlePasswordOnchange} type="password" name='password' placeholder='enter password' defaultValue={password}  required />
                <br />
                <input type="submit" value="Submit"/>
            </form>
            <p style={{color: 'red'}}>
                <small>
                    {error}
                </small>
            </p>
        </div>
    );
};

export default ControllForm;