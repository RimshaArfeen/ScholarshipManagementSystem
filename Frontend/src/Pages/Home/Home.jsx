
import React from 'react'
import ApplicationForm from '../../Components/ApplicationForm'
import { useForm } from "react-hook-form"
import { scholarshipBenefits } from './Data'
import ScholarshipBenefits from './ScholarshipBenefits'
import { NavLink } from 'react-router-dom'

const Home = () => {


  return (

    <>
      <section className="bg-center bg-no-repeat bg-[url('https://plus.unsplash.com/premium_photo-1714348661832-a0d4960c601e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold leading-none trac  king-wide text-white md:text-5xl lg:text-6xl xl:px-6">Welcome to Global IT Scholarship Program
          </h1>
          <p className="mb-8 text-lg font-light uppercase text-gray-300 lg:text-xl sm:px-16 lg:px-48">Empowering Future Innovators with Prestigious IT Scholarships
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <NavLink to="/applicationInfo" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Apply now
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </NavLink>
            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              See Guidlines
            </a>
          </div>
        </div>
      </section>
<ScholarshipBenefits/>



    </>
  )
}

export default Home
