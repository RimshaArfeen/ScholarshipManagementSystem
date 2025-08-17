
import React from 'react';

const ScholarshipBenefits = () => {


    return (

        <section className='lg:px-5 pb-20 lg:-mt-[17rem] '>
            <h2
                data-aos="fade-up"
                className="w-full text-3xl font-bold uppercase tracking-wide text-center lg:text-right heading-custom mb-4"
            >
                Scholarship Benefits
            </h2>

            <div
                data-aos="zoom-in"
                className="h-[1.6px] bg-amber-600 w-40 mb-8 lg:mb-14 relative z-10 transition-all duration-300 group-hover:bg-teal-200 mx-auto lg:mr-0 lg:ml-auto"
            ></div>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-3 lg:px-0">

                <>
                    <div className="grid gap-4 col-wid h-fit">
                        <div
                            data-aos="fade-down" className=" text-justify w-[100%] p-2 rounded-lg border-custom border">
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
                            <img className="h-auto w-[100%] rounded-lg border-[2px] border-gray-100" src="https://images.unsplash.com/photo-1685401704618-fd8243812ef7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div
                            data-aos="fade-up" className=" text-justify w-[100%] p-2 rounded-lg border-custom border">
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
                            data-aos="fade-down" className=" text-justify w-[100%] p-2 rounded-lg border-custom border">

                            <h1 className=' font-semibold uppercase text-lg text-left underline underline-offset-4 heading-custom'>Monthly Living Stipend: </h1>
                            <p className=' text-sm leading-relaxed text-gray-800'>Students receive a fixed monthly allowance to support their living expenses and other personal needs, allowing them to fully concentrate on academics.</p>
                        </div>

                    </div>
                    <div className="grid gap-4 col-wid h-fit">
                        <div
                            data-aos="fade-down" className=" text-justify w-[100%] p-2 rounded-lg border-custom border">
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
        </section>
    );
};



export default ScholarshipBenefits;
