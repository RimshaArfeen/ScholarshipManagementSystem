

import ScholarshipBenefits from './ScholarshipBenefits'
import { NavLink } from 'react-router-dom'
import UniversitiesInfo from '../UniversitiesInfo/UniversitiesInfo'
import AcademicPrograms from '../AcademicPrograms/AcademicPrograms'
import About from '../About/About'
import BgVideo from "../../assets/BgVideo.mp4"
const Home = () => {


  const handleScroll = () => {
    console.log("Scrolling arrow");
    window.scrollTo({
      top: 650, // Scrolls to 1000 pixels from the top of the page
      left: 0,
      behavior: 'smooth' // Adds a smooth scrolling animation
    });
  }



  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
          src={BgVideo}
        ></video>

        <div className="absolute inset-0 bg-teal-800/45"></div>

        <div data-aos="zoom-in" className="relative z-10 px-6 max-w-4xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-4">
            Welcome to <span className="text-amber-400">Global IT Scholarship Program</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-8">
            Empowering Future Innovators with Prestigious IT Scholarships
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink to="/applicationForm" className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-lg font-semibold shadow-md">
              Apply Now
            </NavLink>
            <NavLink to="/scholarships" className="px-6 py-3 rounded-lg border border-white hover:bg-white hover:text-teal-800 text-lg font-semibold shadow-md">
              See Guidelines
            </NavLink>
          </div>
        </div>

        <div
          onClick={handleScroll} className="absolute bottom-6 w-full flex justify-center animate-bounce hover:cursor-pointer">
          <span className="text-white text-2xl">&#x25BC;</span>
        </div>
      </section>

     
      <div className=' w-full overflow-x-hidden lg:w-[96%] mx-auto pb-24'>
        <About />
        <ScholarshipBenefits />
        <AcademicPrograms />
        <UniversitiesInfo />
      </div>
    </>
  )
}

export default Home;

