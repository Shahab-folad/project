'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';


const RoadTransport = () => {

  const features = [
    {
      id: 1,
      header: "Customized Transportation Options to Meet Your Needs",
      content:
      <dl >
      <dt className=" font-bold" >Flexible Less Than Truckload (LTL) Solutions for Cost Efficiency</dt>
      <dd className="mt-1">
      We provide a range of road transport services tailored to your specific needs, including Less Than Truckload (LTL) options. Our LTL solutions help businesses optimize their supply chain with cost-effective shipping, allowing multiple shipments to be consolidated, reducing overall transportation costs.
      </dd>


    </dl>
    },
    {
      id: 2,
      header: "Extensive Logistics and Freight Services for End-to-End Solutions",
      content: 
      <dl >
          <dt className=" font-bold" >Comprehensive Freight Management from Start to Finish</dt>
          <dd className="mt-1">
          Our logistics and freight services ensure the seamless movement of goods from origin to destination. Zenith Eclipse takes care of warehousing, packaging, customs clearance, and delivery, providing a full suite of logistics services designed to meet your specific business needs with care and precision.
          </dd>


        </dl>
    },
    {
      id: 3,
      header: "Competitive Pricing and Transparent Operations",
      content: 
      <dl >
          <dt className=" font-bold" >Real-Time Visibility and Cost-Effective Solutions</dt>
          <dd className="mt-1">
          Zenith Eclipse offers competitive pricing, real-time shipment updates, and full visibility across all transportation modes. With our transparent billing and communication, you can be confident that your goods will remain on schedule, and you’ll have full control over your shipments from start to finish.
          </dd>


        </dl>
    },
    {
      id: 4,
      header: "Sustainable and Eco-Friendly Logistics Solutions",
      content: 
      <dl >
      <dt className=" font-bold" >Promoting Responsible and Eco-Friendly Transportation Practices</dt>
      <dd className="mt-1">
      At Zenith Eclipse, we are committed to promoting sustainable logistics solutions that comply with environmental regulations. By adopting eco-friendly transportation practices, we not only safeguard the environment but also help businesses optimize their operations while reducing their carbon footprint.
      </dd>


    </dl>
    },
    {
      id: 5,
      header: "Dedicated Account Management for Seamless LTL Services",
      content: 
      <dl >
      <dt className=" font-bold" >
      Advanced Cross-Border LTL Services with Full Support
      </dt>
      <dd className="mt-1">
      For businesses requiring cross-border shipments, Zenith Eclipse offers advanced Less Than Truckload (LTL) services with full account management. Benefit from simplified invoicing, flexible service options, and online tools that provide detailed insights and rate evaluations to meet your specific shipping requirements.
      </dd>


    </dl>
    },
    {
      id: 6,
      header: "Fast and Reliable Trucking Logistics Management",
      content:
      <dl >
      <dt className=" font-bold" >
      Partner with Zenith Eclipse for Expert Transportation Solutions
      </dt>
      <dd className="mt-1">
      When you partner with Zenith Eclipse, you gain access to expert trucking logistics management that ensures the smooth and reliable transportation of your goods from start to finish. Our fast delivery options, combined with customer-friendly platforms, make managing your logistics operations effortless and efficient.
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
                <h1 className="h1-design ">Road Transport<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./servicesImage/WhatsApp Image 2024-11-22 at 9.12.12 PM.jpeg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Truck Transport Logistics</h1>
                <div className="pp-part1">
                  <p className="-ml-3">
                  At Zenith Eclipse, we are recognized for providing long-distance trucking services that ensure on-time and efficient deliveries for every shipment. Whether handling local cargo or cross-border transportation, we utilize telematics and GPS technology to optimize routes and ensure punctual deliveries. With a versatile fleet and capacity, we tailor our services to meet your evolving needs.
                  </p>
                </div>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        
        <div className="pp-part1">
          <h1 className="ph1">
          Complete Road Transport Solutions for Optimal Efficiency
          </h1>
          <h1 className="ph2">
          Versatile and Comprehensive Road Transport Services
          </h1>
          <p>
          Road transport plays a critical role in today’s logistics industry, facilitating the seamless movement of goods across terrains and distances. With our expertise and advanced logistics management, we offer comprehensive road transport services, from last-mile deliveries to cross-border shipments, ensuring efficiency and flexibility at every stage.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Expert Handling of Specialized Cargo with Precision
          </h1>
          <h1 className="ph2">
          Safe and Reliable Transport for Oversized Cargo
          </h1>
          <p>
          Zenith Eclipse specializes in handling specialized cargo, offering expert transportation for oversized items such as machinery, construction materials, and industrial components. Our skilled drivers and fleet of specialized vehicles ensure the safe and efficient delivery of your goods, adhering to strict safety protocols and schedules.
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

export default RoadTransport
