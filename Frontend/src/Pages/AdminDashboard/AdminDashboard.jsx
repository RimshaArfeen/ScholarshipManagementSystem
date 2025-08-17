import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [studentData, setStudentData] = useState([]);

  // Fetch Student Data
  const getStudentData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/adminPg`);
      if (!response.ok) {
        throw new Error("Error while fetching data");
      }
      const result = await response.json();
      console.log("Fetched Data:", result);
      setStudentData(result.studentData || []);
    } catch (error) {
      console.error("Couldn't fetch data:", error);
    }
  };

  // Update Status
  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:3000/adminPg/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error("Error updating status");
      }

      const updatedStudent = await response.json();
      console.log("Update Success:", updatedStudent);

      // Optimistically update UI
      setStudentData((prevData) =>
        prevData.map((student) =>
          student._id === id ? { ...student, status } : student
        )
      );
    } catch (error) {
      console.error("Couldn't update status:", error);
    }
  };

  // Fetch Data on Mount
  useEffect(() => {
    getStudentData();
  }, []);

  return (
    <section className="bg-gray-100 min-h-screen py-24 pb-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Manage scholarship applications submitted by students.
          </p>
        </div>

        {studentData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentData.map((student) => (
              <div
                key={student._id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header with Name and Status */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 truncate">
                      {student.name || "N/A"}
                    </h3>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full uppercase ${student.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : student.status === "Rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                    >
                      {student.status || "Pending"}
                    </span>
                  </div>

                  {/* Student Information Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium text-gray-900">
                        Father's Name:
                      </span>
                      <p className="truncate">{student.Fathersname || "N/A"}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Email:</span>
                      <p className="truncate">{student.email || "N/A"}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Phone:
                      </span>
                      <p className="truncate">+92 {student.phone || "N/A"}</p>
                    </div>
                    <div >
                      <span className=" font-medium text-gray-900">
                        CNIC
                      </span>
                      <p className="truncate">{student.cnic || "N/A"}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Last Education/Institute:
                      </span>
                      <p className="truncate">{student.lastInstitute || "N/A"}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">
                        Percentage:
                      </span>
                      <p className="truncate">{student.percentage || "N/A"}%</p>
                    </div>


                   
                    <div className="col-span-1 sm:col-span-2">
                      <span className="font-medium text-gray-900">
                        Choosed Faculty - University:
                      </span>
                      <p className="truncate">
                        {student.byFaculty || student.byUniversity || "N/A"}
                      </p>
                    </div>

                     <div>
                      <span className="font-medium text-gray-900">
                        Country:
                      </span>
                      <p className="truncate">{student.country || "N/A"}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex space-x-4">
                  <button
                    onClick={() => updateStatus(student._id, "Approved")}
                    className={`w-1/2 uppercase font-bold py-2 px-4 rounded-lg transition-all text-white ${student.status === "Approved" ||
                        student.status === "Rejected"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-700 hover:bg-green-800"
                      }`}
                    disabled={
                      student.status === "Approved" ||
                      student.status === "Rejected"
                    }
                  >
                    {student.status === "Approved" ? "Approved" : "Approve"}
                  </button>
                  <button
                    onClick={() => updateStatus(student._id, "Rejected")}
                    className={`w-1/2 uppercase font-bold py-2 px-4 rounded-lg transition-all text-white ${student.status === "Approved" ||
                        student.status === "Rejected"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-700 hover:bg-red-800"
                      }`}
                    disabled={
                      student.status === "Approved" ||
                      student.status === "Rejected"
                    }
                  >
                    {student.status === "Rejected" ? "Rejected" : "Reject"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-xl md:text-2xl text-gray-500 font-medium">
              No applications to display.
            </h2>
            <p className="text-gray-400 mt-2">
              All pending applications have been reviewed.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;