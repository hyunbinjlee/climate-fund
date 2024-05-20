import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserProfile from './UserProfile'; // Import the UserProfile component
import '../styling/UserProfiles.css';

function UserProfiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('/api/donors');
        setProfiles(response.data);
      } catch (error) {
        console.error('Failed to fetch profiles:', error);
      }
    };
    fetchProfiles();
  }, []);

  return (
    <div className="profiles-container">
      {profiles.map(profile => (
        <UserProfile key={profile.id} profile={profile} />
      ))}
    </div>
  );
}

export default UserProfiles;
