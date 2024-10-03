import React, { useState } from 'react'
import '../App.css'
import { Box } from '@material-ui/core'
import MyTextField from './forms/MyTextField'
import MyPassFields from './forms/MyPassFields'
import MyButton from './forms/MyButton'
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import Message from './Message'


const PasswordResetRequest = () => {

    const navigate = useNavigate()
    const {handleSubmit, control} = useForm()

    const [showMessage, setShowMessage] = useState(false)

    const submission = (data)=>{
        AxiosInstance.post(`api/password_reset/`,{
            email: data.email,
        })
        // console.log(data.password)

        .then((response)=>{

            setShowMessage(true)

            // navigate('/home')
        })
    }

  return (
    <div className={'myBackground'} >
        {showMessage ? <Message text={"If your email exists you have received an email with instructions for resetting the password"} color={'#69C9AB'}/> : null}
      <form onSubmit={handleSubmit(submission)}>


      <Box className='whiteBox'>

        <Box className='itemBox' >
          <Box className='title'sx={{mb:1}}>
            Password Reset for Auth App
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
          <MyButton
            label={"Reset"}
            type={"submit"}
          />
        </Box>

        <Box className='itemBox' sx={{flexDirection: 'column'}}>
          
        </Box>


      </Box>
      </form>
    </div>
  )
}

export default PasswordResetRequest 