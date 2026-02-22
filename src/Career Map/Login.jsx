import React, { useState } from 'react'
import './index.css'
import {useForm} from "react-hook-form";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from 'react-router-dom'


let Schema=yup.object().shape({
  email:yup.string()
  // .email()
  .required("Email is Required")
  .matches(/^[a-z0-9]+@[a-z].{2,8}$/,"Enter a valid Email-id"),
  password:yup.string()
  .required("Password is Required")
})
const Login = () => {

  let navigate=useNavigate()
  let{register,handleSubmit,formState:{errors},}=useForm({resolver:yupResolver(Schema),});
  //console.log(errors)
 let handleData=(data)=>{
  navigate('/home')
//   console.log(data);
  
}

  return (
    <div className='Login-container'>
    <form onSubmit={handleSubmit(handleData)}>
    <div className='LoginUp'>
        <h1 className='LoginUp-word'>
          Login
        </h1>
        <div className='LoginUp-input'>
          <lable>Enter Your Email-id</lable>
          <input className='int' lable='Email'{...register("email")}
           placeholder='Enter your email'></input>
          <p className='errors'>{errors.email?.message} </p>
          <lable>Enter Your Password</lable>
          <input className='int' type='password' lable='Password'{...register("password")}
           placeholder='Enter your password'
     /> <p className='errors'>{errors.password?.message} </p>
          <button  type='submit' className='submit' >Submit</button>
        </div>
    </div>
    </form>
   </div>
  )
}

export default Login