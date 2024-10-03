import React from 'react'
import '../App.css'
import { Box } from '@material-ui/core'
import MyTextField from './forms/MyTextField'
import MyPassFields from './forms/MyPassFields'
import MyButton from './forms/MyButton'
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import { useNavigate } from 'react-router-dom'
import { Email } from '@material-ui/icons'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'


const Register = () => {

  const navigate = useNavigate()
  
  const schema = yup
    .object({
      email: yup.string().email('Field expects an email address').required('Email is required'),
      password: yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain one uppercase letter')
      .matches(/[a-z]/, 'Password must contain one lowercase letter')
      .matches(/[0-9]/, 'Password must contain one number'),
      
      password2: yup.string()
      .required('Password is required')
      .oneOf([yup.ref('password'), null], "password and confirm password should be same")
      
    })
  
  const {handleSubmit, control} = useForm({resolver: yupResolver(schema)})

  const submission = (data)=>{
    AxiosInstance.post(`register/`,{
      email: data.email,
      password: data.password,
    })
    // console.log(data.password)

    .then(()=>{
      navigate('/')
    })
  }


  return (
    <div className={'myBackground'}>

      <form onSubmit={handleSubmit(submission)}>
        <Box className='whiteBox'>

          <Box className='itemBox'>
            <Box className='title'>
              User Registration
            </Box>
          </Box>

          <Box className='itemBox'>
            <MyTextField
              label={"Email"}
              name = {"email"}
              control = {control}
            />
          </Box>

          <Box className='itemBox'>
            <MyPassFields
              label = {"Password"}
              name = {"password"}
              control = {control}
            />
          </Box>

          <Box className='itemBox'>
            <MyPassFields
              label = {"Confirm Password"}
              name = {"password2"}
              control = {control}
            />
          </Box>

          <Box className='itemBox'>
            <MyButton
              label={"Register"}
              type={"submit"}
            />
          </Box>

          <Box className='itemBox'>
            <Link to="/"> Already Registered? </Link>
          </Box>


        </Box>
      </form>
    </div>
  )
}

export default Register