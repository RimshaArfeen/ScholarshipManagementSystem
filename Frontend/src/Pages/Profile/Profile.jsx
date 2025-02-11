import React from 'react';

const Profile = () => {
  let data = JSON.parse(localStorage.getItem("StudentData"));

  return (
    <section className="text-gray-600 body-font bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-5 py-16">
        <div className="lg:w-3/4 mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
          {/* Cover Photo */}
          <div className="h-64 overflow-hidden relative">
            <img
              alt="Profile Cover"
              className="object-cover object-center h-full w-full"
              src="https://dummyimage.com/1200x500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col sm:flex-row p-8">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              {/* Profile Picture */}
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-indigo-500 mx-auto">
                <img
                  src="https://dummyimage.com/100x100"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col items-center mt-4">
                <h2 className="text-2xl font-semibold text-gray-900">{data.name}</h2>
                <p className="text-sm text-gray-500 mt-2">{data.currentEducation} at {data.currentInstitute}</p>
              </div>
            </div>

            {/* Details Section */}
            <div className="sm:w-2/3 sm:pl-8 mt-6 sm:mt-0 border-t sm:border-t-0 sm:border-l border-gray-200 pt-6 sm:pt-0">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Profile Details</h2>
              <div className="space-y-4">
                <DetailItem label="Father's Name" value={data.Fathersname} />
                <DetailItem label="Email" value={data.email} />
                <DetailItem label="Phone" value={data.phone} />
                <DetailItem label="Applied for" value={data.scholarship} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Detail Item Component
const DetailItem = ({ label, value }) => (
  <div className="flex items-center">
    <span className="text-indigo-500 font-semibold w-32">{label}:</span>
    <span className="ml-2 text-gray-700">{value}</span>
  </div>
);

export default Profile;
