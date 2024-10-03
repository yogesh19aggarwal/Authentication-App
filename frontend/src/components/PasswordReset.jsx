import React, { useState } from 'react'
import '../App.css'
import { Box } from '@material-ui/core'
import MyTextField from './forms/MyTextField'
import MyPassFields from './forms/MyPassFields'
import MyButton from './forms/MyButton'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import Message from './Message'


const PasswordReset = () => {

    const navigate = useNavigate()
    const {handleSubmit, control} = useForm()
    const {token} = useParams()

    const [showMessage, setShowMessage] = useState(false)

    const submission = (data)=>{
        AxiosInstance.post(`api/password_reset/confirm/`,{
            password: data.password,
            token: token,
        })
        // console.log(data.password)

        .then((response)=>{

            setShowMessage(true)
            setTimeout(()=>{
              navigate('/')
            }, 2000)

            // navigate('/home')
        })
    }

  return (
    <div className={'myBackground'} >
        {showMessage ? <Message text={"Your password reset was successful"} color={'#69C9AB'}/> : null}
      <form onSubmit={handleSubmit(submission)}>
        <Box className='whiteBox'>

          <Box className='itemBox' >
            <Box className='title'sx={{mb:1}}>
              Reset Password
            </Box>
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
              label={"Reset Password"}
              type={"submit"}
            />
          </Box>

        </Box>
      </form>
      
    </div>
  )
}

export default PasswordReset 