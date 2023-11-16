import { TextField, Button, Box, Alert ,Typography, CircularProgress} from '@mui/material';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../Serve/userAuthapi';
import {getToken, storeToken} from '../Serve/LocalStorageService'
import { useDispatch } from 'react-redux';
import { setUserToken } from '../Features/authSlice';

const UserLogin = () => {
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [loginUser, {isLoading}] = useLoginUserMutation();
  const dispatch = useDispatch()
  const handleSubmit =async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
    }
   const res = await loginUser(actualData)

   if(res.error){
    //console.log(typeof(res.error.data.errors))
   
    setServerError(res.error.data.errors)
  }
  if(res.data){
    //console.log(typeof(res.data))
    console.log(res.data)
    storeToken(res.data.token)
    let {access_token} = getToken();
    dispatch(setUserToken({access_token : access_token}))
    navigate('/')
  }
  }
  let {access_token} = getToken();
  useEffect(() => {
    dispatch(setUserToken({access_token : access_token}))
  }),[access_token,dispatch]


  return <>
    <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      {server_error.email ? <Typography style={{fontSize: 12, color: 'red', paddingLeft: 10}}>{server_error.email[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      {server_error.password ? <Typography style={{fontSize: 12, color: 'red', paddingLeft: 10}}>{server_error.password[0]}</Typography> : ""}
      <Box textAlign='center'>
        {isLoading ? <CircularProgress /> : <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>} 
      </Box>
      <NavLink to='/sendpasswordresetemail' >Forgot Password ?</NavLink>
      {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert>: ''}
    </Box>
  </>;
};

export default UserLogin;
