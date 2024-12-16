'use client';

import { motion } from 'framer-motion';

import { IoIosArrowDown } from "react-icons/io";

import { useState} from "react";



const Wheat = () => {

  const features = [
    {
      id: 1,
      header: "Types of Wheat We Offer and Their Uses",
      content:
        <dl >
          <dt className=" font-bold" >Hard Wheat for Bread and Pasta</dt>
          <dd className="mt-1">Our hard wheat is perfect for bread and pasta, known for its high gluten content that provides the elasticity and strength needed for hearty baked goods.</dd>

          <dt className=" mt-4 font-bold">Soft Wheat for Pastries and Biscuits</dt>
          <dd>Soft wheat is ideal for pastries and biscuits, offering lower protein levels that create tender, flaky textures in baked goods.</dd>

          <dt className=" mt-4 font-bold">Wheat for Flour Production</dt>
          <dd>We also grow wheat specifically for milling into flour, which is used in a wide range of products beyond bread and pastries.</dd>

          <dt className=" mt-4 font-bold">Wheat for Animal Feed</dt>
          <dd>Our wheat is a vital ingredient in animal feed, providing essential nutrients that support the growth and health of livestock.</dd>

        </dl>
    },
    {
      id: 2,
      header: "The Nutritional Value of Our Non-GMO Wheat",
      content: <p  >Every grain of our non-GMO wheat is packed with important nutrients, including protein, vitamins, and minerals. Whether for human consumption or animal feed, our wheat products exceed industry standards in terms of nutrition and quality.</p>
    },
    {
      id: 3,
      header: "Balancing Quality and Nutrition in Wheat Flour",
      content: <p >
        The milling process affects the quality of wheat flour. While white flour provides a refined texture and longer shelf life, whole wheat offers more nutrients. By blending the two, we strike a balance between taste and health, giving our customers the best of both worlds.
      </p>
    },
    {
      id: 4,
      header: "Advanced Farming Techniques for High-Yield Wheat Production",
      content: <p >Our wheat farming methods incorporate the latest techniques to increase efficiency and crop yield, while preserving soil health. From precision farming to sustainable water management, we ensure our wheat meets the highest standards without compromising the environment.</p>
    },
    {
      id: 5,
      header: "Pest and Disease Management",
      content: <p >
        We use eco-friendly pest control and disease-resistant crop varieties to ensure the health of our wheat, enhancing both quality and sustainability.
      </p>
    },
    {
      id: 6,
      header: "Logistics and Global Wheat Distribution",
      content:
        <div >
          <h3 className="font-bold  " >Zenith Eclipse Co has a robust logistics network to ensure timely delivery of our premium wheat products worldwide:</h3>
          <ul className="list-disc pl-5 space-y-2 p-4 ">
            <li className=""><b>Hopper Wagons:</b>  Perfect for transporting grain across CIS countries.</li>
            <li className="tex"><b>Covered Wagons:</b> Ideal for transporting packaged wheat, protecting it from adverse weather conditions.</li>
            <li className=""><b>Vessels:</b>  Equipped with the latest technology, our fleet ensures secure and efficient global shipments.</li>
          </ul>

        </div>

    },
    {
      id: 10,
      header: "Commitment to Sustainability in Wheat Production",
      content:
        <p>
          At Zenith Eclipse Co, sustainability is at the core of our operations. We implement eco-friendly farming practices that reduce water consumption, lower carbon emissions, and promote soil health. Our dedication to the environment ensures that we not only meet today’s demands but also safeguard the future of wheat production.
        </p>

    },
    {
      id: 11,
      header: "Why Zenith Eclipse Co is Your Trusted Wheat Supplier",
      content:
        <p>From farm to table, Zenith Eclipse Co is committed to delivering top-quality, non-GMO wheat to global markets. Our innovative farming methods, sustainable practices, and reliable logistics ensure that every grain of wheat meets the highest standards of purity and quality.</p>
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
                <h1 className="h1-design ">Wheat<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Wheat.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Premium  Wheat Supplier <br /> High-Quality Wheat for Pasta and Bread Production</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        <div className="pp-part1">
          <p>
          At Zenith Eclipse Co, we are a trusted leader in agriculture, specializing in the production and supply of top-quality milling and hard wheat. Grown in the fertile climates of the northern steppes, our non-GMO wheat stands out for its exceptional quality and nutritional value. We provide premium wheat varieties for both pasta and bread, ensuring the finest grains for culinary professionals and health-conscious consumers.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Why Choose Our Durum Wheat for Premium Pasta?
          </h1>
          <p>
          We understand that healthy livestock is key to sustainable agriculture. That’s why we invest in advanced health monitoring systems and nutritional strategies to ensure the well-being of animals. This dedication not only improves the quality and productivity of livestock products but also reinforces ethical and responsible farming practices.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Sustainable Wheat Farming for Health and Quality
          </h1>
          <p>
          At the heart of our operations is sustainable farming. We leverage advanced techniques such as crop rotation, precision planting, and environmentally friendly pest control to ensure soil health and biodiversity. This commitment to sustainable agriculture not only enhances wheat quality but also supports long-term environmental well-being.
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

export default Wheat
