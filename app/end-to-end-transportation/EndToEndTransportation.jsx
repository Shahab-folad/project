'use client'

import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion';


import { useState, useEffect } from "react";



const EndToEndTransportation = () => {

  const features = [
    {
      id: 1,
      header: "Effective Supply Chain Management",
      content:
        <dl >
          <dt className=" font-bold" >Coordination Across the Supply Chain</dt>
          <dd className="mt-1">
          Managing the flow of goods, information, and finances from suppliers to customers is critical. Our supply chain management expertise ensures smooth coordination across all stages, driving operational efficiency and reducing costs.
          </dd>

        </dl>
    },
    {
      id: 2,
      header: "Route Optimization for Enhanced Efficiency",
      content: 
      <dl >
          <dt className=" font-bold" >Optimizing Delivery Routes</dt>
          <dd className="mt-1">
          Through careful analysis of traffic, delivery schedules, and fuel consumption, we ensure that each shipment follows the most efficient route, resulting in faster delivery times, cost savings, and a reduced environmental footprint.
          </dd>

        </dl>
    },
    {
      id: 4,
      header: "Comprehensive Logistics Management Solutions",
      content: <p >
        Our logistics management approach integrates cutting-edge technologies and skilled professionals to ensure smooth functioning at every stage of your supply chain. From route optimization to storage solutions, we adapt to your evolving business needs, guaranteeing seamless operations.
      </p>
    },
    {
      id: 5,
      header: "Proactive Supply Chain Management",
      content: 
      <dl >
          <dt className=" font-bold" >Delivering Peace of Mind</dt>
          <dd className="mt-1">
          At Zenith Eclipse, logistics management goes beyond tracking shipments—we provide peace of mind. We proactively anticipate challenges and adjust to real-time data, ensuring that your supply chain remains agile and efficient, even when unexpected issues arise..
          </dd>

        </dl>
    },
    {
      id: 6,
      header: "Full-Service Logistics from Start to Finish",
      content:
      <dl >
      <dt className=" font-bold" >Top-Tier Service and Cost Savings</dt>
      <dd className="mt-1">
      By addressing transport routes, warehouse needs, and inventory management, Zenith Eclipse is committed to delivering superior logistics services from start to finish. Our focus on efficiency not only reduces costs but also minimizes environmental impact.
      </dd>

    </dl>

    },
    {
      id: 10,
      header: "Streamlined Logistics Management with Advanced Technology",
      content:
      <dl >
      <dt className=" font-bold" >Supervision and Control Across the Supply Chain</dt>
      <dd className="mt-1">
      With our comprehensive logistics model, we offer supervision and control over the entire shipping process, utilizing advanced technologies to ensure that deliveries are on time and meet quality standards at every stage.
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
                <h1 className="h1-design ">End-To-End Transportations<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./servicesImage/endToend.jpeg"  alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Comprehensive Freight Forwarding Solutions & Efficient Supply Chain Management</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        
        <div className="pp-part1">
          <h1 className="ph1">
          Understanding Your Unique Freight Forwarding Needs
          </h1>
          <p>
          We make it a priority to thoroughly understand your specific logistics and freight forwarding requirements before offering tailored solutions. By managing every aspect of the supply chain, from production to final delivery, we enhance efficiency at each stage of the process, ensuring top-quality service throughout.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Customized Procurement Services
          </h1>
          <p>
          Our procurement services are fully aligned with your logistics needs, ensuring that sourcing and purchasing processes flow seamlessly within your supply chain. Leveraging our procurement expertise allows you to secure high-quality materials at the best prices, boosting efficiency and cost-effectiveness.
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

export default EndToEndTransportation
