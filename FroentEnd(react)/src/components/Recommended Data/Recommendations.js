import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useGetloggeduserQuery } from '../Serve/userAuthapi';
import { getToken } from '../Serve/LocalStorageService';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  const { access_token } = getToken();
  const { data, isSuccess } = useGetloggeduserQuery(access_token);

  const [email, setEmail] = useState("");  // Store email as a simple string
  const [usersData, setUsersData] = useState({
    email: "",
    name: "",
  });

  // Fetch logged-in user data
  useEffect(() => {
    if (data && isSuccess) {
      setUsersData({
        email: data.email,
        name: data.name,
      });
      console.log("dash data:", data);
    }
  }, [data, isSuccess]);

  // Fetch user preferences
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userdata = await axios.get("http://127.0.0.1:8000/api/user/user-preferences/");
        console.log("user data", userdata.data);
        setUserData(userdata.data);
      } catch (error) {
        console.error("Error fetching user preferences:", error);
      }
    };
    fetchUserData();
  }, []);

  // Set email based on userData and usersData
  useEffect(() => {
    const matchingUser = userData.find((user) => user.email === usersData.email);
    if (matchingUser) {
      setEmail(matchingUser.email);
    }
  }, [userData, usersData]);

  // Fetch recommendations based on preferences
  useEffect(() => {
    const fetchRecommendations = async () => {
      for (const user of userData) {
      if (user.email === usersData.email) {
        const preferred_activities = [];
        const preferred_destination_types = [];
        console.log('users data inside',userData)
        
          preferred_activities.push(user.preferred_activities);
          preferred_destination_types.push(user.preferred_destination_types);
        

        try {
          const response = await fetch('http://127.0.0.1:8000/api/user/recommendations/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              preferred_activities,
              preferred_destination_types,
            }),
          });

          if (response.ok) {
            const data = await response.json();
            setRecommendations(data);
            console.log("Fetched recommendations:", data);
          } else {
            console.error('Failed to fetch recommendations:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching recommendations:', error);
        }
      }
    }
    };
    

    if (email) {
      fetchRecommendations();
    }
  
  }, [email]);  // Only re-run when `email` changes

  return (
    <div>
      <h1>Recommended Destinations</h1>
      {recommendations.length === 0 ? (
        <p>No recommendations available at the moment.</p>
      ) : (
        <ul>
          {recommendations.map((destination) => (
            <li key={destination.name}>
              <h3>{destination.name}</h3>
              <p>Type: {destination.destination_type}</p>
              <p>Activities: {Array.isArray(destination.activities) ? destination.activities.join(', ') : destination.activities}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Recommendations;
