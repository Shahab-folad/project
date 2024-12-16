
import dedication from '../assets/images/Dedication-to-Excellence.png'
import harvest from '../assets/images/Harvest-Season-.png'
import sustainableFarming from '../assets/images/Sustainable-Farming.png'

import wheat from '../assets/images/wheat.png'
import demo from '../assets/images/demo.mp4'
import { useEffect, useState } from 'react'

const Description = () => {

    const imgHeight ={
        height: '45px',
        width: '45px'
    };

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)



    useEffect(() => {

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [screenWidth])



    return (
        <div className={`py-10 lg:flex description-cotainer`}>
            <div className='flex-1  d-sm-co'> 
                <div className='grid gap-x-2 items-center grid-cols-my-2'>
                    <img src={dedication} alt="dedication" className="justify-self-end" width={'45px'}/>
                    <h3 className='my-4  standard-h1' >Dedication & Responsibility</h3>
                    <div className="col-start-2" >
                        <p className="mb-5 lg:pt-7 standard-p-sm">we are committed to delivering quality, reliability, and sustainability in the seeds we provide. Our focus is on sourcing responsibly and ensuring efficient delivery, helping businesses grow with products that meet their needs and expectations.</p>
                        <p className='mb-5 lg:pb-10  standard-p-sm'>Our robust distribution network for grains and seeds ensures the accessibility of premium products across diverse agricultural markets. By employing effective supply chain management, we guarantee that every delivery upholds our high-quality standards. This not only ensures customer satisfaction but also supports sustainable practices, promoting long-term success and balance.</p>
                    </div>
                </div>
                 <div className='grid gap-x-2 items-center grid-cols-my-2'>
                    <img src={sustainableFarming} alt="sustainable " className="d-img justify-self-end" width={'45px'}/>
                    <h3 className='my-4 standard-h1' >Sustainable Farming</h3>
                    <div className="col-start-2 lg:col-span-2  lg:pl-16" >
                        <p className="mb-5 font-Lora lg:pt-7 standard-p-big">Sustainable farming is at the heart of everything we do. We believe that promoting practices that improve integrity, resource efficiency, and farmer profitability helps build a sustainable future. Our seeds are grown in harmony with nature, boosting not only crop yields but also preserving soil health and biodiversity. This commitment ensures we meet today’s agricultural demands while safeguarding the planet for future generations.</p>
                        <p className='mb-5 standard-p-big' >Beyond providing seeds for crops, we take pride in producing high-quality meals for animal feed as a byproduct of our seed processing. After oil extraction, the remaining seed meal is transformed into a nutritious resource for both livestock and plants. Incorporating this meal into animal feed enhances livestock health and productivity, ensuring that no part of the seed goes to waste.</p>
                        <p className='mb-5 lg:pb-10 standard-p-big' >Our seed meals are created with the same rigorous quality standards applied to our seeds, supporting both plant and animal agriculture. This dual-purpose approach contributes to a balanced, sustainable agricultural ecosystem.</p>
                    </div>
                </div>
                 <div className='grid gap-x-2 items-center grid-cols-my-2'>
                    <img src={harvest} alt="harvesting" className=" justify-self-end" width={'45px'}/>
                    <h3 className='my-4 standard-h1' >Harvest Season</h3>
                    <div className="col-start-2 lg:col-span-2  lg:pl-16" >
                        <p className="mb-5lg:pt-7 standard-p-sm">Harvest season marks the culmination of our year-long dedication to seed production. During this critical period, our team ensures the careful harvesting and processing of premium seeds that meet the expectations of our customers. With meticulous attention to detail, we maintain seed quality from field to storage, ensuring viability and consistency.</p>
                        <p className="mb-5lg:pt-7 standard-p-sm">We are committed to supporting global markets and enhancing agricultural exports. Our high-quality seeds are in demand worldwide, contributing to the prosperity of nations. Through expert supply chain management, agricultural expertise, and adherence to stringent standards, we help grow and strengthen agricultural industries around the globe.</p>
                        <p className="mb-5lg:pt-7 standard-p-sm">Our global supply network serves as the backbone of our business, enabling us to source top-quality seeds from various regions and efficiently manage shipping. This ensures that our products reach customers on time, wherever they are located, while maintaining the highest quality standards.</p>
                    </div>
                </div>
            </div>
            <div className='flex-1 description-lf-con'>
                <div className="fle pl-24 description-img-con">
                    <img src={wheat} alt="wheat" />
                </div>
                <div className="rounded-lg pl-16 relative z-0 -top-16 -left-5">
                   <video className='rounded-lg' preload="metadata" autoPlay muted loop playsInline>
                            <source src="src/assets/videos/agri.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                </div>
                
            </div>
        </div>
    )
}

export default Description