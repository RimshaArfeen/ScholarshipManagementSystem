
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {
     lowEligibilityField,
     mediumEligibilityField,
     highEligibilityField,
     qualifications
} from './EligibilityCriteria';

const ApplicationForm = () => {
     const [step, setStep] = useState(1);
     const [eligiblity, setEligiblity] = useState("")
     const [status, setStatus] = useState(null)
     const navigate = useNavigate();

     const {
          register,
          handleSubmit,
          getValues,
          formState: { errors },
     } = useForm();

     const onSubmit = async (data) => {
          if (step === 1 || step === 2) {
               setStep(step + 1);
          } else {
               console.log("Form Data Submitted:", data);
               let result = await fetch("http://localhost:3000/applicationForm", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
               });

               result = await result.json();
               setStatus(data.status);
               console.log(status);
               
               localStorage.setItem("StudentData", JSON.stringify(result));
               console.log("Data saved in MongoDb : ", result);
               alert("Your data has been submitted!");
               navigate("/");
          }
     };

     const handleScholarship = () => {
          const Percentage = getValues("percentage");
          const scholarshipOption = getValues("scholarship");

          console.log("Your percentage is:", Percentage);
          console.log("Scholarship selected:", scholarshipOption);

          if (!Percentage) {
               console.log("Please enter your percentage before selecting a scholarship.");
               return;
          }

          if (scholarshipOption === "byFaculty" || scholarshipOption === "byUniversity") {
               if (Percentage >= 80 && Percentage < 85) {
                    setEligiblity("low");
                    console.log("Eligibility set to low");
               } else if (Percentage >= 85 && Percentage < 90) {
                    setEligiblity("medium");
                    console.log("Eligibility set to medium");
               } else if (Percentage >= 90) {
                    setEligiblity("high");
                    console.log("Eligibility set to high");
               } else {
                    console.log("Percentage does not meet scholarship criteria.");
                    setEligiblity(null); // Reset eligibility if criteria are not met
               }
          }
     };


     const handleBack = () => {
          setStep(step - 1); // Go back to the previous step
     };

     return (
          <section className="body-font relative text-gray-600">
               <div className="mx-auto px-5 py-24">
                    <div className="mb-12 flex w-full flex-col text-center">
                         <h1 className="title-font mb-4 text-3xl font-bold text-gray-900 sm:text-4xl uppercase">Application Form</h1>
                         <p className="mx-auto text-gray-500 leading-relaxed lg:w-2/3">We'd love to hear from you! Please fill out the form below.</p>
                    </div>

                    <div className="mx-auto md:w-2/3 xl:w-1/2">
                         <form onSubmit={handleSubmit(onSubmit)}>
                              {step == 1 && (
                                   <div className="-m-2 flex flex-wrap">
                                        {/* Name */}
                                        <div className="w-full md:w-1/2 p-2">
                                             <div className="relative">
                                                  <label htmlFor="name" className="text-sm font-medium text-gray-700 uppercase">Name</label>
                                                  <input
                                                       {...register("name", { required: "Name is required" })}
                                                       type="text"
                                                       id="name"
                                                       className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                                                       placeholder="John Doe"
                                                  />
                                                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                             </div>
                                        </div>

                                        {/* Father's Name */}
                                        <div className="w-full md:w-1/2 p-2">
                                             <div className="relative">
                                                  <label htmlFor="fatherName" className="text-sm font-medium text-gray-700 uppercase">Father's Name</label>
                                                  <input
                                                       {...register("Fathersname", { required: "Father's name is required" })}
                                                       type="text"
                                                       id="fatherName"
                                                       className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                                                       placeholder="James Doe"
                                                  />
                                                  {errors.Fathersname && <p className="text-red-500 text-sm">{errors.Fathersname.message}</p>}

                                             </div>
                                        </div>

                                        {/* Email */}
                                        <div className="w-full md:w-1/2 p-2">
                                             <div className="relative">
                                                  <label htmlFor="email" className="text-sm font-medium text-gray-700 uppercase">Email</label>
                                                  <input
                                                       {...register("email", { required: "Email is required" })}
                                                       type="email"
                                                       id="email"
                                                       className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                                                       placeholder="johndoe@example.com"
                                                  />
                                                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                             </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="w-full md:w-1/2 p-2">
                                             <div className="relative">
                                                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 uppercase">Phone</label>
                                                  <input
                                                       {...register("phone", { required: "Phone number is required" })}
                                                       type="tel"
                                                       id="phone"
                                                       className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                                                       placeholder="+1234567890"
                                                  />
                                                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                                             </div>
                                        </div>

                                        {/* CNIC */}
                                        <div className="w-full md:w-1/2 p-2">
                                             <div className="relative">
                                                  <label htmlFor="cnic" className="text-sm font-medium text-gray-700 uppercase">CNIC</label>
                                                  <input
                                                       {...register("cnic", { required: "CNIC is required" })}
                                                       type="text"
                                                       id="cnic"
                                                       className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                                                       placeholder="12345-6789012-3"
                                                  />
                                                  {errors.cnic && <p className="text-red-500 text-sm">{errors.cnic.message}</p>}
                                             </div>
                                        </div>

                                        {/* Date of Birth */}
                                        <div className="w-full md:w-1/2 p-2">
                                             <div className="relative">
                                                  <label htmlFor="dob" className="text-sm font-medium text-gray-700 uppercase">Date of Birth</label>
                                                  <input
                                                       {...register("dob", { required: "Date of birth is required" })}
                                                       type="date"
                                                       id="dob"
                                                       className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                                                  />
                                                  {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
                                             </div>
                                        </div>

                                        {/* Age */}
                                        <div className="w-full md:w-1/2 p-2">
                                             <div className="relative">
                                                  <label htmlFor="age" className="text-sm font-medium text-gray-700 uppercase">Age</label>
                                                  <input
                                                       {...register("age", { required: "Age is required" })}
                                                       type="number"
                                                       id="age"
                                                       className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                                                       placeholder="25"
                                                  />
                                                  {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
                                             </div>
                                        </div>

                                        {/* Gender */}
                                        <div className="w-full md:w-1/2 p-2">
                                             <div className="relative">
                                                  <label className="text-sm font-medium text-gray-700 uppercase">Gender</label>
                                                  <div className="mt-1 flex space-x-4">
                                                       <label className="inline-flex items-center">
                                                            <input
                                                                 {...register("gender", { required: "Gender is required" })}
                                                                 type="radio"
                                                                 value="male"
                                                                 className="h-5 w-5 text-indigo-600"
                                                            />
                                                            <span className="ml-2 text-gray-700">Male</span>
                                                       </label>
                                                       <label className="inline-flex items-center">
                                                            <input
                                                                 {...register("gender", { required: "Gender is required" })}
                                                                 type="radio"
                                                                 value="female"
                                                                 className="h-5 w-5 text-indigo-600"
                                                            />
                                                            <span className="ml-2 text-gray-700">Female</span>
                                                       </label>
                                                  </div>
                                                  {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
                                             </div>
                                        </div>

                                        {/* Country */}
                                        <div className="w-full md:w-1/2 p-2">
                                             <div className="relative">
                                                  <label htmlFor="country" className="text-sm font-medium text-gray-700 uppercase">Country</label>
                                                  <input
                                                       {...register("country", { required: "Country is required" })}
                                                       type="text"
                                                       id="country"
                                                       className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                                                       placeholder="e.g., United States"
                                                  />
                                                  {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
                                             </div>
                                        </div>

                                        {/* City */}
                                        <div className="w-full md:w-1/2 p-2">
                                             <div className="relative">
                                                  <label htmlFor="city" className="text-sm font-medium text-gray-700 uppercase">City</label>
                                                  <input
                                                       {...register("city", { required: "City is required" })}
                                                       type="text"
                                                       id="city"
                                                       className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                                                       placeholder="e.g., New York"
                                                  />
                                                  {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                                             </div>
                                        </div>

                                        {/* Address */}
                                        <div className="w-full p-2">
                                             <div className="relative">
                                                  <label htmlFor="address" className="text-sm font-medium text-gray-700 uppercase">Address</label>
                                                  <textarea
                                                       {...register("address", { required: "Address is required" })}
                                                       id="address"
                                                       className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                                                       placeholder="123 Main St, Apartment 4B"
                                                  />
                                                  {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                                             </div>
                                        </div>
                                        <button
                                             type="submit"
                                             className="mt-4 w-full rounded-lg bg-indigo-600 px-8 py-3 text-lg font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                             Next
                                        </button>
                                   </div>
                              )}

                              {/* Academic info */}
                              {step == 2 && (
                                   <div className="-m-2 flex flex-wrap">
                                        {/* Highest Qualification */}
                                        <div className="w-full p-2 md:w-1/2">
                                             <div className="relative">
                                                  <label htmlFor="highestQualification" className="text-sm font-medium text-gray-700 uppercase">
                                                       Highest Qualification
                                                  </label>
                                                  <select
                                                       id="highestQualification"
                                                       className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                                                       {...register('qualification', { required: 'Qualification is required' })}
                                                  >
                                                       {qualifications.map((item, index) => (

                                                            <option key={index} value={item.value} disabled={item.disabled} selected={item.selected}>
                                                                 {item.label}                                                       </option>
                                                       ))}

                                                  </select>
                                                  {errors.qualification && <span>{errors.qualification.message}</span>}
                                             </div>
                                        </div>

                                        {/* Current Education */}
                                        <div className="w-full p-2 md:w-1/2">
                                             <div className="relative">
                                                  <label htmlFor="currentEducation" className="text-sm font-medium text-gray-700 uppercase">
                                                       Current Education
                                                  </label>
                                                  <input
                                                       type="text"
                                                       id="currentEducation"
                                                       className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                                                       {...register('education', { required: 'Education is required' })}
                                                       placeholder="e.g., Bachelor's in Computer Science"
                                                  />
                                                  {errors.education && <span>{errors.education.message}</span>}
                                             </div>
                                        </div>

                                        {/* Last percentage/Percentage */}
                                        <div className="w-full p-2 md:w-1/2">
                                             <div className="relative">
                                                  <label htmlFor="lastpercentage" className="text-sm font-medium text-gray-700 uppercase">
                                                       Last percentage/Percentage
                                                  </label>
                                                  <input
                                                       type="text"
                                                       className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                                                       {...register('percentage', { required: 'percentage is required' })}
                                                       placeholder="e.g., 3.8 percentage or 85%"
                                                  />
                                                  {errors.percentage && <span>{errors.percentage.message}</span>}
                                             </div>
                                        </div>

                                        {/* Last Education Institute */}
                                        <div className="w-full p-2 md:w-1/2">
                                             <div className="relative">
                                                  <label htmlFor="lastInstitute" className="text-sm font-medium text-gray-700 uppercase">
                                                       Last Education Institute
                                                  </label>
                                                  <input
                                                       type="text"
                                                       id="lastInstitute"
                                                       className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                                                       {...register('lastInstitute', { required: 'Last institute is required' })}
                                                       placeholder="e.g., Harvard University"
                                                  />
                                                  {errors.lastInstitute && <span>{errors.lastInstitute.message}</span>}
                                             </div>
                                        </div>

                                        {/* Current Institute */}
                                        <div className="w-full p-2 md:w-1/2">
                                             <div className="relative">
                                                  <label htmlFor="currentInstitute" className="text-sm font-medium text-gray-700 uppercase">
                                                       Current Institute
                                                  </label>
                                                  <input
                                                       type="text"
                                                       id="currentInstitute"
                                                       className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                                                       {...register('currentInstitute', { required: 'Current institute is required' })}
                                                       placeholder="e.g., Stanford University"
                                                  />
                                                  {errors.currentInstitute && <span>{errors.currentInstitute.message}</span>}
                                             </div>
                                        </div>


                                        {/*  Button */}
                                        <div className="flex justify-between mt-4 w-full">
                                             <button
                                                  type="button"
                                                  onClick={handleBack}
                                                  className="w-1/3 rounded-lg bg-gray-300 px-8 py-3 text-lg font-semibold text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                             >
                                                  Back
                                             </button>

                                             <button
                                                  type="submit"
                                                  className="mt-4 w-full rounded-lg bg-indigo-600 px-8 py-3 text-lg font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                             >
                                                  Next
                                             </button>
                                        </div>

                                   </div>

                              )}

                              {step == 3 && (
                                   <div className="-m-2 flex flex-wrap">
                                        {/* Scholarship Selection */}
                                        <div className="w-full p-2">
                                             <div className="relative">
                                                  <label htmlFor="scholarship" className="text-sm font-medium text-gray-700 uppercase">
                                                       Choose Scholarship
                                                  </label>
                                                  <select
                                                       onClick={handleScholarship}
                                                       className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none capitalize"
                                                       {...register('scholarship', { required: true })}
                                                  >
                                                       <option value="" disabled selected>
                                                            Select Scholarship by Faculty or by University
                                                       </option>
                                                       <option value="byFaculty">by Faculty</option>
                                                       <option value="byUniversity">by University</option>
                                                  </select>
                                                  {errors.scholarship && <span className="text-red-500 text-sm">This field is required</span>}
                                             </div>
                                        </div>

                                        {/* Eligibility Selection */}
                                        {eligiblity === "low" && (
                                             <div className="w-full p-2">
                                                  <div className="relative">
                                                       <label htmlFor="lowEligibilityField" className="text-sm font-medium text-gray-700 uppercase">
                                                            Choose Scholarship
                                                       </label>
                                                       <select
                                                            className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none capitalize"
                                                            {...register('lowEligibilityField', { required: true })}
                                                       >
                                                            <option value="" disabled selected>
                                                            Select Field
                                                            </option>
                                                            {lowEligibilityField.map((item, index) => (

                                                                 <option value={`${item.field} , ${item.university}`}>{item.field} , {item.university}</option>
                                                            ))}

                                                       </select>
                                                       {errors.lowEligibilityField && <span className="text-red-500 text-sm">This field is required</span>}
                                                  </div>
                                             </div>

                                        )}

                                        {eligiblity === "medium" && (
                                             <div className="w-full p-2">
                                                  <div className="relative">
                                                       <label htmlFor="mediumEligibilityField" className="text-sm font-medium text-gray-700 uppercase">
                                                            Choose Scholarship
                                                       </label>
                                                       <select
                                                            className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none capitalize"
                                                            {...register('mediumEligibilityField', { required: true })}
                                                       >
                                                            <option value="" disabled selected>
                                                                 Select Field
                                                            </option>
                                                            {mediumEligibilityField.map((item, index) => (

                                                                 <option value={`${item.field} , ${item.university}`}>{item.field} , {item.university}</option>
                                                            ))}

                                                       </select>
                                                       {errors.mediumEligibilityField && <span className="text-red-500 text-sm">This field is required</span>}
                                                  </div>
                                             </div>

                                        )}

                                        {eligiblity === "high" && (
                                             <div className="w-full p-2">
                                                  <div className="relative">
                                                       <label htmlFor="highEligibilityField" className="text-sm font-medium text-gray-700 uppercase">
                                                            Choose Scholarship
                                                       </label>
                                                       <select
                                                            className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none capitalize"
                                                            {...register('highEligibilityField', { required: true })}
                                                       >
                                                            <option value="" disabled selected>
                                                            Select Field
                                                            </option>
                                                            {highEligibilityField.map((item, index) => (

                                                                 <option value={`${item.field} , ${item.university}`}>{item.field} , {item.university}</option>
                                                            ))}

                                                       </select>
                                                       {errors.highEligibilityField && <span className="text-red-500 text-sm">This field is required</span>}
                                                  </div>
                                             </div>

                                        )}

                                        {eligiblity === null && (
                                             <p className="mx-auto text-lg text-red-800  leading-relaxed lg:w-2/3">The Percentage dosen't match Scholarship Criteria</p>
                                        )
                                        }

                                        {/* Additional Information */}
                                        <div className="w-full p-2">
                                             <div className="relative">
                                                  <textarea
                                                       id="additionalInfo"
                                                       rows="4"
                                                       className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                                                       {...register('optional')}
                                                       placeholder="Why do you want this scholarship?"
                                                  ></textarea>
                                             </div>
                                        </div>

                                        {/*  Button */}
                                        <div className="flex justify-between mt-4 w-full">
                                             <button
                                                  type="button"
                                                  onClick={handleBack}
                                                  className="w-1/3 rounded-lg bg-gray-300 px-8 py-3 text-lg font-semibold text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                             >
                                                  Back
                                             </button>

                                             <button
                                                  type="submit"
                                                  className="w-1/3 rounded-lg bg-indigo-600 px-8 py-3 text-lg font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                             >
                                                  Submit
                                             </button>
                                        </div>

                                   </div>

                              )}


                         </form>
                         {status && <p>Status: {status}</p>}

                    </div>
               </div>
          </section>
     );
};

export default ApplicationForm;