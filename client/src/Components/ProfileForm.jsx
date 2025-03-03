// client/src/components/ProfileForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams } from 'react-router-dom';

const ProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('');
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchProfile = async () => {
        const res = await axios.get(`http://localhost:5000/profile/${id}`);
        setName(res.data.name);
        setEmail(res.data.email);
        setBio(res.data.bio);
        setAvatar(res.data.avatar);
      };
      fetchProfile();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profileData = { name, email, bio, avatar };
    if (id) {
      await axios.put(`http://localhost:5000/profile/${id}`, profileData);
    } else {
      await axios.post('http://localhost:5000/profile', profileData);
    }
    history('/');
  };

  return (
    <div>
      <h1>{id ? 'Edit' : 'Create'} Profile</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
        />
        <input
          type="text"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          placeholder="Avatar URL"
        />
        <button type="submit">{id ? 'Update' : 'Create'} Profile</button>
      </form>
    </div>
  );
};

export default ProfileForm;
