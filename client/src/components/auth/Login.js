import React, { useState } from "react";
import { Link } from 'react-router-dom'
// import axios from 'axios'
import { connect } from 'react-redux'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {  email, password } = formData;

  const onChangeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    // console.log(`${event.target.name}:${event.target.value}`)
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
      console.log("login success");
    
  };

  return (
    <section className='container'>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign into your account
      </p>
      <form className='form' onSubmit={onSubmitHandler}>
        <div className='form-group'>
          <input type='email' placeholder='Email Address' name='email' required value={email} onChange={onChangeHandler} />
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Password' name='password' minLength='6' value={password} onChange={onChangeHandler} />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account
        <Link to='/register'>Sign Up</Link>
      </p>
    </section>
  );
};

export default Login;
