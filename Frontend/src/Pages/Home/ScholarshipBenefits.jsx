
import React from 'react'
import { scholarshipEligibility, scholarshipBenefits, scholarshipBenefits2 } from './Data'
const ScholarshipBenefits = () => {
  return (
     <section class="text-gray-600 body-font">
     <div class="container py-32 mx-auto">
       <div class="flex flex-wrap -mx-4">
         
         {/* <!-- Left Side (Timeline) --> */}
         <div class="lg:w-1/3 md:w-1/2 px-4 mb-10 lg:mb-0">
           <div class="relative">
             <div class="absolute left-4 top-0 h-full w-1 bg-gray-200"></div>
             {scholarshipBenefits.map((item, index) => (
           <div key={index} class="relative flex items-center mb-4">
               <div class="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500 text-white z-10 relative">
                 <svg fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                   <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                 </svg>
               </div>
               <div class="ml-6">
                 <h2 class="font-medium text-base text-gray-900 mb-1">{item}</h2>
               </div>
             </div>

             ))}
   
             
           </div>
         </div>
   
         {/* <!-- Center Image --> */}
         <div class="lg:w-1/3 md:w-1/2 pr-4 mb-10 lg:mb-0 flex justify-center">
           <img class="object-cover object-center rounded-lg w-full md:w-auto" src="https://dummyimage.com/600x400" alt="step"/>
         </div>
   
         {/* <!-- Right Side (Numbered Steps) --> */}
         <div class="lg:w-1/3 w-full px-4 mb-10 lg:mb-0 lg:pl-5">
           <div class="relative grid grid-cols-2 lg:grid-cols-1 w-full">
             <div class="absolute left-4 top-0 h-full w-1 bg-gray-200"></div>
             {scholarshipBenefits2.map((item, index) => (
           <div key={index} class="relative flex items-center mb-4">
               <div class="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500 text-white z-10 relative">
                 <svg fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                   <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                 </svg>
               </div>
               <div class="ml-6">
                 <h2 class="font-medium text-base text-gray-900 mb-1">{item}</h2>
               </div>
             </div>

             ))}
   
             
           </div>
         </div>
   
   
       </div>
     </div>
     <EligibilityCriteria/>
   </section>
   
  )
}

export const EligibilityCriteria = () => {
  return (
    <>
      <div className="w-full px-4 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-center text-gray-900 mb-4">
            {scholarshipEligibility.title}
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            {scholarshipEligibility.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholarshipEligibility.criteria.map((criterion, index) => (
              <div
                key={index}
                className=" p-6 rounded-lg border-[1px] border-gray-400 transition-shadow duration-300 flex justify-start items-center"
              >
                <div className="flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full text-lg font-semibold mr-4">
                    {index + 1}
                  </span>
                  <p className="text-xl font-semibold text-gray-900">{criterion}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScholarshipBenefits


<section class="text-gray-600 body-font">
  <div class="px-5 py-24 mx-auto">
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class=" h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503">
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-2.5 text-center">Shooting Stars</h2>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class=" h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504">
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-2.5 text-center">The Catalyzer</h2>
       
       
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class=" h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505">
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-2.5 text-center">The 400 Blows</h2>
       
       
      </div>
    </div>
  </div>
</section>