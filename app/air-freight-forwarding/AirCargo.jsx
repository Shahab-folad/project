'use client'

import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion';

import { useState, useEffect } from "react";


const AirCargo = () => {

  const features = [
    {
      id: 1,
      header: "Staying Informed on Market Trends",
      content:
        <p>
            In the ever-evolving landscape of air freight services, staying ahead of market trends is crucial. At Zenith Eclipse, we monitor industry developments and continuously enhance our service offerings. By staying attuned to market shifts, we adapt our solutions to meet emerging needs, enabling you to leverage the latest innovations for competitive advantage.
        </p>
    },
    {
      id: 2,
      header: "Streamlined Logistics Operations",
      content: 
      <dl >
          <dt className=" font-bold" >Efficient Shipment Handling</dt>
          <dd className="mt-1">
          Our air freight services go beyond simple deliveries. We also focus on optimizing logistics operations, including consolidation services, to ensure smoother handling of shipments. This approach guarantees that your cargo is handled with precision and reaches its destination on time, maintaining supply chain continuity.
          </dd>
          <dt className=" font-bold mt-4" >Specialized Charter Services</dt>
          <dd className="mt-1">
          For cargo requiring specialized handling, unique timing, or specific destinations, our charter services offer flexibility. Whether it’s oversized goods, heavy equipment, or time-sensitive shipments, we organize charter flights tailored to your needs. Our global partnerships allow us to address challenges efficiently, ensuring that your cargo arrives exactly when and where it’s needed.
          </dd>

        </dl>
    },
    {
      id: 3,
      header: "Air Transport for Animals",
      content: 
      <dl >
          <dt className=" font-bold mt-4" >
          Customized Animal Travel Plans
          </dt>
          <dd className="mt-1">
          At Zenith Eclipse, we take animal transport seriously, with personalized travel plans designed for the well-being of each animal. Factors such as breed, health status, and compliance with regulations are all taken into account.
          </dd>
          <dt className=" font-bold mt-4" >
          Controlled Climate Conditions
          </dt>
          <dd className="mt-1">
          Our specialized aircraft environments regulate temperature and humidity to ensure the comfort and welfare of animals during their journey.
          </dd>
          <dt className=" font-bold mt-4" >
          Veterinary Support
          </dt>
          <dd className="mt-1">
          Experienced veterinarians are involved in the planning and may accompany the animals to provide care and ensure their well-being throughout the flight.
          </dd>

          <dt className=" font-bold mt-4" >
          Compliance with International Standards
          </dt>
          <dd className="mt-1">
          We handle all necessary documentation and strictly adhere to regulations set by organizations such as the International Air Transport Association (IATA) to ensure safe animal transport.
          </dd>

          <dt className=" font-bold mt-4" >
          Comprehensive Pre-Flight and Post-Flight Services
          </dt>
          <dd className="mt-1">
          From departure preparations to post-arrival care, our team manages every step with the utmost consideration for animal welfare.
          </dd>

          

        </dl>
    },
   
  ];




  const [visibleParagraphs, setVisibleParagraphs] = useState(Array(features.length).fill(false));

  const toggleParagraph = (index) => {
    setVisibleParagraphs((prev) => {
      const newVisible = [...prev];
      newVisible[index] = !newVisible[index];
      return newVisible;
    });
  };

  return (
    <>
    <div className='px-1 md:px-10 max-w-[1400px] lg:m-auto'>
      <div className="product-container">
            <div className="product-header ">
              {/* ****** */}
              <div className="product-title item1">
                <h1 className="h1-design ">Air Cargo<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./servicesImage/WhatsApp Image 2024-11-22 at 10.01.16 PM.jpeg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Air Freight Forwarding</h1>
                <div className="pp-part1">
          <p className="-ml-4">
          At Zenith Eclipse, we provide specialized air cargo services designed to support your business on a global scale. Our air cargo solutions cater to various shipment requirements, including time-sensitive deliveries, customized charter services, international flight routes, and specialized animal transportation.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Global Coverage and Operational Efficiency
          </h1>
          <p>
          Our services span across the globe, ensuring the efficient transport of your goods. With a well-established network of air cargo routes and trustworthy global partnerships, Zenith Eclipse consistently upholds high service quality and operational efficiency, no matter the region.
          </p>
        </div>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        
       
        <div className="pp-part1">
          <h1 className="ph1">
          Comprehensive Air Cargo Services
          </h1>
          <h1 className="ph2">
          Export and Import Services
          </h1>
          <p>
          Our air cargo solutions encompass both export and import services, streamlining trade processes for your business. From documentation and compliance to logistics and customs clearance, our dedicated team manages every aspect, empowering you to navigate markets confidently while ensuring smooth delivery.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph2">
          Swift Delivery and Operational Excellences
          </h1>
          <p>
          We understand the significance of quick delivery, operational excellence, and dependability. At Zenith Eclipse, transparency is key. We prioritize clear communication, keeping you informed at every step of the air cargo journey—from consultation to delivery. You’ll always know the status of your shipment.
          </p>
        </div>

      </div>

        <div className='my-20' >
          {
            features.map((feature, index) => (
              <div key={feature.id} className=" px-5 fontR  py-2 my-5">
                <button onClick={() => toggleParagraph(index)} className="cursor-pointer flex items-center justify-between  gap-5 w-full text-start pbtn-header text-gray-800 "  >
                  {feature.header}
                  <div >
                    <IoIosArrowDown size={20} className={`${visibleParagraphs[index] ? "rotate-180" : 'rotate-0'} transition-all `} />
                  </div>

                </button>
                {<div className={`pfeature my-3 transition-all duration-200 max-h-0 overflow-hidden ease-out ${visibleParagraphs[index] ? 'max-h-max py-5' : ''}`} >
                  <div>
                    {feature.content}
                  </div>
                </div>}
                 {/********************** border Animation **********************/}
                 <motion.div
                className="relative border-b-2 border-black"
                initial={{ width: 0 }} // Initial width of the bottom border
                transition={{ duration: 2 }} // Animation duration
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}

                style={{
                borderBottom: '2px solid black', // Style for the border
                overflow: 'hidden', // Prevents visual glitches
                }}
                >
               </motion.div>


              </div>
            ))
          }

        </div>
      </div>
   
    </>
  )
}

export default AirCargo
