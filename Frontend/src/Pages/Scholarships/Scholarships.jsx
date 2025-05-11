
import React from 'react';
import { scholarshipEligibility } from '../Home/Data.js';
import { scholarshipGuidelines } from "./Data.js";
import UniversitiesInfo from '../UniversitiesInfo/UniversitiesInfo.jsx';
import { NavLink } from 'react-router-dom';
const Scholarships = () => {
  return (
    <section className="py-32 px-5 bg-gray-50">
     <h2 className="text-3xl font-bold mb-6 text-center uppercase flex flex-col text-teal-900">
  🎓 Step into Opportunity: 
  <span className="text-amber-700 text-4xl mt-1">Scholarship Rules & Requirements</span>
</h2>

      <UniversitiesInfo />
      <div className="max-w-4xl mx-auto p-6 pt-20">
        <h2 className="text-3xl font-bold mb-6 text-center uppercase text-teal-900">
          🎓 Scholarship Eligibility & Guidelines
        </h2>

        {scholarshipGuidelines.map((section, index) => (
          <div
            key={index}
            className="mb-8 bg-teal-50 shadow-md rounded-lg p-5 border-l-4 border-teal-700"
          >
            <h3 className="text-xl font-bold heading-custom uppercase tracking-wider mb-3 flex items-center gap-2">
              <span>{section.icon}</span> {section.sectionTitle}
            </h3>
              <div className="h-[1.6px] bg-amber-600 w-1/3 mb-2"></div>

            {section.type === "list" ? (
              <ul className="list-disc list-inside   space-y-2">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <div className="space-y-4">
                {section.points.map((point, i) => (
                  <div key={i}>
                    <h4 className="font-semibold  heading-custom  ">{point.title}</h4>
                    <p className=" ">{point.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
           <div className=' w-full mx-auto'>

<NavLink to="/student_applicationForm" 
        className=" w-full mt-8 mx-auto inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-teal-700 
        hover:bg-teal-800 ">
        Apply now
        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </NavLink>

</div>
      </div>
   
    </section>
  );
};

export default Scholarships;
