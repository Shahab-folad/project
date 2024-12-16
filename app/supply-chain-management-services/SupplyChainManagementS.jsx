'use client'

import { IoIosArrowDown } from "react-icons/io";

import { motion } from 'framer-motion';

import { useState, useEffect } from "react";


const SupplyChainManagementS = () => {

  const features = [
    {
      id: 1,
      header: "Tailored Business and Supply Chain Solutions",
      content:
      <dl >
      <dt className=" font-bold" >Customized Strategies to Meet Unique Business Needs</dt>
      <dd className="mt-1">
      At Zenith Eclipse, we understand that every business is unique. We create customized business management and supply chain solutions to address logistics costs, service quality, and strategic goals, all while supporting your growth objectives.
      </dd>


    </dl>
    },
    {
      id: 2,
      header: "Cutting-Edge Network Engineering",
      content: 
      <dl >
          <dt className=" font-bold" >Optimizing Freight, Routing, and Distribution</dt>
          <dd className="mt-1">
          We leverage advanced modeling techniques to design efficient freight options, routing networks, and distribution hubs. Our network engineering is adaptable and aligned with your business management strategies, ensuring cost-effective and scalable solutions.
          </dd>


        </dl>
    },
    {
      id: 3,
      header: "Procurement and Logistics Management",
      content: 
      <dl >
          <dt className=" font-bold" >Optimizing Procurement for Transportation and Warehousing</dt>
          <dd className="mt-1">
          Our procurement strategies cover air, sea, and land transportation, as well as warehousing and customs handling. Using automated performance data and industry insights, we enhance logistics efficiency, driving proactive business control and improved profitability
          </dd>


        </dl>
    },
    {
      id: 4,
      header: "Managing Logistics Partners with a Data-Driven Approach",
      content: 
      <dl >
      <dt className=" font-bold" >Comprehensive Oversight and Coordination for Supply Chain Success</dt>
      <dd className="mt-1">
      Zenith Eclipse takes a data-focused approach to selecting and managing logistics providers, ensuring seamless integration with your supply chain goals. Through real-time data and operational supervision, we ensure that logistics decisions align with your business objectives, driving efficiency and long-term success.
      </dd>


    </dl>
    },
    {
      id: 5,
      header: "Proactive Operations Management for Excellence",
      content: 
      <dl >
      <dt className=" font-bold" >Staying Ahead of Market Shifts with Real-Time Data</dt>
      <dd className="mt-1">
      Our proactive approach to operations management ensures service excellence, utilizing real-time data and operational tactics to swiftly address discrepancies. Zenith Eclipse is committed to delivering value-added services that enhance your competitive edge in logistics.
      </dd>


    </dl>
    },
    {
      id: 6,
      header: "Strengthening Your Supply Chain for Resilience",
      content:
      <dl >
      <dt className=" font-bold" >Partnering for Success with Unmatched Expertise</dt>
      <dd className="mt-1">
      By partnering with Zenith Eclipse, you gain access to extensive supply chain knowledge and years of experience. Our team works closely with yours to enhance and streamline logistics activities, ensuring a resilient, efficient, and sustainable supply chain that drives your business forward.
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
                <h1 className="h1-design ">Bussiness And Financial Management<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./servicesImage/WhatsApp Image 2024-11-22 at 10.00.56 PM.jpeg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Business Management Solutions & Supply Chain Efficiency for Market Growth</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        
        <div className="pp-part1">
          <h1 className="ph1">
          Comprehensive Business Management for Supply Chain Optimization
          </h1>
          <h1 className="ph2">
          Mastering Supply Chain Operations with Customized Business Solutions
          </h1>
          <p>
          Zenith Eclipse offers expert Business Management and Financial Management services, providing customized solutions to help you overcome supply chain disruptions and market challenges. We streamline your operations, so you can focus on business growth and brand expansion while ensuring customer satisfaction.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Enhancing Resource Allocation and Business Performance
          </h1>
          <h1 className="ph2">
          Maximizing Resource Use for Growth and Efficiency
          </h1>
          <p>
          Our business management strategies identify inefficiencies and optimize resource allocation, promoting better decision-making and long-term business development. Zenith Eclipse partners with you to navigate supply chain complexities, ensuring your business thrives in a competitive landscape.
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

export default SupplyChainManagementS
