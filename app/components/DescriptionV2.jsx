'use client';



import React from "react"

const DescriptionV2 = () =>{
    const imageSize = {
        height: '35px'
      };
    return(
        <>
        <div className='description-container'>
{/*************************************************************************************************/}
{/********************************************Right*****************************************************/}
            <div className='con-r'>
                <div className='des'>
                <div className="key-operations mb-3">
                <img className="newImage-section -m-2" src="./icons/DoubleComa.png" alt="dedication"  style={imageSize} />
                <h3>Dedication & Responsibility</h3>
                
                </div>
                {/****************************** paragraph ******************************/}
                <div className="key-operations-p">
                <p className="con-p">
                we are committed to delivering quality, reliability, and sustainability in the seeds we provide. Our focus is on sourcing responsibly and ensuring efficient delivery, helping businesses grow with products that meet their needs and expectations.
                <br /><br />
                Our robust distribution network for grains and seeds ensures the accessibility of premium products across diverse agricultural markets. By employing effective supply chain management, we guarantee that every delivery upholds our high-quality standards. This not only ensures customer satisfaction but also supports sustainable practices, promoting long-term success and balance.
                </p>
            </div>
            <br /><br />
{/***********************************************************************************************/}
                <div className="key-operations mb-3">
                <img className="newImage-section -m-2" src="./icons/DoubleComa.png" alt="sustainable "  style={imageSize} />
                <h3>Sustainable Farming</h3>
                
                </div>
                {/****************************** paragraph ******************************/}
                <div className="key-operations-p">
                <p className="con-p2">
                Sustainable farming is at the heart of everything we do. We believe that promoting practices that improve integrity, resource efficiency, and farmer profitability helps build a sustainable future. Our seeds are grown in harmony with nature, boosting not only crop yields but also preserving soil health and biodiversity. This commitment ensures we meet today’s agricultural demands while safeguarding the planet for future generations.
                <br /><br />
                Beyond providing seeds for crops, we take pride in producing high-quality meals for animal feed as a byproduct of our seed processing. After oil extraction, the remaining seed meal is transformed into a nutritious resource for both livestock and plants. Incorporating this meal into animal feed enhances livestock health and productivity, ensuring that no part of the seed goes to waste.
                <br /><br />
                Our seed meals are created with the same rigorous quality standards applied to our seeds, supporting both plant and animal agriculture. This dual-purpose approach contributes to a balanced, sustainable agricultural ecosystem.
                </p>
            </div>
{/***********************************************************************************************/}
<br /><br />
{/***********************************************************************************************/}
                <div className="key-operations mb-3">
                <img className="newImage-section -m-2" src="./icons/DoubleComa.png" alt="harvesting"  style={imageSize} />
                <h3>Harvest Season</h3>
                
                </div>
                {/****************************** paragraph ******************************/}
                <div className="key-operations-p">
                <p className="con-p3">
                Harvest season marks the culmination of our year-long dedication to seed production. During this critical period, our team ensures the careful harvesting and processing of premium seeds that meet the expectations of our customers. With meticulous attention to detail, we maintain seed quality from field to storage, ensuring viability and consistency.
                <br /><br />
                We are committed to supporting global markets and enhancing agricultural exports. Our high-quality seeds are in demand worldwide, contributing to the prosperity of nations. Through expert supply chain management, agricultural expertise, and adherence to stringent standards, we help grow and strengthen agricultural industries around the globe.
                <br /><br />
                Our global supply network serves as the backbone of our business, enabling us to source top-quality seeds from various regions and efficiently manage shipping. This ensures that our products reach customers on time, wherever they are located, while maintaining the highest quality standards.
                </p>
            </div>           
                </div>
            </div>
{/*************************************************************************************************/}
{/***********************************************Left**************************************************/}
            <div className="con-l">
            <div className="mt-8 lg:mt-24 xl:mt-24 pl-10 lg:pl-24 xl:pl-24 description-img-con">
                    <img src='/images/wheat.png' alt="wheat" />
                </div>
                {/* <div className="rounded-lg pl-16 relative z-0 -top-16 -left-5">
                   <video className='rounded-lg vdr' preload="metadata" autoPlay muted loop playsInline>
                            <source src="./videos/agri.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                </div> */}
            </div>

        </div>
        </>
    );
}

export default DescriptionV2