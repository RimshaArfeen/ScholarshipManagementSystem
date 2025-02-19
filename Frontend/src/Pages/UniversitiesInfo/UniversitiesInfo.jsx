
import React from 'react'
import {sabanciUniversity} from "./UniData.js"
const UniversitiesInfo = () => {
  return (
     <section className="body-font text-gray-600">
     <div className="mx-auto flex flex-col  px-5 py-24 lg:w-[90%]">
      {sabanciUniversity.map((item, index) => (

       <div key={index} className="mx-auto w-full">
         {/* <!-- University Image and Name --> */}
         <div className="my-4 flex flex-col items-center justify-center">
           <div className="h-64 md:h-[70vh] w-full overflow-hidden rounded-lg shadow-lg">
             <img alt="University Image" className="h-full w-full object-cover object-center" src={item.imgUrl} />
           </div>
           <div className="mt-4 flex w-full items-center justify-center space-x-4">
             <div className="h-[2px] w-16 bg-indigo-500 lg:w-32"></div>
             <h1 className="text-xl font-semibold uppercase tracking-widest text-gray-800">{item.name}</h1>
             <div className="h-[2px] w-16 bg-indigo-500 lg:w-32"></div>
           </div>
         </div>
         
         {/* <!-- Main Content --> */}
         <div className="mt-10 flex flex-col md:flex-row md:space-x-8">
           {/* <!-- Vice Chancellor Info (Visible on small screens) --> */}
           <div className="text-center md:hidden">
             <div className="inline-flex h-28 w-28 items-center justify-center rounded-full bg-gray-200 text-gray-400 shadow-md">
             <img alt="Chancellor Image" className="h-full w-full object-cover object-center rounded-full" src={item.chancellorImg} />
             </div>
             <h2 className="mt-4 text-lg font-medium text-gray-900">{item.chancellor}</h2>
             <div className="my-2 h-[3px] w-16 bg-indigo-500"></div>
             <p className="text-base text-gray-700">Vice Chancellor of University</p>
           </div>
   
           {/* <!-- University Overview --> */}
           <div className="mt-6 text-justify border-t border-gray-200 pt-6 md:mt-0 md:w-2/3 md:border-t-0 md:border-r md:pr-8">
             <p className="mb-6 text-lg leading-relaxed text-gray-700">
               {item.overview}
             </p>
             
             {/* <!-- Scholarship Information --> */}
             <h1 className="mb-3 border-b-2 border-indigo-900 text-lg font-semibold uppercase tracking-widest text-gray-800">Scholarship Information</h1>
             <ul className="list-disc pl-5 text-gray-700">
               <li>Guideline 1</li>
               <li>Guideline 2</li>
               <li>Guideline 3</li>
             </ul>
   
             {/* <!-- Additional Info (Visible on small screens) --> */}
             <div className="mt-6 md:hidden">
               <h2 className="mb-4 text-sm font-medium tracking-widest text-gray-900">University Details</h2>
               <nav className="space-y-2.5">
                 <a className="text-gray-700">{item.established}</a>
                 <a className="text-gray-700">{item.location}</a>
               </nav>
             </div>
             {/* <!-- Contact Information --> */}
             <div className="mt-8 md:hidden">
               <h2 className="mb-4 text-sm font-medium tracking-widest text-gray-900 ">Contact Information</h2>
               <nav className="space-y-2.5 md:text-center flex-col flex">
                 <a className="text-gray-700">Email: {item.scholarships[0].contact.email}</a>
                 <a className="text-gray-700">Phone: {item.scholarships[0].contact.phone}</a>
                 <a className="text-gray-700">Address: {item.scholarships[0].contact.address}</a>
               </nav>
             </div>
           </div>
   
           {/* <!-- Vice Chancellor Info (Visible on medium and larger screens) --> */}
           <div className="hidden md:flex flex-col items-center  md:w-1/3 md:py-8 ">
             <div className="inline-flex h-28 w-28 items-center justify-center rounded-full bg-gray-900 text-gray-400 shadow-md mx-auto">
             <img alt="Chancellor Image" className="h-full w-full object-cover object-right-bottom rounded-full" src={item.chancellorImg} />
             </div>
             <h2 className="mt-4 text-lg font-medium text-center text-gray-900">{item.chancellor}</h2>
             <div className="my-2 h-[3px] w-16 bg-indigo-500 mx-auto"></div>
             <p className="text-center text-base text-gray-700">Vice Chancellor of University</p>
   
             {/* <!-- University Details --> */}
             <div className="mt-6">
               <h2 className="mb-4 text-sm font-medium tracking-widest text-gray-900 text-center">University Details</h2>
               <nav className="space-y-2.5 text-center">
                 <a className="text-gray-700">{item.established}</a>
                 <a className="text-gray-700">{item.location}</a>
               </nav>
             </div>
   
             {/* <!-- Contact Information --> */}
             <div className="mt-8 ">
               <h2 className="mb-4 text-sm font-medium tracking-widest text-gray-900 text-center">Contact Information</h2>
               <nav className="space-y-2.5 text-center flex-col flex">
                 <a className="text-gray-700">Email: {item.scholarships[0].contact.email}</a>
                 <a className="text-gray-700">Phone: {item.scholarships[0].contact.phone}</a>
                 <a className="text-gray-700">Address: {item.scholarships[0].contact.address}</a>
               </nav>
             </div>
           </div>
         </div>
       </div>
      ))}
     </div>
   </section>
  )
}

export default UniversitiesInfo;
