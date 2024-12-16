'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const SunflowerMeal = () => {


    const features = [
        {
            id: 1,
            header: "Organic and GMO-Free Options",
            content: <div>
                <p >  We also offer organic sunflower meal, produced without pesticides or synthetic fertilizers, providing an eco-friendly alternative that supports sustainable farming practices. This organic meal meets high nutritional standards for livestock while adhering to environmentally responsible methods.</p>
                <ul className=" my-3 list-disc">
                    <li><b>Non-GMO assurance:</b> Our sunflower meal is GMO-free, meeting the growing demand for safe and natural animal feed.</li>
                </ul>
            </div>
        },
        {
            id: 2,
            header: "Nutrient-Rich Profile for Animal Feed",
            content: <article>
                <section className="my-5">
                    <p > Our sunflower meal is rich in protein and fiber, playing a crucial role in supporting the health and productivity of livestock. The high protein content and essential nutrients ensure that animals receive a balanced and wholesome diet:
                    </p>
                    <ul className=" my-3 list-disc ">
                        <li>High Protein Content: Vital for muscle growth and development in livestock</li>
                        <li>Abundant Fiber: Supports digestion and enhances gut health, aiding nutrient absorption</li>
                    </ul>
                </section>
                <section className="my-5">
                    <h3 className="my-3 font-bold">Benefits for Ruminant Livestock</h3>
                    <p >Sunflower meal is particularly beneficial for ruminant animals such as cattle, sheep, and goats, whose digestive systems efficiently break down the high fiber content. The meal promotes rumen health, enhances digestion, and contributes to improved growth and productivity.</p>
                </section>
            </article>
        },
        {
            id: 3,
            header: 'Cost-Effective and Nutritious Feed Ingredient',
            content: <p >
                Sunflower meal offers a cost-effective alternative to protein sources like soybean meal, allowing farmers to optimize their feed resources while maintaining the health and productivity of livestock. Additionally, it provides crucial nutrients like phosphorus, magnesium, and vitamin E, essential for enhancing livestock health and immunity.
            </p>

        },
        {
            id: 4,
            header: 'Global Demand and Export Growth',
            content: <p >
                The export market for sunflower meal has seen significant growth due to increasing global demand for protein-rich animal feeds. Our strong presence in the global market allows us to efficiently supply premium sunflower meal to regions worldwide, ensuring livestock farmers have access to high-quality nutrition for their animals.
            </p>

        },
        {
            id: 5,
            header: "Efficient Logistics and Global Distribution",
            content: <article>
                <section className="my-5">
                    <h3 className=" my-3 font-bold">Reliable Shipping Solutions</h3>
                    <p >At Zenith Eclipse Co, we employ various transportation methods, including road transport, rail, and sea freight, to ensure our sunflower meal reaches customers worldwide without compromising on quality.</p>
                </section>
                <section className="my-5">
                    <h3 className=" my-3 font-bold">State-of-the-Art Storage Facilities</h3>
                    <p >
                        Our advanced storage facilities are equipped with cutting-edge technology to maintain the freshness and nutritional value of our sunflower meal, ensuring large-scale distributions are handled efficiently.</p>
                </section>
                <section className="my-5">
                    <h3 className="my-3 font-bold">Safe and Secure Transport
                    </h3>
                    <p >
                        We adhere to strict safety standards in transporting sunflower meal, minimizing risks during transit to preserve the product’s quality. Our packaging ensures safe handling, reducing the risk of dust formation or contamination during transport.</p>
                </section>
            </article>
        },
        {
            id: 6,
            header: "Processing Techniques for Maximum Protein Content",
            content: <p >
                Our sunflower meal production involves pressing and hot pressing techniques, yielding protein contents ranging from 25-40%. These processing methods significantly enhance the protein profile of the meal, making it ideal for high-performance animal feed formulations.
            </p>
        },
        {
            id: 7,
            header: " Safety Data Sheet (SDS) for Sunflower Meal",
            content: <div>
                <p >We provide a comprehensive Safety Data Sheet (SDS) to ensure safe handling and storage of our sunflower meal. This document includes:</p>
                <ul className=" my-3 list-disc ">
                    <li>
                        <b>Product Identification:</b>  Sunflower meal used as animal feed</li>
                    <li><b>Composition:</b>  Rich in proteins and fibers</li>
                    <li> <b>Handling and Storage:</b> Store in a dry, well-ventilated area to prevent moisture and dust accumulation </li>
                    <li> <b> Exposure Controls:</b> Use protective equipment if ventilation is inadequate</li>
                </ul>
                <p >
                    Our SDS outlines all necessary precautions to ensure safe and efficient use of our sunflower meal.
                </p>
            </div>
        },
        {
            id: 8,
            header: "Trusted Partner for Quality Sunflower Meal",
            content: <div>
                <p >
                    As a trusted supplier of sunflower meal, we are dedicated to meeting the nutritional needs of livestock around the globe. Our meticulous focus on quality, paired with our extensive distribution network, guarantees not only a premium product but also peace of mind through thorough safety and handling procedures.
                </p>
                <p className="mt-5">  Choose Zenith Eclipse Co for premium sunflower meal, where quality and sustainability meet global standards in animal nutrition.</p>
            
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
                    <h1 className="h1-design ">Sunflower Meals<span className="p-line">____</span></h1>
                  </div>
                  {/* ********* */}
                  <div className="product-img item2">
                    <img src="./product/Sunflower Meal.jpg" alt="" />
                  </div>
                  {/* ********** */}
                  <div className="product-title item3">
                    <h1 className="h1-sub-design">Sunflower Meal for Animal Feed</h1>
                  </div>
                </div>
          </div>
    {/*****************************************************************************************/}
          <div className="product-description">
            <div className="pp-part1">
              <p>
              Zenith Eclipse Co specializes in supplying high-quality sunflower meal, a nutritious byproduct of sunflower oil production, widely used in animal feed. Our sunflower meal supports the diets of livestock such as poultry, cattle, and swine, enhancing their health and productivity. Available in two variants – pressed with 25-30% protein and hot-pressed with 35-40% protein – our product is processed to meet global standards of quality and nutrition.
              </p>
            </div>
            <div className="pp-part1">
              <h1 className="ph1">
              Premium Sunflower Meal for Livestock Nutrition
              </h1>
              <p>
              At Zenith Eclipse Co, we are committed to providing top-quality sunflower meal that not only complies with nutritional guidelines but also contributes to the well-being and efficiency of livestock. Each batch is carefully processed to ensure consistency, purity, and nutrient-rich content. Our sunflower meal delivers a balanced mix of proteins, fibers, and essential nutrients to boost livestock health, immunity, and productivity.
              </p>
            </div>
            <div className="pp-part1">
              <h1 className="ph2">
              Tailored Variants for Optimal Nutrition
              </h1>
              <ul className="list mt-8 mb-4">
                <li><b>Pressed sunflower meal:</b> 25-30% protein content</li>
                <li><b>Hot-pressed sunflower meal:</b> 35-40% protein content</li>
              </ul>
              <p>
              Both variants are ideal for high-performance livestock that require enhanced nutrition for growth and productivity.
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

export default SunflowerMeal
