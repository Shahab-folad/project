'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";
import { motion } from 'framer-motion';



const MultimodalTransportation = () => {

  const features = [
    {
      id: 1,
      header: "The Role of Logistics Hubs in Facilitating Multimodal Transportation",
      content:
      <dl >
        <p>
        Logistics hubs and terminals play a pivotal role in the smooth operation of multimodal and intermodal transport systems. These hubs ensure seamless transitions between transportation modes, reducing transit times and improving delivery reliability. At Zenith Eclipse, our strategically positioned logistics hubs optimize routes, cut costs, and minimize delays.
        </p>
      <dt className="mt-4 font-bold" >
      Evaluating Transportation Options for Optimal Delivery
      </dt>
      <dd className="mt-1">
      Selecting the appropriate mode of transportation—be it air, sea, rail, or road—depends on the nature of the goods, cost, and speed requirements. Each mode offers unique advantages: air for rapid delivery, sea for large volumes, rail for long-distance heavy goods transport, and road for flexible, door-to-door services. By evaluating these options carefully, businesses can ensure timely and cost-effective delivery solutions.
      </dd>

      <dt className="mt-4 font-bold" >
      The Importance of Understanding Multimodal and Intermodal Transportation
      </dt>
      <dd className="mt-1">
      Multimodal transportation operates under a single contract, involving multiple modes of transport, while intermodal transportation utilizes a single loading unit across modes without handling the goods during transitions. Understanding these concepts helps businesses optimize their logistics, ensuring smooth operations and reduced handling risks.
      </dd>


    </dl>
    },
    {
      id: 2,
      header: "Integrated Logistics Services for Streamlined Supply Chain Management",
      content: 
      <dl >
        <p>
        At Zenith Eclipse, our integrated logistics services simplify the transportation process by offering a single point of contact and one contract to manage all transport modes. This approach ensures seamless transitions between modes, resulting in faster deliveries, lower costs, and a streamlined supply chain operation.
        </p>
          <dt className="mt-4 font-bold" >Sustainability in Transportation: The Benefits of Intermodal Services</dt>
          <dd className="mt-1">
          Zenith Eclipse’s intermodal services blend the efficiency of rail with the flexibility of road transport, providing a sustainable alternative to road-only shipments. By utilizing rail for long distances and road for final delivery, our services offer increased capacity, reliable delivery schedules, and reduced environmental impact.
          </dd>

          <dt className="mt-4 font-bold" >
          Leveraging Container Platforms for Multimodal Efficiency
          </dt>
          <dd className="mt-1">
          Container platforms streamline the transportation process by facilitating seamless transitions between different transport modes, such as rail, road, and sea. At Zenith Eclipse, we optimize container usage to reduce handling times, cut costs, and ensure the security of your cargo throughout the transportation journey.
          </dd>

        </dl>
    },
    {
      id: 3,
      header: "Tailored Solutions for Bulk Shippers and Specialized Cargo",
      content: 
      <dl >
      <p>
      Zenith Eclipse provides customized transportation services for bulk shippers, ensuring safe, efficient transport of large volumes of goods. We specialize in handling oversized cargo, agricultural products, and industrial goods, offering tailored solutions that optimize supply chain performance.
      </p>
        <dt className="mt-4 font-bold" >
        Comprehensive Rail, Sea, and Road Solutions for Global Connectivity
        </dt>
        <dd className="mt-1">
        Zenith Eclipse offers a full range of transportation services that span rail, sea, and road, enabling businesses to expand their market reach. Our comprehensive logistics services, including customs clearance, terminal operations, and inland distribution, ensure smooth operations across global supply chains.
        </dd>

        <dt className="mt-4 font-bold" >
        End-to-End Logistics Services with Real-Time Monitoring
        </dt>
        <dd className="mt-1">
        From pickup to final delivery, Zenith Eclipse offers end-to-end logistics solutions, providing real-time tracking and proactive updates on your cargo’s status. Our advanced tracking systems ensure your shipments arrive on time, offering peace of mind through comprehensive logistics management.
        </dd>

      </dl>
    },
    {
      id: 4,
      header: "Embracing Innovation for Supply Chain Optimization",
      content: 
       <p>
        At Zenith Eclipse, we continuously embrace innovation to enhance service quality and operational efficiency. By adopting emerging technologies, we ensure that your goods are transported efficiently, sustainably, and affordably, supporting your business’s growth and success.
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
                <h1 className="h1-design ">Multimodal & intermodal Transportation<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./servicesImage/WhatsApp Image 2024-11-22 at 10.00.49 PM.jpeg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Innovative Multimodal Transportation & Supply Chain Solutions</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        
        <div className="pp-part1">
          <h1 className="ph1">
          Embracing Future Logistics Trends for Optimized Transportation
          </h1>
          <p>
          Looking ahead, the logistics industry is focusing on groundbreaking technologies such as self-driving vehicles, drone deliveries, and blockchain for secure, transparent transactions. These developments are set to enhance efficiency, cut costs, and improve supply chain visibility. At Zenith Eclipse, we stay ahead of the curve by integrating these advanced solutions to benefit our clients, ensuring they access the latest trends in logistics innovation.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph2">
          Navigating Complex Multimodal Transportation Challenges
          </h1>
          <p>
          Managing various transportation modes can present significant challenges, including aligning carrier schedules, navigating differing regulations across regions, and managing disruptions such as weather delays or geopolitical issues. Zenith Eclipse’s expertise in handling these complexities ensures seamless cross-border operations and successful multimodal logistics implementation.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph2">
          Maximizing the Benefits of Different Transport Modes
          </h1>
          <p>
          Multimodal transportation enables businesses to capitalize on the strengths of each transport mode. By leveraging air for speed, sea for bulk shipments, rail for cost-effectiveness, and road for final-mile delivery, businesses can achieve cost-efficient, reliable logistics operations that meet specific shipment needs. This adaptability enhances both efficiency and resilience in the supply chain.
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

export default MultimodalTransportation
