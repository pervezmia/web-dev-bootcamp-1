import React from "react";

const SimpleForm = () => {
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <div>
      <h3>Simple Form Section</h3>
      <form onSubmit={submitHandle}>
        <input type="text" name="name" placeholder="Enter your name" />
        <br />
        <input type="email" placeholder="Enter your email" name="email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
