'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const Ethylene = () => {

  const features = [
    {
      id: 1,
      header: "Diverse Industrial Uses of Ethylene",
      content:
        <dl >
            <p>
            Ethylene’s versatility is demonstrated through its crucial role in various industries:
            </p>
          <dt className=" mt-4 font-bold" >Plastics Manufacturing</dt>
          <dd className="mt-1">
          Ethylene is a key ingredient in producing polyethylene, a widely used polymer in packaging, consumer goods, and building materials. We ensure our ethylene meets the specific needs of the plastics industry, contributing to durable, high-quality products.
          </dd>

          <dt className=" mt-4 font-bold">Synthetic Fiber Production</dt>
          <dd>
          Used in manufacturing synthetic fibers, ethylene is essential for creating textiles and upholstery. Our ethylene is optimized for fiber production, ensuring strength, durability, and performance.
          </dd>

          <dt className=" mt-4 font-bold">Chemical Industry Applications</dt>
          <dd>
          Ethylene is the foundation for numerous industrial chemicals, including ethylene oxide, ethylene glycol, and ethylbenzene. Our ethylene’s purity and consistency make it ideal for chemical production, where precision and reliability are critical.
          </dd>

          <dt className=" mt-4 font-bold">Additives and Blends</dt>
          <dd>
          Ethylene also contributes to the production of chemical additives and compounds that enhance product performance and longevity in applications such as coatings, adhesives, and more.
          </dd>

        </dl>
    },
    {
      id: 2,
      header: "Focus on Sustainability and Safety",
      content: 
      <dl >

          <dt className=" mt-4 font-bold" >Environmentally Friendly Practices</dt>
          <dd className="mt-1">
          At Zenith Eclipse Co, sustainability is central to our operations. We implement eco-friendly production techniques to reduce waste and emissions, employing energy-efficient technologies to ensure environmentally responsible ethylene production.
          </dd>

          <dt className=" mt-4 font-bold">Stringent Safety Protocols</dt>
          <dd>
          Given ethylene’s nature, we prioritize safety in its handling, storage, and transportation. We adhere to the highest safety standards to protect our employees, customers, and the environment, ensuring safe and responsible operations at every stage.
          </dd>

        </dl>
    },
    {
      id: 3,
      header: "Global Distribution Network",
      content: 
      <dl>
            <p>
            Zenith Eclipse Co’s logistics network is designed to ensure the secure, global distribution of ethylene. Our extensive distribution capabilities guarantee that our ethylene arrives at its destination in perfect condition:
            </p>
          <dt className=" mt-4 font-bold" >Safe and Reliable Transportation</dt>
          <dd className="mt-1">
          Our ethylene is transported using advanced equipment and technology, ensuring its purity and integrity. We use secure containers and specialized vehicles to maintain product quality during long-distance transport.
          </dd>

          <dt className=" mt-4 font-bold">Broad Distribution Reach</dt>
          <dd>
          With our extensive global network, we efficiently serve clients worldwide, ensuring prompt and reliable delivery, regardless of location. We partner with trusted logistics providers to guarantee timely delivery of ethylene products.
          </dd>

        </dl>
    },
    {
      id: 4,
      header: "Why Choose Us for Ethylene Supply?",
      content: 
      <dl>
      
    <dt className=" mt-4 font-bold" >Industry Expertise</dt>
    <dd className="mt-1">
    With extensive experience in the chemical industry, Zenith Eclipse Co is a trusted name in ethylene supply. We understand our clients’ specific needs and provide tailored solutions that meet their unique requirements.
    </dd>

    <dt className=" mt-4 font-bold">Commitment to Client Satisfaction</dt>
    <dd>
    Customer satisfaction is our top priority. Our dedicated team provides exceptional service and support, ensuring a seamless experience for every client.
    </dd>
    <dt className=" mt-4 font-bold">Innovation and Quality</dt>
    <dd>
    We are committed to innovation and quality at every level. Our state-of-the-art production facilities and stringent quality control processes ensure that our ethylene meets the highest purity and performance standards.
    </dd>

  </dl>
    },
    {
      id: 5,
      header: "Contact Us for Premier Ethylene Solutions",
      content: 
      <dl>
      
      <dt className=" mt-4 font-bold" >Extensive Industry Knowledge</dt>
      <dd className="mt-1">
      If you’re interested in learning more about our ethylene products and services, contact us today. Zenith Eclipse Co is your reliable partner for all your ethylene needs, offering top-tier solutions designed to drive your business forward.
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
                <h1 className="h1-design ">Ethylene Solutions<span className="p-line">___</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Ethylene.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Premier Ethylene Solutions  <br /> Advancing Industrial Excellence</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        
        <div className="pp-part1">
          <h1 className="ph1">
          High-Quality Ethylene from Zenith Eclipse Co
          </h1>
          <p>
          We are supplying top-quality ethylene, a versatile petrochemical essential in various industries. From plastics and synthetic fibers to industrial chemicals, our ethylene meets and exceeds the rigorous demands of modern industrial applications. We are committed to providing exceptional service and unmatched quality.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1 pl-4">
          Unmatched Ethylene Quality
          </h1>
          <h1 className="ph2">
          Advanced Purity Production
          </h1>
          <p>
          Our ethylene is renowned for its purity and performance, essential for diverse applications. Through cutting-edge production methods, we refine ethylene to achieve high levels of purity, ensuring optimal performance in chemical processes and product formulations.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph2">
          Stringent Quality Assurance
          </h1>
          <p>
          Every batch undergoes rigorous quality checks to ensure it meets the high standards expected by our clients. Our meticulous quality assurance guarantees consistent, reliable ethylene, making it the preferred choice for manufacturers worldwide.  
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

export default Ethylene
