import { Button, CssBaseline, Grid, Typography, getTabId } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './components/Login/ChangePassword';
import { getToken, removeToken } from './components/Serve/LocalStorageService';
import { useDispatch } from 'react-redux';
import { unSetUserToken } from './components/Features/authSlice';
import { useGetloggeduserQuery } from './components/Serve/userAuthapi';
import { useEffect } from 'react';
import { useState } from 'react';
import { unSetUserInfo , setUserInfo} from './components/Features/userSlice';
import "./Dashboard.css"
const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {access_token} = getToken();
  const {data, isSuccess} = useGetloggeduserQuery(access_token)

  const [userData, setUserData] = useState({
    email: "",
    name: "",
  })

  useEffect(() => {
    if(data && isSuccess){
      setUserData({
        email: data.email,
        name: data.name,
      })
    }
  },[data, isSuccess])

  useEffect(() => {
    if(data && isSuccess){
      setUserData({
        email: data.email,
        name: data.name,
      })
    }
  },[data, isSuccess, dispatch])


  const handleLogout = () => {
    dispatch(unSetUserInfo({name:"", email:""}))
    dispatch(unSetUserToken({access_token: null}))
   removeToken()
    navigate('/login')
  }
  return <>
  <div className="dash_conatiner">
    <CssBaseline />
    <Grid container>
      <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
        <h1>Dashboard</h1>
        <Typography variant='h5'>Email: {userData.email}</Typography>
        <Typography variant='h6'>Name: {userData.name}</Typography>
        <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
      </Grid>
      <Grid item sm={8}>
        <ChangePassword />
      </Grid>
    </Grid>
    </div>
  </>;
};

export default Dashboard;
