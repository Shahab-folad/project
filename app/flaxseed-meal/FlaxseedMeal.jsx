'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const FlaxseedMeal = () => {

  const features = [
    {
      id: 1,
      header: "Nutritional Benefits of Flaxseed Meal",
      content:
        <dl className="px-2">
          <dt >Our flaxseed meal is packed with essential nutrients that promote health and well-being for both humans and animals.</dt>
          <dd className="mt-1"><br />
            <ul className="list">
                <li>High Protein Content: Supports muscle recovery and growth, making it a popular choice for athletes and an excellent protein source in animal feed.</li>
                <li>Rich in Omega-3 Fatty Acids: Helps reduce inflammation and supports heart health. In animals, it promotes coat quality and joint health.</li>
                <li>Abundant Dietary Fiber: Aids digestion, regulates blood sugar, and supports weight management in humans, while promoting gut health in animals.</li>
            </ul>
          </dd>


        </dl>
    },
    {
      id: 2,
      header: "Health Benefits for Humans and Livestock",
      content: <p className="px-2" >Flaxseed meal is a well-known source of alpha-linolenic acid (ALA), a form of omega-3 fatty acid that helps reduce inflammation and supports cardiovascular health. Additionally, the amino acids and high fiber content make it a valuable protein source for vegetarians and vegans, as well as a vital component of animal feed.</p>
    },
    {
      id: 3,
      header: "Nutrient-Rich Animal Feed",
      content: <p className="px-2">
        Incorporating flaxseed meal into animal feed improves livestock health by boosting immunity, enhancing coat quality, and increasing energy levels. Our premium flaxseed meal offers a balanced nutritional profile for livestock, ensuring their overall well-being and productivity.
      </p>
    },
    {
      id: 4,
      header: "Organic and Non-GMO Flaxseed Meal",
      content: 
      <div>
        <p>
        We offer organic flaxseed meal, free from synthetic pesticides and fertilizers. This eco-friendly option supports sustainable farming practices while maintaining the nutritional integrity of the flaxseeds.
        </p>
        <ul className="list mt-2">
            <li>Non-GMO Guarantee: Our products are certified non-GMO, ensuring purity and supporting biodiversity and sustainable agricultural methods.</li>
        </ul>
      </div>
    },
    {
      id: 5,
      header: "Flaxseed Meal’s Role in Global Markets",
      content: <p className="px-2">
        The global market for flaxseed meal has experienced significant growth, driven by increasing recognition of its health benefits and diverse uses in human diets and animal feed. Efficient export methods allow us to deliver top-quality flaxseed meal to customers worldwide, ensuring it retains its nutritional value.
      </p>
    },
    {
      id: 6,
      header: "Lignans and Antioxidants in Flaxseed",
      content:
        <p>
            Flaxseed meal is rich in lignans and antioxidants that provide powerful health benefits. Lignans have estrogenic properties and, combined with antioxidants, help combat oxidative stress in both humans and animals, promoting overall wellness.
        </p>

    },
    {
      id: 10,
      header: "Logistics and Global Distribution",
      content:
      <dl className="px-2">
        <p>At Zenith Eclipse Co, we ensure that our flaxseed meal is delivered globally with the utmost care, following strict safety standards and efficient handling procedures.</p>

      <dt className="text-lg mt-4 font-bold" >Expert Logistics and Safe Transportation</dt>
      <dd className="mt-1"><br />
        Our logistics team is highly experienced in managing the safe transportation of flaxseed meal. We take every precaution to ensure that the nutritional value and purity of the product are preserved throughout the supply chain.
      </dd><br />
        <ul className="list">
            <li>Expert Handling: Our logistics team ensures that the flaxseed meal is transported under optimal conditions to maintain its quality and nutritional content.</li>
            <li>State-of-the-Art Storage: We use the latest technologies and best practices to store flaxseed meal in climate-controlled environments, safeguarding its integrity.</li>
        </ul>

    </dl>

    },
    {
      id: 11,
      header: "Ensuring Quality Through Stringent Safety Measures",
      content:
        <p>We follow strict safety procedures during transportation to ensure that our flaxseed meal arrives safely and uncontaminated. Our facilities and transport vehicles are equipped to prevent any risk of contamination, ensuring the product’s purity and nutritional value from production to delivery.</p>
    },
    {
      id: 12,
      header: "Why Choose Our Flaxseed Meal?",
      content:
        <p>At Zenith Eclipse Co, we are dedicated to delivering premium flaxseed meal for both human consumption and animal feed. Our commitment to non-GMO products and sustainable practices ensures that you receive the highest quality flaxseed meal available. With our proficient logistics services, we guarantee safe and timely delivery across the globe.</p>
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
                <h1 className="h1-design ">Flaxseed Meal<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Flaxseed Meal.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Flaxseed Meal <br /> Non-GMO Flaxseed Meal Supplier</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        <div className="pp-part1">
          <p>
          We take pride in offering premium flaxseed meal, a nutrient-rich product ideal for both human consumption and animal feed. Known for its high protein content and rich omega-3 fatty acids, our flaxseed meal supports health-conscious diets and improves animal nutrition.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          High-Quality Flaxseed Meal for Health and Animal Feed
          </h1>
          <p>
          As a leading supplier of high-quality flaxseed meal, Zenith Eclipse Co is committed to meeting the diverse needs of our customers. We consistently set industry standards by delivering flaxseed meal that exceeds expectations in terms of quality and nutrition. Our meticulous production process preserves the natural nutrients, ensuring that our product is an excellent addition to both human diets and animal feed formulations.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph2">
          Preserving Nutrients Through Cutting-Edge Production
          </h1>
          <p>
          We carefully source non-GMO flaxseeds and use advanced cold milling techniques to retain the beneficial fats, proteins, and fibers in our meal. This ensures the flaxseed meal maintains its natural qualities while offering versatility in various applications, from food preparation to animal nutrition.
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

export default FlaxseedMeal
