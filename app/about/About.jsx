'use client';

import { useState } from 'react'
import "./about.css";

const About = () => {


  

  return (
    <>
    
    <div className='about'>
{/*********************** Header Title ***************************/}
      <div className="about-header">
        <h1 className='about-header-h1'>
              EXCELLENCE IN SUSTAINABLE
        </h1>
        <h1 className='about-header-h1-2'>
          AGRICULTURE & LOGISTICS
        </h1>
      </div>
{/***************************** Content *****************************/}

    <div className="about-content">
      <div className="about-left-content">
        <p className='about-left-content-p1 standard-p'>
        At the forefront of sustainable agriculture and logistics we are decided to the production, processsing, and distribution of high-quality agricultural commodities. From grains and lentils to premium oils like subflower, rapeseed, and flaxseed, our commitment to excellence begins with the sselections of superior seeds. These seeds lay the foundation for resilient crops and ensure the consistent quality of our entire product line.
        </p>
        <br />
        <p className="about-left-content-p2 standard-p">
        Our approuch extends beyond crop production to support livestock health, an essential component of a sustainable agricultural ecosystem. Through advanced health monitoring and tailored mutritional stratagies, we work to enhance animal well-being and quality of livestock-based products reinforcing ethical farming practices that esssential part of our operation is the extraction of high-quality oils and nutrient-rich seed meals.
        Our advanced technology ensures the purity of oils derived from sunflower, rapeseed, and flaxeed while promoting sustainable practices throughout the production process. We Are also equiped with state-of-th-art facilities for producing premium wheat and flour, meeting the growing demands of the market with effeciency and precision.
        </p>
        {/* <p className='about-left-content-p1 standard-p'>
        Our global logistics network allows us to deliver products relibility to markets world wiide, utillizing a seamless blend of transport options, including trains, vessels, and trucks. This integrated approach ensures that our supply chain meets global standards while maintaining products freshness and quality.
        At the core of our business is commitment to innovation,, continously refining our processes to stay responsive to our clients and evolving market landscape. By harnesssing the latest technology and industry insight, we provide high-quality services, setting new benchmarks in customer satisfaction andd operational excellence.
        </p> */}

        </div>
      <div className="about-right-content">
        <img src="./AboutImage/2.png" alt="" />
        {/****************** About Video ******************/}
        {/* <div className="about-video">
        <video preload="metadata" autoPlay muted loop playsInline >
        <source src="./AboutImage/about us.mp4" type="video/mp4" />
         Your browser does not support the video tag.
        </video>
        </div> */}
        
      </div>
      
    </div>
    {/****************************** Content part 2-1 ******************************/}
    
      <div className="about-content -mb-16">
      <div className="about-right-content order-2">
        {/****************** About Video ******************/}
        <div className="about-video ">
        <video preload="metadata" autoPlay muted loop playsInline >
        <source src="./AboutImage/about us.mp4" type="video/mp4" />
         Your browser does not support the video tag.
        </video>
        </div>
        
      </div>



      <div className="about-left-content order-1 mb-32">
        <br />
      <p className='about-left-content-p1 standard-p'>
        Our global logistics network allows us to deliver products relibility to markets world wiide, utillizing a seamless blend of transport options, including trains, vessels, and trucks. This integrated approach ensures that our supply chain meets global standards while maintaining products freshness and quality.
        At the core of our business is commitment to innovation,, continously refining our processes to stay responsive to our clients and evolving market landscape. By harnesssing the latest technology and industry insight, we provide high-quality services, setting new benchmarks in customer satisfaction andd operational excellence.
        </p>
        </div>
  {/**********************************  **********************************/}
  
      </div>



    {/****************************** Content part 2-2 ******************************/}
    <div className="about-global-content">
      {/* <p className='standard-p global-p'>
      Our global logistics network allows us to deliver products relibility to markets world wiide, utillizing a seamless blend of transport options, including trains, vessels, and trucks. This integrated approach ensures that our supply chain meets global standards while maintaining products freshness and quality.
      At the core of our business is commitment to innovation,, continously refining our processes to stay responsive to our clients and evolving market landscape. By harnesssing the latest technology and industry insight, we provide high-quality services, setting new benchmarks in customer satisfaction andd operational excellence.
      </p> */}

      
      <p className="global-p2 standard-p">
      Our mission is the responsibily source and supply essential commodities,  fostering sustainable growth and delivering value to customers, shareholders, employees, and comunities. Safety, environmental stewardship, and community well-being are central to our activities as we work to unify agriculture, logistics, and petrochemicals. We are committed to buillding connections that drive progress and sustainablility new standards of excellence in  our field.
      </p>
    </div>

    {/************************************ Team content ************************************/}




    
    <div className="team-container ">

      
      {/* <div className='team-content'> */}
        <p className="team-p1 standard-p">
        Our team is dedicated to build lasting relationships with clients by offering tailored solutions that meet the unique demands of global supply chains. With expertise in freight forwarding, contract logistics, and specialized transport, we deliver comprehensive logistics solutions that ensure timely, safe, and efficient movement of goods across borders.
        </p>
        <img className='global-img' src="./AboutImage/3.png" alt="" />
        <p className='team-p2 standard-p'>
        in key agricultural regions, we provide customized logistics solutions to address the spencific needs of perhsable and high-quality products. Our expertise in animal feed logistics also ensures that various types of feed are delivered safely and on sechedule to support livestock health and productivity.
        </p>
      </div>
    {/* </div> */}
    {/********************************** end content **********************************/}
    <div className='end-content-container'>
      <p className='standard-p end-content-p'>
      Through our integrated, customer-centric approach, we continue to supprt sustainable practices and the global agriculture industry, driving innovation and excelence at every level of our operation.
      </p>
    </div>

    </div>



    </>
  );
}

export default About
