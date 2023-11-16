import React from 'react'
import Slider from '../Cards/Slider'
import AnimatedCard from "../Cards/AnimatedCard"
import Navbar from '../Header_Footer/Navbar';

export default function Home() {
	return (
		<div>
			<Navbar />
			<Slider></Slider>
			<AnimatedCard />
		
		</div>
	)
}



