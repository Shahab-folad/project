'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const RailTransport = () => {

  const features = [
    {
      id: 1,
      header: "Establishing Rail Connections Between China and Europe",
      content:
      <dl >
      <dt className=" font-bold" >Tailored Rail Freight Services for the China-Europe Corridor</dt>
      <dd className="mt-1">
      We provide customized services to link China with Europe via rail, offering a more cost-efficient alternative to ocean freight while reducing transit times. Through advanced planning and real-time tracking systems, Zenith Eclipse ensures smooth long-distance transportation, connecting two of the world’s key economic regions with precision and reliability.
      </dd>


    </dl>
    },
    {
      id: 2,
      header: "Complete Logistics Services and Freight Management",
      content: 
      <dl >
          <dt className=" font-bold" >Seamless Coordination Across the Supply Chain</dt>
          <dd className="mt-1">
          Zenith Eclipse offers end-to-end logistics and freight management services that ensure every step of your transportation journey is expertly handled. Our comprehensive approach includes seamless coordination between different modes of transport and adherence to regulatory standards, reducing delays and enhancing overall efficiency.
          </dd>


        </dl>
    },
    {
      id: 3,
      header: "Utilizing Container Platforms for Optimized Operations",
      content: 
      <dl >
          <dt className=" font-bold" >Modular Solutions for Flexible Transportation</dt>
          <dd className="mt-1">
          Container platforms have revolutionized logistics by offering modular solutions for moving goods. At Zenith Eclipse, we leverage the flexibility of container platforms to optimize your supply chain operations. These platforms facilitate smooth transitions between rail, road, and sea transport, ensuring your cargo remains secure and arrives on time.
          </dd>


        </dl>
    },
    {
      id: 4,
      header: "Sea & Rail Transport – Optimized Multimodal Solutions",
      content: 
      <dl >
      <dt className=" font-bold" >
        Integrated Ocean, Land, and Rail Transport Services
        </dt>
      <dd className="mt-1">
      Our Sea & Rail service is designed to navigate fluctuating shipping rates and capacities, providing streamlined end-to-end solutions that integrate ocean, land, and rail transportation. This service connects major ports in Asia to Europe, ensuring smooth transitions and efficient handling at dedicated hubs.
      </dd>
    </dl>
    },
    {
      id: 5,
      header: "Specialized Freight Cars for Enhanced Rail Transport",
      content: 
      <dl >
      <dt className=" font-bold" >
      Hopper Wagons for Efficient Bulk Transport
        </dt>
      <dd className="mt-1">
      Hopper wagons are essential for transporting bulk goods like grains, minerals, and fertilizers. These specialized freight cars allow for streamlined loading and unloading processes, leading to time and cost savings. By incorporating hopper wagons into our logistics solutions, we ensure the efficient movement of goods while maintaining quality throughout the journey.
      </dd>
    </dl>
    },
    {
      id: 6,
      header: "Environmental and Economic Benefits of Rail Transport",
      content:
      <dl >
      <dt className=" font-bold" >
      Reduced Emissions and Enhanced Efficiency
        </dt>
      <dd className="mt-1">
      Rail transport offers significant environmental benefits, including reduced carbon emissions and fuel consumption, while efficiently handling large volumes of freight. By integrating rail transport into your supply chain, Zenith Eclipse ensures an eco-friendly and cost-effective solution that enhances logistics performance.
      </dd>
    </dl>

    },
    {
      id: 10,
      header: "Tailored Services for Bulk Shippers",
      content:
      <dl >
      <dt className=" font-bold" >Custom Solutions for Large-Volume Freight</dt>
      <dd className="mt-1">
      Zenith Eclipse specializes in providing services for bulk shippers, ensuring the safe and efficient transportation of large volumes of goods. With extensive experience in managing shipments for industries such as agriculture, mining, and manufacturing, we offer customized solutions that meet the unique demands of your business.
      </dd>


    </dl>

    },
    {
      id: 11,
      header: "Comprehensive Range of Rail Services",
      content:
      <dl >
      <dt className=" font-bold" >
      Integrated Customs Clearance and Terminal Operations
      </dt>
      <dd className="mt-1">
      Our full range of rail services includes customs clearance, terminal logistics, and inland distribution, ensuring timely and compliant border crossings, efficient terminal operations, and reliable deliveries to final destinations. Our advisory services provide expert guidance for both national and international transport systems.
      </dd>

      </dl>
    },
    {
      id: 12,
      header: "Rail Connections Between Asia and Europe for Seamless Transport",
      content:
      <dl >
      <dt className=" font-bold" >
      Reliable Rail Freight Across Key Eurasian Routes
      </dt>
      <dd className="mt-1">
      Zenith Eclipse offers tailored rail solutions connecting Asia with Europe, providing reliable services across critical routes through China and all CIS nations. Our solutions are designed to overcome transportation challenges, offering flexibility and comprehensive oversight to ensure smooth and dependable logistics.
      </dd>

      </dl>
    },
    {
      id: 13,
      header: "Optimized Multimodal Transport for Maximum Efficiency",
      content:
      <dl >
      <dt className="mt-4 font-bold" >Seamless Integration of Sea, Rail, and Road Logistics</dt>
      <dd className="mt-1">
      Our intermodal trains and container platforms allow for efficient integration of sea, rail, and road transport, enhancing the connectivity of supply chains. Specialized tankers handle liquid cargo such as chemicals, food-grade products, and fuels, ensuring safe and efficient delivery.
      </dd>

      </dl>
    },
    {
      id: 14,
      header: "Efficient Door-to-Door Services for Seamless Delivery",
      content:
      <dl >
      <dt className="mt-4 font-bold" >Real-Time Tracking and Secure Cargo Management</dt>
      <dd className="mt-1">
      From pickup to delivery, Zenith Eclipse offers strategic door-to-door services with real-time tracking and robust security measures. This ensures the safety and timeliness of your cargo, providing transparency and reliability at every stage of the journey.
      </dd>

      </dl>
    },
    {
      id: 15,
      header: "Environmental and Economic Advantages of Rail Transport",
      content:
      <dl >
      <dt className="mt-4 font-bold" >Sustainable Solutions for a Greener Supply Chain</dt>
      <dd className="mt-1">
      By choosing rail transport, you contribute to reduced CO2 emissions and enhanced supply chain efficiency. Zenith Eclipse ensures your logistics operations are both eco-friendly and cost-effective, offering a sustainable transportation solution that benefits both your business and the environment.
      </dd>

      </dl>
    },
    {
        id: 16,
        header: "Why Choose Zenith Eclipse for Rail Transport Solutions?",
        content:
        <dl >
        <dt className="mt-4 font-bold" >Extensive Network and Speedy, Cost-Effective Services</dt>
        <dd className="mt-1">
        Zenith Eclipse offers unparalleled rail transport services with extensive connections across CIS countries and China. Our solutions provide a balance between speed and cost-effectiveness, ensuring optimal delivery times and efficient service.
        </dd>
  
        </dl>
      },
      {
        id: 17,
        header: "Comprehensive Support and Risk Management for All Shipments",
        content:
        <dl >
        <dt className="mt-4 font-bold" >End-to-End Assistance for Rail Freight Operations</dt>
        <dd className="mt-1">
        From handling customs procedures to providing cargo insurance, Zenith Eclipse offers comprehensive support and risk management for all aspects of rail freight. With regular departures and reliable service, we manage your entire supply chain with precision and care.
        <br /><br />
        Zenith Eclipse is committed to supporting your success through reliable rail solutions that optimize your supply chain operations across Europe and Asia.
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
    <div className='px-5 md:px-10 max-w-[1400px] lg:m-auto'>
      <div className="product-container">
            <div className="product-header ">
              {/* ****** */}
              <div className="product-title item1">
                <h1 className="h1-design ">Railway Transport<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./servicesImage/WhatsApp Image 2024-11-22 at 10.01.26 PM.jpeg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Rail Transport Solutions for Global Logistics Efficiency</h1>
                <div className="pp-part1">
                <p className="-ml-4">
                Zenith Eclipse leads the way in maximizing the efficiency, cost-effectiveness, and sustainability of rail transport to strengthen your supply chain capabilities. With vast experience and strategic partnerships with rail operators, we offer tailored rail-based transportation solutions that ensure the reliable movement of your goods across extensive networks. Our services cover all CIS countries and the critical China railway routes, positioning us as a frontrunner in Eurasian logistics.
                </p>
              </div>
              </div>
            </div>
      </div>
{/*********************************************************************************************/}
{/******************************************Form***********************************************/}

{/**********************************************************************************/}
{/**********************************************************************************/}




      <div className="product-description">
    
        
        <div className="pp-part1">
          <h1 className="ph1">
          Extensive Rail Network for Seamless Global Transportation
          </h1>
          <h1 className="ph2">
          Efficient Rail Services from Europe to Central Asia
          </h1>
          <p>
          Our rail services extend beyond one region, facilitating transportation from Europe to Central Asia. This corridor is vital for businesses aiming to expand their market presence and streamline supply chains. By utilizing our efficient rail systems, you benefit from secure and timely deliveries across significant regions, supported by our expertise in overcoming logistical challenges.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Dependable and Economical Rail Transport Solutions
          </h1>
          <h1 className="ph2">
          Cost-Effective Long-Distance Rail Freight
          </h1>
          <p>
          Trains are a key component of our logistics solutions, offering an economical and efficient means of shipping goods over long distances. Our expertise includes handling oversized cargo, ensuring safe transport for large or complex shipments such as equipment, industrial parts, or construction materials. With specialized railway cars and engineering methods, we guarantee careful handling for even the most challenging logistics.
          </p>
        </div>

      </div>
{/**********************************************************************************/}
{/**********************************************************************************/}

        <div className='my-20' >
          {
            features.map((feature, index) => (
              <div key={feature.id} className=" px-1 fontR  py-2 my-5">
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

export default RailTransport
