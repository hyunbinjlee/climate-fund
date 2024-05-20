import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const { data } = await axios.get('/api/donors');
      setSubmissions(data);
    };
    fetchSubmissions();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.post(`/api/donors/approve/${id}`);
      alert('Profile approved!');
    } catch (error) {
      alert('Failed to approve profile.');
    }
  };

  return (
    <div>
      {submissions.map((sub) => (
        <div key={sub.id}>
          <p>{sub.name}</p>
          <p>{sub.bio}</p>
          <img src={sub.imageUrl} alt="Donor" />
          <button onClick={() => handleApprove(sub.id)}>Approve</button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;