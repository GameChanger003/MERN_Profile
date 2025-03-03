// client/src/components/ProfileList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const res = await axios.get('http://localhost:5000/profile');
      setProfiles(res.data);
    };
    fetchProfiles();
  }, []);

  return (
    <div>
      <h1>Profile List</h1>
      <ul>
        {profiles.map(profile => (
          <li key={profile._id}>
            <Link to={`/profile/${profile._id}`}>{profile.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/profile/new">Create a new Profile</Link>
    </div>
  );
};

export default ProfileList;
