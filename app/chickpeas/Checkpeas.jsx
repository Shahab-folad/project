'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const Checkpeas = () => {

  const features = [
    {
      id: 1,
      header: "Storage and Quality Control",
      content:
        <dl className="px-2">
          <p>
          To maintain the quality, nutritional value, and fiber content of our chickpeas, we prioritize proper storage. Adequate storage is crucial for preserving the freshness, flavor, and texture of chickpeas. We utilize temperature-controlled environments and moisture-resistant packaging to shield the legumes from spoilage and extend their shelf life. These steps ensure that customers receive chickpeas just as fresh as they were when harvested.
          </p>
          <br />
          <p>
          As a leading supplier of legumes, we adhere to strict quality standards by implementing rigorous quality control procedures, including regular inspections, cleaning, and drying processes.
          </p>

          <dt className="text-lg mt-4 font-bold">Seed Cleaning</dt>
          <dd>This critical stage ensures that each batch of chickpeas meets our high purity and quality requirements. Our advanced cleaning methods remove impurities, resulting in pristine chickpeas with excellent taste and texture in every bite.</dd>

        </dl>
    },
    {
      id: 2,
      header: "Outstanding Selection of Chickpeas",
      content: 
      <dl className="px-2">
          <p>
          Our chickpeas are celebrated for their uniformity in size and quality, catering to various culinary needs:
          </p>
          
          <dt className="text-lg mt-4 font-bold">Size Variety</dt>
          <dd>From 3mm chickpeas for delicate dishes to 12mm chickpeas for hearty meals, our selection ensures there is a perfect size for every recipe. This diversity allows for flexibility in cooking and food preparation.</dd>
          <br />
          <p>The careful selection of seeds plays a vital role in maintaining the quality and uniformity of our chickpeas. Planting timing and depth are key factors that influence this process. By selecting seeds with care, we grow plants that yield chickpeas with the desired texture, taste, and nutritional value, ensuring our customers receive top-notch products.</p>

        </dl>
    },
    {
      id: 3,
      header: "Commitment to Quality and Global Export",
      content: <p className="px-2">
        As a leading exporter of chickpeas, we ensure that our products meet international quality standards and undergo strict quality checks before distribution. Through our extensive export network, we supply premium chickpeas to markets around the world, allowing customers to enjoy the best-quality chickpeas globally.
        <br /><br />
        Our collaboration with top chickpea producers guarantees a steady supply of superior chickpeas year-round, ensuring that every batch meets our high standards from start to finish. This partnership allows us to consistently deliver premium chickpeas to our expanding customer base.
      </p>
    },
    {
      id: 4,
      header: "Premium Growing Process and Sustainable Farming",
      content: 
      <dl className="px-2">
          <p>
          Our chickpeas are cultivated in the fertile soils of the Northern Steppes, thriving under carefully managed conditions. At Zenith Eclipse Co, we follow sustainable farming practices that protect both the crop and the environment:
          </p>

          <dt className="text-lg mt-4 font-bold">Pest and Disease Management</dt>
          <dd>Effective pest control strategies and disease-resistant crop varieties help us mitigate risks while ensuring crop health. These methods guarantee the sustainability of our farming practices and the delivery of high-quality chickpeas to our customers.</dd>

          <dt className="text-lg mt-4 font-bold">Quality Assurance</dt>
          <dd>Each batch of chickpeas undergoes stringent quality assessments to ensure flawless taste and nutritional value. Proper drying techniques after harvest maintain the ideal moisture levels in the chickpeas, preventing spoilage and preserving their high-quality texture and flavor.</dd>

        </dl>
    },
    {
      id: 5,
      header: "Nutritional Advantages of Chickpeas",
      content: 
      <dl className="px-2">
      <p>
      Chickpeas, like other legumes, offer a wealth of health benefits and are an essential component of a balanced diet:
      </p>

      <dt className="text-lg mt-4 font-bold">Abundant Protein</dt>
      <dd>Chickpeas are an excellent source of plant-based protein, supporting wellness and aiding in blood sugar regulation.</dd>

      <dt className="text-lg mt-4 font-bold">Rich in Nutrients</dt>
      <dd>Chickpeas are packed with essential vitamins and minerals, including B6, folate, magnesium, iron, and zinc, promoting overall health and vitality.</dd>

    </dl>
    },
    {
      id: 6,
      header: "Global Logistics and Delivery",
      content:
      <dl className="px-2">
      <p>
      At Zenith Eclipse Co, we specialize in the global distribution of high-quality chickpeas:
      </p>

      <dt className="text-lg mt-4 font-bold">Innovative Storage Solutions</dt>
      <dd>Our chickpeas are stored in modern, climate-controlled facilities to maintain freshness and extend shelf life.</dd>

      <dt className="text-lg mt-4 font-bold">Efficient Transportation</dt>
      <dd>Utilizing a combination of road, rail, and sea transportation, we ensure timely delivery of our chickpeas and other legumes worldwide.</dd>

      <dt className="text-lg mt-4 font-bold">Extensive Distribution Network</dt>
      <dd>Our comprehensive distribution network spans North America, Europe, Asia, and Africa, meeting the growing global demand for high-quality chickpeas.</dd>
    </dl>

    },
    {
      id: 10,
      header: "Dedication to Environmental Sustainability",
      content:
        <p>
          At Zenith Eclipse Co, sustainability is at the heart of our operations. We prioritize eco-friendly farming methods that reduce water consumption, lower carbon emissions, and promote soil health.
          <br /><br />
          By choosing Zenith Eclipse Co for your chickpea needs, you are supporting sustainable farming practices that benefit both the environment and the local communities involved in the production of our premium chickpeas.
          <br /><br />
          Discover the difference that top-quality chickpeas can make by choosing Zenith Eclipse Co as your chickpea supplier. With a commitment to excellence in cultivation, sustainability, and global distribution, we ensure that every batch of our chickpeas delivers exceptional taste, nutrition, and quality. Partner with us to enjoy the benefits of premium chickpeas that exceed expectations.
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
                <h1 className="h1-design ">Chick peas<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Chickpeas.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Top Quality Chickpea Supplier <br /> Exporter of High-Grade Chickpeas in Bulk</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        <div className="pp-part1">
          <p>
          We proudly offer a diverse selection of premium chickpeas, a legume valued worldwide for its versatility and exceptional nutritional profile. Sourced from carefully managed farms, our chickpeas range in size from 3mm to 12mm, making them ideal for a variety of culinary applications, from hummus and salads to stews and snacks.
          </p>
          <br />
          <p >
          Including chickpeas in your diet offers numerous health benefits. Rich in nutrients such as protein, fiber, iron, vitamins, and minerals, chickpeas support digestive health, regulate blood sugar levels, and promote heart health. With their high protein content, chickpeas are an excellent choice for vegetarians and vegans seeking a nutritious and protein-rich ingredient.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Superior Growing Conditions for Premium Chickpeas
          </h1>
          <p>
          Our success in producing top-quality chickpeas stems from the ideal climate and soil conditions in the regions where we farm. These natural factors play a critical role in enhancing the growth and flavor development of our chickpeas, meeting the high standards our customers expect.
          </p>
          <br />
          <p>
          We employ advanced planting techniques, including precise timing and depth control, proper harvesting methods, and effective pest control and weed management strategies. By integrating sustainable soil management practices, crop rotation, and advanced irrigation techniques, we ensure optimal water use and enhanced soil fertility, resulting in high-yield, high-quality chickpeas.
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

export default Checkpeas
