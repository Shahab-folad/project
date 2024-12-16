'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";
import { motion } from 'framer-motion';


const LogisticOperationManagement = () => {

  const features = [
    {
      id: 1,
      header: "Innovative Supplier Management System",
      content:
      <dl >
      <dt className=" font-bold" >Strengthen Supplier Relations and Optimize Performance</dt>
      <dd className="mt-1">
      Move away from outdated tools with Zenith Eclipse’s cutting-edge supplier management system. Our innovative platform empowers you to evaluate supplier performance and make strategic decisions that drive business efficiency and enhance supplier relationships.
      </dd>


    </dl>
    },
    {
      id: 2,
      header: "Strategic Planning and Optimized Transportation Routes",
      content: 
      <dl >
          <dt className=" font-bold" >Custom Transportation Strategies for Efficient Shipping</dt>
          <dd className="mt-1">
          Zenith Eclipse specializes in creating customized transportation strategies tailored to your specific shipping needs. Our experts monitor the logistical landscape to quickly adapt to challenges, ensuring the smooth movement of goods and providing value through cost savings and enhanced efficiency.
          </dd>


        </dl>
    },
    {
      id: 3,
      header: "Comprehensive Compliance Oversight and Transparency",
      content: 
      <dl >
          <dt className=" font-bold" >Automated Compliance with Real-Time Data Validation</dt>
          <dd className="mt-1">
          Experience complete transparency and regulatory compliance with Zenith Eclipse’s automated tools. We manage every aspect of your supply chain, ensuring that commitments are honored and standards are met across vendors and regions, simplifying compliance and reducing risk.
          </dd>


        </dl>
    },
    {
      id: 4,
      header: "Innovative Financial Management Solutions for Logistics",
      content: 
      <dl >
      <dt className=" font-bold" >Streamlined Cost Management to Boost Business Growth</dt>
      <dd className="mt-1">
      Zenith Eclipse’s financial management solutions streamline logistics expenses, enabling businesses to generate invoices and share documentation through a unified platform. Our system frees up resources for strategic initiatives, making room for business growth and operational excellence.
      </dd>


    </dl>
    },
    {
      id: 5,
      header: "Cutting-Edge Technology for Supply Chain Optimization",
      content: 
      <dl >
      <dt className=" font-bold" >Enhance Operations and Reduce Costs with Advanced Solutions</dt>
      <dd className="mt-1">
      Combining advanced technology with industry expertise, Zenith Eclipse optimizes supply chain performance to enhance operational efficiency, significantly reduce costs, and offer a competitive edge. Our solutions ensure your business stays ahead in a dynamic logistics landscape.
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
                <h1 className="h1-design ">Elevate Your Operations With Us<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./servicesImage/WhatsApp Image 2024-11-22 at 10.00.36 PM.jpeg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Elevate Your Logistics Operations with Zenith Eclipse Expertise</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        
        <div className="pp-part1">
          <h1 className="ph1">
          Real-Time Supply Chain Management for Improved Control and Visibility
          </h1>
          <h1 className="ph2">
          Enhance Operations with Flexible Transportation Management
          </h1>
          <p>
          Zenith Eclipse offers comprehensive operations management solutions that provide real-time insights and control over transportation modes. With advanced tools for risk mitigation, decision-making, and continuous improvement, we ensure your supply chain runs efficiently and effectively.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Streamlined Order Management for Seamless Execution
          </h1>
          <h1 className="ph2">
          Enhance Operations with Flexible Transportation Management
          </h1>
          <p>
          Revamp your order management system with Zenith Eclipse’s efficient approach. We simplify vendor communications and order fulfillment through streamlined processes and role-specific training, ensuring an optimized order lifecycle management that reduces complexity and improves overall efficiency.
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

export default LogisticOperationManagement
