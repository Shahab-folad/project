'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const SunflowerSeed = () => {

  const features = [
    {
      id: 1,
      header: "Integrated Pest and Disease Management",
      content:
        <p >We follow an integrated pest control approach to safeguard our sunflower crops. By using natural predators, biological agents, and eco-friendly pesticides, we ensure the health of our plants without compromising the balance of our farming environment. This strategy not only protects our seeds but also maintains sustainable practices.</p>
    },
    {
      id: 2,
      header: "Nutrient Management for Optimal Growth",
      content: <p>Our focus on fertilization ensures that our sunflower plants receive the essential nutrients they need for optimal growth. We monitor nitrogen, phosphorus, and potassium levels to boost growth and yield. Our responsible use of fertilizers and soil enhancements further supports soil health and sustainability.</p>
    },
    {
      id: 3,
      header: "Efficient Irrigation Systems",
      content: <p>
        We employ advanced irrigation technology to maintain the ideal moisture levels during crucial growth stages like flowering and seed formation. These systems ensure a reliable water supply, promoting healthier crops and bountiful harvests.
      </p>
    },
    {
      id: 4,
      header: "Precision Seeding for Optimal Yields",
      content: <p>The success of our sunflower crops relies on factors such as seeding rate and depth. Our optimized seeding rates ensure the ideal plant density, maximizing light absorption and nutrient use, while correct planting depth promotes strong germination and root development.</p>
    },
    {
      id: 5,
      header: "Superior Quality for Oil Extraction and Bakery Applications",
      content: <p>
        Our sunflower seeds are specifically grown for oil extraction and bakery uses, catering to a diverse customer base that values quality. We collaborate closely with our clients to provide tailored solutions, including bulk orders and custom packaging.
      </p>
    },
    {
      id: 6,
      header: "Advanced Harvesting and Processing",
      content:
        <p>
            Our state-of-the-art machinery ensures that sunflower seeds are harvested at the perfect time to preserve their quality. After harvesting, the seeds undergo rigorous cleaning and drying processes to maintain their purity and prolong shelf life. This step is vital to meet the excellence our customers expect.
        </p>

    },
    {
      id: 10,
      header: "Environmentally Conscious Farming Practices",
      content:
        <p>
          We employ sustainable farming practices, including crop rotation, minimal chemical usage, and integrated pest management, to maintain soil health and promote biodiversity. Our commitment to eco-friendly practices sets us apart as a trusted supplier of high-quality sunflower seeds.
        </p>

    },
    {
      id: 11,
      header: "Stringent Quality Control",
      content:
        <p>Our sunflower seeds are subject to stringent quality control measures throughout the production cycle, from planting to harvesting. This ensures that our seeds meet the highest standards of purity, oil content, and functionality.</p>
    },
    {
      id: 12,
      header: "Non-GMO Commitment and Health Benefits",
      content:
        <p>Our sunflower seeds are non-GMO, making them appealing to consumers and industries seeking natural, reliable agricultural products. Rich in vitamins, protein, and healthy fats, our seeds offer significant health benefits, making them a valuable addition to health-conscious diets and food industry applications.</p>
    },
    {
      id: 13,
      header: "Sustainable Pest Control and Environmental Impact",
      content:
        <p>We minimize the use of chemicals by utilizing natural predators and crop rotation methods, ensuring that our farming practices are both sustainable and eco-friendly. This approach helps protect wildlife and soil health, promoting a healthier agricultural environment.</p>
    },
    {
      id: 14,
      header: "Global Reach and Reliable Shipping",
      content:
        <p>We ensure our premium sunflower seeds reach global markets with ease. Our experienced logistics team carefully manages every step of the distribution process, from secure packaging to transportation, guaranteeing that the seeds maintain their quality upon delivery.</p>
    },
    {
      id: 15,
      header: "Wide Distribution Network for Timely Delivery",
      content:
        <p>With facilities located near major transportation routes, we can efficiently deliver our sunflower seeds to industries worldwide. Our strong distribution network ensures timely delivery, meeting the needs of customers in various sectors.</p>
    },
    {
      id: 16,
      header: "Choose Our Sunflower Seeds for High-Performance Applications",
      content:
        <p>Our sunflower seeds are ideal for a range of industries, including oil extraction, bakery production, and health-conscious food applications. By choosing our seeds, you are supporting sustainable farming practices while receiving a premium product known for its high performance and quality.</p>
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
                <h1 className="h1-design ">Sunflower Seeds<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Sunflower.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Premium Sunflower Seeds <br /> Versatility and Excellence in Every Seed</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        <div className="pp-part1">
          <p>
          Our premium sunflower seeds are carefully cultivated in the rich lands of the Northern steppes. As a trusted supplier, we focus on producing non-GMO sunflower seeds using sustainable farming methods, ensuring that each batch meets the highest industry standards for quality and environmental sustainability.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Sustainable Farming for Superior Sunflower Seeds
          </h1>
          <p>
          At our company, effective crop management is at the core of our sunflower seed production. We employ crop rotation schedules and precision monitoring to maintain the health and productivity of our sunflower fields. By rotating sunflowers with other crops, we prevent soil depletion and minimize the risk of pests and diseases, ensuring high-quality sunflower seeds season after season.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          High-Quality Sunflower Seeds for Oil Extraction
          </h1>
          <p>
          Our sunflower seeds are specially bred for oil extraction and undergo rigorous testing to ensure that they possess exceptional oil content. Using innovative extraction methods, we preserve the purity and rich flavor of the oil, making our seeds a top choice for culinary and industrial applications.
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

export default SunflowerSeed
