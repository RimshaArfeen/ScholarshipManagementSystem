
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  const [Data, setData] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    UserProfile();
  }, []);
 
  const logOut = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.clear()
      navigate("/signup")
    } else {
      navigate("/profile")

    }
  }

  const UserProfile = async () => {
    try {
      let token = localStorage.getItem('token');
      if (!token) {
        console.log('Token not found');
        return;
      }

      let response = await fetch('http://localhost:3000/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, // Include token for authentication if required
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let result = await response.json();
      console.log('Profile API Response:', result); // Debugging

      setData(result.authData.user); // Now setting authData directly
    } catch (error) {
      console.error('Error fetching profile:', error);
      setError('Failed to fetch profile data');
    }
  };

  return (
    <section className="text-gray-600 body-font bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-5 py-16">
        <div className="lg:w-3/4 mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
   
          <div className="flex flex-col sm:flex-row p-8">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-indigo-500 mx-auto">
                <img
                  src="https://dummyimage.com/100x100"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col items-center mt-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {Data?.name || 'N/A'}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  {Data?.currentEducation || 'N/A'} at {Data?.currentInstitute || 'N/A'}
                </p>
              </div>
            </div>

            <div className="sm:w-2/3 sm:pl-8 mt-6 sm:mt-0 border-t sm:border-t-0 sm:border-l border-gray-200 pt-6 sm:pt-0">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Profile Details</h2>
              <div className="space-y-4">
                <DetailItem label="Father's Name" value={Data?.result?.Fathersname || 'N/A'} />
                <DetailItem label="Email" value={Data?.email || 'N/A'} />
                <DetailItem label="Phone" value={Data?.phone || 'N/A'} />
                <DetailItem label="Applied for" value={Data?.result?.scholarship || 'N/A'} />
               
              </div>
            </div>
          </div>
            <div className=' w-full  flex justify-center items-center '>
                <p
                  onClick={logOut}
                  to="/signup" className="p-3 mx-auto my-2 text-center rounded w-[90%] bg-red-700 text-white hover:text-blue-600 transition uppercase">Logout{Data?.result?.email}</p>
                </div>
        </div>
      </div>
    </section>
  );
};

const DetailItem = ({ label, value }) => (
  <div className="flex items-center">
    <span className="text-indigo-500 font-semibold w-32">{label}:</span>
    <span className="ml-2 text-gray-700">{value}</span>
  </div>
);

export default Profile;
