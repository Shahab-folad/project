'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const CorianderSeed = () => {

  const features = [
    {
      id: 1,
      header: "Superior Flavor and Culinary Versatility",
      content:
        <dl className="px-2">
        <p>
        Our coriander seeds are celebrated for their exceptional flavor profile, making them essential in kitchens worldwide:
        </p>
        <ul className="list">
            <li>Rich Aroma: A sweet, peppery scent with citrus overtones that elevates any dish.</li>
            <li>
            Robust Flavor: A warm, nutty taste perfect for seasoning meats, spice blends, and a variety of dishes.
            </li>
            <li>
            Versatility: Ideal for spice mixes like garam masala, pickling, baking, and brewing, adapting beautifully to global cuisines.
            </li>
        </ul>

          
        </dl>
    },
    {
      id: 2,
      header: "Committed to Organic and Non-GMO Practices",
      content: 
      <dl className="px-2">
          <p>
          We take pride in offering non-GMO and organic coriander seeds, grown without synthetic pesticides or genetic modifications. Our commitment to organic farming ensures our seeds meet the highest standards of purity, quality, and sustainability.
          </p>

          <dt className="mt-4 font-bold">Organic Fertilization</dt>
          <dd>We enrich the soil using:</dd>
          <ul className="list">
            <li>Natural compost</li>
            <li>Green manure</li>
          </ul><br />
            <p>
            These methods enhance the seeds’ flavor and aroma while promoting environmental health.
            </p>
          <dt className=" mt-4 font-bold">Harvesting and Processing</dt>
          <dd>Our seeds are harvested at peak maturity and processed through rigorous cleaning and drying methods, preserving their aromatic oils and medicinal properties.</dd>

        </dl>
    },
    {
      id: 3,
      header: "Unmatched Quality Control",
      content: 
      <div>
        <p>
        Our coriander seeds undergo strict quality control to ensure they meet the highest industry standards:
        </p><br />
        <ul className="list">
            <li>Non-GMO and Organic Certification: Grown in compliance with organic standards for guaranteed purity.</li>
            <li>
            Rigorously Tested: Every batch is tested for consistency, flavor, and aromatic strength before reaching customers.
            </li>
        </ul>
      </div>
    },
    {
      id: 4,
      header: "Sustainability at the Heart of Our Operations",
      content: 
      <dl className="px-2">
        <p>We use eco-friendly agricultural practices that prioritize the health of the soil, plants, and surrounding environment.</p>
          <dt className=" mt-4 font-bold" >Natural Pest Management</dt>
          <dd className="mt-1">We protect our crops using:</dd>
          <ul className="list">
            <li>Natural predators</li>
            <li>Organic pesticides</li>
          </ul>
            <br />
            <p>
            These methods ensure the integrity of the seeds while minimizing the environmental impact.
            </p>
          
            <dt className=" mt-4 font-bold" >Sustainable Fertilization</dt>
            <dd className="mt-1">We enrich the soil with organic matter, promoting robust plant growth and enhancing flavor while maintaining ecological balance.</dd>
        </dl>
    },
    {
      id: 5,
      header: "Global Distribution and Expert Logistics",
      content: 
      <dl className="px-2">
        <p>We ensure that our premium coriander seeds reach customers worldwide in optimal condition.</p>
          <dt className=" mt-4 font-bold" >State-of-the-Art Packaging</dt>
          <dd className="mt-1">Our seeds are packaged to preserve their freshness and protect their delicate flavors during transit.</dd>
          
          <dt className="mt-4 font-bold" >Efficient Global Shipping</dt>
          <dd className="mt-1">With strategic distribution centers across different continents, we guarantee timely and reliable delivery.</dd>
          
          <dt className="mt-4 font-bold" >Reliable Supply Chain</dt>
          <dd className="mt-1">Our efficient supply chain management ensures we consistently meet customer needs, regardless of demand fluctuations.</dd>
        
        </dl>
    },
    {
      id: 6,
      header: "Culinary Excellence Meets Sustainability",
      content:
      <p>
        Whether you’re a professional chef, culinary enthusiast, or producer, our coriander seeds are the perfect choice for adding rich, aromatic flavor to your dishes. They bring depth to any creation, making them an essential ingredient in your kitchen.
        <br /><br />
        Choose our premium-quality coriander seeds for sustainability, aromatic excellence, and culinary versatility. With every seed, we deliver not only exceptional flavor but also a commitment to environmental responsibility.
      </p>

    },
    {
      id: 10,
      header: "Experience Premium Coriander Seeds",
      content:
        <p>
          Discover the finest coriander seeds, where premium quality meets sustainable farming. Our seeds promise to elevate your culinary creations with vibrant flavors and rich aromas, all while supporting a healthier planet. Partner with us for reliable, high-quality coriander seeds and experience the global standard in spices.
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
                <h1 className="h1-design ">Coriander Seeds<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Coriander Seeds.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Premium Coriander Seeds Supplier <br /> Aromatic Excellence</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        <div className="pp-part1">
          <p>
          We are proud to offer premium coriander seeds, carefully sourced from the fertile fields of our selected farms. Known for their rich aroma and versatile culinary applications, our coriander seeds are a top choice for chefs and home cooks alike. Each seed reflects our commitment to quality, sustainability, and exceptional flavor, making them indispensable in kitchens around the world.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Sustainable Farming for High-Quality Coriander Seeds
          </h1>
          <p>
          Our coriander seeds are grown using sustainable farming practices that align with our dedication to environmental responsibility. We manage crop rotations and implement organic weed control to ensure each harvest yields the finest seeds, free from synthetic pesticides.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph2">
          Organic Weed Control
          </h1>
          <p>
          We maintain a healthy growing environment by using:
          </p><br />
          <ul className="list">
            <li>Organic mulches</li>
            <li>Cover crops</li>
            <li>Manual weeding</li>
          </ul><br />
          <p>
          These methods support robust plant growth and enhance the quality of our coriander seeds.
          </p>
        </div>

        <div className="pp-part1">
          <h1 className="ph2">
          Ideal Soil and Climate
          </h1>
          <p>
          Our selected planting sites ensure that the aromatic vigor of the seeds is fully developed, offering a rich, nutty, and citrusy flavor that enhances your dishes.
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

export default CorianderSeed
