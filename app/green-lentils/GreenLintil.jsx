'use client'

import { IoIosArrowDown } from "react-icons/io";

import { motion } from 'framer-motion';


import { useState, useEffect } from "react";


const GreenLintil = () => {

  const features = [
    {
      id: 1,
      header: "Precision in Planting and Harvesting",
      content:
        <dl className="px-2">
          <dt className="text-lg mt-4 font-bold" >Timing and Depth for Optimal Yield</dt>
          <dd className="mt-1">
            The timing and depth of planting are crucial for maximizing both yield and quality. By carefully planning the planting schedule and adjusting the planting depth, we ensure that our lentil plants thrive from the start, resulting in flavorful and nutritious crops.
          </dd>

          <dt className="text-lg mt-4 font-bold">Seed Selection and Harvesting Techniques</dt>
          <dd>Our process begins with selecting the highest-quality seeds to guarantee resilient, nutrient-rich plants. We utilize advanced harvesting techniques that minimize damage to the lentils, preserving their natural flavor and nutritional content.</dd>

        </dl>
    },
    {
      id: 2,
      header: "Efficient Processing and Storage for Premium Lentils",
      content: 
      <dl className="px-2">
          <dt className="text-lg mt-4 font-bold" >Post-Harvest Handling</dt>
          <dd className="mt-1">
          After harvesting, we focus on controlling temperature and humidity to keep our lentils in optimal storage conditions. By managing these factors, we preserve the flavor, texture, and nutrients of our lentils while preventing spoilage.
          </dd>

          <dt className="text-lg mt-4 font-bold">Cleaning and Drying Process</dt>
          <dd>
          Our lentils undergo a thorough cleaning process to remove any impurities and unwanted substances, ensuring purity and quality. The drying process is carefully controlled to reduce moisture content, increasing shelf life and maintaining the lentils’ premium quality.

          </dd>

        </dl>
    },
    {
      id: 3,
      header: "Health Benefits of Green Lentils",
      content: 
      <dl className="px-2">
          <dt className="mt-4 " >Green lentils offer numerous health benefits, making them an excellent addition to any diet:</dt>
          <dd className="mt-1">
          <ul className="list mt-2">
            <li className="mt-1">Rich in Plant-Based Protein: A valuable protein source, especially for vegetarians and vegans.</li>
            <li className="mt-1">High in Fiber: Supports digestive health and helps regulate blood sugar levels.</li>
            <li className="mt-1">Packed with Nutrients: Contains essential vitamins and minerals like iron, folate, and magnesium, promoting overall well-being.</li>
          </ul>
          </dd>


        </dl>
    },
    {
      id: 4,
      header: "Global Logistics and Distribution",
      content: 
      <dl className="px-2">
      <dt className="text-lg mt-4 font-bold" >Advanced Storage Facilities</dt>
      <dd className="mt-1">
      Our lentils are stored in state-of-the-art climate-controlled facilities to maintain freshness and prevent spoilage, ensuring that our products arrive in the best possible condition.
      </dd>

      <dt className="text-lg mt-4 font-bold">Diverse Transportation Methods</dt>
      <dd>We utilize a combination of:</dd>
      <ul className="list mt-2">
        <li>Road</li>
        <li>Rail</li>
        <li>Sea transport</li>
      </ul>
    <p className="mt-2">This guarantees timely and efficient delivery of our lentils to markets across Europe, Asia, the Americas, and beyond.</p>
    </dl>
    },
    {
      id: 10,
      header: "Commitment to Sustainability and Excellence",
      content:
        <p>
          At Zenith Eclipse Co, we are dedicated to sustainability, from field to table. Our green lentils are cultivated using eco-friendly farming methods that minimize environmental impact and promote soil health. We ensure that our customers receive not only a product but a premium ingredient that supports both personal health and environmental well-being.
        </p>

    },
    {
      id: 11,
      header: "Why Choose Zenith Eclipse Co for Your Green Lentils?",
      content:
      <dl className="px-2">

      <dt className="mt-4 ">
      Our green lentils are perfect for a wide range of culinary applications—from salads and soups to innovative plant-based meals. When you choose Zenith Eclipse Co, you choose:
      </dt>
      <ul className="list mt-2">
        <li>Exceptional quality</li>
        <li>Sustainable farming practices</li>
        <li>Reliable global distribution</li>
      </ul>
    <p className="mt-2">Our green lentils are a reflection of our commitment to excellence, sustainability, and a healthier planet.</p>
    </dl>
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
                <h1 className="h1-design ">Green Lentils<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Green Lentils.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Premier Supplier of High-Quality Green Lentils</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        <div className="pp-part1">
          <p>
          We take pride in offering premium quality green lentils, an essential ingredient in healthy diets worldwide. Our green lentils are carefully harvested from the fertile fields of the Northern Steppes, known for their hearty texture and subtly peppery taste. We prioritize sustainable farming practices and meticulous quality control to ensure that each batch of our lentils meets the highest standards. 
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1-lg ">
          Superior Quality from Sustainable Farming
          </h1>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Ideal Growing Conditions
          </h1>
          <p>
          The Northern Steppes provide the perfect climate and soil conditions for cultivating green lentils. A temperate climate, fertile soil, and balanced moisture levels contribute to the rich texture and robust flavor of our lentils, making them a preferred choice for consumers seeking high-quality ingredients.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Meticulous Cultivation Techniques
          </h1>
          <p>
          Our lentil farming benefits from:
          </p>
          <ul className="list mt-2">
            <li>Effective weed control</li>
            <li>Precise water management</li>
            <li>Pest prevention strategies</li>
          </ul>
            <p className="mt-2">We use advanced agricultural technology and planning to optimize every stage of the lentil cultivation process. This ensures high yields while maintaining the superior quality of our lentils.</p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Soil and Fertilization Management
          </h1>
          <p>
          We carefully analyze soil composition to determine the optimal nutrients and pH levels required for lentil growth. This allows us to adjust the soil conditions to meet the specific needs of our crops, enhancing both the yield and flavor of our green lentils.
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

export default GreenLintil
