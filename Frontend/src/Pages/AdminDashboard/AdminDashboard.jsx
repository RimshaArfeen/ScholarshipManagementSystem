import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [studentData, setStudentData] = useState([]);

  // Fetch Student Data
  const getStudentData = async () => {
    try {
      const response = await fetch("http://localhost:3000/adminPg");
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
    <section className="text-custom body-font py-28">
      {studentData.length > 0 ? (
        <div className="w-full px-5 flex flex-wrap -mx-4 -my-8">
          {studentData.map((student) => (
            <div key={student._id} className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex flex-col border-2 border-gray-200 p-6 rounded-lg shadow-md bg-white">
                <h2 className="text-indigo-500 text-xs font-medium tracking-widest mb-2 uppercase">
                  Student Information
                </h2>
                <div className="space-y-2 text-sm text-custom mb-4">
                  <p className="flex justify-between">
                    <span className="font-medium">Name:</span>
                    <span>{student.name || "N/A"}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Father's Name:</span>
                    <span>{student.Fathersname || "N/A"}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Email:</span>
                    <span>{student.email || "N/A"}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Age:</span>
                    <span>{student.age || "N/A"}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Country:</span>
                    <span>{student.country || "N/A"}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Status:</span>
                    <span className={`font-semibold ${student.status === "Approved" ? "text-green-600" : "text-red-600"}`}>
                      {student.status || "Pending"}
                    </span>
                  </p>
                </div>

                <div className="mt-6 flex space-x-4">
                  <button
                    onClick={() => updateStatus(student._id, "Approved")}
                    className={`uppercase font-bold py-2 px-4 rounded transition-all ${
                      student.status === "Approved" || student.status === "Rejected"
                        ? "bg-gray-400 text-custom cursor-not-allowed"
                        : "bg-green-700 hover:bg-green-600 text-white"
                    }`}
                  >
                    {student.status === "Approved" ? (
                      "Approved"
                    ): "Approve"
                  }
                  </button>
                  <button
                    onClick={() => updateStatus(student._id, "Rejected")}
                    disabled = {student.status === "Approved" || student.status === "Rejected" }
                    className={`uppercase font-bold py-2 px-4 rounded transition-all ${
                      student.status === "Approved" || student.status === "Rejected"
                        ? "bg-gray-400 text-custom cursor-not-allowed"
                        : "bg-red-700 hover:bg-red-600 text-white"
                    }`}
                  >
                    {student.status === "Rejected" ? (
                      "Rejected"
                    ): "Reject"
                  }
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full mx-auto my-auto text-3xl text-center">
          No applications here
        </div>
      )}
    </section>
  );
};

export default AdminDashboard;
