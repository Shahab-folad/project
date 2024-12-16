'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const SupplyChainSolution = () => {

  const features = [
    {
      id: 1,
      header: "International Logistics and Cross-Border Solutions",
      content:
      <dl >
      <dt className=" font-bold" >Navigating Trade Regulations and Cross-Border Compliance</dt>
      <dd className="mt-1">
      Zenith Eclipse excels at managing international trade complexities, including customs regulations, tariffs, and documentation, ensuring smooth global distribution while allowing clients to expand without facing logistical barriers
      </dd>


    </dl>
    },
    {
      id: 2,
      header: "Sustainable Transportation Practices",
      content: 
      <dl >
          <dt className=" font-bold" >Reducing Carbon Footprint with Eco-Friendly Logistics</dt>
          <dd className="mt-1">
          Through the use of eco-friendly vehicles, optimized routes, and sustainable fuel options, Zenith Eclipse reduces environmental impact while maintaining cost efficiency in logistics operations.
          </dd>


        </dl>
    },
    {
      id: 3,
      header: "Enhancing Last Mile Delivery for Cost Savings and Customer Satisfaction",
      content: 
      <dl >
          <dt className=" font-bold" >Fast and Efficient Last Mile Solutions</dt>
          <dd className="mt-1">
          Zenith Eclipse’s last mile delivery services use the latest technologies and local networks to ensure fast, dependable deliveries that reduce costs and improve customer satisfaction
          </dd>


        </dl>
    },
    {
      id: 4,
      header: "Reverse Logistics and Waste Reduction",
      content: 
      <dl >
      <dt className=" font-bold" >
      Efficient Returns Management for Sustainability and Cost Efficiency
      </dt>
      <dd className="mt-1">
      Our reverse logistics solutions handle returns and recycling with efficiency, reducing waste and reclaiming value for businesses while ensuring customer satisfaction.
      </dd>


    </dl>
    },
    {
      id: 5,
      header: "Cross Docking to Streamline Supply Chain Operations",
      content: 
      <dl >
      <dt className=" font-bold" >
      Cutting Down on Storage Costs and Delivery Times
      </dt>
      <dd className="mt-1">
      Zenith Eclipse implements cross docking to move shipments directly to outbound vehicles, cutting storage expenses and speeding up delivery times for an agile, cost-effective supply chain.
      </dd>


    </dl>
    },
    {
      id: 6,
      header: "Customized Logistics Solutions for Industry-Specific Needs",
      content:
      <dl >
      <dt className=" font-bold" >
      Tailored Solutions for Pharmaceutical, Transportation, and Food Industries
      </dt>
      <dd className="mt-1">
      We collaborate with businesses across various sectors to create customized logistics solutions that address specific challenges, such as business continuity, supplier management, and transportation system optimization.
      </dd>


    </dl>

    },
    {
      id: 10,
      header: "Client Relationship Management (CRM) for Superior Service",
      content:
      <dl >
      <dt className=" font-bold" >Enhancing Customer Service with CRM Systems</dt>
      <dd className="mt-1">
      By utilizing CRM systems, we foster strong relationships with clients, efficiently organizing customer data and interactions to deliver superior logistics solutions tailored to individual needs.
      </dd>


    </dl>

    },
    {
      id: 11,
      header: "Demand Forecasting and Big Data Analytics",
      content:
      <dl >
      <dt className=" font-bold" >Anticipating Future Trends for Optimized Inventory</dt>
      <dd className="mt-1">
      Zenith Eclipse uses advanced demand forecasting techniques and big data analytics to predict customer needs, helping businesses optimize inventory levels and adjust production schedules to meet market demands.
      </dd>

      </dl>
    },
    {
      id: 12,
      header: "Risk Management and Regulatory Compliance",
      content:
      <dl >
      <dt className=" font-bold" >Ensuring Supply Chain Continuity with Proactive Risk Mitigation</dt>
      <dd className="mt-1">
      Our risk management and compliance services ensure supply chain resilience by identifying and mitigating potential disruptions, guaranteeing continuity in global logistics operations.
      </dd>

      </dl>
    },
    {
      id: 13,
      header: "Lean Operations with Six Sigma and Lean Manufacturing",
      content:
      <dl >
       
      <dt className="mt-4 font-bold" >Reducing Waste and Enhancing Efficiency</dt>
      <dd className="mt-1">
      Zenith Eclipse applies Six Sigma and lean manufacturing principles to improve production efficiency, reduce waste, and ensure that each stage of the supply chain adds value to your business.
      </dd>

      </dl>
    },
    {
      id: 14,
      header: "Warehouse Management Systems (WMS) and ERP for Efficiency",
      content:
      <dl >
       
      <dt className="mt-4 font-bold" >Streamlining Warehouse Operations and Inventory Control</dt>
      <dd className="mt-1">
      By integrating WMS and ERP systems, Zenith Eclipse improves warehouse efficiency and coordination across all supply chain functions, ensuring seamless order fulfillment and inventory management.
      </dd>

      </dl>
    },
    {
      id: 15,
      header: "Cutting Edge Technology for Supply Chain Optimization",
      content:
      <dl >
       
      <dt className="mt-4 font-bold" >
      Blockchain, IoT, and AI-Driven Solutions for Transparency
      </dt>
      <dd className="mt-1">
      Zenith Eclipse leverages advanced technologies such as blockchain, IoT devices, and AI analytics to revolutionize supply chain operations, offering transparency, real-time tracking, and data-driven decision-making.
      </dd>

      </dl>
    },
    {
        id: 16,
        header: "Tailored Supply Chain Solutions for Transportation and Food Industries",
        content:
        <dl >
       
      <dt className="mt-4 font-bold" >
      Specialized Solutions for Temperature-Sensitive Goods
      </dt>
      <dd className="mt-1">
      With a focus on the transportation and food sectors, Zenith Eclipse provides customized logistics solutions, including temperature-controlled transport, live tracking, and industry-standard compliance to ensure safe and timely delivery.
      </dd>

      </dl>
      },
      {
        id: 17,
        header: "Essential Components of Supply Chain Management",
        content:
        <dl >
       
      <dt className="mt-4 font-bold" >
      Warehousing and Distribution for Cost-Effective Logistics
      </dt>
      <dd className="mt-1">
      Zenith Eclipse offers advanced warehousing solutions to ensure proper inventory management and timely distribution, reducing costs and increasing overall supply chain efficiency.
      </dd>

      </dl>
      },
      {
        id: 18,
        header: "Tailored Logistics for Unique Business Requirements",
        content:
        <dl >
       
      <dt className="mt-4 font-bold" >
      Customized Solutions for Complex Logistics Challenges
      </dt>
      <dd className="mt-1">
      At Zenith Eclipse, we avoid a one-size-fits-all approach. Our custom-tailored logistics solutions address specific business challenges, optimizing operations, reducing costs, and improving supply chain flexibility.
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
                <h1 className="h1-design ">Supply Chain Solutions<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./servicesImage/WhatsApp Image 2024-11-22 at 10.01.56 PM.jpeg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">
                    Supply Chain Management Solutions & 4PL Services for Business Growth
                </h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        
        <div className="pp-part1">
          <h1 className="ph1">
          Advanced Supply Chain Strategies for Today’s Businesses
          </h1>
          <h1 className="ph2">
          Mastering All Aspects of Supply Chain Operations
          </h1>
          <p>
          Zenith Eclipse specializes in refining every part of your supply chain, from sourcing to delivery, with a strong focus on regulatory adherence. Using advanced analytics, data-driven solutions, and optimization methods, we maximize the efficiency and effectiveness of your supply chain. 
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Fourth Party Logistics (4PL) for Enhanced Integration
          </h1>
          <h1 className="ph2">
          Global Sourcing, Distribution Networks, and Supply Chain Optimization
          </h1>
          <p>
          Our cutting-edge 4PL services go beyond standard logistics to manage and integrate resources and technology, providing global sourcing options, collaborative planning, and forecasting to enhance your supply chain’s performance.
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

export default SupplyChainSolution
