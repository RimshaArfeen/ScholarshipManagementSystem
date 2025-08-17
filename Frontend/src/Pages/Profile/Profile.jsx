import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [Data, setData] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    UserProfile();
  }, []);

  const logOut = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.clear();
      navigate("/signup");
    }
  };

  const UserProfile = async () => {
    try {
      let token = localStorage.getItem('token');
      if (!token) {
        console.log('Token not found');
        return;
      }

      let response = await fetch(`http://localhost:3000/profile`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let result = await response.json();
      setData(result.authData.user);
      console.log(result.authData.user);

    } catch (error) {
      console.error('Error fetching profile:', error);
      setError('Failed to fetch profile data');
    }
  };

  return (
    <section className="bg-cfd8dc min-h-screen flex items-center justify-center p-6">
      <div className="container mx-auto px-6 py-12 bg-white rounded-xl shadow-lg max-w-xl">
        {error ? (
          <div className="text-center text-red-500 font-medium">{error}</div>
        ) : !Data ? (
          <div className="text-center text-gray-500">Loading profile...</div>
        ) : (
          <div className="flex flex-col items-center">
            {/* Profile Header Card */}
            <div className="w-full flex flex-col items-center p-6 mb-6 rounded-lg bg-gray-100 shadow-sm">
              <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md border-4 border-cyan-500 transition-all duration-300 hover:scale-105 group">
                <img
                  src="https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
                {/* Optional: Add an overlay for edit on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <span className="material-icons text-white text-3xl">camera_alt</span>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-00695c mt-4">
                {Data?.name || 'Name N/A'}
              </h2>
              <p className="text-009688 text-lg mt-1">{Data?.email || 'Email N/A'}</p>
              <p className="text-009688 text-lg mt-1 capitalize">
                {Data?.role || 'Role N/A'}
              </p>
            </div>

            {/* Additional Details Card (Placeholder for expansion) */}
            <div className="w-full p-6 mb-6 rounded-lg bg-gray-100 shadow-sm">
              <h3 className="text-2xl font-semibold text-00695c mb-4">
                Additional Details
              </h3>
              <ul className="space-y-3 text-009688">
                <li className="flex items-center">
                  <span className="material-icons text-cyan-500 mr-3">school</span>
                  <span>Education: Computer Science</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-cyan-500 mr-3">location_on</span>
                  <span>Location: New York, USA</span>
                </li>
              </ul>
            </div>

            {/* Logout Button with updated color and hover effect */}
            <button
              onClick={logOut}
              className="w-full md:w-1/2 mt-6 text-gray-100 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-800   rounded-lg uppercase text-lg px-6 py-3 transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;