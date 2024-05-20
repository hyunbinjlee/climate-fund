import React from 'react';
import '../styling/UserProfile.css';

function UserProfile({ profile }) {
  return (
    <div className="profile-card">
      <img src={`/uploads/${profile.imagePath}`} alt={profile.name} className="profile-image" />
      <div className="profile-info">
        <h2>{profile.name}</h2>
        <p>{profile.bio}</p>
      </div>
    </div>
  );
}

export default UserProfile;
