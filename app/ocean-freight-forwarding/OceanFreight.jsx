'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';




const OceanFreight = () => {

  const features = [
    {
      id: 1,
      header: "Standardization and Quality Assurance",
      content:
        <p>
            We implement standardized procedures to ensure all our operations align with industry best practices, leading to efficient and dependable global logistics services. This commitment to standardization streamlines processes, minimizes risks, and enhances the overall operational efficiency of our supply chain solutions.
        </p>
    },
    {
      id: 2,
      header: "Reliable Container Shipping Solutions",
      content: 
      <dl >
          <dt className=" font-bold" >Secure and Dependable Shipping</dt>
          <dd className="mt-1">
          Container shipping is integral to our ocean freight services. Our trusted container shipping solutions ensure that your goods are transported efficiently and securely. Using advanced tracking systems and collaborating with port authorities, we meticulously manage each shipment, providing top-tier container shipping solutions that prioritize safety and reliability.
          </dd>


        </dl>
    },
    {
      id: 3,
      header: "Comprehensive Freight Forwarding Services",
      content: <p >
        As a global freight forwarder, Zenith Eclipse simplifies the transportation journey. Acting as the vital link between shippers and carriers, we facilitate the seamless movement of goods from origin to destination. Our team handles all documentation, meets regulatory standards, and coordinates schedules to ensure a hassle-free shipping experience. We design strategic transportation plans that optimize shipping schedules while securing the best rates for your business.
      </p>
    },
    {
      id: 4,
      header: "Cutting-Edge Temperature-Controlled Logistics",
      content: 
      <dl >
      <dt className=" font-bold" >Refrigerated Solutions for Sensitive Goods</dt>
      <dd className="mt-1">
      Zenith Eclipse provides tailored refrigerated logistics solutions for industries requiring strict temperature control, such as pharmaceuticals, food, and technology sectors. With specialized packaging and real-time temperature monitoring, we ensure that delicate shipments meet industry standards, giving clients peace of mind and guaranteed reliability with every delivery.
      </dd>


    </dl>
    },
    {
      id: 5,
      header: "Specialized Vessels for Liquid Transport",
      content: <p >
        Our fleet includes specialized tankers equipped to handle liquid cargoes, including both hazardous and non-hazardous materials. These vessels are outfitted with safety and monitoring systems to ensure the security and compliance of your cargo throughout its voyage.
      </p>
    },
    {
      id: 6,
      header: "Risk Mitigation and Regulatory Compliance",
      content:
        <p>
            
Navigating the complexities of ocean shipping requires adherence to regulations and industry standards. At Zenith Eclipse, we prioritize staying up-to-date on the latest shipping laws and industry guidelines to ensure your shipments remain secure and compliant. Our team of experts continuously monitors regulatory updates and follows best practices to minimize risks and streamline the shipping process, providing you with exceptional service and peace of mind.
        </p>

    },
    {
      id: 10,
      header: "Roll-on/Roll-off Ships and Bulk Carriers",
      content:
      <dl >
      <dt className=" font-bold" >Efficient Transportation for Large Cargo</dt>
      <dd className="mt-1">
      Zenith Eclipse employs Roll-on/Roll-off (RoRo) vessels, known for their efficiency in transporting vehicles like cars, trucks, and trailers. These vessels ensure the smooth transportation of your rolling stock, while our expert team coordinates with carriers to meet your specific large-volume shipping needs.
      </dd>


    </dl>

    },
    {
      id: 11,
      header: "Full Container Load (FCL) Solutions",
      content:
      <dl >
      <dt className=" font-bold" >Cost-Effective and Dependable Shipping</dt>
      <dd className="mt-1">
      Zenith Eclipse offers Full Container Load (FCL) solutions that ensure cost-effective, dependable shipping services. Our strategic approach minimizes environmental impact and secures ship space efficiently. With our advanced tracking system, Zenith Vantage Focus, clients can monitor their shipments in real-time, ensuring transparency and control throughout the shipping process.
      </dd>

      </dl>
    },
    {
      id: 12,
      header: "Comprehensive Logistics Services with Added Value",
      content:
      <p>
        Our all-encompassing service model addresses every aspect of logistics management. By leveraging advanced technologies and streamlined processes, we provide end-to-end management and supervision throughout the shipping journey. From transportation modes to customs clearance services, we enhance your shipping experience with personalized solutions.
      </p>
    },
    {
      id: 13,
      header: "Embracing Innovation and Continuous Development",
      content:
      <dl >
        <p>
        At Zenith Eclipse, innovation drives our operations. We continually improve our service quality and operational efficiency through strategic development initiatives guided by Kaizen principles. With a robust risk management framework and incident response capabilities in place, we consistently strive for excellence in service delivery.
        </p>
      <dt className="mt-4 font-bold" >Optimized Routes and Cost Savings</dt>
      <dd className="mt-1">
      By optimizing transport routes and integrating real-time monitoring technologies, we not only enhance the safety and reliability of shipments but also contribute to substantial cost savings for businesses. Our Project Cargo Team is here to support your specialized cargo needs, with value-added services such as doorstep deliveries, customs clearance support, and insurance options that streamline your shipping processes.
      </dd>

      </dl>
    },
    {
      id: 14,
      header: "Commitment to Sustainability and Client Satisfaction",
      content:
      <p>
        Zenith Eclipse is committed to providing cost-effective solutions that meet your transit time, efficiency, and sustainability goals. We continuously work to enhance your experience through our top-tier services, ensuring you receive the full benefits of partnering with us. Our goal is to exceed your expectations and support your business success.
      </p>
    },
    {
      id: 15,
      header: "Your Global Freight Partner",
      content:
      <p>
        Choose Zenith Eclipse as your trusted partner for global ocean freight solutions. Whether you’re shipping temperature-sensitive goods, large cargo, or seeking cost-effective container solutions, we are dedicated to meeting your logistics needs with precision, reliability, and innovation.
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
                <h1 className="h1-design ">Ocean Freight<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./servicesImage/WhatsApp Image 2024-11-22 at 8.48.22 PM.jpeg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Ocean Freight Forwarding Sea Transport</h1>
                {/*****************  *****************/}
              <div className="pp-part1">
              <p >
              We offer top-tier ocean freight services designed to elevate your supply chain efficiency. By leveraging our vast network and strong partnerships with leading carriers and container ships, we provide reliable and cost-effective logistics solutions that prioritize operational excellence and meet the demands of modern businesses.
              </p>
            </div>
              </div>
              
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
       
        <div className="pp-part1">
          <h1 className="ph1">
          Efficient Shipping Routes
          </h1>
          <p>
          We understand the complexities of global shipping routes, optimizing them to ensure timely deliveries and efficient logistics. Our expertise in navigating international waters allows us to handle shipping routes that adapt to ever-changing regulations and market dynamics. By focusing on well-established routes, we reduce transit times and minimize risks, guaranteeing the smooth and secure transport of your shipments.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Port Connectivity and Global Reach
          </h1>
          <h1 className="ph2">
          Streamlined Port Operations
          </h1>
          <p>
          The connectivity of key global ports is central to our logistics framework, enabling seamless coordination between transportation modes. Through interconnected ports, we optimize operations to decrease transit times and costs, while enhancing the reliability of our shipping services. Our strong partnerships with port authorities worldwide enable us to manage port operations efficiently, preventing delays and ensuring smooth goods movement.
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

export default OceanFreight
