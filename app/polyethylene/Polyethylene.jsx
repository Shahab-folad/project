'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const Polyethylene = () => {

  const features = [
    {
      id: 1,
      header: "Varieties of Polyethylene for Diverse Applications",
      content:
        <dl >
            <p>
            Polyethylene is a highly adaptable polymer with different types, each tailored for specific industrial needs. At Zenith Eclipse Co, we offer a wide range of polyethylene options to suit the unique requirements of various sectors.
            </p>
          <dt className=" font-bold mt-4" >
          High-Density Polyethylene (HDPE)
          </dt>
          <dd className="mt-2">
          HDPE is known for its strength and high density, making it ideal for applications such as:
          </dd>
          <ul className="list mt-2">
                <li>
                Bottles: Durable and impact-resistant, perfect for packaging liquids like milk and detergents.
                </li>
                <li>
                Pipes: Widely used in water and gas distribution due to its corrosion and chemical resistance.
                </li>
                <li>
                Geomembranes: Used in landfill liners and environmental protection.
                </li>
                <li>
                Plastic Lumber: A sustainable alternative to wood, commonly used in outdoor furniture and decking.
                </li>
            </ul>

          <dt className=" mt-4 font-bold">Low-Density Polyethylene (LDPE)</dt>
          <dd>
          LDPE is recognized for its flexibility and low density, making it suitable for:
          </dd>
          <ul className="list mt-2">
            <li>
            Plastic Bags: Grocery bags, food storage bags, and garbage bags.
            </li>
            <li>
            Plastic Films: Flexible and strong, used in shrink wrap and stretch wrap.
            </li>
            <li>
            Tubing: Common in medical, laboratory, and irrigation applications.
            </li>
          </ul>

          <dt className=" mt-4 font-bold">Linear Low-Density Polyethylene (LLDPE)</dt>
          <dd>
          LLDPE offers enhanced strength and puncture resistance, used in:
          </dd>
          <ul className="list mt-2">
            <li>
            Stretch Films: For pallet wrapping and packaging.
            </li>
            <li>
            Agricultural Films: Mulch films, greenhouse covers, and silage bags.
            </li>
            <li>
            Food Packaging: Provides a strong moisture barrier.
            </li>
          </ul>

          <dt className=" mt-4 font-bold">Medium-Density Polyethylene (MDPE)</dt>
          <dd>
          MDPE balances the properties of HDPE and LDPE, suitable for:
          </dd>
          <ul className="list mt-2">
            <li>
            Gas Pipes: Ideal for gas distribution networks due to flexibility and stress-crack resistance.
            </li>
            <li>
            Packaging Films: Commonly used in shrink and packaging films.
            </li>
            <li>
            Fittings and Containers: Used in household and industrial applications.
            </li>
          </ul>

          <dt className=" mt-4 font-bold">Ultra-High Molecular Weight Polyethylene (UHMWPE)</dt>
          <dd>
          UHMWPE is known for its exceptional toughness and abrasion resistance, used in:
          </dd>
          <ul className="list mt-2">
            <li>
            Medical Devices: Such as orthopedic implants like hip replacements.
            </li>
            <li>
            Industrial Use: Conveyor belts, wear strips, and machine components.
            </li>
            <li>
            Sports Equipment: Including high-performance gear like ice hockey pucks.
            </li>
          </ul>

        </dl>
    },
    {
      id: 2,
      header: "Extensive Applications of Polyethylene",
      content: 
      <dl >
      <p>
      The versatility of polyethylene makes it indispensable across various industries:
      </p>
    <dt className="mt-4 font-bold" >
    Packaging Materials
    </dt>
    <dd className="mt-1">
    Polyethylene is a key material in the production of packaging solutions such as films, bags, and containers. Its strength and flexibility make it ideal for protecting goods during transport and storage.
    </dd>

    <dt className=" mt-4 font-bold">
    Consumer Goods
    </dt>
    <dd>
    Polyethylene is used in the manufacturing of everyday items like bottles, toys, and household products. Our polyethylene ensures high durability and performance in consumer goods.
    </dd>

    <dt className=" mt-4 font-bold">
    Construction Materials
    </dt>
    <dd>
    Polyethylene plays a vital role in construction materials such as pipes, geomembranes, and insulation products. Its moisture and chemical resistance make it suitable for demanding construction environments.
    </dd>

    <dt className=" mt-4 font-bold">
    Industrial Usage
    </dt>
    <dd>
    From machine components to agricultural films and chemical storage units, polyethylene is essential for a wide range of industrial applications. Our polyethylene is customized to meet the specific needs of industrial sectors, providing effective and reliable solutions.
    </dd>


  </dl>
    },
    {
      id: 3,
      header: "Commitment to Sustainability and Safety",
      content: 
      <dl >
      <p>
      At Zenith Eclipse Co, we prioritize sustainability and safety in every aspect of our production and distribution processes.
      </p>
    <dt className="mt-4 font-bold" >
    Environmentally Friendly Practices
    </dt>
    <dd className="mt-1">
    We are committed to minimizing our environmental impact by employing production techniques that reduce waste and emissions. Our eco-friendly practices include energy-efficient technologies and sustainable raw materials.
    </dd>

    <dt className=" mt-4 font-bold">
    Advanced Safety Measures
    </dt>
    <dd>
    Due to the nature of petrochemicals, we adhere to stringent safety protocols for handling, storing, and transporting our products. Our advanced safety measures ensure the protection of our staff, customers, and the environment.
    </dd>

  </dl>
    },
    {
      id: 4,
      header: "Global Distribution and Reliable Logistics",
      content: 
      <dl >
      <p>
      Zenith Eclipse Co’s extensive logistics network ensures the secure and timely delivery of polyethylene across the globe. Our global distribution services are designed to meet the diverse needs of our clients.
      </p>
    <dt className="mt-4 font-bold" >
    Safe Transportation
    </dt>
    <dd className="mt-1">
    We use specialized equipment and technology to transport polyethylene over long distances, preserving its quality and purity. Our safe transportation methods involve using secure containers and vehicles.
    </dd>

    <dt className=" mt-4 font-bold">
    Efficient Distribution
    </dt>
    <dd>
    Our strategic distribution network allows us to serve our global clientele efficiently, ensuring prompt and reliable delivery to any location. We partner with trusted logistics providers to ensure timely and secure delivery.
    </dd>

  </dl>
    },
    {
      id: 5,
      header: "Why Choose Us for Polyethylene?",
      content: 
      <dl >
     
    <dt className="mt-4 font-bold" >
    Extensive Industry Knowledge
    </dt>
    <dd className="mt-1">
    With years of experience, Zenith Eclipse Co is a well-respected provider of polyethylene solutions. Our deep understanding of the industry enables us to deliver tailored solutions that meet the unique needs of our clients.
    </dd>

    <dt className=" mt-4 font-bold">
    Customer-Focused Approach
    </dt>
    <dd>
    Customer satisfaction is at the core of everything we do. We are dedicated to providing excellent service and support, ensuring a smooth and positive experience for all our customers.
    </dd>

    <dt className=" mt-4 font-bold">
    Commitment to Innovation and Quality
    </dt>
    <dd>
    At Zenith Eclipse Co, we prioritize innovation and quality in all our processes. Our cutting-edge production facilities and stringent quality control measures guarantee that our polyethylene products meet the highest standards of purity and performance.
    </dd>

  </dl>
    },
    {
      id: 6,
      header: "Get in Touch with Zenith Eclipse Co Today",
      content:
      <p>
      If you’re looking for a reliable supplier of high-quality polyethylene, contact us today. Let us be your trusted partner in delivering top-notch polyethylene solutions that help you achieve your business goals.
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
                <h1 className="h1-design ">Polythylene<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./product/Polyethylene.jpg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Premier Polyethylene Solutions <br /> Pioneering Excellence in Industrial Applications</h1>
              </div>
            </div>
      </div>
{/*****************************************************************************************/}
      <div className="product-description">
        <div className="pp-part1">
          <p>
          We take pride in supplying top-quality polyethylene, a versatile petrochemical used across a wide array of industries. Polyethylene serves as the foundation for producing packaging materials, consumer goods, and construction supplies. With our commitment to delivering the highest quality and service, we provide polyethylene that not only meets but exceeds the demands of modern industrial applications.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph1">
          Unmatched Polyethylene Quality
          </h1>
          <h1 className="ph2">
          Cutting-Edge Production Techniques
          </h1>
          <p>
          Through advanced production processes, we refine our polyethylene to achieve maximum purity, ensuring optimal performance in chemical processes and product formulations. This high-purity production is essential for applications where reliability and performance are critical.
          </p>
        </div>
        <div className="pp-part1">
          <h1 className="ph2">
          Stringent Quality Checks
          </h1>
          <p>
          Every batch of our polyethylene undergoes thorough quality assessments to maintain the high standards expected by our clients. This meticulous approach guarantees a product that offers reliability and efficiency. Our quality assurance measures ensure that our polyethylene consistently aligns with industry specifications, making it a preferred choice among leading manufacturers.
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

export default Polyethylene
