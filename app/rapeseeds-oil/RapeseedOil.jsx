'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const RapeseedOil = () => {

  const features = [
    {
      id: 1,
      header: "Advanced Processing Techniques for Superior Oil",
      content:
        <dl >
          <dt className=" mt-4 font-bold" >Grinding and Flaking for Optimal Extraction</dt>
          <dd className="mt-1">
          At Zenith Eclipse Co, we carefully select high-quality rapeseeds and utilize grinding and flaking techniques to maximize oil extraction. Our processes retain the oil’s natural nutrients while ensuring minimal pesticide residues.
          </dd>

          <dt className=" mt-4 font-bold">Pressing and Deodorization for Purity</dt>
          <dd>
          Our oil extraction process includes pressing and deodorization to preserve the oil’s beneficial properties and natural flavor. By using solvent extraction and applying gentle pressure, we ensure that the oil maintains its purity and nutritional benefits.
          </dd>

          <dt className=" mt-4 font-bold">Conditioning and Dehulling for Cleaner Oil</dt>
          <dd>
          Dehulling and degumming help remove impurities from the rapeseeds, enhancing the overall quality of the oil. These steps result in cleaner, more nutritious oil with an extended shelf life.
          </dd>

        </dl>
    },
    {
      id: 2,
      header: "Outstanding Quality and Health Benefits of Rapeseed Oil",
      content: 
      <dl >
          <dt className=" mt-4 font-bold" >Rich in Omega-3 Fatty Acids for Heart Health</dt>
          <dd className="mt-1">
          Rapeseed oil is packed with omega-3 fatty acids, known for their anti-inflammatory and heart-protective effects. This makes it an ideal choice for health-conscious consumers looking to support cardiovascular health.
          </dd>

          <dt className=" mt-4 font-bold">Low in Saturated Fat – Ideal for Cholesterol Management</dt>
          <dd>
          With one of the lowest saturated fat contents among cooking oils, rapeseed oil is perfect for those looking to manage cholesterol levels and improve overall heart health.
          </dd>

          <dt className=" mt-4 font-bold">Packed with Vitamin E and Antioxidants</dt>
          <dd>
          Zenith Eclipse Co’s rapeseed oil is rich in Vitamin E and tocopherols, which act as powerful antioxidants that protect cells from oxidative stress, promoting skin health and enhancing immune function.
          </dd>
        </dl>
    },
    {
      id: 3,
      header: "Sustainable Farming and Eco-Friendly Practices",
      content: 
      <dl >
          <dt className=" mt-4 font-bold" >Environmentally Friendly Cultivation</dt>
          <dd className="mt-1">
          At Zenith Eclipse Co, sustainability is at the core of our production process. Our rapeseeds are grown using eco-friendly farming practices that preserve soil health and protect the environment, ensuring sustainable crop production year after year.
          </dd>

          <dt className=" mt-4 font-bold">
          Cold-Pressed Extraction for Maximum Nutrient Retention
          </dt>
          <dd>
          We use cold-press methods to extract our rapeseed oil, ensuring that flavors and nutrients are preserved without the use of harsh chemicals or high temperatures.
          </dd>

         
        </dl>
    },
    {
      id: 4,
      header: "Culinary Versatility of Rapeseed Oil",
      content: 
      <dl >
          <dt className=" mt-4 font-bold" >Perfect for Cooking, Frying, and Sautéing</dt>
          <dd className="mt-1">
          Rapeseed oil’s high smoke point makes it ideal for frying, sautéing, and grilling, offering versatility in the kitchen. Its light flavor enhances dishes without overpowering them, making it a favorite among chefs.
          </dd>

          <dt className=" mt-4 font-bold">
          Great for Salad Dressings and Marinades
          </dt>
          <dd>
          With its delicate taste, rapeseed oil is perfect for making salad dressings, marinades, and mayonnaise, naturally enhancing the flavors of your recipes.
          </dd>

         
        </dl>
    },
    {
      id: 5,
      header: "Rapeseed Oil for Animal Health and Nutrition",
      content: 
      <dl >
         
          <dt className=" mt-4 font-bold">
          Enhancing Livestock Well-Being
          </dt>
          <dd>
          Rapeseed oil is not only beneficial for humans but also for animals. When added to animal feed, it improves coat quality, boosts energy levels, and enhances the overall well-being of pets and livestock. Farmers have observed significant improvements in animal health by incorporating rapeseed oil into their diets.
          </dd>

         
        </dl>
    },
    {
      id: 6,
      header: "Flexible Packaging and Global Distribution",
      content:
      <dl >
         
      <dt className=" mt-4 font-bold">
      Customized Packaging for Every Need
      </dt>
      <dd>
      We offer rapeseed oil in a variety of packaging options to meet the needs of both retail and industrial customers. Our retail packaging comes in various sizes, while bulk options are available for larger orders.
      </dd>
      <dt className=" mt-4 font-bold">
      Expert Logistics and Reliable Shipping
      </dt>
      <dd>
      Zenith Eclipse Co’s advanced logistics network ensures the secure delivery of rapeseed oil worldwide. Our team oversees a seamless distribution process, ensuring that our rapeseed oil reaches customers in excellent condition.
      </dd>

     
    </dl>

    },
    {
      id: 10,
      header: "Choose Zenith Eclipse Co for Premium Rapeseed Oil – A Perfect Blend of Health, Flavor, and Sustainability",
      content:
        <p>
          At Zenith Eclipse Co, we combine top-tier production techniques, sustainable farming practices, and a dedication to quality to deliver rapeseed oil that enhances health, culinary experiences, and environmental preservation. Whether you’re looking for a versatile oil for your kitchen or an ingredient for industrial purposes, trust Zenith Eclipse Co for the finest rapeseed oil.
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
                <h1 className="h1-design ">Rapeseed Oil<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Rapeseed Meal.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Premium Rapeseed Oil <br /> Sustainably Sourced and Rich in Health Benefits</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        
        <div className="pp-part1">
          <h1 className="ph1">
          Why Choose Zenith Eclipse Co for Rapeseed Oil?
          </h1>
          <p>
          We  produce premium rapeseed oil, sourced from non-GMO rapeseeds grown in the eco-friendly fields of Northern Steppes. Our rapeseed oil is loved by health-conscious consumers and professional chefs alike for its vibrant natural hue, culinary versatility, and remarkable health benefits. We guarantee that every bottle of our rapeseed oil meets the highest standards of purity, quality, and sustainability.
          </p>
          <h1 className="ph2 pt-4">
          The Health Benefits of Rapeseed Oile
          </h1>
          <p>
          Rapeseed oil is known for its high content of glucosinolates, which are natural compounds with potential health benefits such as anti-cancer properties and supporting liver detoxification. At Zenith Eclipse Co, we optimize the glucosinolate levels in our oil to maximize health advantages without compromising taste or quality.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Ensuring Quality in Every Drop
          </h1>
          <h1 className="ph2">
          Strict Monitoring of Nutritional and Quality Standards
          </h1>
          
          <p>
          Our rapeseed oil undergoes rigorous quality control processes to monitor factors such as moisture levels, fatty acid composition, and overall purity. We track essential components like oleic acid, linoleic acid, and alpha-linolenic acid (ALA) to ensure that our oil is packed with nutrients while delivering superior taste.
          </p>
          <h1 className="ph2">
          Maintaining Low Free Fatty Acid (FFA) Levels
          </h1>
          <p>
          Free fatty acid (FFA) levels are critical to the oil’s shelf life and stability. Lower FFA content means the oil is less prone to spoilage. Through comprehensive testing, we ensure that our rapeseed oil retains its freshness and quality for a longer period.
          <br /><br />
          The peroxide value of rapeseed oil is a key indicator of its oxidation levels. By consistently monitoring peroxide levels, we ensure that our oil remains fresh, stable, and ready for consumption.
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

export default RapeseedOil
