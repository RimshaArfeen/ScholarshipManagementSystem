import React from 'react';
import { scholarshipEligibility } from '../Home/Data.js';
import { scholarshipGuidelines } from "./Data.js";
import UniversitiesInfo from '../UniversitiesInfo/UniversitiesInfo.jsx';
import { NavLink } from 'react-router-dom';

const Scholarships = () => {
  // Define the new color palette using Tailwind's JIT classes or CSS variables
  // For this example, we'll use inline styles and new class names for clarity.
  const palette = {
    background: '#CFD8DC',
    text: '#009688',
    headings: '#00695C',
    buttons: '#FFEB3B',
    accent: '#00ACC1'
  };

  return (
    <section className="py-24 px-5" style={{ backgroundColor: palette.background }}>
      {/* Hero Section with illustration and main heading */}
      <div className="text-center pt-10">
        <h1 className="text-4xl md:text-5xl font-bold uppercase mb-2" style={{ color: palette.headings }}>
          Scholarship Rules & Requirements
        </h1>
        <p className="text-xl text-teal-700">
          Find the information you need to apply for a brighter future.
        </p>
      </div>

      <UniversitiesInfo />
      
      {/* Scholarship Guidelines Section */}
      <div className="max-w-4xl mx-auto p-6 pt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase mb-2" style={{ color: palette.headings }}>
            Eligibility & Guidelines
          </h2>
          <div className="h-1 w-24 mx-auto" style={{ backgroundColor: palette.accent }}></div>
        </div>

        {scholarshipGuidelines.map((section, index) => (
          <div
            key={index}
            className="mb-8 bg-white shadow-lg rounded-xl p-8 border-l-4 transition-all duration-300 hover:shadow-xl"
            style={{ borderColor: palette.accent }}
          >
            <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 flex items-center gap-4" style={{ color: palette.headings }}>
              {/* Using a placeholder for modern icons */}
              <span className="material-icons text-3xl" style={{ color: palette.text }}>
                {section.icon}
              </span>
              <span>{section.sectionTitle}</span>
            </h3>

            {section.type === "list" ? (
              <ul className="list-none space-y-4 text-lg" style={{ color: palette.text }}>
                {section.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="material-icons text-xl mr-3" style={{ color: palette.accent }}>
                      check_circle
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="space-y-6" style={{ color: palette.text }}>
                {section.points.map((point, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-xl mb-1" style={{ color: palette.headings }}>
                      {point.title}
                    </h4>
                    <p className="text-base">{point.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Final CTA section with prominent button */}
        <div className="w-full mx-auto mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: palette.headings }}>
            Ready to Apply?
          </h3>
          <p className="text-lg mb-6" style={{ color: palette.text }}>
            Take the first step towards your academic future.
          </p>
          <NavLink
            to="/student_applicationForm"
            className="inline-flex w-full justify-center items-center py-4 px-8 text-lg font-bold rounded shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white hover:text-teal-900 bg-teal-900 text-white"
            
          >
            Apply now
            <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Scholarships;