'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';





const Rapeseed = () => {


    const features = [
        {
            id: 1,
            header: "Strict Quality Control for Maximum Safety",
            content: <div>
                <h3 className='font-bold my-1 '>Monitoring Erucic Acid Levels</h3>
                <p >We take pride in our stringent quality control measures, particularly in monitoring erucic acid levels in rapeseed oil. Our careful breeding and selection processes ensure that our products meet the highest safety standards, providing peace of mind to consumers and industries alike.</p>
            </div>
        },
        {
            id: 2,
            header: "Commitment to Environmental Responsibility",
            content: <article>
                <section className="my-5">
                    <h3 className=' font-bold my-1 '>Working with Farmers and Markets</h3>
                    <p >We collaborate closely with farmers and international markets, ensuring a consistent supply of high-quality rapeseeds. Our extensive network allows us to efficiently source and distribute seeds, maintaining excellence throughout the supply chain.</p>
                </section>

                <section className="my-5">
                    <h3 className=' font-bold my-1 '>Efficient Shipping and Storage</h3>
                    <p >Our efficient shipping network guarantees the secure and timely delivery of rapeseeds worldwide. With strategically located facilities and state-of-the-art storage solutions, we ensure that our products maintain their quality during transportation and reach customers in perfect condition.</p>
                </section>

            </article>
        },
        {
            id: 3,
            header: "Health and Environmental Benefits of Rapeseeds",
            content:
                <p >Our rapeseeds are not only beneficial for human health but also play an important role in improving soil quality through crop rotation. These nutrient-rich plants help reduce pests naturally, contributing to healthier ecosystems and sustainable farming practices.</p>

        },
        {
            id: 4,
            header: "Sustainable Farming for a Better Future",
            content:
                <p >We take conscious steps to reduce our environmental footprint by using fewer chemical fertilizers and pesticides and implementing water management techniques. Our goal is to foster ecological balance while producing high-quality rapeseeds. Additionally, our efficient packaging and storage methods help preserve product quality while minimizing environmental impact.</p>

        },
        {
            id: 5,
            header: "High-Quality Varieties of Oilseeds",
            content:
                <p >Our focus on cultivating oilseed varieties with high yield potential supports sustainable farming. These seeds are essential for various applications, including biofuels, animal feed, and food production, aligning with our mission to provide environmentally responsible agricultural solutions.</p>

        },

        {
            id: 6,
            header: "Ensuring Optimal Storage and Shelf Life",
            content:
                <p >We maintain optimal storage conditions, including controlled temperature and humidity levels, to preserve the nutritional value and quality of our rapeseeds. This ensures a longer shelf life and guarantees that our customers receive fresh, high-quality products suitable for various applications.</p>


        },
        {
            id: 7,
            header: "Global Reach and Efficient Shipping",
            content:
                <p >With a robust shipping network, we deliver our premium rapeseeds to customers worldwide. Our logistics team manages every aspect of the distribution process, ensuring that our seeds maintain their excellence from the moment they leave the farm until they reach your doorstep.</p>
        },
        {
            id: 8,
            header: "Choose Premium Rapeseeds for Quality and Sustainability",
            content: <div>
                <p >Our rapeseeds are ideal for a variety of industrial applications, from natural ingredient production to biofuels. By selecting our rapeseeds, you’re not only choosing a high-quality product but also supporting sustainable farming practices that are good for the planet.</p>
                <p >Join us in promoting a more sustainable future with every seed you plant.</p>
            </div>

        }
    ]


  


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
                    <h1 className="h1-design ">Rapeseeds<span className="p-line">____</span></h1>
                  </div>
                  {/* ********* */}
                  <div className="product-img item2">
                    <img src="./product/Rapeseed.jpg" alt="" />
                  </div>
                  {/* ********** */}
                  <div className="product-title item3">
                    <h1 className="h1-sub-design">Premium Rapeseeds Supplier <br />  Pure & Non-GMO</h1>
                  </div>
                </div>
          </div>
    {/*****************************************************************************************/}
          <div className="product-description">
            <div className="pp-part1">
              <p>
              We are proud to offer premium rapeseeds, meticulously grown in the fertile lands of the steppes. Our commitment to non-GMO farming practices and sustainable agriculture ensures that each batch meets the highest standards of purity and environmental responsibility.
              </p>
            </div>
            <div className="pp-part1">
              <h1 className="ph1">
              The Natural Benefits of Rapeseeds
              </h1>
              <p>
              Rapeseeds are celebrated for their natural compounds, particularly glucosinolates, which are known for their health-promoting properties. Through selective breeding and modern cultivation techniques, we enhance the beneficial aspects of glucosinolates while minimizing drawbacks. Our focus is to provide rapeseeds rich in natural goodness and free from harmful additives.
              </p>
            </div>
            <div className="pp-part1">
              <h1 className="ph1">
              Cutting-Edge Farming Techniques
              </h1>
            
              <h1 className="ph2">
              Precision Agriculture for Sustainable Growth
              </h1>
              <p>
              Our agricultural practices utilize the latest in precision agriculture, ensuring that each step of the growing process is optimized. We monitor soil health, integrate pest management, and maintain sustainable practices that support both yield and environmental integrity.
              </p>
              <h1 className="ph2">
              Ideal Growing Conditions
              </h1>
              <p>
              The unique climate and fertile soils in our growing regions provide the ideal setting for cultivating high-quality rapeseeds. This combination results in seeds that are rich in oil and known for their superior quality, enhancing their value for multiple uses.
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

export default Rapeseed
