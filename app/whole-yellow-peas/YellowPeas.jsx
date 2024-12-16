'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const YellowPeas = () => {

  const features = [
    {
      id: 1,
      header: "Sustainable Farming and Superior Crop Management",
      content:
        <dl className="px-2">
            <p>
            At Zenith Eclipse Co, we ensure the highest quality of our yellow peas through careful seed selection, crop management, and pest control. By choosing seeds that thrive in our farming conditions, we guarantee a harvest that meets our strict standards for:
            </p><br />
            <ul className="list">
                <li>Taste</li>
                <li>Texture</li>
                <li>Nutritional content</li>
            </ul>
          <dt className="text-lg mt-4 font-bold" >Optimal Growing Conditions</dt>
          <dd className="mt-1">We understand the intricate connection between climate, soil, and farming methods in cultivating top-quality yellow peas. Our selected farming regions provide the perfect blend of:</dd>
          <br />
          <ul className="list">
            <li>Temperature</li>
            <li>Moisture</li>
            <li>Irrigation</li>
            <li>Fertilization</li>
            <li>Soil fertility</li>
          </ul>
          <br />
          <p>
          These conditions allow our peas to develop exceptional texture and flavor, making them a favorite among consumers and chefs.
          </p>
        </dl>
    },
    {
      id: 2,
      header: "Commitment to Innovation and Sustainability",
      content: 
      <dl className="px-2">
    <dt className="text-lg mt-4 font-bold" >Innovative Farming Practices</dt>
    <dd className="mt-1">Our dedication to sustainability is evident in our innovative farming techniques, which include:</dd>
    <br />
    <ul className="list">
      <li>Soil health management</li>
      <li>Biodiversity promotion</li>
      <li>Water conservation</li>
    </ul>
    <br />
    <p>
    Through careful planning of planting cycles, we maximize yield while minimizing environmental impact. This ensures not only top-quality yellow peas but also the long-term health of the farmland.
    </p>
    <dt className="text-lg mt-4 font-bold" >High Nutritional Value of Yellow Peas</dt>
    <dd className="mt-1">Our yellow peas are rich in essential nutrients, making them a great addition to any diet:</dd>
    <br />
    <ul className="list">
        <li>Plant-based protein: Ideal for vegetarian and vegan diets</li>
        <li>High fiber content: Supports digestion and maintains stable blood sugar levels</li>
        <li>Vitamins and minerals: Packed with vitamins A and B, potassium, and iron for overall health and vitality</li>
    </ul>
    <br />
  </dl>
    },
    {
      id: 3,
      header: "Meticulous Harvesting for Top-Quality Flaxseeds",
      content: 
      <dl className="px-2">
            
          <dt className="text-lg mt-4 font-bold" >Harvesting at Peak Ripeness</dt>
          <dd className="mt-1">We carefully plan the harvesting process to ensure that each flaxseed is collected at its peak ripeness. This method preserves the nutritional integrity and purity of the flaxseeds, ensuring that they retain their health benefits.</dd>
          <dt className="text-lg mt-4 font-bold" >Comprehensive Quality Control</dt>
          <dd className="mt-1">We conduct extensive quality checks throughout every stage of production, from soil quality assessments to the final inspection of the harvested flaxseeds. This guarantees that only the highest-quality seeds make their way to our consumers.</dd>
          
        </dl>
    },
    {
      id: 4,
      header: "Versatility and Health Benefits of Split Peas",
      content: 
      <dl className="px-2">
        <p>
        Derived from the same high-quality yellow peas, our split peas are highly versatile. They can be used in a variety of dishes like:
        </p><br />
        <ul className="list">
            <li>Soups</li>
            <li>Stews</li>
            <li>Porridges</li>
        </ul>
        <br />
        <p>
        The splitting process allows them to cook quickly while preserving their nutritional value, making them a popular choice for health-conscious chefs and consumers alike.
        </p>
        </dl>
    },
    {
      id: 5,
      header: "Advanced Farming Techniques for High-Yield Wheat Production",
      content: <p className="px-2">
       Our wheat farming methods incorporate the latest techniques to increase efficiency and crop yield, while preserving soil health. From precision farming to sustainable water management, we ensure our wheat meets the highest standards without compromising the environment.
      </p>
    },
    {
      id: 6,
      header: "Global Logistics and Distribution",
      content:
      <dl className="px-2">
       <p>At Zenith Eclipse Co, we ensure efficient logistics to deliver our yellow peas fresh and promptly to destinations around the globe.
        </p>  
      <dt className="text-lg mt-4 font-bold" >Cutting-Edge Storage Facilities</dt>
      <dd className="mt-1">Our modern storage facilities preserve the freshness and quality of our yellow peas, ensuring they are in perfect condition for global distribution.</dd>
      <dt className="text-lg mt-4 font-bold" >Efficient Global Delivery</dt>
      <dd className="mt-1">We utilize a range of transportation methods to ensure that our yellow peas are delivered efficiently, maintaining our high standards of quality and customer satisfaction.</dd>
      <dt className="text-lg mt-4 font-bold" >Extensive Market Reach</dt>
      <dd className="mt-1">Our broad distribution network spans across Europe, Asia, and beyond, allowing us to supply yellow peas to diverse markets. We cater to various culinary traditions and consumer preferences worldwide.</dd>
      
    </dl>

    },
    {
      id: 10,
      header: "Commitment to Quality and Excellence",
      content:
      <dl className="px-2">
      <p>At Zenith Eclipse Co, we are dedicated to providing premium food offerings. Our yellow peas, whether whole or split, are a testament to our focus on:
       </p>  
     <br />
     <ul className="list">
        <li>Health benefits</li>
        <li>Sustainability</li>
        <li>Culinary versatility</li>
     </ul>
     <br />
     <p>By working with trusted farming partners and utilizing advanced processing techniques, we ensure that every batch of yellow peas meets the highest standards of quality. Our goal is to contribute to healthier lifestyles and a more sustainable future for everyone.</p>
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
                <h1 className="h1-design ">Whole Yellow Peas<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Yellow Peas.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Finest Yellow Peas Supplier <br /> Whole and Split</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        <div className="pp-part1">
          <p>
          We are offering premium yellow peas, both whole and split, sourced from meticulously selected farms. These Pisum sativum yellow peas reflect our commitment to top-notch quality and excellence. Whether used in soups, stews, or plant-based recipes, our yellow peas are versatile and packed with nutritional goodness.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Superior Quality Yellow Peas – Whole and Split
          </h1>
          <h1 className="ph2">
          Whole Yellow Peas
          </h1>
          <p>
          Our robust and flavorful whole yellow peas are perfect for slow-cooked dishes. They:
          </p><br />
          <ul className="list">
            <li>Absorb flavors while retaining their texture</li>
            <li>Provide a satisfying and hearty ingredient for meals</li>
            <br />
          </ul>
            <p>
            Whole peas are ideal for dishes that need substantial, nutrient-rich components, perfect for stews and curries.
            </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph2">
          Yellow Split Peas
          </h1>
          <p>
          Yellow split peas are known for their short cooking time, making them a popular choice for:
          </p><br />
          <ul className="list">
            <li>Creamy soups</li>
            <li>Dips</li>
            <li>Thickening agent in various dishes</li>
          </ul><br />
          <p>
          Their smooth texture and subtle flavor make them versatile for both traditional and modern recipes.
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

export default YellowPeas
