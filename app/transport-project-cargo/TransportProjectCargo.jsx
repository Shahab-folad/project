'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const TransportProjectCargo = () => {

  const features = [
    {
      id: 1,
      header: "Industry Expertise: Oil, Gas, and Energy Projects",
      content:
      <dl >
      <dt className=" font-bold" >Specialized Logistics for the Oil and Gas Industry</dt>
      <dd className="mt-1">
      Zenith Eclipse boasts extensive experience in managing logistics for oil and gas projects. Whether it’s transporting drilling rigs or pipelines, our team is equipped to handle the planning and execution required for timely and safe deliveries.
      </dd>

      <dt className="mt-4 font-bold" >Cranes and Rigging for Heavy Lifting Projects</dt>
      <dd className="mt-1">
      Our crane and rigging expertise ensures the secure transportation of oversized loads, using advanced equipment to handle and position cargo with precision. This capability is essential for managing large-scale industrial projects.
      </dd>


    </dl>
    },
    {
      id: 2,
      header: "Comprehensive Risk Assessment and Regulatory Compliance",
      content: 
      <dl >
          <dt className=" font-bold" >Proactive Risk Management for Smooth Operations</dt>
          <dd className="mt-1">
          Before initiating any project, our team conducts detailed risk assessments to identify potential challenges and implement effective strategies to mitigate them. This proactive approach ensures smooth and efficient project cargo operations.
          </dd>

          <dt className="mt-4 font-bold" >Navigating Customs Clearance and Regulatory Requirements</dt>
          <dd className="mt-1">
          Zenith Eclipse handles all aspects of customs clearance and regulatory compliance, ensuring that your cargo adheres to the rules of each country and region. By staying up-to-date with the latest regulations, we prevent delays and streamline the logistics process.
          </dd>


        </dl>
    },
    {
      id: 3,
      header: "Multimodal Transport Solutions for Project Cargo",
      content: 
      <dl >
          <dt className=" font-bold" >Sea, Air, and Land Transportation for Heavy Shipments</dt>
          <dd className="mt-1">
          Our multimodal transport solutions guarantee the safe delivery of large and heavy shipments using a combination of sea, air, and road transportation. This approach ensures flexibility, efficiency, and reduced transit times for global deliveries
          </dd>

          <dt className="mt-4 font-bold" >Advanced Route Planning for Secure Transportation</dt>
          <dd className="mt-1">
          By leveraging advanced route planning technologies and collaborating with trusted partners, we ensure that even the most challenging shipments are transported safely from start to finish. Our integrated logistics solutions optimize transportation routes to meet diverse client needs.
          </dd>


        </dl>
    },
    {
      id: 4,
      header: "Specialized Equipment and Customized Logistics Solutions",
      content: 
      <dl >
          <dt className=" font-bold" >Utilizing Modular Units for Adaptable Project Cargo Logistics</dt>
          <dd className="mt-1">
          At Zenith Eclipse, we use modular units designed for easy assembly and disassembly to provide flexible and efficient solutions for transporting project cargo. These units are tailored to meet the specific requirements of each shipment.
          </dd>

          <dt className="mt-4 font-bold" >Transporting Machinery, Equipment, and Heavy Cargo</dt>
          <dd className="mt-1">
          We specialize in the safe and efficient transportation of machinery, equipment, and oversized cargo. Our team ensures that each shipment is securely handled and transported, minimizing the risk of damage during transit.
          </dd>


        </dl>
    },
    {
      id: 5,
      header: "Holistic Multimodal Logistics Solutions",
      content: 
      <dl >
          <dt className=" font-bold" >Seamless Integration of Rail, Road, and Sea Transport</dt>
          <dd className="mt-1">
          Zenith Eclipse offers comprehensive multimodal logistics solutions that seamlessly integrate rail, road, and sea transport. This ensures full visibility and optimal efficiency throughout your project cargo’s journey, from loading to delivery.
          </dd>

          <dt className="mt-4 font-bold" >Comprehensive On-Site Assembly and Support</dt>
          <dd className="mt-1">
          In addition to transportation, we provide on-site assembly and logistics support, ensuring that your project cargo is delivered and assembled with precision. Our expertise includes managing cranes, rigging, and heavy equipment for complex projects.
          </dd>


        </dl>
    },
    {
      id: 6,
      header: "Supporting Infrastructure Development with Advanced Logistics",
      content:
      <dl >
      <dt className=" font-bold" >Innovative Cranes and Rigging Services</dt>
      <dd className="mt-1">
      Our specialized crane and rigging services are essential for handling heavy machinery and oversized equipment. Zenith Eclipse’s team is skilled in the latest rigging techniques, ensuring safe and efficient lifting and transportation processes.
      </dd>

      <dt className="mt-4 font-bold" >Consulting Services and Project Logistics Planning</dt>
      <dd className="mt-1">
      We offer consulting services and logistics planning to help clients navigate complex logistics projects. Our global network and expertise ensure smooth operations, from permits and regulations to transportation execution.
      </dd>


    </dl>

    },
    {
      id: 10,
      header: "Turnkey Solutions for Project Cargo Logistics",
      content:
      <dl >
      <dt className=" font-bold" >Managing Every Aspect of Your Project’s Logistics</dt>
      <dd className="mt-1">
      Zenith Eclipse offers turnkey project logistics services, handling everything from factory relocations to on-site logistics management. Our full-service approach guarantees efficient, transparent, and reliable project cargo operations.
      </dd>

      <dt className="mt-4 font-bold" >Customized Insurance and Risk Management Solutions</dt>
      <dd className="mt-1">
      To ensure peace of mind, we offer customized insurance packages tailored to the specific needs of your project cargo. This coverage includes protection against damage during transit and delays due to unforeseen events.
      </dd>


    </dl>

    },
    {
      id: 11,
      header: "Conclusion: Your Partner in Project Cargo Success",
      content:
      <p>
        Zenith Eclipse is your trusted partner for managing the complexities of project cargo logistics. With innovative technologies, expert handling, and a commitment to exceeding client expectations, we deliver peace of mind and operational excellence for every project.
      </p>
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
                <h1 className="h1-design ">Transport Project Cargo<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./servicesImage/WhatsApp Image 2024-11-22 at 8.48.38 PM.jpeg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Expert Project Cargo & OOG Cargo Services</h1>
                <div className="pp-part1 ">
                  <div className="-ml-4">
                  <h1 className="ph1">
                  Mastering Complex Logistics with Expert Project Cargo Solutions
                  </h1>
                  <p>
                  At Zenith Eclipse, we specialize in overcoming the most intricate logistical challenges through tailored project cargo solutions. Our global reputation as a leader in project cargo logistics means we don’t just meet your needs—we surpass them. With a team of experienced professionals and innovative strategies, we manage the most complex and challenging shipments, ensuring timely and safe deliveries.
                  </p>
                  </div>
                </div>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        <div className="pp-part1">
          <h1 className="ph1">
          Mastering Complex Logistics with Expert Project Cargo Solutions
          </h1>
          <p>
          At Zenith Eclipse, we specialize in overcoming the most intricate logistical challenges through tailored project cargo solutions. Our global reputation as a leader in project cargo logistics means we don’t just meet your needs—we surpass them. With a team of experienced professionals and innovative strategies, we manage the most complex and challenging shipments, ensuring timely and safe deliveries.
          </p>
          <h1 className="ph2 pt-8">
          Expertise in Project Cargo Logistics
          </h1>
          <p>
          The term “project cargo” refers to the specialized transport of heavy and complex items requiring unique handling and transportation solutions. At Zenith Eclipse, our expertise ensures that no load is too large or complex for us to handle. We meticulously plan each route, adhering to all regulations and delivering oversized cargo safely and efficiently.
          </p>
          <h1 className="ph2 pt-8">
          Custom-Tailored Solutions for Complex Cargo
          </h1>
          <p>
          We go beyond the ordinary to offer personalized solutions for every project. Whether it’s through specialized handling methods, custom insurance options, or developing infrastructure, we tailor our services to meet the unique challenges of project cargo logistics.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Infrastructure Expansion to Support Advanced Logistics
          </h1>
          <h1 className="ph2 pt-4">
          State-of-the-Art Warehousing and Specialized Handling Equipment
          </h1>
          <p>
          At Zenith Eclipse, we continuously invest in expanding infrastructure to enhance our logistics capabilities. Our state-of-the-art warehouses and specialized equipment enable us to handle high volumes of project cargo with precision, meeting and exceeding client expectations.
          </p>
          <h1 className="ph2 pt-8">
          Handling Oversized and Heavy Cargo with Precision
          </h1>
          <p>
          Our team excels in handling oversized and heavy cargo, including machinery, construction materials, and industrial components. With cutting-edge cranes, rigging equipment, and securement methods, we ensure that even the most challenging shipments are handled safely and efficiently.
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

export default TransportProjectCargo
