import React from 'react'
import '../App.css'
import { Box } from '@material-ui/core'
import MyTextField from './forms/MyTextField'
import MyPassFields from './forms/MyPassFields'
import MyButton from './forms/MyButton'
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'

const Login = () => {

  const navigate = useNavigate()
  const {handleSubmit, control} = useForm()

  const submission = (data)=>{
    AxiosInstance.post(`login/`,{
      email: data.email,
      password: data.password,
    })
    // console.log(data.password)

    .then((response)=>{

      console.log(response)
      localStorage.setItem("Token", response.data.token)

      navigate('/home')
    })
    .catch((error)=>{
      console.log("Error in login: ", error)
    })
  }


  return (
    <div className={'myBackground'}>
      <form onSubmit={handleSubmit(submission)}>
      <Box className='whiteBox'>

        <Box className='itemBox'>
          <Box className='title'>
            Login for Auth App
          </Box>
        </Box>

        <Box className='itemBox'>
          <MyTextField
            label={"Email"}
            control={control}
            name={"email"}
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
          <MyButton
            label={"Login"}
            type={"submit"}
          />
        </Box>

        <Box className='itemBox' sx={{flexDirection: 'column'}}>
          <Link to="/register"> Didn't have an account? </Link>
          <Link to="/request/password_reset"> Forgot Password? </Link>
        </Box>


      </Box>
      </form>
    </div>
  )
}

export default Login