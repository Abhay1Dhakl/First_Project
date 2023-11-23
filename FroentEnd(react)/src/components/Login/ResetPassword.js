import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ResetPassword = () => {
  const navigate = useNavigate()
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get('password'),
      password2: data.get('password2'),
    }
    if (actualData.password && actualData.password2) {
      if (actualData.password === actualData.password2) {
        console.log(actualData);
        document.getElementById('password-reset-form').reset()
        setError({ status: true, msg: "Password Reset Successfully. Redirecting to Login Page...", type: 'success' })
        setTimeout(() => {
          navigate("/login")
        }, 3000)
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }
  return <>
  <div className="Login_body">
    <Grid container justifyContent='center'>
      <Grid item sm={6} xs={12}>
        <h1>Reset Password</h1>
        <Box component='form' noValidate sx={{ mt: 1 }} id='password-reset-form' onSubmit={handleSubmit}>
          <TextField margin='normal' required fullWidth id='password' name='password' label='New Password' type='password' />
          <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm New Password' type='password' />
          <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Save</Button>
          </Box>
          {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
        </Box>
      </Grid>
    </Grid>
    </div>
  </>;
};

export default ResetPassword;
