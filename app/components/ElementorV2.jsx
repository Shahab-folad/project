'use client'
import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";



const ElementorV2 = () => {

  const features = [
    {
      id: 1,
      header: "Core Objective",
      content:
        <p>
            Our primary goal is to enhance lives by sourcing and delivering essential goods. We are dedicated to fostering development and generating value for clients, investors, employees, and the communities where we operate. Safety, environmental sustainability, and community well-being are at the heart of every initiative we undertake.
        </p>
    },
    {
      id: 2,
      header: "Our Vision",
      content: 
      <p>
        We strive for progress and sustainability by integrating agriculture, manufacturing expertise, global logistics, petrochemicals, and international trade services. Through seamless supply chain management, we connect individuals, businesses, and communities, setting new standards for a thriving future.
      </p>
    },
    {
      id: 3,
      header: "Commitment",
      content: 
      <p>
        At Zenith Eclipse Co, we are more than a conglomerate—we are a collective of innovators and visionaries working together to create meaningful global impact. Our mission is not just to meet demands but to shape a sustainable and prosperous future. Operating in 40+ nations, we play a pivotal role in connecting high-quality products with the markets that need them most.
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
          <div className='w-full' >
          {
            features.map((feature, index) => (
              <div key={feature.id} className="border-b  border-gray-300 px-5 fontR  py-1 my-2">
                <button onClick={() => toggleParagraph(index)} className={`cursor-pointer flex items-center justify-between  gap-4 w-full text-start pbtn-header 
                   ${visibleParagraphs[index] ? "text-black" : 'text-gray-400'} 
                `}  >
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


              </div>
            ))
          }

        </div>
     
   
    </>
  )
}

export default ElementorV2
