'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const Millet = () => {

  const features = [
    {
      id: 1,
      header: "Expert Farming and Global Distribution Practices",
      content:
        <dl className="px-2">
            <p>Our dedication to sustainable farming and global distribution has placed us at the forefront of the millet supply chain, catering to both consumer and industrial needs.</p>

          <dt className="text-lg mt-4 font-bold" >Meeting Stringent Quality Standards</dt>
          <dd className="mt-1">Millet quality is determined by factors such as:</dd>
          <ul className="list">
            <li>Grain size</li>
            <li>Color</li>
            <li>Moisture levels</li>
            <li>Nutrient composition</li>
          </ul>
          <p className="mt-1">By adhering to strict quality benchmarks, we ensure that our millet stands out in the market, offering maximum health benefits and culinary versatility.</p>

        </dl>
    },
    {
      id: 2,
      header: "Effective Millet Cultivation Techniques",
      content: 
      <dl className="px-2">
    <dt className="text-lg mt-4 font-bold" >Pest and Disease Management</dt>
    <dd className="mt-1">We employ advanced pest control strategies to minimize crop damage from insects and diseases, ensuring healthy millet growth throughout the crop lifecycle.</dd>
    <ul className="list">
      <li>Grain size</li>
      <li>Color</li>
      <li>Moisture levels</li>
      <li>Nutrient composition</li>
    </ul>

    <dt className="text-lg mt-4 font-bold" >Soil Preparation and Weed Management</dt>
    <dd className="mt-1">Proper soil preparation and weed management are essential for a successful millet harvest. Our approach includes:</dd>
    <ul className="list">
      <li>Soil enrichment with organic materials</li>
      <li>Optimized water retention</li>
      <li>Fostering root development</li>
    </ul>
    <dt className="text-lg mt-4 font-bold" >Irrigation and Fertilization</dt>
    <dd className="mt-1">We utilize efficient irrigation systems to distribute water evenly, supporting optimal millet growth and drought resilience. Our customized fertilization methods ensure the crop receives the necessary nutrients to enhance both quality and quantity.</dd>
  </dl>
    },
    {
      id: 3,
      header: "Key Phases of Millet Production",
      content: 
      <dl className="px-2">
      <dt className="text-lg mt-4 font-bold" >Sowing and Threshing</dt>
      <dd className="mt-1">Precision sowing ensures high crop density and uniformity, setting the foundation for top-quality millet production. Threshing, the process of separating the grain from the husk, is carried out with advanced techniques to preserve the nutritional value and quality of the millet.</dd>
  
      <dt className="text-lg mt-4 font-bold" >Seed Selection and Planting</dt>
      <dd className="mt-1">We carefully select seeds to ensure a strong growth cycle. By using proven planting methods, we boost both yield and nutrient content, delivering superior products to our customers.</dd>
    </dl>
    },
    {
      id: 4,
      header: "Gluten-Free and Organic Millet Options",
      content: <p className="px-2">Our millet is certified gluten-free, making it a safe option for individuals with gluten sensitivities or those following gluten-free diets. We also prioritize organically grown millet, ensuring it is free from pesticides and fertilizers, providing a nutritious and eco-friendly grain.</p>
    },
    {
      id: 5,
      header: "Varieties of Red and Yellow Millet",
      content: 
      <dl className="px-2">
      <dt className="text-lg mt-4 font-bold" >Red Millet</dt>
      <dd className="mt-1">Red millet is prized for its rich flavor and sturdy texture, making it ideal for:</dd>
      <ul className="list">
        <li>Hearty stews</li>
        <li>Pilafs</li>
        <li>Side dishes</li>
      </ul>
      <p className="mt-1">It is also rich in antioxidants, providing significant health benefits.</p>
  
      <dt className="text-lg mt-4 font-bold" >Yellow Millet</dt>
      <dd className="mt-1">Yellow millet offers a mild flavor and light texture, perfect for:</dd>
      <ul className="list">
        <li>Porridges</li>
        <li>Baking</li>
        <li>Savory and sweet dishes</li>
      </ul>
      <p className="mt-1">It is a great source of magnesium and phosphorus, essential for bone health and energy production.</p>
    </dl>
    },
    {
      id: 6,
      header: "Global Logistics and Distribution of Millet",
      content:
      <dl className="px-2">
      <dt className="text-lg mt-4 font-bold" >Cutting-Edge Infrastructure</dt>
      <dd className="mt-1">We employ modern storage facilities and an advanced transportation network to ensure that our millet is delivered fresh and on time to destinations worldwide.</dd>
  
      <dt className="text-lg mt-4 font-bold" >Diverse Transportation Solutions</dt>
      <dd className="mt-1">Our logistics services include road, rail, and sea transport, enabling us to serve customers across diverse locations. Whether for bulk distribution or niche markets, we meticulously manage every step of the logistics process.</dd>
      
      <dt className="text-lg mt-4 font-bold" >Worldwide Reach</dt>
      <dd className="mt-1">Our global distribution network spans:</dd>
      <ul className="list">
        <li>Europe</li>
        <li>Asia</li>
        <li>Africa</li>
        <li>The Americas</li>
      </ul>
      <p className="mt-1">We pride ourselves on navigating international trade landscapes efficiently to deliver millet to various markets.</p>
    </dl>

    },
    {
      id: 10,
      header: "Commitment to Excellence and Sustainability",
      content:
      <dl className="px-2">
      <dd className="mt-1">At Zenith Eclipse Co, we are committed to upholding the highest standards of business ethics and sustainability. Our farming and distribution practices not only ensure customer satisfaction but also promote environmental health.</dd>
  
      <dt className="text-lg mt-4 font-bold" >Innovative Farming Practices</dt>
      <dd className="mt-1">By combining innovative farming techniques with a strong distribution system, we are able to meet the rising demand for eco-friendly grains on a global scale.</dd>
      
      <dt className="text-lg mt-4 font-bold" >Sustainable Business Practices</dt>
      <dd className="mt-1">We support local communities by sharing sustainable agriculture knowledge and engaging in outreach programs that promote nutritional education. Our premium millet represents our dedication to fostering healthier lifestyles and supporting environmental stewardship.</dd>
    </dl>

    },
    {
      id: 11,
      header: "Why Zenith Eclipse Co is Your Trusted Wheat Supplier",
      content:
        <p>From farm to table, Zenith Eclipse Co is committed to delivering top-quality, non-GMO wheat to global markets. Our innovative farming methods, sustainable practices, and reliable logistics ensure that every grain of wheat meets the highest standards of purity and quality.</p>
    }
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
                <h1 className="h1-design ">Millet<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Millet.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Premier Supplier of High-Quality Red and Yellow Millet
                </h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        <div className="pp-part1">
          <p>
          We take pride in being a supplier of premium red and yellow millet. Millet, a grain that has nourished civilizations for centuries, is valued for its adaptability, health benefits, and culinary versatility. Our commitment to quality control at every stage—from planting to packaging—ensures that we consistently deliver the finest products to our customers worldwide.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Why Choose Our Premium Millet?
          </h1>
          <h2 className="mb-2 text-lg">Unmatched Quality Control</h2>
          <p>
          We implement rigorous testing and monitoring techniques to ensure that each batch of millet meets our stringent quality standards. This dedication not only enhances the health benefits and culinary flexibility of our millet but also solidifies our reputation as a trusted supplier in the global market.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Nutritional Benefits of Millet
          </h1>
          <p>
          Millet is packed with essential vitamins and minerals, including:
          </p>
          <ul className="list">
            <li>Magnesium</li>
            <li>Phosphorus</li>
            <li>Fiber</li>
          </ul>
          <p>These nutrients play a key role in maintaining overall health, making millet an excellent choice for health-conscious individuals. Incorporating millet into a balanced diet promotes a healthier lifestyle.</p>
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

export default Millet
