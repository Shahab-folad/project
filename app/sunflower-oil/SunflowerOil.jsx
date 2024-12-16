'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const SunflowerOil = () => {


    const features = [
        {
            id: 1,
            header: "Superior Seed Selection and Harvesting Practices",
            content: <p className='mt-2'>The foundation of our premium sunflower oil lies in the careful selection of high-quality seeds and optimal harvesting practices. We choose top-grade sunflower seeds that ensure high germination rates and healthy plant growth. Our team of experts oversees the harvesting process to ensure seeds are collected at the right stage of maturity, preserving their nutrients and maximizing oil production.</p>
        },
        {
            id: 2,
            header: "Nutritional Benefits of High-Quality Sunflower Oil",
            content: <p className='mt-2'>Sunflower oil is rich in essential nutrients, including vitamins, antioxidants, and fatty acids, which are crucial for a healthy diet and overall well-being. By focusing on every stage of production, Zenith Eclipse Co. ensures that our sunflower oil retains these vital nutrients, providing customers with a product that supports a balanced, healthy lifestyle.</p>
        },
        {
            id: 3,
            header: "Fatty Acid Composition for Health and Culinary Excellence",
            content: <p className='mt-2'>
                The health benefits of sunflower oil are largely determined by its fatty acid composition. Zenith Eclipse Co.’s sunflower oil is rich in oleic acid, a monounsaturated fatty acid that helps reduce bad cholesterol levels and supports heart health.
            </p>
        },
        {
            id: 4,
            header: "Linoleic Acid for Cellular Health",
            content: <p className='mt-2'>
                Our sunflower oil also contains linoleic acid, an essential polyunsaturated fatty acid that promotes healthy cell function, reduces inflammation, and supports various bodily systems.
            </p>
        },
        {
            id: 5,
            header: "Cold-Pressed Sunflower Oil – Preserving Nutrients Naturally",
            content: <div>
                <p className='mt-2'>One of our flagship products is cold-pressed sunflower oil, which is produced using low-temperature pressing techniques that preserve the oil’s natural essence, color, and nutrients. This method ensures that the oil retains its beneficial fatty acids, vitamins, and antioxidants, making it a healthier and more flavorful option for consumers.</p>
                <h3 className=" mt-2 font-bold">Tocopherol-Rich Sunflower Oil for Enhanced Stability</h3>
                <p >Tocopherols, also known as Vitamin E compounds, play a crucial role in preserving the stability of sunflower oil against oxidation. Our oil is rich in tocopherols, which not only extend its shelf life but also provide significant antioxidant benefits.</p>
            </div>
        },
        {
            id: 6,
            header: "Advanced Refining Techniques for Superior Quality",
            content: <div>
                <p className='mt-2'> At Zenith Eclipse Co. we use cutting-edge refining processes to ensure our sunflower oil meets the highest standards of purity and quality. Our refining techniques involve several key stages to enhance the oil’s clarity, stability, and usability.</p>

                <section className="my-5">
                    <h3 className="my-1 font-bold">Winterization – Ensuring Clarity and Stability</h3>
                    <p >
                        During colder months, our sunflower oil undergoes winterization, a process that removes waxes and other impurities to ensure the oil remains stable and clear, even in lower temperatures.</p>
                </section>
                <section className="my-5">
                    <h3 className="my-1 font-bold">
                        Grinding and Flaking for Maximum Oil Yield</h3>
                    <p >Our advanced grinding and flaking techniques improve the efficiency of the oil extraction process, ensuring that every batch of sunflower seeds is processed to its fullest potential.</p>
                </section>
                <section className="my-5">
                    <h3 className="my-1 font-bold">
                        Dehulling and Neutralization for Enhanced Purity</h3>
                    <p >

                        Dehulling is a critical part of our production process, as removing the seed hulls increases the oil extraction rate and improves the quality of the final product. During neutralization, we remove unwanted fatty acids and other impurities to ensure the oil’s purity.</p>
                </section>
                <section className="my-4">
                    <h3 className="my-1 font-bold">
                        Bleaching and Deodorization for Clean Flavor and Long Shelf Life</h3>
                    <p >
                        Bleaching helps eliminate any remaining color pigments and impurities, while deodorization removes odors and volatile compounds. These processes result in a high-quality oil that is both clean in flavor and long-lasting.</p>
                </section>
            </div>
        },

        {
            id: 7,
            header: " Refined Sunflower Oil – A Versatile Cooking Essential",
            content: <p >
                Our refined sunflower oil is a versatile option for both households and commercial kitchens. It has a neutral taste, making it suitable for frying, baking, and salad dressings, while its high smoke point ensures that it retains its quality even at higher temperatures.
            </p>
        },
        {
            id: 8,
            header: " Crude Sunflower Oil – Preserving Natural Flavors and Nutrients",
            content: <p className='mt-2' >
                For those who prefer a more natural product, our crude sunflower oil retains its natural flavor and nutrients. Extracted with minimal processing, this oil is ideal for industries that require sunflower oil in its purest form.
            </p>
        },
        {
            id: 9,
            header: " Emphasizing Sustainability and Environmental Responsibility",
            content: <div>
                <p className='mt-2' >
                    At Zenith Eclipse Co. sustainability is a priority in every step of our production process. From seed selection to the final product, we implement environmentally friendly practices to minimize waste and energy consumption.
                </p>
                <h3 className="font-bold">Environmentally Friendly Practices and Energy Efficiency</h3>
                <p >Our production facilities in the Northern Steppes follow strict environmental guidelines to ensure that we reduce waste and energy consumption during the oil extraction and refining processes.</p>
            </div>
        },
        {
            id: 10,
            header: " Comprehensive Packaging Solutions for Every Need",
            content: <div>
                <p  >
                    We understand that different customers have different packaging needs, so we offer a wide range of packaging options for our sunflower oil.
                </p>
                <h3 className="mt-3 font-bold">
                    Retail and Bulk Packaging Options
                </h3>
                <p >
                    For households and small businesses, we provide 1-liter and 5-liter bottles of sunflower oil, while our industrial clients can opt for bulk packaging, including tanks and tankers.</p>
            </div>
        },
        {
            id: 11,
            header: " Global Distribution Network – Ensuring Reliable Delivery Worldwide",
            content: <div>



                <p className='mt-2' >
                    Zenith Eclipse Co.’s sunflower oil is available to customers across the globe, thanks to our extensive and efficient logistics network. We ensure that our products are delivered safely and on time, no matter where our customers are located.
                </p>
                <h3 className=" mt-3 font-bold">
                    Expert Logistics and Global Reach
                </h3>
                <p >
                    Our skilled logistics team ensures that all products—whether refined or crude—are handled with care, maintaining their quality and purity throughout the delivery process. With strategically positioned distribution centers, we are able to serve customers around the world quickly and efficiently.
                </p>
            </div>
        },
        {
            id: 12, 
            header: "Choose Zenith Eclipse Co. for Premium Sunflower Oil Products", 
            content: ''
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
                    <h1 className="h1-design ">Sunflower Oil<span className="p-line">____</span></h1>
                  </div>
                  {/* ********* */}
                  <div className="product-img item2">
                    <img src="./product/Sunflower Oil.jpg" alt="" />
                  </div>
                  {/* ********** */}
                  <div className="product-title item3">
                    <h1 className="h1-sub-design">Top-Quality Sunflower Products <br /> Refined and Unrefined Sunflower Oil</h1>
                  </div>
                </div>
          </div>
    {/*****************************************************************************************/}
          <div className="product-description">
            
            <div className="pp-part1">
              <h1 className="ph1">
              Organic and Non-GMO Sunflower Oil for Health-Conscious Consumers
              </h1>
              <p>
              Zenith Eclipse Co takes pride in offering both refined and unrefined sunflower oil, produced in our state-of-the-art processing facilities in the Northern Steppes. We provide a wide range of sunflower oil options, including organic and non-GMO varieties that meet strict organic certification standards. Our products cater to the increasing demand for natural and eco-friendly options, making us a top choice for health-conscious consumers.
              </p>
            </div>
            <div className="pp-part1">
              <h1 className="ph1">
              Sustainable and Organic Farming Methods
              </h1>
              <p>
              Our organic sunflower oil is cultivated without the use of synthetic chemicals or GMOs, ensuring that it is free from harmful residues while maintaining its natural nutritional properties. This oil is perfect for consumers who value environmentally conscious practices alongside superior quality.
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

export default SunflowerOil
