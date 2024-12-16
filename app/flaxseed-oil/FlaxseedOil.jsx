'use client'

import { IoIosArrowDown } from "react-icons/io";

import { motion } from 'framer-motion';


import { useState, useEffect } from "react";


const FlaxseedOil = () => {

  const features = [
    {
      id: 1,
      header: "The Benefits of Omega-3, Linoleic, and Oleic Acids in Flaxseed Oil",
      content:
        <dl className="px-2">
          <dt className="mt-4 font-bold" >Omega-3 Fatty Acids for Inflammation and Heart Health</dt>
          <dd className="mt-1">
          Flaxseed oil is packed with omega-3 fatty acids like alpha-linolenic acid (ALA), known for reducing inflammation and supporting heart health. Incorporating our flaxseed oil into your diet is an effective way to meet your body’s omega-3 needs.
          </dd>

          <dt className="mt-4 font-bold">Linoleic Acid for Skin and Cell Health</dt>
          <dd>
          Our flaxseed oil is also rich in linoleic acid, a polyunsaturated fatty acid that plays a crucial role in maintaining skin health, supporting cell function, and promoting cardiovascular wellness.
          </dd>

          <dt className="mt-4 font-bold">
          Oleic Acid – A Heart-Healthy Monounsaturated Fat
          </dt>
          <dd>
          Oleic acid, another key component of our flaxseed oil, is known for its ability to enhance heart health and reduce inflammation. This balanced fatty acid composition ensures that our oil supports overall wellness.
          </dd>

        </dl>
    },
    {
      id: 2,
      header: "Flaxseed Oil for Animal Nutrition",
      content: 
      <dl className="px-2">
          <dt className="mt-4 font-bold" >
          Benefits for Livestock Health and Productivity
          </dt>
          <dd className="mt-1">
          Flaxseed oil is not just beneficial for human consumption; it can also be used in animal feeds. Its high omega-3 content improves coat quality, boosts immunity, and enhances overall health in livestock. Incorporating flaxseed oil into animal diets ensures well-rounded nutrition for various species.
          </dd>


        </dl>
    },
    {
      id: 3,
      header: "Superior Production Process – From Seed to Oils",
      content: 
      <dl className="px-2">
          <dt className="mt-4 font-bold" >
          Cold-Pressed for Maximum Purity and Nutritional Integrity
          </dt>
          <dd className="mt-1">
          Our flaxseed oil is produced using the cold-pressing method, which ensures that the oil retains its natural nutrients, flavor, and aroma. This process preserves the integrity of the oil, delivering a premium-quality product free from heat or chemical alterations.
          </dd>
          <dt className="mt-4 font-bold" >
          Metal Content and Pesticide Residue Monitoring
          </dt>
          <dd className="mt-1">
          Zenith Eclipse Co prioritizes consumer safety by minimizing metal content and eliminating pesticide residues in our flaxseed oil. Our rigorous testing procedures guarantee that our product is safe for consumption.
          </dd>
          <dt className="mt-4 font-bold" >
          Tocopherols and Antioxidants for Shelf Stability
          </dt>
          <dd className="mt-1">
          Our flaxseed oil is rich in tocopherols (Vitamin E compounds) that act as antioxidants, extending the shelf life of the oil while promoting immune health and protecting cells from oxidative stress.
          </dd>


        </dl>
    },
    {
      id: 4,
      header: "Advanced Processing Techniques for Quality Assurance",
      content: 
      <dl className="px-2">
          <dt className="mt-4 font-bold" >
          Grinding, Flaking, and Oil Extraction Efficiency
          </dt>
          <dd className="mt-1">
          Our production process includes grinding and flaking the seeds before oil extraction. These steps enhance the yield and efficiency of oil extraction, ensuring that the oil retains its nutritional value.
          </dd>
          <dt className="mt-4 font-bold" >
          Neutralization for Balanced Acidity and Taste
          </dt>
          <dd className="mt-1">
          Neutralization is a key part of our process, which balances the acidity of the flaxseed oil to stabilize its shelf life and maintain its benefits. This ensures a refined taste profile without compromising the oil’s health benefits.
          </dd>
          <dt className="mt-4 font-bold" >
          Deodorization for Purity and Pleasant Flavor
          </dt>
          <dd className="mt-1">
          We use deodorization techniques to remove any unwanted odors and tastes from the oil, ensuring a neutral and pleasant flavor that can be easily incorporated into various dishes. This process also preserves the oil’s nutritional integrity.
          </dd>


        </dl>
    },
    {
      id: 5,
      header: "Versatile Uses of Flaxseed Oil",
      content: 
      <dl className="px-2">
      <dt className="mt-4 font-bold" >
      Flaxseed Oil as a Protein Source
      </dt>
      <dd className="mt-1">
      In addition to being rich in omega-3s, our flaxseed oil is also a valuable source of protein, making it a great addition to your diet for muscle repair and overall health.
      </dd>
      <dt className="mt-4 font-bold" >
      Culinary and Animal Feed Applications
      </dt>
      <dd className="mt-1">
      Our flaxseed oil is versatile, suitable for human consumption as a nutrient-rich dietary supplement, and as an essential ingredient in animal feeds to improve livestock health and productivity.
      </dd>

    </dl>
    },
    {
      id: 6,
      header: "Trusted Suppliers and Stringent Quality Control",
      content:
      <dl className="px-2">
      <dt className="mt-4 font-bold" >
      Collaboration with Certified Flaxseed Oil Suppliers
      </dt>
      <dd className="mt-1">
      Zenith Eclipse Co, partners with trusted suppliers who follow strict quality control protocols, ensuring that each batch of flaxseed oil meets the highest standards of quality, purity, and nutritional value.
      </dd>
      <dt className="mt-4 font-bold" >
      Expeller-Pressed and Free of Additives
      </dt>
      <dd className="mt-1">
      Our flaxseed oil is obtained through the expeller-pressing method, which preserves its natural nutrients without the need for external heat or additives. This results in a pure, high-quality product.
      </dd>

    </dl>

    },
    {
      id: 10,
      header: "Filtration and Conditioning for Maximum Purity",
      content:
      <dl className="px-2">
      <dt className="mt-4 font-bold" >
      Multi-Stage Filtration Process
      </dt>
      <dd className="mt-1">
      Our flaxseed oil undergoes multiple rounds of filtration to remove impurities, ensuring clean and high-grade oil. This meticulous process preserves the oil’s flavor, aroma, color, and nutritional value.
      </dd>
      <dt className="mt-4 font-bold" >
      Seed Cleansing and Preparation for Oil Extraction
      </dt>
      <dd className="mt-1">
      We use advanced cleaning methods to remove impurities from the flaxseeds before extraction, guaranteeing that the end product retains its health benefits and purity.
      </dd>

    </dl>

    },
    {
      id: 11,
      header: "Sustainable Production and Ethical Practices",
      content:
      <dl className="px-2">
      <dt className=" mt-4 font-bold" >
      Eco-Friendly Farming and Cold-Pressed Extraction
      </dt>
      <dd className="mt-1">
      At Zenith Eclipse Co, sustainability is at the core of our production. We use eco-friendly farming practices to cultivate flaxseeds and cold-press them to retain their natural goodness without the use of chemicals or high temperatures.
      </dd>
      <dt className="mt-4 font-bold" >
      Commitment to Environmental Responsibility
      </dt>
      <dd className="mt-1">
      Our farming methods prioritize soil health and biodiversity, ensuring minimal environmental impact while delivering high-quality flaxseed oil.
      </dd>

    </dl>
    },
    {
      id: 12,
      header: "Diverse Packaging Options for Retail and Industrial Use",
      content:
      <dl className="px-2">
      <dt className=" mt-4 font-bold" >
      Customizable Packaging for Every Need
      </dt>
      <dd className="mt-1">
      Zenith Eclipse Co offers flaxseed oil in a variety of packaging options to meet both retail and industrial requirements. Whether for kitchen use or bulk containers, we cater to diverse market needs.
      </dd>
      <dt className="mt-4 font-bold" >
      Global Distribution with Efficient Logistics
      </dt>
      <dd className="mt-1">
      Our extensive distribution network ensures that our flaxseed oil reaches customers worldwide. Our skilled logistics team manages every aspect of transportation to guarantee the quality of the oil remains intact during transit.
      </dd>

    </dl>
    },
    {
      id: 13,
      header: "Choose Us for Premium Flaxseed Oil",
      content:
      <p>
        With Zenith Eclipse Co’s flaxseed oil, you get a product that combines health benefits, purity, and sustainability. Whether you’re looking to enhance your diet with a nutrient-dense oil or require bulk supply for commercial use, Zenith Eclipse Co guarantees excellence in every drop.
      </p>
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
                <h1 className="h1-design ">Flaxseed Oil<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Flaxseed Oil.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Pure and Nutritious Flaxseed Oil  <br /> Ethically Sourced for Health and Wellness</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        
        <div className="pp-part1">
          <h1 className="ph1">
          Zenith Eclipse Co – Your Trusted Supplier of Premium Flaxseed Oil
          </h1>
          <p>
          We take pride in delivering top-quality flaxseed oil, extracted from non-GMO flaxseeds cultivated through sustainable farming practices. Our flaxseed oil is renowned for its abundant health benefits, making it a popular choice for individuals seeking a rich source of omega-3 fatty acids, lignans, antioxidants, and ideal fatty acid composition that aids in reducing inflammation.
          </p>
          <h4 className="m-4">Nutritional Powerhouse of Omega-3 and Essential Nutrients</h4>
          <p>
          Our flaxseed oil is not only rich in essential fatty acids but also provides a comprehensive range of nutrients like fiber, vitamins, minerals, and active compounds that promote well-being. Whether you’re looking to boost your immune system, enhance skin health, support brain function, or manage cholesterol levels, incorporating Zenith Eclipse Co’s flaxseed oil into your daily routine offers numerous health benefits.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Global Exporter of Top-Quality Flaxseed Oil
          </h1>
          <h1 className="ph2">
          Trusted Export Procedures and International Standards
          </h1>
          <p>
          As a leading exporter of flaxseed oil, Zenith Eclipse Co ensures that our high-quality flaxseed oil reaches customers worldwide. Our export processes meet international quality standards, ensuring the consistent delivery of natural and healthy dietary options.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph2">
          Low in Saturated Fats – Heart-Healthy Choice
          </h1>
          <p>
          Our flaxseed oil contains minimal levels of saturated fats, making it a healthier option compared to animal-based products and processed foods. The oil’s rich content of omega-3 fatty acids and linoleic acid supports cardiovascular health and overall well-being.
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

export default FlaxseedOil
