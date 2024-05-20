import React, { useState } from 'react';
import axios from 'axios';
import '../styling/DonorSubmit.css';

function DonorSubmit() {
  const [formData, setFormData] = useState({ name: '', bio: '', image: null });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'image') {
      setFormData({ ...formData, [name]: event.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('bio', formData.bio);
    data.append('image', formData.image);
  
    try {
      // Replace 'http://localhost:5000/api/donors' with your actual backend API URL
      const response = await axios.post('http://localhost:3000/api/donors', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      alert('Profile submitted for review!');
      setFormData({ name: '', bio: '', image: null });
      console.log(response.data); // Optionally log the server response
    } catch (error) {
      alert('Failed to submit profile. Error: ' + error.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

          <label>Bio:</label>
          <textarea name="bio" value={formData.bio} onChange={handleInputChange} />

          <label>Upload Image:</label>
          <input type="file" name="image" onChange={handleInputChange} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default DonorSubmit;
