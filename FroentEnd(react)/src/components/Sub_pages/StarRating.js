import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

export default function StarRating() {
    const [rating, setRating] = useState(null);
    const [rateColor, setColor] = useState(null);
    console.log(rating)
    return (
        <div>
            {
                [...Array(5)].map((star, index) => {
                    const currentRate = index + 1;

                    return (
                        <label key={index}>
                            <input
                                type="radio"
                                name="rate"
                                value={currentRate}
                                onClick={() => setRating(currentRate)}
                                style={{ display: "none" }}  // hide the radio input
                            />
                            <FaStar
                                size={50}
                                color={currentRate <= (rateColor || rating) ? "yellow" : "grey"}
                                onMouseEnter={() => setColor(currentRate)} // change color on hover
                                onMouseLeave={() => setColor(null)} // reset color when mouse leaves
                            />
                        </label>
                    );
                })
            }
        </div>
    );
}
