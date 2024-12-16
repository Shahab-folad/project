'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const SoyaMealSupplier = () => {

  const features = [
    {
      id: 1,
      header: "Preserving Nutritional Integrity",
      content:
      <p>
        Maintaining the optimal moisture levels in our soybean meal is essential to preserving its nutritional value and shelf life. Our state-of-the-art processing facilities closely regulate moisture content, ensuring that each batch retains its full nutritional benefits until it reaches the consumer.
        <br /><br />
        Our soybean meal is recognized by its light color and distinct soybean aroma, a mark of its freshness and premium quality. Ideal for use in animal feed, it supports the growth, health, and productivity of livestock effectively.
      </p>
        
    },
    {
      id: 2,
      header: "Key Quality Features",
      content: 
      <dl className="px-2">
          <dt className="mt-4 font-bold" >Appearance and Fragrance</dt>
          <dd className="mt-1">
          Light color and fresh soybean aroma, indicating premium quality.
          </dd>

          <dt className="mt-4 font-bold">Nutritional Content</dt>
          <dd>
            <br />
            <ul>
                <li>Moisture Content: 8.50%, ensuring freshness and maintaining product integrity.
                </li>
                <br />
                <li>
                Protein Content: Over 49%, providing essential amino acids for livestock growth and development.
                </li>
                <br />
                <li>
                Fat Content: 1.47%, and Crude Fiber: 4.20%, balanced for easy digestion and energy support.
                </li>
            </ul>
          </dd>

          

        </dl>
    },
    {
      id: 3,
      header: "Plant-Based, Non-GMO Soybean Meal",
      content: <p className="px-2">
        Our soybean meal offers a plant-based alternative to traditional animal feed ingredients, promoting sustainable farming practices. As a non-GMO product, it meets the needs of environmentally conscious consumers while providing all the necessary nutrients for livestock without the use of animal byproducts.
      </p>
    },
    {
      id: 4,
      header: "Rigorous Quality Control and Testing",
      content: <p className="px-2">
        Each batch of soybean meal is subjected to thorough testing to ensure it meets the highest quality standards. This includes checks for protein solubility, urease activity, and the deactivation of anti-nutritional factors to improve the nutritional value of the feed. <br /><br />
        We use moisture-proof packaging to protect the meal from contamination during transportation and storage. Proper storage conditions help maintain the freshness and nutritional content of the meal, ensuring that livestock receive the highest quality feed.
      </p>
    },
    {
      id: 5,
      header: "Dedication to Safety and Sustainability",
      content: <p className="px-2">
        At Zenith Eclipse Co, we are dedicated to providing non-GMO soybean meal that reflects our commitment to environmental responsibility. Our advanced processing technology ensures the meal remains free from contaminants while preserving its nutritional value.
      </p>
    },
    {
      id: 6,
      header: "Global Logistics and Distribution Expertise",
      content:
      <dl className="px-2">
        <p>
        Our global logistics team guarantees the safe and efficient delivery of our premium soybean meal to clients worldwide:
        </p>
      <dt className=" mt-4 font-bold" >
      Professional Handling
      </dt>
      <dd className="mt-1">
      Our experienced logistics team specializes in managing and transporting agricultural goods, ensuring that each shipment adheres to strict safety and quality standards.
      </dd>

      <dt className="mt-4 font-bold">Efficient Shipping and Packaging</dt>
      <dd>
      With high-quality packaging and a reliable transportation network, we ensure that our soybean meal arrives in excellent condition.
      </dd>

      <dt className=" mt-4 font-bold">Extensive Distribution Network</dt>
      <dd>
      Our broad distribution capabilities allow us to supply soybean meal to markets around the globe, ensuring timely delivery and consistent quality.
      </dd>

      

    </dl>

    },
    {
      id: 10,
      header: "Why Choose Zenith Eclipse Co?",
      content:
        <p>
         Zenith Eclipse Co offers soybean meal that is not only rich in protein but also safe, non-GMO, and sustainably sourced. Our attention to detail, commitment to quality, and expertise in global distribution make us a trusted leader in the industry. By choosing our soybean meal, you ensure the health and productivity of your livestock while supporting sustainable farming practices.
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
                <h1 className="h1-design ">Soya Meal Supplier<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Soya Meal.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Trusted Soybean Meal Supplier & Premium High-Protein Soya Meal Exporter in bulk.</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        <div className="pp-part1">
          <p>
          We offer premium soybean meal, carefully crafted from high-quality soybeans to provide a rich source of protein for livestock feed. Known for its high protein content and digestibility, soybean meal is an essential ingredient in animal diets, promoting optimal growth and overall well-being.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          High Protein Content for Optimal Livestock Growth
          </h1>
          <p>
          Our soybean meal is recognized for its high crude protein content, which plays a crucial role in supporting muscle growth and overall development in livestock. With a protein content of over 49%, it provides the necessary nutrients to enhance health and productivity in animals. By incorporating our premium soybean meal into livestock rations, farmers can ensure their animals receive the highest-quality protein to support growth and performance.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Sourcing and Contamination Prevention
          </h1>
          <p>
          At Zenith Eclipse Co, we carefully source our soybeans from certified suppliers who follow responsible farming practices. This attention to detail ensures that only the best soybeans are used in our soybean meal, guaranteeing superior quality and consistency.
          <br /><br />
          Our production process includes strict contamination prevention protocols. Each batch undergoes thorough filtration and quality checks to remove any impurities, ensuring the safety and purity of the final product. This commitment to quality means that our soybean meal meets or exceeds industry standards for safety and nutritional value.


          </p>
        </div>

      </div>

        <div className='my-20' >
          {
            features.map((feature, index) => (
              <div key={feature.id} className="px-5 fontR  py-2 my-5">
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

export default SoyaMealSupplier
