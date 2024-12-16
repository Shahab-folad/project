'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const RedLintil = () => {

  const features = [
    {
      id: 1,
      header: "Advanced Agricultural Techniques for Premium Quality",
      content:
        <dl className="px-2">
          <dt className="text-lg mt-4 font-bold" >Innovative Farming Practices</dt>
          <dd className="mt-1">We implement advanced agricultural methods to ensure the high quality of our red lentils, such as:</dd>
          <ul className="list mt-2">
            <li>Crop rotation</li>
            <li>Organic fertilizers</li>
            <li>Pest control</li>
          </ul>
          <p className="mt-2">
          These techniques help to maintain soil nutrients, promote plant health, and prevent disease. Our commitment to sustainable farming methods ensures a rich harvest with superior flavor and nutritional value.
          </p>

          <dt className="text-lg mt-4 font-bold">Precise Harvesting and Seed Cleaning</dt>
          <dd>Harvesting is carried out with precision to reduce damage to the lentils and preserve their natural freshness and flavor. Our stringent seed cleaning processes further guarantee the purity of our lentils, ensuring they meet our high-quality standards.</dd>

        </dl>
    },
    {
      id: 2,
      header: "Football Lentils – Unique and Versatile",
      content: <p className="px-2" >In addition to our traditional red lentils, we also offer football lentils—larger in size and perfect for hearty dishes such as soups and stews. Their robust structure ensures they maintain their shape during cooking, adding texture and visual appeal to any meal.</p>
    },
    {
      id: 3,
      header: "Health Benefits of Red Lentils",
      content: 
      <dl className="px-2">
          <dd className="mt-1">Our red lentils are not only delicious but also offer significant health benefits, including:</dd>
          <ul className="list mt-2">
            <li>Rich in Plant-Based Protein: An excellent protein source for vegetarians, vegans, and those seeking a healthier diet.</li>
            <li>High in Dietary Fiber: Supports digestive health and helps regulate blood sugar levels.</li>
            <li>Packed with Essential Nutrients: Contains important vitamins and minerals like iron, folate, and manganese, promoting overall health and wellness.</li>
          </ul>

          <dt className="text-lg mt-4 font-bold">Split Red Lentils for Quick Meals</dt>
          <dd>We also provide split red lentils, which cook faster than whole lentils, making them ideal for quick and nutritious meals. Their versatility makes them perfect for soups, dals, and a variety of dishes.</dd>

        </dl>
    },
    {
      id: 6,
      header: "Global Logistics and Distribution",
      content:
      <dl className="px-2">
      <dt className="text-lg mt-4 font-bold" >Cutting-Edge Storage Facilities</dt>
      <dd className="mt-1">
      At Zenith Eclipse Co, our lentils are stored in state-of-the-art climate-controlled facilities to ensure they stay fresh and maintain their quality throughout their shelf life.
      </dd>

      <dt className="text-lg mt-4 font-bold">Efficient Transportation and Distribution</dt>
      <dd>We utilize a variety of transportation methods, including:</dd>
      <ul className="list mt-2">
        <li>Rail</li>
        <li>Road</li>
        <li>Sea transport</li>
      </ul>
    <p className="mt-2">This guarantees the timely delivery of our products to customers worldwide. With an extensive distribution network covering Europe, Asia, and other global regions, we ensure our red lentils reach markets efficiently and in perfect condition.</p>
    </dl>

    },
    {
      id: 10,
      header: "Commitment to Quality and Sustainability",
      content:
        <p>
          At Zenith Eclipse Co, our mission extends beyond farming—we are committed to enhancing lives through premium food offerings. Our red lentils are a reflection of this commitment, offering a perfect balance of health benefits, culinary adaptability, and superior quality. Whether used in traditional dishes or innovative recipes, our lentils guarantee exceptional taste and nutrition.
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
                <h1 className="h1-design ">Red lintils<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Red Lentils.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Top Quality Red Lentils Supplier<br /> Premium Lentils for Global Markets</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        <div className="pp-part1">
          <p>
          At Zenith Eclipse Co, we are proud to offer top-quality red lentils, a staple ingredient in cuisines worldwide. Grown in the fertile Northern Steppes, our red lentils stand out for their vibrant hue, smooth texture, and exceptional flavor. Perfect for soups, curries, and traditional dals, they cook to a tender consistency while enhancing the taste of any dish.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Superior Red Lentils from Optimal Growing Conditions
          </h1>
          <h3 className="font-bold">Seed Selection and Planting Techniques</h3>
          <p className="mt-2">
          We carefully select seeds based on characteristics such as:
          </p>
          <ul className="list mt-2">
            <li>Disease resistance</li>
            <li>High yield potential</li>
            <li>Rich flavor and texture</li>
          </ul>
          <p className="mt-2">This ensures that only the best seeds are sown, resulting in superior red lentils. Our team follows precise planting techniques such as crop management, pest control, and innovative weed management to maintain the long-term health and productivity of our crops.</p>
        </div>
        <div className="pp-part1">
          <h1 className=" font-bold">
          Climate and Soil Management
          </h1>
          <p className="mt-2">
          Our red lentils thrive in well-drained soil with a neutral to slightly acidic pH. The rich mineral composition of the soil enhances both the taste and nutritional value of the lentils. The Northern Steppes provide the ideal climate—perfect sunlight, temperature, and rainfall—allowing our lentils to develop their distinct flavor and tender consistency.
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

export default RedLintil
