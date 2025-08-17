
 import React from 'react'
import About from '../About/About.jsx'
 import {
    whatWeDoPoints,
    missionAndVision,
    faqs,
    content
 } from "./Data.js"
 const Overview = () => {
    return (
         <div className='sm:px-10 py-20'>
              <About />

              <div  className="w-full py-16 pt-0 -mt-36">
                   <div  className="container mx-auto px-6">
                        <div  className="flex flex-wrap md:space-x-8 space-y-10 md:space-y-0">
                             {missionAndVision.map((item, index) => {
                                  return (
                                       <div  className="md:w-[48%] px-6 transition duration-300 border-l-4 border-teal-700   "
                                       data-aos={item.animation}>
                                            <h2  className="tracking-widest text-2xl font-medium heading-custom uppercase mb-2">{item.title}</h2>
                                            <h1  className="text-lg font-semibold text-gray-900">{item.heading}</h1>
                                            <div  className="bg-teal h-[1.7px] rounded-full w-1/2 my-2"></div>

                                            <p  className="text-gray-700 leading-relaxed text-justify">
                                                 {item.description}
                                            </p>
                                       </div>

                                  )
                             })}

                        </div>
                   </div>

                   <div  className="container px-5 py-24 mx-auto">
                        <div  className=" mb-20">
                             <h1  className="sm:text-3xl text-2xl w-fit font-medium uppercase heading-custom mb-4">What We Do
                                  <div  className="bg-teal h-[3px] rounded-full  my-2"></div>

                             </h1>
                             <p  className="text-base md:px-3 text-gray-700 leading-relaxed  w-full tracking-wide text-justify  ">
                                  Our mission is to empower students to achieve their dreams of studying abroad by connecting them with the right scholarships and guidance. We simplify the process, offer personalized support, and provide access to global opportunities.
                             </p>
                        </div>
                        <div  className="flex flex-wrap  sm:mx-auto sm:mb-2 -mx-2 text-gray-100">
                             {whatWeDoPoints.map((item, index) => {
                                  return (
                                       <div key={index}  className=" m-1 sm:w-[48%] w-full">
                                            <div  className="border-2 border-custom bg-teal rounded flex h-full items-center">
                                                 <i className={`material-symbols-outlined text-white w-13 h-13 p-3 pl-4`}>
                                                      {item.icon}</i>

                                                 <span  className=" p-3 text-base leading-relaxed font-normal">{item.text}</span>
                                            </div>
                                       </div>


                                  )

                             })}
                        </div>
                        {/* <button  className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore Opportunities</button> */}
                   </div>
                   {/* Quote */}

                   <div className="container px-5 py-4 mx-auto"
                   data-aos="fade-up">
                        {content.map((item, index) => (
                             <div key={index} className="mb-16">
                                  {/* Images Grid */}
                                  <div className="flex flex-wrap -m-4">
                                       {item.imgUrls.map((img, idx) => (
                                            <div
                                                 key={idx}
                                                 className="p-3 w-full sm:w-1/2 lg:w-1/4 "
                                            >
                                                 <div className="bg-white shadow-lg overflow-hidden h-80 flex items-center justify-center">
                                                      <img
                                                           alt="team"
                                                           className="w-full h-full object-cover object-center"
                                                           src={img}
                                                      />
                                                 </div>
                                            </div>
                                       ))}
                                  </div>

                                  {/* Section Heading */}
                                  <div  className="lg:w-3/4 w-full mx-auto py-14 ">
     <svg xmlns="http:www.w3.org/2000/svg" fill="currentColor"  className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
       <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
     </svg>
     <div className=' flex flex-col items-center w-full'>

     <p  className="leading-relaxed font-bold text-3xl  text-center ">{item.heading}</p>
     <span  className="inline-block h-1 w-72 rounded bg-teal-800 my-3 mx-auto "></span>
     <h2  className="text-gray-900 font-medium title-font tracking-wider text-sm  text-center ">HOLDEN CAULFIELD</h2>
     <p  className="text-gray-500  text-center ">Senior Product Designer</p>
     </div>
   </div>
                             </div>
                        ))}
                   </div>


                   {/* Owner Image */}
                   <div className="bg-cover bg-center bg-no-repeat bg-[url('https:img.freepik.com/free-photo/cheerful-businessman_1098-17041.jpg?t=st=1744100770~exp=1744104370~hmac=0c7702ba7846f5958c52fb1c9f4b34d8c7aaef40e5149bbfaaa56c304f0a6ae4&w=996')] 
 bg-gray-400 bg-blend-multiply overflow-hidden my-20">
                        <div  className="px-4 pl-14 w-full md:w-3/4 py-24 lg:py-48 lg:pt-56 ">
                             <h1  className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
                                  Meet Our Visionary Founder
                             </h1>
                             <p  className="mb-8 text-lg font-normal text-gray-800 lg:text-xl text-justify">
                                  Our platform was founded with the mission to bridge gaps in education and opportunity. Driven by a deep passion for innovation and impact, our founder leads with a vision to empower every learner to reach their highest potential.
                             </p>
                        </div>


                   </div>

                   <div className="py-16 px-2">
                        <h2 className=" w-fit text-3xl font-bold heading-custom uppercase">Frequently Asked Questions

                             <div  className="bg-teal h-[2.5px] rounded-full w-full my-2  mb-8"></div>
                        </h2>
                        {faqs.map((item, index) => {
                             return (

                                  <div key={index} className="max-w-3xl ">
                                       <details className="mb-4">
                                            <summary className="cursor-pointer font-semibold text-lg text-gray-800">{item.question}</summary>
                                            <p className="mt-2 text-gray-600 pl-4 w-fit text-justify">{item.answer}
                                                 <div  className="bg-amber-700 h-[1.12px] rounded-full w-full my-2  mb-8"
                                                 data-aos="zoom-in"></div>

                                            </p>

                                       </details>
                                  </div>
                             )
                        })}
                   </div>

              </div>

         </div>
    )
 }

 export default Overview
