import React, { useRef } from 'react';

const Uncontroled = () => {
    const emailRef = useRef("");
    const passRef = useRef("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        const password = passRef.current.value;
        console.log(email, password);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" />
                <br />
                <input ref={passRef} type="password" />
                <br />
                <input type="submit" value="Submit" name="" id="" />
            </form>
        </div>
    );
};

export default Uncontroled;<form action=""></form>