'use client'


import { IoIosArrowDown } from "react-icons/io";

import { motion } from 'framer-motion';


import { useState, useEffect } from "react";


const Oats = () => {

  const features = [
    {
      id: 1,
      header: "Types of Oats and Their Uses",
      content:
        <dl className="px-2">
          <dt className="text-lg mt-4 font-bold" >Whole Oat Grains</dt>
          <dd className="mt-1">Whole oat grains are minimally processed, making them perfect for:</dd>
          <ul className="list">
            <li>Oatmeal</li>
            <li>Baking (as oat flour)</li>
          </ul>

          <dt className="text-lg mt-4 font-bold">Steel-Cut Oats</dt>
          <dd>These whole grains are cut into smaller pieces, offering a hearty and nutritious option for:</dd>
          <ul className="list">
            <li>Breakfast cereals</li>
            <li>Porridge</li>
          </ul>

          <dt className="text-lg mt-4 font-bold">Rolled Oats</dt>
          <dd>Rolled oats are steamed and flattened, making them ideal for:</dd>
          <ul className="list">
            <li>Quick-cooking porridge</li>
            <li>Baking ingredients for cookies and granola bars</li>
          </ul>

          <dt className="text-lg mt-4 font-bold">Instant Oats</dt>
          <dd>Pre-dried for quick preparation, instant oats cater to modern, busy lifestyles, ideal for:</dd>
          <ul className="list">
            <li>Quick breakfasts</li>
            <li>Convenient snacks</li>
          </ul>

          <dt className="text-lg mt-4 font-bold">Oat Bran</dt>
          <dd>Rich in dietary fiber, oat bran is often added to foods to boost their nutritional value, used in:</dd>
          <ul className="list">
            <li>Smoothies</li>
            <li>Baked goods</li>
          </ul>

        </dl>
    },
    {
      id: 2,
      header: "Innovative Farming and Sustainability Practices",
      content: 
      
      <dl className="px-2">
      <dt className="text-lg mt-4 font-bold" >Cutting-Edge Farming Techniques</dt>
      <dd className="mt-1">We employ state-of-the-art tools and precision strategies to maintain optimal growing conditions for our oats. This includes:</dd>
      <ul className="list">
        <li>Crop health monitoring</li>
        <li>Soil quality analysis</li>
      </ul>

      <dt className="text-lg mt-4 font-bold">Eco-Friendly Practices</dt>
      <dd>Our focus on sustainability is reflected in:</dd>
      <ul className="list">
        <li>Water conservation efforts</li>
        <li>Minimized use of fertilizers</li>
        <li>Integrated pest control systems</li>
      </ul>

      <dt className="text-lg mt-4 font-bold">Efficient Harvesting</dt>
      <dd>Our advanced harvesting machinery reduces waste and optimizes grain preservation, ensuring:</dd>
      <ul className="list">
        <li>Top-notch oat grain quality</li>
      </ul>

      {/* <dt className="m-2">Minimal environmental impact</p> */}
      <dt className=" mt-4 ">Minimal environmental impact</dt>

    </dl>
    },
    {
      id: 3,
      header: "Premium Gluten-Free and Organic Oats",
      content: <p className="px-2">
        For individuals following a gluten-free diet, we provide specialized oats processed in facilities free from gluten contamination, ensuring they meet strict gluten-free standards. Additionally, our organically grown oats are produced without pesticides or synthetic fertilizers, providing a healthy, eco-friendly option for consumers.
      </p>
    },
    {
      id: 4,
      header: "Global Trade and Oats Export",
      content:  <dl className="px-2">
      <dt className="text-lg mt-4 font-bold" >Leading the Way in Oats Export</dt>
      <dd className="mt-1">As demand for premium oats continues to rise globally, Zenith Eclipse Co is at the forefront of the oats export market, supplying top-quality oats to various international regions. Our ability to meet the growing global appetite for oats highlights our commitment to quality and sustainability in oat cultivation.</dd>
     
      
    </dl>
    },
    {
      id: 5,
      header: "The Nutritional Powerhouse of Oats",
      content: 
      <dl className="px-2">
      <dt className="text-lg mt-4 font-bold" >High Fiber Content</dt>
      <dd className="mt-1">Oats are rich in beta-glucan, a soluble fiber that helps:</dd>
      <ul className="list">
        <li>Lower cholesterol levels</li>
        <li>Stabilize blood sugar</li>
        <li>Support heart health</li>
      </ul>

      <dt className="text-lg mt-4 font-bold">Antioxidants</dt>
      <dd>Oats contain avenanthramides, antioxidants unique to oats that:</dd>
      <ul className="list">
        <li>Reduce blood pressure</li>
        <li>Offer anti-inflammatory benefits</li>
      </ul>

      <dt className="text-lg mt-4 font-bold">Essential Nutrients</dt>
      <dd>Oats are a rich source of:</dd>
      <ul className="list">
        <li>Protein</li>
        <li>Magnesium</li>
        <li>Zinc</li>
        <li>Folate</li>
      </ul>


    </dl>
    },
    {
      id: 6,
      header: "Logistics and Worldwide Oats Distribution",
      content:
      <dl className="px-2">
      <dt className="text-lg mt-4 font-bold" >Specialized Storage Facilities</dt>
      <dd className="mt-1">Our oats are stored in climate-controlled facilities, which:</dd>
      <ul className="list">
        <li>Preserve freshness</li>
        <li>Prevent spoilage</li>
      </ul>

      <dt className="text-lg mt-4 font-bold">Global Transportation Network</dt>
      <dd>Our advanced logistics system ensures timely, efficient delivery through:</dd>
      <ul className="list">
        <li>Rail, road, and sea transport</li>
        <li>Carefully monitored quality control for every shipment</li>
      </ul>

      <dt className="text-lg mt-4 font-bold">Extensive Market Reach</dt>
      <dd>Our global distribution network serves customers across:</dd>
      <ul className="list">
        <li>North America</li>
        <li>Europe</li>
        <li>Asia</li>
      </ul>
      <dt className=" mt-4 ">Other international markets</dt>

    </dl>

    },
    {
      id: 10,
      header: "Commitment to Community and Environmental Sustainability",
      content:
        <p>
          At Zenith Eclipse Co, our business practices focus on environmental stewardship and community engagement. We support farmers through sustainable agriculture programs, and we engage in community outreach to promote nutrition and healthy eating.
        </p>

    },
    {
      id: 11,
      header: "Why Choose Zenith Eclipse Co for Premium Oats?",
      content:
        <p>
As global leaders in oat production, Zenith Eclipse Co offers unmatched expertise in high-quality oats, sustainability, and logistics. Our nutritious, eco-friendly oats meet the highest industry standards, making us the trusted choice for consumers and businesses alike.</p>
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
                <h1 className="h1-design ">Oats<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Oats.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Top Supplier of Premium Oats <br /> Leading Global Producer and Distributor</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        <div className="pp-part1">
          <p>
          At Zenith Eclipse Co, we are industry pioneers in the cultivation, production, and distribution of premium oats—a highly nutritious grain known for its numerous health benefits and versatile uses. Located in ideal regions for oat farming, we leverage optimal growing conditions to produce high-quality, sustainably-grown oats for both local and global markets.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Expanding Market for Oats and Health-Conscious Consumers
          </h1>
          <p>
          The demand for oat-based products has surged, driven by increased consumer awareness of their health benefits. As a major player in the global oats market, Zenith Eclipse Co is positioned to capitalize on this trend by maintaining a reliable supply chain and offering a wide range of oat products. Our commitment to quality and sustainability ensures we meet the evolving needs of customers around the world.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Sustainable Oat Farming for Superior Quality
          </h1>
          <p>
          Our expertise in oat farming enables us to optimize each step of the cultivation process, resulting in improved yield and top-tier quality. By implementing advanced farming techniques and sustainable practices, we ensure that our oats are grown responsibly, preserving ecosystems while fulfilling consumer demand for eco-friendly products.
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

export default Oats
