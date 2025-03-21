import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { scholarshipEligibility } from './Data';

const ScholarshipBenefits = () => {
    const settings = {
        fade: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (

<section className='lg:px-14 py-20'>
        <h2 
        data-aos="fade-up" className="text-3xl font-bold uppercase tracking-wide text-center heading-custom mb-4">
                    Scholarship Benefits
                </h2>
                <div 
                data-aos="zoom-in"
                className="h-[1.6px] bg-amber-600 w-1/3 mb-14 relative z-10 transition-all duration-300 group-hover:bg-teal-200 mx-auto "></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:px-5 ">

            <>
                <div className="grid gap-4 col-wid h-fit">
                    <div
                     data-aos="fade-down"  className=" text-justify w-[100%] p-2 rounded-lg border-custom border">
                        <h1 className=' font-semibold uppercase text-lg text-left underline underline-offset-4 heading-custom'>Full Tuition Coverage: </h1>
                        <p className=' text-sm leading-relaxed text-gray-800'>The scholarship covers 100% of tuition fees, ensuring that students can focus on their studies without financial stress. This benefit applies for the entire duration of the program.</p>
                    </div>

                    <div 
                    data-aos="zoom-in"
                    className=' h-fit'>
                        <img className="h-auto w-[100%] rounded-lg border-[2px] border-gray-100" src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div 
                    data-aos="zoom-in"
                    className=' h-fit'>
                        <img className="h-auto w-[100%] rounded-lg border-[2px] border-gray-100" src="https://images.pexels.com/photos/8199166/pexels-photo-8199166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
                <div className="grid gap-4 col-wid h-fit">
                    <div 
                    data-aos="zoom-in"
                    className=' h-fit'>
                        <img className="h-auto w-[100%] rounded-lg border-[2px] border-gray-100" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div
                     data-aos="fade-up"  className=" text-justify w-[100%] p-2 rounded-lg border-custom border">
                        <h1 className=' font-semibold uppercase text-lg text-left underline underline-offset-4 heading-custom'>Mentorship Programs:</h1>
                        <p className=' text-sm leading-relaxed text-gray-800'>Scholars gain access to experienced mentors, including industry professionals and academic advisors, who provide guidance on career planning, research opportunities, and skill development.</p>
                    </div>

                    <div 
                    data-aos="zoom-in"
                    className=' h-fit'>
                        <img className="h-auto w-[100%] rounded-lg border-[2px] border-gray-100" src="https://images.pexels.com/photos/5215006/pexels-photo-5215006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
                <div className="grid gap-4 col-wid h-fit">
                    <div 
                    data-aos="zoom-in"
                    className=' h-fit'>
                        <img className="h-auto w-[100%] rounded-lg border-[2px] border-gray-100" src="https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div
                     data-aos="fade-down"  className=" text-justify w-[100%] p-2 rounded-lg border-custom border">

                        <h1 className=' font-semibold uppercase text-lg text-left underline underline-offset-4 heading-custom'>Monthly Living Stipend: </h1>
                        <p className=' text-sm leading-relaxed text-gray-800'>Students receive a fixed monthly allowance to support their living expenses and other personal needs, allowing them to fully concentrate on academics.</p>
                    </div>

                </div>
                <div className="grid gap-4 col-wid h-fit">
                    <div
                     data-aos="fade-down"  className=" text-justify w-[100%] p-2 rounded-lg border-custom border">
                        <h1 className=' font-semibold uppercase text-lg text-left underline underline-offset-4 heading-custom'>International Exchange Opportunities:</h1>
                        <p className=' text-sm leading-relaxed text-gray-800'>Selected students may get the chance to study abroad or participate in exchange programs at partner universities, helping them gain global exposure, experience new cultures, and expand their professional networks.</p>
                    </div>

                    <div 
                    data-aos="zoom-in"
                    className=' h-fit'>
                        <img className="h-auto w-[100%] rounded-lg border-[2px] border-gray-100" src="https://images.pexels.com/photos/8199625/pexels-photo-8199625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
            </>

        </div>
<EligibilityCriteria/>
</section>
    );
};

export const EligibilityCriteria = () => {
    return (

        <div className="w-full py-20">
            <div className="max-w-6xl mx-auto">
                <h2
                data-aos="fade-up"
                 className="text-3xl font-bold uppercase tracking-wide text-center heading-custom mb-4">
                    {scholarshipEligibility.title}
                </h2>
                <div
                data-aos="zoom-in" className="h-[1.6px] bg-amber-600 w-1/3 mb-2 relative z-10 transition-all duration-300 group-hover:bg-teal-200 mx-auto "></div>

                <p className="text-center text-custom text-lg mb-12">
                    {scholarshipEligibility.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                    {scholarshipEligibility.criteria.map((criterion, index) => (
                          <div
                          data-aos={`${criterion.animation}`} key={index} className="p-4  sm:mb-0 mb-6">
                          <div className="h-fit overflow-hidden">
                            <img alt="content" className="object-cover object-center  h-[70%] w-full rounded-lg " src={criterion.imgUrl}/>
                          </div>
                  <div className=" h-20 flex justify-center items-center shadow-md hover:scale-90  transition-all duration-300 hover:cursor-pointer relative -top-11 w-[78%] md:w-[85%] mx-auto bg-gray-200 px-3 p-2 rounded-md">
                          <h2 className="text-base font-normal text-gray-900  text-center">{criterion.title}</h2>
                        
                  
                  </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScholarshipBenefits;
