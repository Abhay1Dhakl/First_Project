import React, { useState } from 'react'
import './Subpage.css'
import map from '../../components/Images/map.jpg'
import Navbar from '../Header_Footer/Navbar';

import { useBookingMutation } from '../Serve/userAuthapi';

import { TextField, Button, Box, Alert, Typography, CircularProgress } from '@mui/material';

export default function Everest() {

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
						<p>Everest Base Camp is one of the most well-known trekking destinations among adventurers and
							trekkers.
							In
							the shadow of the world's highest peak, this is the most rewarding and exciting walking track.
							Every
							year, a huge number of trekkers and tourists visit Nepal to participate in the EBC Trek. Many
							adventurers dream of visiting Everest Base Camp, and everyone should do so at least once in a
							lifetime.
							This trekking trail has already been recommended by renowned travel guides and journals such as
							Lonely
							Planet, National Geographic, Discovery, and numerous other travel and tour guide channels. The
							Everest
							Base Camp journey is a first-className trekking trail in Nepal, nestled in the shade of the world's
							highest
							mountain peaks and offering magnificent villages, holy places, sherpa cultures, Tibetan Buddhism
							reflections, and rare flora and wildlife in Sagarmatha National Park.</p>
						<div className="cont-1">
							<p>We have designed the 15 days EBC Trek package from Arrival to Departure . This package take
								you
								Everest
								Base camp and Including climb kalapatthar. It is perfect Itinerary for experienced as well
								as a
								beginner
								trekker. In this Itinerary two acclimatization days at Namche and in Dingboche. This will
								help
								you to
								cope with the thin air and changing atmosphere. Altitude sickness is one of the difficulties
								when
								trekking to the height of 5545 meters at Kala Patthar. It is because the amount of oxygen at
								a
								higher
								altitude is comparatively low which results in difficulty in br/eathing<br />

								Adventure Great Himalaya Treks & Expeditions presents this delightful and adventurous
								Everest
								Base Camp
								tour where you can release yourself with amazing sceneries of mountains that surround you
								along
								with
								great hospitality of Sherpa the Highlanders of Himalaya, including utmost service of
								Adventure
								Great
								Himalaya Treks & Expeditions expert guides and staff.</p><br />

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
					<div className="iternary">
						<details>
							<summary>
								<div className="Heading">
									<span className="num">
										1
									</span>
									<span className="day">
										Day 1
									</span>
									<h5><b>Arrival at Trubhuban Intl Airport</b></h5>
								</div>
							</summary>
							<div className="details-content">
								<p>

								</p>
							</div>
						</details>
					</div>
					<hr />
					<div className="iternary">
						<details>
							<summary>
								<div className="Heading">
									<span className="num">
										2
									</span>
									<span className="day">
										Day 2
									</span>
									<h5><b> A guided site sightseeing tour of Kathmandu Valley </b></h5>
								</div>
							</summary>
							<div className="details-content">
								<p><b>Swyambunath Stupa - The Monkey Temple:</b> <br />
									<b>Pashupatinath Temple:</b> <br />
									<b> Boudhanath Stupa:</b>
									<b>Patan Durbar Square:</b> <br />
									<h6><b>Overnight Stay in Kathmandu.</b></h6>
								</p>
							</div>
						</details>
					</div>
					<hr />
					<div className="iternary">
						<details>
							<summary>
								<div className="Heading">
									<span className="num">
										3
									</span>
									<span className="day">
										Day 3
									</span>
									<h5><b>Fly to Lukla (2,800 m) from Kathmandu, trek to Phakding (2,651 m):35 min
										flight/3 -
										4hours-treck</b></h5>
								</div>
							</summary>
							<div className="details-content">
								<p><b>For Lukla flight from Manthali:</b><br />
									Wake up around 2-3 am, drive to Manthali by shared tourist vehicle for about 4 to 5
									hours,
									and fly to Lukla (20 minutes);<br />
									<b>Overnight stay in Phakding.</b>
								</p>
							</div>
						</details>
					</div>
					<hr />
					<div className="iternary">
						<details>
							<summary>
								<div className="Heading">
									<span className="num">
										4
									</span>
									<span className="day">
										Day 4
									</span>
									<h5><b>Trek from Namche Bazzar: 7 - 8 hours treck</b></h5>
								</div>
							</summary>
							<div className="details-content">
								<p>
									<b>Overnight stay at Namche Bazaar.</b>
								</p>
							</div>
						</details>
					</div>
					<hr />
					<div className="iternary">
						<details>
							<summary>
								<div className="Heading">
									<span className="num">
										5
									</span>
									<span className="day">
										Day 5
									</span>
									<h5><b>Acclimatization Day - Namche Bazzar</b></h5>
								</div>
							</summary>
							<div className="details-content">
								<p>
									Hiking to everest view point and come back to Namche Bazzar.<br />
									<b>Overnight stay at Namche Bazaar again.</b>
								</p>
							</div>
						</details>
					</div>
					<hr />
					<div className="iternary">
						<details>
							<summary>
								<div className="Heading">
									<span className="num">
										6
									</span>
									<span className="day">
										Day 6
									</span>
									<h5><b>Trek from Namche Bazzar to Tenbonche: 7 - 8 hours treck</b></h5>
								</div>
							</summary>
							<div className="details-content">
								<p>
									<b>Overnight stay at Namche Bazaar.</b>
								</p>
							</div>
						</details>
					</div>
					<hr />
					<div className="iternary">
						<details>
							<summary>
								<div className="Heading">
									<span className="num">
										7
									</span>
									<span className="day">
										Day 7
									</span>
									<h5><b>Trek from Tengboche to Dingboche: 5 - 6 hours treck</b></h5>
								</div>
							</summary>
							<div className="details-content">
								<p>
									<b>Overnight stay at Dingboche</b>
								</p>
							</div>
						</details>
					</div>
					<hr />
					<div className="iternary">
						<details>
							<summary>
								<div className="Heading">
									<span className="num">
										8
									</span>
									<span className="day">
										Day 8
									</span>
									<h5><b>Trek from Dingboche to Loboche: 5 - 6 hours treck</b></h5>
								</div>
							</summary>
							<div className="details-content">
								<p>
									<b>Overnight stay at Loboche.</b>
								</p>
							</div>
						</details>
					</div>
					<hr />
					<div className="iternary">
						<details>
							<summary>
								<div className="Heading">
									<span className="num">
										9
									</span>
									<span className="day">
										Day 9
									</span>
									<h5><b>Trek from Lobuche to Gorak Shep (5,170 m), visit Everest Base Camp(5,364 m): 6- 7
										hours trek</b></h5>
								</div>
							</summary>
							<div className="details-content">
								<p>
									<b>Overnight stay at Gorak Shep</b>
								</p>
							</div>
						</details>
					</div>
					<hr />
					<div className="iternary">
						<details>
							<summary>
								<div className="Heading">
									<span className="num">
										10
									</span>
									<span className="day">
										Day 10
									</span>
									<h5><b>Trek from Gorak Shep to Pheriche (4,288m) via Kala Patthar (5,545m): 7- 8
										hours</b>
									</h5>
								</div>
							</summary>
							<div className="details-content">
								<p>
									<b>Overnight stay at Pheriche.</b>
								</p>
							</div>
						</details>
					</div>
					<hr />
					<div className="iternary">
						<details>
							<summary>
								<div className="Heading">
									<span className="num">
										11
									</span>
									<span className="day">
										Day 11
									</span>
									<h5><b>Trek from Pheriche to Namche Bazaar: 8 hours trek</b></h5>
								</div>
							</summary>
							<div className="details-content">
								<p>
									<b>Overnight stay at Namche Bazaar.</b>
								</p>
							</div>
						</details>
					</div>
					<hr />
					<div className="iternary">
						<details>
							<summary>
								<div className="Heading">
									<span className="num">
										12
									</span>
									<span className="day">
										Day 12
									</span>
									<h5><b>Trek from Namche Bazaar to Lukla: 8 hours trek</b></h5>
								</div>
							</summary>
							<div className="details-content">
								<p>
									<b>Overnight stay at Lukla.</b>
								</p>
							</div>
						</details>
					</div>
					<hr />
					<div className="iternary">
						<details>
							<summary>
								<div className="Heading">
									<span className="num">
										13
									</span>
									<span className="day">
										Day 13
									</span>
									<h5><b>Fly to Manthali from Lukla: 35 min flight.From Manthali to kathmandu by private
										luxury vehicle</b></h5>
								</div>
							</summary>
							<div className="details-content">
								<p>
									<b>Overnight stay at .</b>
								</p>
							</div>
						</details>
					</div>
					<hr />
					<div className="iternary">
						<details>
							<summary>
								<div className="Heading">
									<span className="num">
										14
									</span>
									<span className="day">
										Day 14
									</span>
									<h5><b>Leisure day and Nepali cultural farewell dinner.</b></h5>
								</div>
							</summary>
							<div className="details-content">
								<p>

									<b>Overnight stay at Kathmandu.</b>
								</p>
							</div>
						</details>
					</div>
					<hr />


					<br />
					<div className="inclusions">
						<h4><b>What's Included</b></h4>
						<span><i className="fa-regular fa-check"></i></span>
						<span>Airport pickup and drop off in private luxury vehicle.</span>
						<br />
						<span><i className="fa fa-check-circle-o fa-1x"></i></span>
						<span>3 ster category hotel accommodation in Kathmandu with BB plan</span>
						<br />
						<span><i className="fa fa-check-circle-o fa-1x"></i></span>
						<span>Kathmandu sight seeing with professional English speaking tour guide.</span>
						<br />
						<span><i className="fa fa-check-circle-o fa-1x"></i></span>
						<span>One government registered licensed experienced trekking guide.</span>
						<br />
						<span><i className="fa fa-check-circle-o fa-1x"></i></span>
						<span>An assistant guide to take care of the group/porters if group size is more than 10 pax.</span>
						<br />
						<span><i className="fa fa-check-circle-o fa-1x"></i></span>
						<span>1 Sharing high altitude porter for 2 travelers to carry your luggage (weight limit
							15kg).</span>
						<br />
						<span><i className="fa fa-check-circle-o fa-1x"></i></span>
						<span>Clean and neat accommodation in trekking lodges on twin/double sharing basis with BLD plan.</span>
						<br />
						<span><i className="fa fa-check-circle-o fa-1x"></i></span>
						<span>Daily 3 times meals (br/eakfast, lunch and dinner) during the trekking.</span>
						<br />
						<span><i className="fa fa-check-circle-o fa-1x"></i></span>
						<span>Kathmandu - Lukla - Kathmandu round domestic flight.</span>
						<br />
						<span><i className="fa fa-check-circle-o fa-1x"></i></span>
						<span>All necessary trekking permits for Everest Base Camp trek.</span>
						<br />
						<span><i className="fa fa-check-circle-o fa-1x"></i></span>
						<span>Salary, food and accommodation of your guide and porters.</span>
						<br />
						<span><i className="fa fa-check-circle-o fa-1x"></i></span>
						<span>Insurance and trekking gear for your guide and porters.</span>
						<br />
						<span><i className="fa fa-check-circle-o fa-1x"></i></span>
						<span>First-aid kit box.</span>
						<br />
						<span><i className="fa fa-check-circle-o fa-1x"></i></span>
						<span>All local tax, vat etc.</span>
						<br />
						<br />
						<h4><b>What's Not Included</b></h4>
						<span><i className="fa fa-times fa-1x"></i></span>
						<span>Nepal entry visa fee and international airfare.</span>
						<br />
						<span><i className="fa fa-times fa-1x"></i></span>
						<span>Lunch and dinner while you are in kathmandu.</span>
						<br />
						<span><i className="fa fa-times fa-1x"></i></span>
						<span>Hotel upgrade and any addons.</span>
						<br />
						<span><i className="fa fa-times fa-1x"></i></span>
						<span>Extra stay in Kathmandu.</span>
						<br />
						<span><i className="fa fa-times fa-1x"></i></span>
						<span>Personal travel insurance , insurance covering medical and high altitude rescue costs.</span>
						<br />
						<span><i className="fa fa-times fa-1x"></i></span>
						<span>Guided sightseeing monuments entrance fees in Kathmandu.</span>
						<br />
						<span><i className="fa fa-times fa-1x"></i></span>
						<span>All the bar bills, beverages such as coke, fanta, mineral water.</span>
						<br />
						<span><i className="fa fa-times fa-1x"></i></span>
						<span>Hot shower, laundary, hot water, internet, phone calls during trekking.</span>
						<br />
						<span><i className="fa fa-times fa-1x"></i></span>
						<span>Personal trekking gear and equipments.</span>
						<br />
						<span><i className="fa fa-times fa-1x"></i></span>
						<span>Filming devices: Camera, drone permit fee.</span>
						<br />
						<span><i className="fa fa-times fa-1x"></i></span>
						<span>Any cost that arise due to change of itinerary, flight delay, natural calamities etc.</span>
						<br />
						<span><i className="fa fa-times fa-1x"></i></span>
						<span>Gratitude and tips for guide and porters.</span>
						<br />
						<span><i className="fa fa-times fa-1x"></i></span>
						<span>Private and Customized trip.</span>
						<br />
					</div>
				</div>
				<h1 id='demo'></h1>
				<div className="main-sec-1">
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

			</div>

		</div >



	)
}
