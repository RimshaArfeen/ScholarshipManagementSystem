
import React from 'react'

const Contact = ({ data }) => {
  return (
 <section className="text-gray-100 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap relative">
    {/* Map background */}
    <div className="w-full h-[500px] bg-gray-300 rounded-lg overflow-hidden relative">
      <iframe
        title="map"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Karachi,+Pakistan&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{
          filter: "contrast(1.2) opacity(0.9)",
        }}
      ></iframe>

      {/* Address Box - Positioned Over the Map */}
      <div className="bg-[#0f766e] bg-opacity-90 absolute bottom-10 right-10 z-10 flex flex-wrap py-6 rounded shadow-md max-w-md w-full">
        <div className="w-full px-6">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1 text-white">Gulistan-e-Johar Block 17, Karachi</p>
        </div>
        <div className="w-full px-6 mt-4">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
          <a href="mailto:rimshaarfeen61@gmail.com" className="text-indigo-300 leading-relaxed block">rimshaarfeen61@gmail.com</a>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
          <a href="tel:+923312035368" className="leading-relaxed text-white">0331-2035368</a>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact;
