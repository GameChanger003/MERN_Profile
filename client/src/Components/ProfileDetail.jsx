// client/src/components/ProfileDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ProfileDetail = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get(`http://localhost:5000/profile/${id}`);
      setProfile(res.data);
    };
    fetchProfile();
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/profile/${id}`);
    window.location.href = '/';
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.email}</p>
      <p>{profile.bio}</p>
      <img src={profile.avatar} alt={profile.name} />
      <Link to={`/profile/edit/${id}`}>Edit Profile</Link>
      <button onClick={handleDelete}>Delete Profile</button>
    </div>
  );
};

export default ProfileDetail;
