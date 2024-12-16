'use client'

import { motion } from 'framer-motion';


import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";



const Propylene = () => {

  const features = [
    {
      id: 1,
      header: "Versatile Applications of Propylene",
      content:
        <dl >
            <p>
            Propylene’s flexibility makes it indispensable across several key industrial sectors:
            </p>
          <dt className="mt-4 font-bold" >Plastics Manufacturing</dt>
          <dd className="mt-1">
          Propylene plays a central role in producing polypropylene, a highly versatile plastic polymer used in automotive components, consumer goods, and medical devices. Our propylene meets the stringent demands of the plastics industry, contributing to the development of durable and reliable products.
          </dd>

          <dt className=" mt-4 font-bold">
          Synthetic Fiber Production
          </dt>
          <dd>
          Used in the creation of synthetic fibers for textiles and upholstery, propylene offers strength, durability, and versatility. Our propylene is formulated to deliver consistent performance, ensuring top-quality results in fiber production.
          </dd>

          <dt className=" mt-4 font-bold">
          Solvent Production
          </dt>
          <dd>
          Propylene is a key ingredient in the production of solvents used in paints, coatings, and cleaning products. The high purity and consistency of our propylene make it ideal for solvent manufacturing, where reliability and performance are critical.
          </dd>

          <dt className=" mt-4 font-bold">Chemical Additives and Compounds</dt>
          <dd>
          Propylene also plays a vital role in producing chemical compounds and additives that enhance the performance and durability of various products, including plastics and top-quality coatings and adhesives.
          </dd>

        </dl>
    },
    {
      id: 2,
      header: "Commitment to Sustainability and Safety",
      content: 
      <dl >
      <p>
      Commitment to Sustainability and Safety
      </p>
    <dt className="mt-4 font-bold" >Environmentally Friendly Practices</dt>
    <dd className="mt-1">
    At Zenith Eclipse Co, sustainability is at the heart of our operations. We strive to minimize our environmental impact by utilizing eco-friendly production techniques that reduce waste and emissions. Our energy-efficient technologies and sustainable materials ensure that propylene production is as environmentally conscious as possible.
    </dd>

    <dt className=" mt-4 font-bold">
    Stringent Safety Measures
    </dt>
    <dd>
    Given the nature of propylene, we adhere to the highest safety standards for handling, storage, and transportation. Our advanced safety protocols protect our staff, clients, and the environment, ensuring that our operations are conducted safely and responsibly.
    </dd>

  </dl>
    },
    {
      id: 3,
      header: "Global Distribution Network",
      content: 
      <dl >
      <p>
      Zenith Eclipse Co’s robust logistics network ensures the secure distribution of propylene worldwide. Our global distribution capabilities are tailored to meet the needs of our diverse clientele, ensuring that our propylene reaches its destination in perfect condition.
      </p>
    <dt className="mt-4 font-bold" >Safe and Reliable Transportation</dt>
    <dd className="mt-1">
    Our professional logistics team utilizes advanced equipment and technologies to transport propylene safely over long distances, ensuring the purity and integrity of the product throughout the process.
    </dd>

    <dt className=" mt-4 font-bold">
    Extensive Distribution Reach
    </dt>
    <dd>
    With our broad distribution network, we can efficiently serve global clients, ensuring timely and reliable delivery of propylene regardless of location. We partner with trusted logistics providers to guarantee prompt delivery.
    </dd>

  </dl>
    },
    {
      id: 4,
      header: "Why Choose Us for Your Propylene Needs?",
      content: 
      <dl >
      
    <dt className=" font-bold" >Industry Expertise</dt>
    <dd className="mt-1">
    With extensive experience in the petrochemical sector, Zenith Eclipse Co is a trusted name in propylene supply. Our deep industry knowledge allows us to understand our clients’ unique needs and provide customized solutions to meet those requirements.
    </dd>

    <dt className=" mt-4 font-bold">
    Customer Satisfaction
    </dt>
    <dd>
    Customer satisfaction is at the core of everything we do. Our team of experts is dedicated to providing exceptional service, answering any questions or concerns, and ensuring a smooth and positive experience for our clients.
    </dd>
    <dt className=" mt-4 font-bold">
    Innovation and Quality
    </dt>
    <dd>
    At Zenith Eclipse Co, we prioritize innovation and quality in every aspect of our operations. Our cutting-edge manufacturing facilities and stringent quality control procedures guarantee that our propylene products meet the highest standards of purity and performance.
    </dd>

  </dl>
    },
    {
      id: 5,
      header: "Contact Us for Premier Propylene Solutions",
      content: 
      <dl >
      
      <dt className=" font-bold" >Extensive Industry Knowledge</dt>
      <dd className="mt-1">
      If you’re interested in learning more about our propylene products and services, contact us today. Trust Zenith Eclipse Co to be your reliable partner for all your propylene needs, offering top-tier solutions designed to ensure your industry’s success.
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
                <h1 className="h1-design ">Propylene Supplier<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Propylene.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Premier Propylene Solutions <br /> Leading the Way in Industrial Innovation</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        
        <div className="pp-part1">
          <h1 className="ph1">
          Top-Quality Propylene from Zenith Eclipse Co
          </h1>
          <p>
          We are supplying top-quality propylene, a vital petrochemical used across multiple industries. From plastics to synthetic fibers and solvents, propylene serves as a critical component for producing a variety of goods. With our commitment to delivering quality and service, we provide propylene that not only meets but exceeds the stringent requirements of modern industrial applications.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Unmatched Propylene Quality
          </h1>
          <h1 className="ph2">
          High Purity Manufacturing
          </h1>
          <p>
          Our propylene is renowned for its purity and consistent performance, both of which are crucial for its diverse applications. Using state-of-the-art production techniques, our propylene is refined to achieve maximum purity, ensuring optimal performance in chemical processes and product formulations. This high-purity manufacturing process is essential for applications where reliability and efficiency are paramount.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph2">
          Stringent Quality Control
          </h1>
          <p>
          Every batch of our propylene undergoes rigorous quality inspections to uphold the high standards expected by our customers. Our quality control measures guarantee that our propylene consistently meets industry standards and client needs, making it the preferred choice for manufacturers worldwide.
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

export default Propylene
