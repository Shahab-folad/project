'use client'

import React, { useState, useEffect } from 'react'
import { FaAngleLeft, FaAngleRight, FaCircle } from 'react-icons/fa';

const slides = [
    {
      icon: 'images/grain.png',
      title: 'Grain',
      content: (
        <>
          We deliver premium, sustainably sourced grains from the fertile Northern steppes, combining tradition with modern agriculture. Leading the global grain supply, we serve diverse industries with a focus on quality and reliability. Our logistics services provide tailored solutions through strategically located storage and distribution centers near key ports and hubs, ensuring efficient cross-border transport, just-in-time manufacturing, and last-mile delivery.
        </>
      )
    },
    {
      icon: 'images/storage.png',
      title: 'Storage Plus',
      content: (
        <>
          We offer strategically positioned distribution centers for optimized inventory and distribution, supported by advanced vendor-managed inventory for accurate forecasting. Our services include expert warehouse site consultancy, for superior stock and transport control, temperature-controlled warehouses for regulated industries, and efficient container freight station services for streamlined shipping.
        </>
      )
    },
    { 
      icon: 'images/pick-ship.png',
      title: 'Pick & Ship',
      content: (
        <>
          We offer tailored logistics solutions that adapt to each business's needs, ensuring seamless management across multiple countries with a single point of contact for efficiency and visibility. Our services include direct distribution from ports to stores, custom Milk Run strategies to reduce transportation costs, after-sales logistics for spare parts management, final mile delivery with premium handling, and comprehensive cross-border transport solutions.
        </>
      )
    },
    {
      icon: 'images/quick.png',
      title: 'Quick Transload',
      content: (
        <>
          We minimize warehousing costs and speed up delivery through advanced transloading and cross-docking solutions, allowing direct shipment to customers and reducing the need for storage. Supported by robust IT and expert coordination, we ensure seamless, reliable service.
           <br/> <strong>Key Benefits:</strong> <br /> <strong>ransloading:</strong>T Matches supply with demand at the destination, offering cost savings and enhanced customer service. <br /> <strong>Cross-Docking:</strong>  Quickly sorts and distributes cargo without storage, perfect for industries like storage-plus.
        </>
      )
    },
    {
        icon: 'images/logistics.png',
        title: 'Logistics Hub',
        content: (
          <>
We optimize material flow and enhance productivity through in-house and in-plant logistics, ensuring seamless integration with external supply chains for lean manufacturing.
Production <br /> <strong>Facility Optimization:</strong>Real-time warehousing, kitting, and line-feeding to ensure zero stoppages and instant demand fulfillment.
<br /> <strong>Returnable Asset Management:</strong> Efficient management of returnable assets like tote bins, allowing focus on core operations.
<br /> <strong>Consultancy Services:</strong> Expert advice on optimizing logistics processes, storage, and handling to improve efficiency.
          </>
        )
      },
      {
        icon: 'images/order.png',
        title: 'Order Hub',
        content: (
          <>
We ensure seamless order fulfillment from purchase to delivery, providing solutions that lower costs, minimize waste, and improve delivery times. Our services cater to B2B, B2C, and logistics hubs, helping your business grow and enhance its reputation.
<br /> <strong>Fulfillment Services:</strong> 
<br /> <strong>Order Processing:</strong>  Quick product capture, collection, and packaging.
<br /> <strong>Delivery Communications:</strong> Personalized, branded updates during delivery.
<br /> <strong>Custom Services:</strong>  Labeling, barcoding, customs clearance, and insurance.
          </>
        )
      }
  ];
  
const bgColor = {
    backgroundColor: '#ffffff',
  };
  
const fontColor = {
    color: "#9d9d9d",
  };
const contTitle ={
    fontFamily: "",
};

export default function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically go to the next slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3000ms = 3 seconds

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className='w-full slideShowC' style={bgColor}>
         <div className="slideShow-slider">
      
      <div className="flex justify-between">
        <button
          onClick={prevSlide}
          className="px-4 py-2 text-gray-200 rounded"
        >
          <FaAngleLeft size="1em"/> 
        </button>
        <div className="mb-4">
        
        <div className="m-2 slideShow-text" style={fontColor}>{slides[currentSlide].content}</div>
        <div className="slideShow-title-container">
            <img src={slides[currentSlide].icon} className='slideShow-icons' alt="" width={'50px'}/>
        <h2 className="slideShow-sub-header">{slides[currentSlide].title}</h2>
        </div>
        
      </div>
      <button
          onClick={nextSlide}
          className="px-4 py-2 text-gray-200 rounded"
        >
          <FaAngleRight size="1em"/>
        </button>
      
       
      </div>
    </div>

    <div className="slideShow-dot">
            <div className="flex justify-center">
                {/* Dots indicator */}
                {slides.map((slide, index) => (
                  <FaCircle
                    key={index}
                    color={index === currentSlide ? 'black' : 'gray'} // Blue for active, gray for inactive
                    size="0.4em"
                    className="mx-2 cursor-pointer"
                    onClick={() => setCurrentSlide(index)} // Click to navigate to a specific slide
                  />
                ))}
            </div>
    </div>

    </div>
  );
}
