'use client'
// import { useState } from 'react'
import "./contactUs.css";
import React, { useState } from 'react';
import countries from 'world-countries';
import { IoIosArrowDown } from "react-icons/io";



const ContactUs = (id) => {
    const [arrowI , setArrowI] = useState(false);
    const [arrowII , setArrowII] = useState(false);
    const [arrowIII , setArrowIII] = useState(false);
    const [arrowIV , setArrowIV] = useState(false);
    const arrowToggleI = () =>{setArrowI(!arrowI)} // Toggle the specific dropdown
    const arrowToggleII = () =>{setArrowII(!arrowII)} // Toggle the specific dropdown
    const arrowToggleIII = () =>{setArrowIII(!arrowIII)} // Toggle the specific dropdown
      const arrowToggleIV = () =>{setArrowIV(!arrowIV)} // Toggle the specific dropdown
    






    const [selectedCountry, setSelectedCountry] = useState('');

    // Handle change event when a country is selected
    const handleCountryChange = (e) => {
      setSelectedCountry(e.target.value);
    };

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    async function handleOnSubmit(e) {
      e.preventDefault();
  
      const formData = {};
  
      Array.from(e.currentTarget.elements).forEach(field => {
        if ( !field.name ) return;
        formData[field.name] = field.value;
      });
      await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(formData)
      });
    }
  

  return (
    <>
    <div className="contact-container">
            <div className="contact-header">
                <h1 className="contact-h1">We're here to help</h1>
                <p className="contact-p">
                    Our main office is the nerve center for all zenith Eclipse Co operations. From here, we coordinate our global activities in agriculture and energy, ensuring seamless efficiency and excellence across all sectors. Whether it's production, distribution, or logistics, our main office directs every facet of our operations to connect high-quality products with the markets that need them most.
                </p>
            </div>


{/*****************************************************************************************/}
{/*****************************************************************************************/}
            <div className="contact-images ">
        {/**********************************************/}
        <div className="contact-img">

        <img src="./contactImages/3-1.png" alt="" />
          <h3 className="flex gap-3 pl-16">General 
          <IoIosArrowDown onClick={arrowToggleI} size={20} className={`${arrowI? "rotate-180" : 'rotate-0'} transition-all mt-1 cursor-pointer`} />
            
          </h3>
          {
            arrowI?
            <div className="dropdown-modal mt-4">
          <h1 className="standard-h1">General Inquiries   </h1>
            <p className="standard-p">
            <span>Reach out for general inquiries or learn more about Zenith Eclipse. We're here to assist with any questions or information you need!
         <br /><a href="mailto:Info@zenitheclipse.com">
         Info@zenitheclipse.com
  </a> </span>
            </p>
        </div>: null
       
          }


       
         </div>
        {/**********************************************/}
        <div className="contact-img">

        <img src="./contactImages/4-1.png" alt="" />
          <h3 className="flex gap-4 pl-14">Sales Team
          <IoIosArrowDown onClick={arrowToggleII} size={20} className={`${arrowII? "rotate-180" : 'rotate-0'} transition-all mt-1 cursor-pointer `} />
          
          </h3>
          {
            arrowII?
            <div className="dropdown-modal mt-4">
          <h1 className="standard-h1">Sales & Partnerships  </h1>
            <p className="standard-p">
            <span>Looking to partner with us? Contact our Sales Team for product details, pricing, and partnership opportunities.
         <br /><a href="mailto:sales@zenitheclipse.com" className="text-blue-500 underline">
         sales@zenitheclipse.com
  </a> </span>
            </p>
        </div>: null
       
          }


          </div>
       
        {/**********************************************/}
        <div className="contact-img">
        <img src="./contactImages/5.png" alt="" />
        <h3 className="flex gap-4 pl-10">Logistics Team
        <IoIosArrowDown onClick={arrowToggleIII} size={20} className={`${arrowIII? "rotate-180" : 'rotate-0'} transition-all mt-1 cursor-pointer `} />
          
          </h3>
          {
            arrowIII?
            <div className="dropdown-modal mt-4">
          <h1 className="standard-h1">Logistics Team</h1>
            <p className="standard-p">
            <span>For transport and logistics solutions, connect with our experts. We ensure smooth and efficient delivery worldwide.
         <br /><a href="mailto:trans@zenitheclipse.com" className="text-blue-500 underline">
         trans@zenitheclipse.com
  </a> </span>
            </p>
        </div>: null
       
          }

       
        </div>
        {/**********************************************/}
        <div className="contact-img">
        <img src="./contactImages/6.png" alt="" />
        <h3 className="flex gap-4 pl-10">ecustomer support
        <IoIosArrowDown onClick={arrowToggleIV} size={20} className={`${arrowIV? "rotate-180" : 'rotate-0'} transition-all mt-1 cursor-pointer `} />
          
          </h3>

          {
            arrowIV?
            <div className="dropdown-modal mt-4">
          <h1 className="standard-h1">ecustomer support</h1>
            <p className="standard-p">
            <span>Need assistance? Our Customer Support Team is ready to help resolve any issues or provide guidance.
         <br /><a href="mailto:ecustomersupport@zenitheclipse.com" className="text-blue-500 underline -ml-1">
         ecustomersupport@zenitheclipse.com
  </a> </span>
            </p>
        </div>: null
       
          }
        
        </div>
       
       
        {/**********************************************/}
                

            </div>

{/*****************************************************************************************/}
{/*****************************************************************************************/}
    <p className="fill-p">
Fill in the information required in the form, and we will get back to you within one hour. Or contact Zenith Eclipse Co via our emails
    </p>
{/********************************************************************************************************************/}
{/********************************************************************************************************************/}
    <div className="contactForm-container bg-slate-50">
        <h3 className="standard-h1 py-2">Personal Information</h3>

        
        
            <form onSubmit={handleOnSubmit}>
                <div className="form-flex flex">

{/*********************************************  *********************************************/}                 
                <div className="w-full max-w-lg">
             
{/*********************** user Name ***********************/}
            <div className="flex flex-wrap -mx-3 mb-6 fontResolve">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    First Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name="firstName"/>
                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Last Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" name="lastName"/>
                </div>
            </div>
{/*************************** Email ***************************/}

            <div className="flex flex-wrap -mx-3 mb-6 fontResolve">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="Exmaple@email.com" name="email"/>
                </div>
            </div>
{/**************************** Company Name ****************************/}

            <div className="flex flex-wrap -mx-3 mb-6 fontResolve">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="companyName">
                    Company Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="companyName" type="text" placeholder="Company Name" name="companyName"/>
                </div>
            </div>

{/**************************** Country ****************************/}
            
            <div className=" mb-8 md:mb-0 fontResolve">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Country
      </label>
      <div className="relative">
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        className="w-full p-2 rounded focus:ring-2 focus:ring-blue-500"
        name="country"
      >
        <option value="" disabled>Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        </div>
      </div>
    </div>

    </div>
    {/*********************************************  *********************************************/}                 

    <div className="contact-form-p">
                <p>Why wait to turn your vision into reality? </p>
                <p>Togather, let's build a journey that brings your dreams to life every step of the way.</p>
                </div>
    </div>
{/**************************** Subject ****************************/}
    <div className="my-2 fontResolve">
        {/**********************/}
    <div className=" my-4  md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Subject
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="Subject">
          <option value={''} disabled>Subject</option>
          <option value={'General inquireies'}>General Inquiries</option>
          <option value={'Sales Department'}>Sales Department</option>
          <option value={'Logistics Department'}>Logistic Department</option>
          <option value={'Customer Support'}>Customer Support</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>


{/**************************** Upload Files ****************************/}
            <div className="my-4 flex items-center justify-center w-full fontResolve">
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {/* <svg class="w-8 h-8 mb-0 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg> */}
            <p className=" text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" name="file"/>
    </label>
    </div> 
{/**************************** Message ****************************/}
<div className="fontResolve flex flex-wrap -mx-3 my-4 fontResolve">
                <div className="w-full px-3">
                <label className=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                    Message
                </label>
                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="companyName" type="textarea" placeholder="Message"
                rows={"8"} name="Message"
                />
                
                </div>
            </div>
{/***********************************************************************/}
        <p className="my-4 contact-term">Your information will be kept private and confidentail and will be used by Zenith Eclipsse Co only. Fields marked* must be completed before submiting. All details provided by you will be held by Zenith Eclipse Co and used in accordance with our Privacy Policy.</p>
{/******************************Check Box*****************************************/}
                    <div className="flex items-center">
                    <input
                        id="checkbox"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        name="agree"
                    />
                    <label htmlFor="checkbox" className="ml-2 text-sm font-medium text-gray-900">
                        I have read and accepted
                    </label>
                    </div>
{/******************************button*****************************************/}
<button className="w-full sm:w-auto px-6 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 btnBl" type="submit">
  Submit Form
</button>
            </div>
            </form>
    </div>

{/*****************************************************************************************/}
{/*****************************************************************************************/}

<div className="contact-address mb-8 ml-2">
                
                {/************ Phone Number ************/}
                <div className="key-operations py-3">
                <img src="./icons/Phone .png" alt="" className="address-img"/>
                <p className="p-2">+96871401000</p>
                </div>
                {/************ Phone Number ************/}
                <div className="key-operations py-3">
                <img src="./icons/Mobile.png" alt=""  className="address-img2"/>
                <p className="p-2">+96824950652</p>
                </div>
                {/*************** Address ***************/}
                <div className="address py-3" >
                <img src="./icons/Address.png" alt=""  className="address-img"/>
                <p className="p-2" >Water-Front, Beach Commercial Complex 1st Floor, Office 102, shatti AI Qorom, Muscat 134, Sultanate of Oman</p>
                </div>
            </div>

{/*****************************************************************************************/}
{/*****************************************************************************************/} 

    </div>
    </>
  );
}

export default ContactUs;
