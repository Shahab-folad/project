


import project from '../assets/images/new-project.png'
import { useState } from 'react';

const Description2 = () => {


    
  const [visibleParagraphs, setVisibleParagraphs] = useState(Array(3).fill(false));

  const toggleParagraph = (index) => {
    setVisibleParagraphs((prev) => {
      const newVisible = [...prev];
      newVisible[index] = !newVisible[index];
      return newVisible;
    });
  };


    return (
        <div className='my-10' >
            <p className='md:text-lg font-Lora my-10 mt-20 px-5  md:px-16'>
                From seed planting to the final delivery of goods, Zenith Eclipse Co is committed to driving efficiency and excellence across the global agricultural and energy sectors. Our operations span 40 countries, reflecting a deep dedication to quality at every stage—from production and distribution to international trade and logistics. Exporting goods is a cornerstone of our business, fostering economic growth and strengthening international trade relationships. We focus on optimizing export processes, consistently exceeding global market expectations, and solidifying our reputation as a trusted supplier of premium agricultural commodities.
            </p>

            <section className="my-5  px-5 md:px-16">
                <h2 className='text-2xl md:text-3xl my-5 font-Cinzel text-custom-blue'> Key Operations</h2>
                <p className='md:text-lg font-Lora my-2' >
                    At the core of Zenith Eclipse Co’s success is our expertise in cultivating, processing, and distributing a diverse range of agricultural products. Our offerings include high-quality grains, lentils, seeds, and premium oils such as sunflower and rapeseed oil. We operate advanced manufacturing facilities that produce superior wheat products and flour, meeting market demands with precision. We understand the critical role of logistics in maintaining a seamless supply chain. By leveraging an extensive network of trains, ships, and trucks, we ensure efficient global delivery, connecting suppliers and consumers effectively across 40 countries
                </p>
            </section>

            <div className="my-5 md:flex items-center   px-5 md:px-16">
                <div className="flex-1">
                    <img src={project} alt="new project" />
                </div>
                <section className='flex-1'>
                    <h2 className='text-2xl md:text-3xl my-5 font-Cinzel text-custom-blue'>Venturing into Petrochemicals</h2>
                    <p className='md:text-lg font-Lora my-2'>Driven by innovation, Zenith Eclipse Co has expanded its portfolio to include petrochemical products such as ethylene, propylene, and polyethylene. This strategic move allows us to meet diverse industrial needs, reinforcing our position as leaders in industry advancements and broadening our impact across various sectors.</p>
                </section>
            </div>

            <section className="my-5 flex items-center justify-center px-12 md:px-32 bg-gray-200 relative h-80">
                <h1 className='text-[6rem] md:text-[13rem] font-bold font-Lora absolute left-[50%] -translate-x-[50%] text-gray-300'>
                    40+
                </h1>
                <h2 className='text-2xl md:text-3xl font-bold relative text-center'>
                    Our presence stretches across 40+ nations, marking us as a key player in connecting high-quality products with the markets that need them most.
                </h2>
            </section>

            <section className='mx-5 md:mx-20 p-10 rounded-xl shadow-xl ' >
                <dl>
                    <dt onClick={() => toggleParagraph(0)} className='text-xl font-Cinzel mb-2 font-bold md:text-2xl ' >Core Objective</dt>
                    <dd className={`font-Lora text-base md:text-lg transition-all duration-200 max-h-0 overflow-hidden ease-out border-b-2 ${visibleParagraphs[0] ? 'max-h-max py-5' : ''} `} >Our primary goal is to enhance lives by sourcing and delivering essential goods. We are dedicated to fostering development and generating value for clients, investors, employees, and the communities where we operate. Safety, environmental sustainability, and community well-being are at the heart of every initiative we undertake.</dd>

                    <dt onClick={() => toggleParagraph(1)}  className='text-xl mt-5 font-Cinzel mb-2 font-bold md:text-2xl ' >Our Vision</dt>
                    <dd className={`font-Lora text-base md:text-lg transition-all duration-200 max-h-0 overflow-hidden ease-out border-b-2 ${visibleParagraphs[1] ? 'max-h-max py-5' : ''} `}>We strive for progress and sustainability by integrating agriculture, manufacturing expertise, global logistics, petrochemicals, and international trade services. Through seamless supply chain management, we connect individuals, businesses, and communities, setting new standards for a thriving future.
                    </dd>

                    <dt onClick={() => toggleParagraph(2)}  className='text-xl mt-5 font-Cinzel mb-2 font-bold md:text-2xl ' >Commitment</dt>
                    <dd className={`font-Lora text-base md:text-lg transition-all duration-200 max-h-0 overflow-hidden ease-out border-b-2 ${visibleParagraphs[2] ? 'max-h-max py-5' : ''} `}>At Zenith Eclipse Co, we are more than a conglomerate—we are a collective of innovators and visionaries working together to create meaningful global impact. Our mission is not just to meet demands but to shape a sustainable and prosperous future. Operating in 40+ nations, we play a pivotal role in connecting high-quality products with the markets that need them most.</dd>
                </dl>
            </section>
        </div>
    )
}

export default Description2
