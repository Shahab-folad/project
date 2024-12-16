'use client'

import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect } from "react";

import { motion } from 'framer-motion';



const RailwayTransport = () => {

  const features = [
    {
      id: 1,
      header: "Secure and Improve Your Supply Chain, with Zenith Eclipse Co",
      content:
      <div>
        <p>
        By utilizing the inspection services offered by Zenith Eclipse Co you can have confidence that every part of your supply chain’s secure, compliant and optimized for success. Our goal is to bring peace of mind and real benefits by protecting the integrity of your products at every stage.
        </p><br />
        <ul className="list">
            <li>
            Expert Inspection Services: Worried about the quality, quantity or loading procedures of your purchases? Zenith Eclipse Co ensures that everything meets your standards. Our skilled team conducts inspections at each phase—from quality checks at your supplier’s facility to the final loading process. We assure precision in meeting your specifications.
            </li><br />
            <li>
            Personalized Customer Support: Have inquiries. Need help? Get in touch with us via email. Our knowledgeable experts are available to offer consultations and assist you with all aspects of your procurement and shipping requirements. We take pride in delivering customized service tailored to meet each client’s needs.
            </li>
        </ul>
      </div>
    },
    {
      id: 2,
      header: "Enhanced Inspection Services for Unrivaled Supply Chain Integrity",
      content: 
      <div>
      <p>
      At Zenith Eclipse Co we enhance our meticulous inspection services with additional features intended to guarantee the reliability and integrity of your supply chain operations;
      </p><br />
      <ul className="list">
          <li>
          Quality Certification from Partner Laboratories: We collaborate with accredited labs to provide quality certification, for your products, this thorough procedure involves testing, Assessments to adhere to global standards and cater to your specific needs. By obtaining certification, from our associates you receive validation of your products quality greatly enhancing consumer trust and market appeal.
          </li>
          <br />
          <li>
          Regular Updates on Wagon Locations Every 24 Hours: Recognizing the significance of logistics Zenith Eclipse Co offers real time information on the whereabouts of your wagons. Every day our advanced tracking systems provide updates on where your wagons are how they are progressing towards their destination. This frequent and accurate monitoring enables you to maintain control over your logistics improving planning and response capabilities during transit.
          </li>
      </ul>
    </div>
    },
    {
      id: 3,
      header: "Dedication to Excellence",
      content: 
      
      <p>
      These service improvements showcase our dedication to delivering excellence. At Zenith Eclipse Co anticipate a partnership that not meets but surpasses your expectations in safeguarding and managing the logistics of your transportation assets. Our thorough approach ensures that every logistical aspect is meticulously managed, resulting in success, dependability and utmost satisfaction, in your supply chain management.
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
    <div className='px-5 md:px-10 max-w-[1400px] lg:m-auto'>
      <div className="product-container">
            <div className="product-header ">
              {/* ****** */}
              <div className="product-title item1">
                <h1 className="h1-design ">Railway Transport<span className="p-line">____</span></h1>
              </div>
              {/* ********* */}
              <div className="product-img item2">
                <img src="./servicesImage/WhatsApp Image 2024-11-22 at 10.01.26 PM.jpeg" alt="" />
              </div>
              {/* ********** */}
              <div className="product-title item3">
                <h1 className="h1-sub-design">Competitive Rates for Reliable Logistics</h1>
                <div className="pp-part1">
                <p className="-ml-4">
                Welcome to the Rail Rates page for Zenith Railway Transport, where we provide comprehensive, cost-effective solutions for shipping goods across regions. Our rail services are designed to deliver efficiency, reliability, and sustainability at highly competitive rates. Whether you are transporting bulk goods or containerized cargo, Zenith Eclipse Co ensures seamless transit with customized pricing to meet your business needs.
                </p>
              </div>
              </div>
            </div>
      </div>
{/*********************************************************************************************/}
{/******************************************Form***********************************************/}
<div className="railway-form-container ">
 
{/****************************************************************************************/}
<div className="railway-form mx-auto fontResolve shadow-lg p-4">
   {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> paragraph <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/}
   <div className="pp-part1 ">
       <p className="text-center">          
       Fill out the required information in the form, and our team will get back to you within one hour.
     </p>
  </div>
  <form className="w-full ">
    {/********************************* part company *********************************/}
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="companyName">
      Company Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="companyName" type="text" placeholder="Company Name" />
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    {/* ***************************************************************************** */}
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="yourName"> 
       Your Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="yourName" type="text" placeholder="Full Name" />
    </div>
  </div>
    {/********************************* part contact *********************************/}
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
      Email
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="example@email.com" />
    </div>
    {/* ********************************************************************************** */}
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
        Phone
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="phone" placeholder="Phone" />
    </div>
  </div>
  
    {/********************************* part address *********************************/}
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="address">
      Address
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="address" type="text" placeholder="Address" />
    </div>
    {/* ****************************************************************************** */}
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
        City
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="city" type="text" placeholder="City" />
    </div>
  </div>

    {/********************************* part State *********************************/}
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="state">
      State
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="state" type="text" placeholder="State" />
      
    </div>
    {/* ********************************************************************* */}
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="zip">
        Zip Code
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="zip" type="text" placeholder="Zip" />
    </div>
  </div>

    {/********************************* part Loding *********************************/}
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="loadingStation">
      Loading Station / Station Code : <i className="fas fa-info-circle text-blue-950"></i>
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="loadingStation" type="text" placeholder="" />
      
    </div>
    {/* ************************************************************************* */}
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="deliveryStation">
      Delivery Station / Station Code: <i className="fas fa-info-circle text-blue-950"></i>
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="deliveryStation" type="text" placeholder="" />
    </div>
  </div>

    {/********************************* part Select *********************************/}


  <div className="flex flex-wrap -mx-3 mb-2">
    
    <div className="w-full  px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="wagon">
      Type of Wagon:
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="wagon">
          <option>-Select-</option>
          <option>Covered wagon</option>
          <option>Open Wagon</option>
          <option>Open Wagon</option>
          <option>Open Wagon</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    
  </div>

   {/********************************* part Loding *********************************/}
   <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="loadingStation">
      HS Code / Commodity:  <i className="fas fa-info-circle text-blue-950"></i>
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="loadingStation" type="text" placeholder="" />
      
    </div>
    {/* ************************************************************************* */}
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="deliveryStation">
      Packing: <i className="fas fa-info-circle text-blue-950"></i>
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="deliveryStation" type="text" placeholder="" />
    </div>
  </div>

    {/********************************* part DAP *********************************/}

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dap">
      DAP / CPT: <i className="fas fa-info-circle text-blue-950"></i>
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="dap" type="text" placeholder="" />
    </div>
    {/********************************* part BTN *********************************/}
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
      Your Message:
      </label>
      <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" type="text" placeholder="" rows={'4'} />
    </div>



{/********************************* part BTN *********************************/}
  <div className="mt-4">
      <button className="shadow bg-blue-950 hover:bg-blue-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Submit Form
      </button>
    </div>
</form>
</div>
{/**********************************************************************************/}
{/**********************************************************************************/}
        

</div>

      <div className="product-description">
      <div className="pp-part1 inline bg-slate-400">
        
        <p className=" px-5">
            <span className="ph2">Comprehensive Insurance Protection:</span>&nbsp;&nbsp;
         Safeguard your investments with our range of insurance options. Whether its damage during shipping or unexpected events our customized insurance solutions ensure your goods are well protected giving you peace of mind throughout the shipping journey.
        </p>
          
          <h1 className="ph2 px-5">
          Tailored Inspection Services for Excellence
          </h1>
          <p className="px-5">
          At Zenith Eclipse Co our inspection services are meticulously designed to uphold notch quality and efficiency standards across your supply chain. Discover how our inspection services can elevate your business.
          </p>
        </div>
        <div className="pp-part1 flex gap-2 flex-wrap">
          <div className="fifty">
            <h1 className="ph2">
            Pre-Purchase Inspections:
            </h1>
            <p>
            Prior to finalizing any deal our team conducts assessments of goods at the supplier’s site. This includes evaluating quality, compliance with industry norms and confirming specifications to meet your needs.
            </p>
            {/***********************  ***********************/}
            <h1 className="ph2">
            Quantity Verification:
            </h1>
            <p>
            To avoid discrepancies in order quantities our inspectors carefully count and verify quantities at the source. This crucial step ensures inventory accuracy and prevents shortages. Excesses that could disrupt your business processes
            </p>
            {/***********************  ***********************/}
            <h1 className="ph2">
            Quality Control Audits:
            </h1>
            <p>
            Our quality control procedures entail checks, at production phases. We examine batches of samples to detect any flaws or deviations, from your quality standards. This proactive method helps reduce the risks linked to product non conformity before shipping.
            </p>
          </div>
          <div className="fifty">
          <h1 className="ph2">
          Supervising Loading:
            </h1>
            <p>
            While goods are being loaded our inspectors make sure they are handled properly and stored securely for transit. They check the suitability of loading equipment. Confirm that all packages are correctly stowed and labeled, reducing the chances of damage during transportation.
            </p>
            {/***********************  ***********************/}
            <h1 className="ph2">
            Ongoing. Assistance:
            </h1>
            <p>
            At every inspection stage we furnish reports containing photos, notes and relevant test findings. This documentation keeps you informed and in charge enabling action if problems occur. Our team is also on hand for real time consultations giving tailored support to meet your requirements.
            </p>
            
          </div>
        </div>

      </div>
{/**********************************************************************************/}
{/**********************************************************************************/}

        <div className='my-20' >
          {
            features.map((feature, index) => (
              <div key={feature.id} className=" px-1 fontR  py-2 my-5">
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

export default RailwayTransport
