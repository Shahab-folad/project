'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const TCL = () => {

  const features = [
    {
      id: 1,
      header: "Effective Management of Food Logistics",
      content:
      <dl >
      <dt className=" font-bold" >Streamlining Inventory Control and Distribution Practices</dt>
      <dd className="mt-1">
      Efficient logistics management is essential for maintaining smooth operations. Zenith Eclipse implements advanced inventory control, quality checks, and compliance to handle the complexities of food supply chains with precision
      </dd>


    </dl>
    },
    {
      id: 2,
      header: "Managing Risks and Regulatory Compliance in Food Logistics",
      content: 
      <dl >
          <dt className=" font-bold" >Identifying Risks and Adhering to International Standards</dt>
          <dd className="mt-1">
          With a strong focus on risk management and regulatory compliance, Zenith Eclipse ensures that food products are handled safely, meeting international and national standards to prevent disruptions and maintain quality.
          </dd>


        </dl>
    },
    {
      id: 3,
      header: "Temperature Control and Compliance for Perishable Goods",
      content: <p >
        As a global freight forwarder, Zenith Eclipse simplifies the transportation journey. Acting as the vital link between shippers and carriers, we facilitate the seamless movement of goods from origin to destination. Our team handles all documentation, meets regulatory standards, and coordinates schedules to ensure a hassle-free shipping experience. We design strategic transportation plans that optimize shipping schedules while securing the best rates for your business.
      </p>
    },
    {
      id: 4,
      header: "Maintaining Optimal Temperatures with Advanced Systems",
      content: 
      <dl >
      <dt className=" font-bold" >Maintaining Optimal Temperatures with Advanced Systems</dt>
      <dd className="mt-1">
      Temperature fluctuations can compromise the safety and quality of perishable goods. Zenith Eclipse utilizes advanced temperature control systems to monitor conditions, ensuring that products reach their destination in perfect condition.
      </dd>


    </dl>
    },
    {
      id: 5,
      header: "Route Planning and Cold Chain Management",
      content: 
      <dl >
      <dt className=" font-bold" >Optimizing Routes for Speed and Efficiency</dt>
      <dd className="mt-1">
      Zenith Eclipse uses GPS tracking and real-time analysis to plan efficient routes for cold chain logistics, ensuring timely and safe delivery of temperature-sensitive goods like fresh produce, dairy, and meats.
      </dd>

    </dl>
    },
    {
      id: 6,
      header: "Comprehensive Food and Beverage Logistics Services",
      content:
      <dl >
      <dt className=" font-bold" >Air and Ocean Freight Solutions Tailored to Your Needs</dt>
      <dd className="mt-1">
      Offering a range of services from air freight to ocean reefer containers, Zenith Eclipse provides tailored logistics for food and beverage products. Our innovative warehousing and consolidation services streamline your supply chain.
      </dd>

    </dl>

    },
    {
      id: 10,
      header: "Strategic Advisory Services and Freshness Optimization",
      content:
      <dl >
      <dt className=" font-bold" >Consulting Solutions for Maximizing Quality and Efficiency</dt>
      <dd className="mt-1">
      Zenith Eclipse provides expert consulting to enhance the freshness and quality of fruits and vegetables, helping businesses meet consumer demand with premium offerings.
      </dd>


    </dl>

    },
    {
      id: 11,
      header: "Dedicated to Innovation and Excellence in Food Logistics",
      content:
      <dl >
      <dt className=" font-bold" >Adapting to the Evolving Needs of the Food Industry</dt>
      <dd className="mt-1">
      Zenith Eclipse stays ahead of industry trends with logistics solutions designed to enhance efficiency and adaptability. Our commitment to innovation ensures the highest standards of freshness, safety, and quality in food logistics.
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
                <h1 className="h1-design ">Temperature Controlled Logistics<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./servicesImage/WhatsApp Image 2024-11-22 at 9.12.02 PM.jpeg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Food Logistics Solutions & Cold Chain Management for the Evolving Industry</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        
        <div className="pp-part1">
          <h1 className="ph1">
          Customized Food Logistics for the Ever-Changing Market
          </h1>
          <h1 className="ph2">
          Staying Cool and Agile in Food and Beverage Supply Chains
          </h1>
          <p>
          In the rapidly shifting food and beverage logistics landscape, it’s critical to keep up with changing consumer demands while maintaining product freshness. Zenith Eclipse specializes in tailored logistics solutions for the food industry, offering innovative packaging and detailed case studies to support global distribution.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Embracing Technological Advancements in Food Logistics
          </h1>
          <h1 className="ph2">
          Leveraging IoT and Smart Sensors for Freshness and Efficiency
          </h1>
          <p>
          Zenith Eclipse utilizes cutting-edge technologies like IoT, smart sensors, and blockchain to ensure efficient and reliable food logistics, addressing infrastructure limitations and enhancing supply chain responsiveness.
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

export default TCL
