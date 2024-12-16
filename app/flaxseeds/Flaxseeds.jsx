'use client'

import { IoIosArrowDown } from "react-icons/io";

import { motion } from 'framer-motion';


import { useState, useEffect } from "react";


const Flaxseeds = () => {

    const features = [
        {
            id: 1,
            header: "Climate and Soil – The Foundation of Flaxseed Quality",
            content:
                <p className=' '>The unique climate and nutrient-rich soil in our growing regions are critical to the superior quality of our flaxseeds. By carefully selecting farms with ideal weather conditions and soil fertility, we ensure that every flaxseed is packed with essential nutrients, including omega-3 fatty acids, fiber, and lignans.</p>

        },
        {
            id: 2,
            header: "Why Our Non-GMO Flaxseeds Are the Best Choice",
            content: <div>
                <h3 className='font-bold my-1 '>Naturally Rich in Omega-3, Fiber, and Antioxidants</h3>
                <p className=''>Our flaxseeds are 100% non-GMO, preserving their natural nutritional benefits. These seeds are an excellent source of:</p>
                <ul className="pl-5 ml-5 my-3 list-disc ">
                    <li>Omega-3 fatty acids: Supporting heart health and reducing inflammation</li>
                    <li>Lignans: Offering antioxidant benefits</li>
                    <li>Dietary fiber: Aiding in digestion and promoting healthy cholesterol levels</li>
                </ul>
                <p >By choosing our flaxseeds, you support healthier living while promoting environmental sustainability.</p>

            </div>
        },
        {
            id: 3,
            header: "Meticulous Harvesting for Top-Quality Flaxseeds",
            content: <article>
                <section>
                    <h3 className="mt-3 mb-1 font-bold">Harvesting at Peak Ripeness</h3>
                    <p >We carefully plan the harvesting process to ensure that each flaxseed is collected at its peak ripeness. This method preserves the nutritional integrity and purity of the flaxseeds, ensuring that they retain their health benefits.</p>
                </section>

                <section>
                    <h3 className="mt-3 mb-1 font-bold">Comprehensive Quality Control</h3>
                    <p >We conduct extensive quality checks throughout every stage of production, from soil quality assessments to the final inspection of the harvested flaxseeds. This guarantees that only the highest-quality seeds make their way to our consumers.</p>
                </section>


            </article>
        },
        {
            id: 4,
            header: "Health Benefits of Our Flaxseeds",
            content: <div>
                <p >Our flaxseeds are a nutritional powerhouse, offering a range of health benefits:</p>
                <ul className="pl-5 ml-5 my-3 list-disc ">
                    <li>Rich in Omega-3s:  Essential for heart health and anti-inflammatory properties</li>
                    <li>High Fiber Content: Supports digestive health and helps regulate cholesterol</li>
                    <li>Antioxidant-Rich:  Lignans found in flaxseeds help combat oxidative stress</li>
                </ul>
                <p >Adding flaxseeds to your diet can also help manage diabetes, alleviate menopausal symptoms, and may even lower the risk of certain cancers.</p>
            </div>
        },
        {
            id: 5,
            header: "Sustainable Farming Practices at the Core",
            content: <div>
                <p >We are committed to sustainable agriculture, ensuring that our farming methods support the environment while producing the highest-quality flaxseeds. Our practices include:</p>
                <ul className="pl-5 ml-5 my-3 list-disc ">

                    <li>Crop rotation to maintain soil health</li>
                    <li>Natural pest control to minimize chemical use</li>
                    <li>Water conservation through advanced irrigation techniques</li>
                </ul>
                <p >These methods ensure that our flaxseeds are grown responsibly and sustainably, reducing our environmental footprint while delivering a superior product.</p>
                <h3 className=" mt-3 mb-1 font-bold">Efficient Irrigation for Maximum Yield</h3>
                <p >Our advanced irrigation techniques help optimize water use, keeping soil moisture levels balanced and supporting the healthy growth of flaxseeds. This not only boosts the quality of our seeds but also promotes sustainable water management.</p>
            </div>
        },
        {
            id: 6,
            header: "Proper Storage for Freshness and Longevity",
            content: <p >
                WFlaxseeds should be stored in cool, dry places to preserve their nutritional benefits. We recommend keeping them away from direct sunlight and moisture to maintain their freshness, flavor, and health benefits over time.
            </p>

        },
        {
            id: 7,
            header: "Global Distribution and Logistics",
            content: <article>
                <section className='my-5'>
                    <h3 className="mt-3 mb-1 font-bold">State-of-the-Art Storage and Packaging</h3>
                    <p >Our cutting-edge packaging solutions protect flaxseeds from moisture and light, maintaining their quality during transit. Our climate-controlled storage facilities ensure that each batch is preserved in optimal conditions until it reaches your location.</p>
                </section>

                <section>
                    <h3 className="mt-3 mb-1 font-bold">Efficient Global Delivery</h3>
                    <p>We provide reliable global delivery, ensuring that our high-quality flaxseeds arrive in perfect condition, whether you’re located in North America, Europe, Asia, or beyond.</p>
                </section>


            </article>
        },
        {
            id: 8,
            header: "Partnering with a Reliable Flaxseed Supplier",
            content: <p >
                As a trusted supplier, we ensure a consistent supply of premium flaxseeds, offering high standards of purity and nutrition. Our rigorous testing and quality control processes guarantee that every batch of flaxseeds we deliver meets the expectations of our clients.
            </p>
        },
        {
            id: 9,
            header: "Why Choose Us for Your Flaxseed Needs?",
            content: <p >
                By partnering with us, you get access to the finest non-GMO flaxseeds, grown sustainably and delivered globally. Whether you are a chef, health enthusiast, or distributor, our flaxseeds are guaranteed to exceed your expectations. We take pride in offering a product that promotes health and well-being while also supporting sustainability and responsible farming.
            </p>
        },

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
                    <h1 className="h1-design ">Flaxseed<span className="p-line">____</span></h1>
                  </div>
                  {/* ********* */}
                  <div className="product-img item2">
                    <img src="./product/Flaxseed.jpg" alt="" />
                  </div>
                  {/* ********** */}
                  <div className="product-title item3">
                    <h1 className="h1-sub-design">Trusted Non-GMO Flaxseed Supplier <br /> High-Quality and Sustainable Seeds</h1>
                  </div>
                </div>
          </div>
    {/*****************************************************************************************/}
          <div className="product-description">
            <div className="pp-part1">
              <p>
              We are proud to be a leading supplier of premium non-GMO flaxseeds, offering top-quality seeds that are highly valued for their purity and numerous health benefits. Sourced from carefully managed farms and grown in environmentally sustainable conditions, our flaxseeds are a staple for health enthusiasts and culinary professionals alike. With global delivery, we ensure you receive the finest flaxseeds, packed with nutrients and ready to elevate your recipes and wellness routine.
              </p>
            </div>
            <div className="pp-part1">
              <h1 className="ph1">
              Exceptional Flaxseeds Grown for Maximum Quality
              </h1>
            </div>
            <div className="pp-part1">
              <h1 className="ph2">
              Sustainable Farming and Precision Planting
              </h1>
              <p>
              Our non-GMO flaxseeds are cultivated using advanced farming techniques, ensuring that the seeds receive the best start possible. By selecting the ideal soil and climate conditions, we guarantee that our seeds grow into high-quality flax plants known for their robust nutritional profile.
              </p>
            </div>
            <div className="pp-part1">
              <h1 className="ph2">
              Crop Management and Long-Term Sustainability
              </h1>
              <p>
              Our success in producing high-grade flaxseeds comes from careful crop rotation, soil health monitoring, and integrated pest management. These sustainable practices not only enhance the yield and quality of our flaxseeds but also ensure the long-term health of the environment.
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

export default Flaxseeds
