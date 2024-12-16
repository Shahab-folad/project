'use client'
import React from "react";
import Elementor from './Elementor';
import ElementorV2 from "./ElementorV2";

function HomeParagraph(){
    const imageSize = {
        width: '45px',
        height: '45px !important',
      };
    return(
        <div className="content-paragraph">
            <br/>
            <p>
                From seed planting to the final delivery of goods, Zenith Eclipse Co is committed to driving efficiency and excellence across the global agricultural and energy sectors. Our operations span 40 countries, reflecting a deep dedication to quality at every stage—from production and distribution to international trade and logistics. Exporting goods is a cornerstone of our business, fostering economic growth and strengthening international trade relationships. We focus on optimizing export processes, consistently exceeding global market expectations, and solidifying our reputation as a trusted supplier of premium agricultural commodities.
            </p><br/><br/>
            <div className="key-operations mb-3">
                <img className="newImage-section -m-2" src="./icons/2.png" alt=""  style={imageSize} />
                <h3>Key Operations</h3>
                
            </div>
            <div className="key-operations-p">
                <p>
At the core of Zenith Eclipse Co’s success is our expertise in cultivating, processing, and distributing a diverse range of agricultural products. Our offerings include high-quality grains, lentils, seeds, and premium oils such as sunflower and rapeseed oil. We operate advanced manufacturing facilities that produce superior wheat products and flour, meeting market demands with precision. We understand the critical role of logistics in maintaining a seamless supply chain. By leveraging an extensive network of trains, ships, and trucks, we ensure efficient global delivery, connecting suppliers and consumers effectively across 40 countries
                </p>
            </div>
            <br/>
            <br/>
        {/************************** Venturing paragraph **************************************/}
            <div className="Venturing my-grid-container">
                <div className="my-col-6">
                    <img className="ventuing-img" src="./icons/New-Project-1024x800.png" width="90%"  alt=""/>
                </div>
                <div className="my-col-6">
                    <div className="key-operations mb-3">
                        <img className="newImage-section forceImg -m-2" src="./icons/1.png" alt=""  />
                        <h3>Venturing into Petrochemicals</h3>
                    </div>
                    
                    <p>
Driven by innovation, Zenith Eclipse Co has expanded its portfolio to include petrochemical products such as ethylene, propylene, and polyethylene. This strategic move allows us to meet diverse industrial needs, reinforcing our position as leaders in industry advancements and broadening our impact across various sectors.
                    </p>
                </div>
                
                
            </div>
        {/************************** 4+ content **************************************/}
                <div className="background-forty-container items-center justify-center px-10">
                <h1 >
                    Our presence stretches across 40+ nations, marking us as a key player in connecting high-quality products with the markets that need them most.
                </h1>
                </div>
        {/************************** elementor **************************************/}
                <div className="elementor-container">
                    <div className="desktop-elementor">
                    <Elementor title="Core Objective"
                    text="Our primary goal is to enhance lives by sourcing and delivering essential goods. We are dedicated to fostering development and generating value for clients, investors, employees, and the communities where we operate. Safety, environmental sustainability, and community well-being are at the heart of every initiative we undertake."
                    />
                    <Elementor title="Our Vision" 
                    text="We strive for progress and sustainability by integrating agriculture, manufacturing expertise, global logistics, petrochemicals, and international trade services. Through seamless supply chain management, we connect individuals, businesses, and communities, setting new standards for a thriving future."
                    />
                    <Elementor title="Commitment" 
                    text="At Zenith Eclipse Co, we are more than a conglomerate—we are a collective of innovators and visionaries working together to create meaningful global impact. Our mission is not just to meet demands but to shape a sustainable and prosperous future. Operating in 40+ nations, we play a pivotal role in connecting high-quality products with the markets that need them most."
                    />
                    </div>
                    <div className="mobile-elementor">
                         <ElementorV2 />
                    </div>
                </div>
        {/************************** elementor **************************************/}
            
        </div>
        
    );

    

}


export default HomeParagraph;
