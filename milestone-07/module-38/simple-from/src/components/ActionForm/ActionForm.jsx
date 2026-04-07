import React from 'react';

const ActionForm = () => {
    const onSubmitHandle = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
    }
    const handleFormData = (formData) => {
        // formData.preventDefault();
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }
    return (
        <div>
            <form onSubmit= {onSubmitHandle}>
                <input type="text" name='name' placeholder='Enter name' />
                <br />
                <input type="email" name="email" id="" placeholder='enter mail'/>
                <br />
                <input type="password" name="password" id="" placeholder='enter password'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <form action={handleFormData}>
                <input type="text" name='name' placeholder='enter name' />
                <br />
                <input type="email" name='email' placeholder='enter mail'/>
                <br />
                <input type="password" name="password" id="" placeholder='enter your password'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ActionForm;