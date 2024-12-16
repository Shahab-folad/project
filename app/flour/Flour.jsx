'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const Flour = () => {

  const features = [
    {
      id: 1,
      header: "Wheat Bran – Nutritious Animal Feed",
      content:
       <p>
        At Zenith Eclipse Co, we also produce nutrient-rich wheat bran, a byproduct of our milling process. This high-fiber product is an excellent addition to animal feed, supporting digestive health and boosting overall productivity in livestock. Our wheat bran is formulated to enhance the wellbeing of farm animals, making it an essential component of nutritious livestock diets.
       </p>
    },
    {
      id: 2,
      header: "Commitment to Quality and Safety",
      content: 
      <p>
        At Zenith Eclipse Co, quality control is a core focus. Each batch of flour is rigorously tested to ensure it meets the highest standards for purity, performance, and consistency. We take pride in maintaining strict sanitation and safety measures throughout the production process, from grain selection to final packaging.
        <br /><br />
        We also implement magnet maintenance in our milling facilities to remove any metal impurities, ensuring that our flour remains pure and free from contamination. This attention to detail guarantees that every product delivered to our customers is of top quality.
      </p>
    },
    {
      id: 3,
      header: "Specialized Fortified Flour",
      content: <p >
        In addition to our standard flour offerings, Zenith Eclipse Co provides fortified flour, enriched with essential vitamins and minerals. This product is ideal for customers seeking to boost their intake of nutrients without compromising on taste or quality. It’s perfect for both culinary professionals and individuals looking to enhance their diets with added nutrition.
      </p>
    },
    {
      id: 4,
      header: "Modern Milling and Packaging",
      content: <p >
        Our state-of-the-art milling technology in the Northern Steppes ensures that we deliver superior flour products with consistent quality. Our grains are carefully processed to retain their nutritional value, while our packaging solutions ensure that every batch is protected from moisture, pests, and contamination during storage and transit.
        <br /><br />
        By employing modern storage techniques, we ensure that our flour stays fresh for extended periods, maintaining its nutritional benefits until it reaches our global customers.
      </p>
    },
    {
      id: 5,
      header: "Global Distribution and Expertise",
      content: <p className="px-2">
        Zenith Eclipse Co, operates a sophisticated delivery system, allowing us to efficiently distribute our flour and bran products to customers worldwide. Our commitment to excellence in both product quality and service has earned us a leading position in the global flour industry.
      </p>
    },
    {
      id: 6,
      header: "Choose Zenith Eclipse Co for All Your Flour and Bran Needs",
      content:
        <p>
          Whether you’re baking gourmet desserts, producing artisan bread, or looking to enhance your animal feed with nutrient-rich wheat bran, Zenith Eclipse Co delivers top-quality products designed to exceed expectations. Our state-of-the-art facilities, combined with a commitment to innovation and sustainability, ensure that you receive the best in every grain.
          <br /><br />
          Rely on Zenith Eclipse Co for the finest flour and bran products. Experience the ultimate in quality, service, and global reach in the flour industry.
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
                <h1 className="h1-design ">Flour<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Flour.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Trusted wheat Flour Supplier & Leading Wholesale Flour Distributor</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        <div className="pp-part1">
          <p>
          Zenith Eclipse Co offers a wide range of premium flour options, meticulously crafted to meet various culinary and animal feed needs. From high-grade baking flour for desserts to nutrient-rich wheat bran for animal feed, each product is made with precision to ensure top-quality nutrition and performance.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Premium Flour for Baking and Pastries
          </h1>
          <p>
          Our premium sort flour is a favorite among chefs and home bakers alike. With its fine texture and low protein content, it’s perfect for making cakes, pastries, and other delicate baked goods. This flour ensures that every dessert turns out light, fluffy, and flavorful.
          <br /><br />
          For bread and bakery products, Zenith Eclipse Co’s first sort flour is expertly milled to enhance gluten formation, delivering elasticity and strength to the dough. This makes it ideal for baking artisan breads, rolls, and other bakery items, providing the perfect balance of rise and crumb structure that bakers seek.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Whole Wheat Flour for Healthy Baking
          </h1>
          <p>
          Our whole wheat flour, made from the entire wheat kernel, is packed with fiber, vitamins, and minerals. It’s the perfect choice for health-conscious bakers who want to create nutritious bread, muffins, and other baked goods that are as wholesome as they are delicious.
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

export default Flour
