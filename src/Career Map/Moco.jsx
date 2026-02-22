import React from 'react'
import './index.css'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

let Shcema=yup.object().shape({
    email:yup.string()
    .required("Email is Required")
    .matches(/^[a-z]+$/,"Enter correct word"),
    password:yup.string()
    .required("Coreect password please")
    .matches(/[1,0]+$/,"Correct number")
})



const Moco = () => {

    let {register,handleSubmit,formState:{errors},}=useForm({resolver:yupResolver(Shcema)},)
    let handleData=(data)=>{

    }
  return (
    <div class='main'>
        <form onSubmit={handleSubmit(handleData)}>
        <h1>Login</h1>
        <input label='email'{...register("email")} 
        ></input>
        <p>{errors.email?.message} </p>
        <input {...register("password")}></input>
        <p>{errors.password?.message}</p>
        <button class='submi' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Moco