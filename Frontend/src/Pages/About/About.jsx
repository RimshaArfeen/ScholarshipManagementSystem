
//About
import React, { useState } from 'react'

const About = () => {

  const universityImages = [
    { src: "https://d31u7wi7mdb5z3.cloudfront.net/public/provider/sabanci-university-dfe65/main_photo/Sabanci.webp", title: "Sabanci University" },
    { src: "https://tse2.mm.bing.net/th/id/OIP.dr_KTpzmAfMKIDpudfhi4gHaG7?pid=Api&P=0&h=220", title: "Yale University " },
    { src: "https://tse4.mm.bing.net/th/id/OIP.o5yHQY3wRDVvNyQ0XFik2wHaGC?pid=Api&P=0&h=220", title: "Manchester University" },
  ];
  const [onHover, setHoverIdx] = useState(null)

  return (
    <section className=" body-font">



      <div className="container px-5 py-32 mx-auto">
        <div className="flex justify-between flex-wrap w-full mb-20">
          <div className="lg:w-[54%] w-full mb-4 lg:mb-0">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 heading-custom ">About
              <span className=" sm:text-3xl text-2xl font-normal tracking-wide mt-2 title-font mb-2  uppercase text-custom ml-1.5">The Global Scholarship Hub</span></h1>
            <div className="h-1 w-20 bg-amber-600 rounded"></div>
            <div className="w-full mx-auto flex flex-wrap justify-center lg:justify-start">
              <div className="flex flex-wrap w-[90%] justify-around py-10">
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full h-auto object-center block border-[6px] border-teal-600" src="https://img.freepik.com/free-photo/team-meeting-startups_23-2148898711.jpg?t=st=1744041368~exp=1744044968~hmac=920388a33552d412f03a882b2458865b20b7e6bcda274148c0c3337878c9140c&w=740"
                    data-aos="fade-up" />
                </div>
                <div className="md:p-2 p-1 w-1/2 mt-20 ">
                  <img alt="gallery" className="w-full h-auto object-center block border-[6px] border-teal-600" src="https://img.freepik.com/free-photo/professor-lecturing-students-classroom_23-2151932839.jpg?t=st=1744041427~exp=1744045027~hmac=20e59ead47b805a9cada90f0fb54e25ea7cfe6d053997eb6704ba0e15e151492&w=740"
                    data-aos="fade-up" />
                </div>

              </div>


            </div>


          </div>

          <div className='w-full lg:w-[44%]'
            data-aos="fade-right">

           
    <div className="text-white flex flex-col justify-center sm:items-center md:w-3/4 bg-teal-600 rounded-lg p-5 h-fit mx-auto mt-5 lg:mt-0">
      <div className="w-full flex flex-col md:flex-row justify-around items-center">
        <div className="flex -space-x-4 rtl:space-x-reverse">
          {universityImages.map((item, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => setHoverIdx(idx)}
              onMouseLeave={() => setHoverIdx(null)}
            >
              <img
                className="w-14 h-14 lg:w-12 lg:h-12 border-2 hover:cursor-pointer border-white rounded-full dark:border-gray-800"
                src={item.src}
                alt={item.title}
              />

              {onHover === idx && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 p-3 bg-white text-black dark:bg-gray-800 rounded-lg shadow-lg  z-10 animate-fadeIn border-0">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-28 object-cover rounded-md"
                  />
                  <h5 className="mt-2 text-lg font-semibold">{item.title}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    A prestigious institution known worldwide.
                  </p>
                  <a
                    href="#"
                    className="mt-2 inline-block px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                  >
                    Learn More
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 pl-3 flex justify-center items-center lg:items-start mt-2 md:mt-0">
          <h2 className="title-font font-bold text-5xl mr-2">3</h2>
          <p className="leading-relaxed text-lg">World Top Universities</p>
        </div>
      </div>

      <div className="mx-auto w-full md:w-[85%] lg:w-full flex justify-between items-start">
        <div className="py-4 sm:w-1/2 lg:w-fit w-1/2 flex flex-col justify-center items-center">
          <h2 className="title-font font-medium text-2xl">🎓 7k+</h2>
          <p className="leading-relaxed text-sm">Successful Graduates</p>
        </div>
        <div className="py-4 sm:w-1/2 lg:w-fit w-1/2 flex flex-col justify-center items-center">
          <h2 className="title-font font-medium text-2xl">📚 2.7K</h2>
          <p className="leading-relaxed text-sm">Students</p>
        </div>
        <div className="py-4 sm:w-1/2 lg:w-fit w-1/2 flex flex-col justify-center items-center">
          <h2 className="title-font font-medium text-2xl">🏛️ 7</h2>
          <p className="leading-relaxed text-sm">Faculties</p>
        </div>
      </div>
    </div>
            <div className=' w-full lg:-ml-10 mt-10 text-justify'>
              <p className='tracking-wide text-lg first-letter:font-semibold first-letter:text-3xl  font-light'>At Global Scholarship Hub, we are dedicated to empowering students by providing them with the tools and resources they need to pursue their academic dreams abroad. Our platform connects students with top universities, prestigious faculties, and scholarship opportunities, ensuring that bright minds have access to the education they deserve—regardless of financial constraints.</p>
            </div>


          </div>

        </div>
        {/* <div  className="text-center -my-10">
  <h2  className="text-2xl font-bold text-gray-800">Unlock Global Opportunities</h2>
  <p  className="mt-2 text-gray-600 max-w-2xl mx-auto">
    Studying abroad is more than just academics—it's a gateway to personal growth, global networks, and brighter career prospects. Discover how scholarships can be your stepping stone to the world.
  </p>
</div> */}

      </div>
    </section>
  )
}

export default About
