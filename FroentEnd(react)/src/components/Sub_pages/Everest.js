import React, { useState } from 'react'
import './Subpage.css'
import map from '../../components/Images/map.jpg'
import Navbar from '../Header_Footer/Navbar';
import { useGetloggeduserQuery } from '../Serve/userAuthapi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookingMutation } from '../Serve/userAuthapi';
import { useDispatch } from 'react-redux';
import { TextField, Button, Box, Alert, Typography, CircularProgress } from '@mui/material';
import { getToken, removeToken } from '../Serve/LocalStorageService';
import axios from "axios"
export default function Everest() {
	const[inc_exc, set_inc_exc] = useState([])
	const [userData, setUserData] = useState([])
	const [itineraryData, set_itineraryData] = useState([])

	useEffect(() => {
	 async function getalldata (){
		try{
			const userData = await axios.get("http://127.0.0.1:8000/api/user/everest_info/")
			console.log(userData.data)
			setUserData(userData.data)
		}catch(error){ 

		}
	 }
	 getalldata ()
	},[])
  
	useEffect(() => {
		async function getdata (){
		   try{
			   const itineraryData = await axios.get("http://127.0.0.1:8000/api/user/everest_itinerary/")
			   console.log(itineraryData.data)
			   set_itineraryData(itineraryData.data)
		   }catch(error){ 
   
		   }
		}
		getdata ()
	   },[])

	   useEffect(() => {
		async function getdata_incexc (){
		   try{
			   const inc_exc = await axios.get("http://127.0.0.1:8000/api/user/everest_inc_exc/")
			   console.log(inc_exc.data)
			   set_inc_exc(inc_exc.data)
		   }catch(error){ 
   
		   }
		}
		getdata_incexc ()
	   },[])
	const [booking, { isLoading }] = useBookingMutation();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const actualData = {
			date: data.get('date'),
			child: data.get('child'),
			adult: data.get('adult'),
		}
		console.log(actualData)
		const res = await booking(actualData)

		/*if (res.error) {
			//console.log(typeof(res.error.data.errors))

			setServerError(res.error.data.errors)
		}
		if (res.data) {
			//console.log(typeof(res.data))
			console.log(res.data)
			storeToken(res.data.token)
			let { access_token } = getToken();
			dispatch(setUserToken({ access_token: access_token }))
			navigate('/')
		}*/
	}

	return (
		<div>
			<div className='wrapper'>
			<Navbar></Navbar>
			<div className="main">
				<div className="main-sec-2">
					<div className="heading">
						<h1>Everest Base Camp</h1>
					</div>
					<div className="containt">

					</div>
					
					<h1 className="Map-overview">Map & OverView</h1>
					<div className="containts">
						<div className="subcontaint">
							<div className="column-1">
								<div className="items">
									<ul>
										<li>
											<div className="item">
												<span className="icon">
													<i className="fa fa-map-marker"></i>
												</span>
												<div className="text">
													<h6 className="info-title">Destination</h6>
													<h5 className="info">Nepal</h5>
												</div>
											</div>
										</li>
										<li>
											<div className="item">
												<span className="icon">
													<i className="fa fa-clock-o"></i>
												</span>
												<div className="text">
													<h6 className="info-title">Duration</h6>
													<h5 className="info">15 Days</h5>
												</div>
											</div>
										</li>
										<li>
											<div className="item">
												<span className="icon">
													<i className="fa fa-clock-o"></i>
												</span>
												<div className="text">
													<h6 className="info-title">Duration</h6>
													<h5 className="info">15 Days</h5>
												</div>
											</div>
										</li>

									</ul>
									<ul>
										<li>
											<div className="item-2">
												<span className="icon">
													<i className="fa fa-map-marker"></i>
												</span>
												<div className="text">
													<h6 className="info-title">Max Altitude</h6>
													<h5 className="info">5545 m</h5>
												</div>
											</div>
										</li>
										<li>
											<div className="item-1">
												<span className="icon">
													<i className="fa fa-bus"></i>
												</span>
												<div className="text">
													<h6 className="info-title">Vehicle</h6>
													<h5 className="info">Private Luxexry Tourist Bus And Aeroplane</h5>
												</div>
											</div>
										</li>

									</ul>
								</div>
							</div>
							<div className="map">
								<img src={map} />
							</div>
						</div>
					</div>
					<div className="details">
						<input type="checkbox" id="check" />
						<h1>About Everest Base Camp Trek</h1><br />
						{userData.map((userdata, i)=>{
						return(
							<p>{userdata.para1}</p>
						)
					})}
						<div className="cont-1">
						{userData.map((userdata, i)=>{
						return(
							<p>{userdata.para2}</p>
						)
					})}<br />

							<h1>Highlight of Everest Base Camp Trek </h1>
							<p>1. Hiking up to the Base Camp of the highest mountain in the world.</p>
							<p>2.Spectacular view of the mountain ranges such as Mount Everest, Mount Ama Dablam, Mount
								Thamserku, Mount
								Makalu, Mount Lhotse and many more.</p>
							<p>3.Exploring the Sagarmatha National Park, UNESCO world heritage site.</p>
							<p>4.Khumbu ice fall and glacier along the way to the Everest Base Camp.</p>
							<p>5.Exploring the oldest monastery of the Everest region, Tengboche Monastery.</p>
							<p>6.Exploring Sherpa communities.<br />
								Climb to Kala Patthar (5545 m) for Everest Sunrise and Sunset View.</p>
						</div>
						<label htmlFor="check">Readmore</label>
					</div>
					<br />
					<h1 className="EBC-iter">Itinerary of Everest Base Camp Treak</h1>
					
					{itineraryData.map((itineraryData, i)=>{
						return(
							<div className="iternary">
						<details>
							<summary>
								<div className="Heading">
								<span className="num">{i+1}</span>
								<span className="day">Day {i+1}</span>
								<h5><b>{itineraryData.topic}</b></h5>
								</div>
							</summary>
							<div className="details-content">
							<p>{itineraryData.details}</p>
							</div>
						</details>
						<hr/>
					</div>
						
						)
					})}
					
					

					<br />
					<div className="inclusions">
						<h4><b>What's Included</b></h4>
						{inc_exc.map((inc_exc, i)=>{
						return(
							<>
							<span><i className="fa fa-check-circle-o fa-1x"></i></span>
						<span>{inc_exc.included}</span>
						<br />
							</>
						)
					})}
						
						<br />
						<h4><b>What's Not Included</b></h4>
						{inc_exc.map((inc_exc, i)=>{
						return(
							<>
							<span><i className="fa fa-times fa-1x"></i></span>
						<span>{inc_exc.excluded}</span>
						<br />
							</>
						)
					})}
						
					</div>
				</div>
				<h1 id='demo'></h1>
				<aside className="main-sec-1">
					<div className='Sticky_side'>
					<div className="offer">
						<b>
							<h4 className="price">$1499</h4>
						</b>
						<p>Price based on group size and dates*</p>
						<hr />
						<Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
							<TextField margin='normal' required fullWidth id='date' name='date' label='Submission Date' type='date'/>
							<TextField margin='normal' required fullWidth id='child' name='child' label='child' type='number'/>
							<TextField margin='normal' required fullWidth id='adult' name='adult' label='adult' type='number'/>
							<Box textAlign='center'>
								{isLoading ? <CircularProgress /> : <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Book</Button>}
							</Box>

						</Box>
						
						<hr />
						<div className="features">
							<span><i className="fa fa-check-circle"></i></span>
							<span>Best Price</span>
							<br />
							<span><i className="fa fa-check-circle"></i></span>
							<span>Secure Online Booking</span>
							<br />
							<span><i className="fa fa-check-circle"></i></span>
							<span>Extend Trip Without Charges</span>
							<br />
						</div>
					</div>
					</div>
				</aside>

			</div>
			</div>

		</div >



	)
}
