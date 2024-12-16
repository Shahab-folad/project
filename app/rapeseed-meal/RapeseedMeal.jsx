'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';


const RapeseedMeal = () => {

  const features = [
    {
      id: 1,
      header: "Nutritional Benefits of Rapeseed Meal",
      content:
        <dl className="px-2">
          <p>
          Our non-GMO rapeseed meal is crafted with sustainability in mind, providing a valuable source of nutrition for livestock while adhering to environmental standards.
          </p>
          <dt className="text-lg mt-4 font-bold" >Key Nutritional Features:</dt>
          <dd className="mt-1">
          High Protein Content: With a minimum of 36% protein, our meal supports muscle growth and repair in livestock.
          <br />
          Essential Amino Acids: Contains all critical amino acids for maintaining biological functions in animals.
          <br />
          Dietary Fiber: Promotes gut health and supports digestion.
          </dd>

          <dt className="text-lg mt-4 font-bold">Additional Benefits:</dt>
          <dd>Our rapeseed meal also contains beneficial oils that improve livestock skin and coat health while providing a potent energy source. The glucosinolates in rapeseed meal contribute to the immune system, offering protection against certain diseases.</dd>

        </dl>
    },
    {
      id: 2,
      header: "Sustainable and Non-GMO Rapeseed Meal",
      content: <p className="px-2" >
        At Zenith Eclipse Co, we prioritize sustainable farming practices, ensuring that our rapeseed meal is free from genetically modified organisms (GMOs). This commitment to non-GMO practices reflects our dedication to responsible agriculture, providing a product that benefits both animals and the environment.
        <br /><br />
        Our rapeseed meal undergoes rigorous testing to ensure compliance with industry regulations, particularly in regard to erucic acid levels. By monitoring and regulating these levels, we provide a safe and nutritious product that promotes livestock health and well-being.
      </p>
    },
    {
      id: 3,
      header: "Supporting Livestock Health and Performance",
      content: <p className="px-2">
        Rapeseed protein is known for its high-quality composition, making it a valuable alternative for animal feed. The protein’s amino acid profile helps promote muscle growth and supports the overall health of livestock. Additionally, the glucosinolates found in our rapeseed meal can boost the immune system, helping animals resist illnesses.
      </p>
    },
    {
      id: 4,
      header: "Safe Handling and Global Distribution",
      content: 
      <dl className="px-2">
          <p>
          Zenith Eclipse Co excels in the safe management and transportation of products, including those classified as hazardous.
          </p>
          <dt className="text-lg mt-4 font-bold" >Safety Procedures for Hazardous Goods</dt>
          <dd className="mt-1">
          Our logistics team is trained in handling hazardous goods, ensuring strict safety protocols are followed during transit to minimize any potential risks. This guarantees the secure and safe delivery of our rapeseed meal worldwide.
          </dd>

          <dt className="text-lg mt-4 font-bold">Secure Transport System</dt>
          <dd>
          We use specialized transportation techniques to maintain the quality and integrity of our rapeseed meal throughout the delivery process. Our global logistics capabilities ensure that Zenith Eclipse Co can efficiently ship rapeseed meal to international markets, providing reliable and timely delivery.
          </dd>

        </dl>
    },
    {
      id: 5,
      header: "Partner with Zenith Eclipse Co for Premium Rapeseed Meal",
      content: <p className="px-2">
        Choosing Zenith Eclipse Co as your trusted rapeseed meal supplier guarantees your livestock receives a high-protein, non-GMO feed that promotes their health and performance. Our focus on safety, combined with our expertise in logistics and hazardous goods handling, ensures that each delivery meets the highest standards of safety and excellence.
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
                <h1 className="h1-design ">Rapeseed Meal<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Rapseeds Meal.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Rapeseed Meal Supplier & Bulk Rapeseed Meal for Animal Feed</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        <div className="pp-part1">
          <p>
          Zenith Eclipse Co is proud to offer top-quality rapeseed meal, a highly nutritious byproduct of rapeseed oil extraction, specifically designed to improve livestock health and productivity. With a protein content of 36%, our rapeseed meal is an ideal feed option to support the well-being and growth of various livestock species.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Enhanced Safety and Nutritional Value
          </h1>
          <p>
          Rapeseed contains erucic acid, a fatty acid that has historically raised health concerns. However, modern rapeseed varieties now have significantly reduced erucic acid levels, ensuring both safety and nutritional benefits for animals. At Zenith Eclipse Co, we are committed to improving the quality of our rapeseed products to meet the highest industry standards.
          <br /><br />
          Our rapeseed meal is rich in easily digestible protein, making it an excellent alternative to other protein sources in the animal feed market. This unique protein composition helps promote livestock growth, muscle repair, and overall well-being.
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

export default RapeseedMeal
