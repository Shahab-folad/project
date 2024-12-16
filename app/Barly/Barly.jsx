'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';


const Barly = () => {

  const features = [
    {
      id: 1,
      header: "Assist with weight loss goals",
      content:
        <dl className="px-2">
          <dt className="text-lg mt-4 font-bold" >Adaptation to Climate</dt>
          <dd className="mt-1">Our barley varieties are carefully selected to thrive in diverse climates, ensuring consistent yields even under changing environmental conditions. This adaptability solidifies our position as a reliable barley supplier across different regions.</dd>


          <dt className="text-lg mt-4 font-bold">Sustainable Agriculture</dt>
          <dd>We implement sustainable farming practices, including:</dd>
          <ul className="list">
            <li>Crop rotation</li>
            <li>Minimal tillage</li>
            <li>Organic farming methods</li>
          </ul>
          <dd>These practices help preserve soil health and minimize environmental impact. Barley plays a key role in sustainable agriculture, enhancing soil quality while providing high digestibility and nutritional value for livestock and the environment.</dd>


          <dt className="text-lg mt-4 font-bold">Harvesting Technology</dt>
          <dd>We use state-of-the-art technology to harvest barley at its peak value, ensuring:</dd>
          <ul className="list">
            <li>Preservation of quality from field to processing stage</li>
            <li>High-quality barley products throughout the supply chain</li>
          </ul>
        </dl>
    },
    {
      id: 2,
      header: "Nutritional and Health Benefits of Barley",
      content: 
      <dl className="px-2">
      <dt className="text-lg mt-4 font-bold" >High Fiber Content</dt>
      <dd className="mt-1">Barley is rich in fiber, which:</dd>
      <ul className="list">
        <li>Aids digestion</li>
        <li>Regulates blood sugar levels</li>
      </ul>
      <dd className="mt-1">Promotes a feeling of fullness, supporting weight management</dd>


      <dt className="text-lg mt-4 font-bold">Vitamins and Minerals</dt>
      <dd>Barley is an excellent source of essential nutrients, including:</dd>
      <ul className="list">
        <li>B vitamins</li>
        <li>Magnesium</li>
        <li>Selenium</li>
        <li>Manganese</li>
      </ul>
      <dd>These nutrients support energy production, bone health, and immune function. We ensure that the barley we distribute maintains its nutritional integrity, promoting health and wellness for consumers worldwide.</dd>

    </dl>
    },
    {
      id: 3,
      header: "Logistics and Global Distribution",
      content: 
      <dl className="px-2">
      <dt className="text-lg mt-4 font-bold" >Advanced Logistics Network</dt>
      <dd className="mt-1">Zenith Eclipse Co boasts an advanced logistics system, featuring:</dd>
        <ul className="list">
            <li>Cutting-edge storage facilities</li>
            <li>A modern fleet of transport vehicles</li>
        </ul>
        <dd className="mt-1">This ensures that our barley is kept in optimal conditions throughout transportation, guaranteeing that we deliver high-quality grain to our clients.</dd>

      <dt className="text-lg mt-4 font-bold">Shipping Vessels for International Transport</dt>
      <dd>Our fleet is equipped with state-of-the-art moisture control systems, allowing us to:</dd>
      <ul className="list">
        <li>Efficiently transport large quantities of barley across global trade routes</li>
        <li>Ensure timely and secure deliveries</li>
      </ul>

      <dt className="text-lg mt-4 font-bold">Worldwide Reach</dt>
      <dd>Our extensive distribution network spans continents, including:</dd>
      <ul className="list">
        <li>Europe</li>
        <li>Asia</li>
        <li>The Americas</li>
        <li>Africa</li>
      </ul>
      <dd className="mt-1">As a global barley supplier, we manage all logistics internally to guarantee reliable and timely delivery to markets worldwide.</dd>
    </dl>
    },
    {
      id: 4,
      header: "Commitment to Sustainability and Excellence",
      content: 
      <dl className="px-2">
      <dt className="text-lg mt-4 font-bold" >Leading the Way in Oats Export</dt>
      <dd className="mt-1">At Zenith Eclipse Co, sustainability is at the heart of our operations. We are committed to:</dd>
        <ul className="list">
            <li>Responsible management of land and resources</li>
            <li>Sustainable farming practices that positively impact the environment and local communities</li>
        </ul>

      <dt className="text-lg mt-4 font-bold">Stringent Quality Control</dt>
      <dd>Our quality control measures begin with seed selection and extend through every stage of the supply chain. This ensures that our customers receive only the highest-quality barley.</dd>

      <dt className="text-lg mt-4 font-bold">Worldwide Reach</dt>
      <dd>We consistently meet international quality standards, providing premium barley to:</dd>
      <ul className="list">
        <li>Brewers</li>
        <li>Food producers</li>
        <li>Livestock farmers</li>
      </ul>
      
      <dt className="text-lg mt-4 font-bold">Why Choose Zenith Eclipse Co?</dt>
      <dd>Whether you’re seeking malt barley, feed barley, or barley for health benefits, Zenith Eclipse Co is your trusted partner. Our dedication to innovation, sustainability, and excellence makes us a leading barley supplier in the global market.</dd>
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
                <h1 className="h1-design ">Barley<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Barley.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Discover Premium Barley Products <br />  Your Trusted Global Barley Supplier for Brewing, Feed, and Health</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        <div className="pp-part1">
          <p>
          At Zenith Eclipse Co, we offer a variety of premium barley products tailored to meet diverse market needs:
          </p>
          
        </div>
        <div className="pp-part1">
        <h1 className="ph1">
        Barley Varieties and Their Uses
          </h1>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Malt Barley
          </h1>
          <p>
          Malt barley is specifically cultivated for the brewing industry. Our malt barley is meticulously processed to ensure:
          </p>
          <ul className="list">
            <li>Optimal germination rates</li>
            <li>High enzyme activity</li>
            <li>Superior flavor profiles</li>
          </ul>
          <p>
            As a leading malt barley supplier, we cater to the global beer and malt beverage sectors, delivering the highest quality.
            </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Feed Barley
          </h1>
          <p>
          Our feed barley is an essential component of livestock diets, designed to promote:
          </p>
          <ul className="list">
            <li>Animal health</li>
            <li>Improved productivity</li>
            <li>Superior flavor profiles</li>
          </ul>
          <p>
          We carefully process our feed barley to maximize digestibility and nutrient absorption, making us a trusted feed barley supplier for farmers worldwide.
            </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Barley for Health
          </h1>
          <p>
          Barley offers a range of health benefits beyond its industrial uses. It is rich in fiber, which can:
          </p>
          <ul className="list">
            <li>Help reduce cholesterol levels</li>
            <li>Support heart health</li>
            <li>Improve digestion</li>
            <li>Aid in managing diabetes</li>
            <li>Assist with weight loss goals</li>
          </ul>
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

export default Barly
