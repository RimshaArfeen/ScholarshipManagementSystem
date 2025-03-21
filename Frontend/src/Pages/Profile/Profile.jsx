
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
    <section className="text-custom body-font bg-gray-50 min-h-screen flex items-center justify-center">
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
                <h2 className="text-2xl font-semibold heading-custom">
                  {Data?.name || 'N/A'}
                </h2>
                <p className="text-sm text-custom mt-2">
                  {Data?.currentEducation || 'N/A'} at {Data?.currentInstitute || 'N/A'}
                </p>
              </div>
            </div>

            <div className="sm:w-2/3 sm:pl-8 mt-6 sm:mt-0 border-t sm:border-t-0 sm:border-l border-gray-200 pt-6 sm:pt-0">
              <h2 className="text-lg font-medium heading-custom mb-4">Profile Details</h2>
              <div className="space-y-4">
                <DetailItem label="Father's Name" value={Data?.result?.Fathersname || 'N/A'} />
                <DetailItem label="Email" value={Data?.email || 'N/A'} />
                <DetailItem label="Phone" value={Data?.phone || 'N/A'} />
                <DetailItem label="Applied for" value={Data?.result?.scholarship || 'N/A'} />
               
              </div>
            </div>
          </div>
            <div className=' w-full  flex justify-center items-center '>

{/* //Toggle button               */}
<button
onClick={logOut}
to="/signup"  data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
Logout{Data?.result?.email}</button>

<div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>

            <div class="p-4 md:p-5 text-center">
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
            </div>
        </div>
    </div>
</div>
{/* ------------------------------- */}
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
    <span className="ml-2 text-custom">{value}</span>
  </div>
);

export default Profile;
