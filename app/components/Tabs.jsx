'use client'

import React, { useState } from 'react';
import Link from 'next/link';


const Tabs =() => {
    const [activeTab, setActiveTab] =useState("Qoute");
    
    // Function to render content based on active tab
    const renderContent = () => {
        switch(activeTab){
            case 'Quote':
                return <div>
                            <div className="tab-header">
                                <p>Get instant quote for your freight forwarding service</p>
                            </div>
  {/*************************************** vehical-container  *************************************/} 
  <div className="grid-container">
                            <div className="Vehical-container my-col-8 p-2">
{/******************************************* row one *************************/}
                                
                                    <Link className="Vehical vehical-col" href="/">
                                    <img src="./images/air-freight.png" className='mx-auto'  alt="some" width="50px"/>
                                    <h4 className="v-text">Air Freight</h4>
                                    </Link>
                                    <div className="Vehical">
                                    <img src="./images/ocean-freight.png" className='mx-auto' alt="some" width="50px"/>
                                    <h4 className="v-text">Ocean Freight</h4>
                                    </div>
                                
{/************************************ row tow *********************************/}  

                                    <Link className="Vehical vehical-col" href="/rail-rate">
                                    <img src="./images/rail.png" className='mx-auto' alt="some" width="50px"/>
                                    <h4 className="v-text">Rail Rate</h4>
                                    </Link>
                                    <div className="Vehical">
                                    <img src="./images/truck.png" className='mx-auto' alt="some" width="50px"/>
                                    <h4 className="v-text">Truck Rate</h4>
                                    </div>

                            </div>

                                
 {/******************************* Qoute-for-all-mode ***********************************************/}
                            <div className="vehical-qoute my-col-4">
                                <p>Don’t have a preference?</p>
                                <div className="qoute-all"><a href="/">Qoute for all mode</a></div>
                                <br/>
                                <div className="temprature">
                                <Link href="/temperature-controlled-logistics">Temperature-Controlled,
                                        <br />
                                        Logistic Solution</Link>
                                </div>
                            </div>
</div>
                      </div>
{/***********************************************************************************************************/}
{/******************************************************* Book **********************************************/}

            case 'Book':
                return <div>
                             <div className="tab-header">
                                <p>Place a booking with just a few clicks</p>
                            </div>
                            <div className="my-grid-container">
                                <div className="Book my-col-6">
                                    <p className="book-p">Start booking with Zenith Eclipse</p>
                                    <div className="qoute-all"><a href="/">Sign Up</a></div>
                                </div>
                                <div className="Book my-col-6">
                                    <p className="book-p">Already have an account</p>
                                    <div className="qoute-all"><a href="/">Book Now</a></div>
                                </div>

                            </div>
                      </div>
            case 'Tracking':
                return <div>
            {/************************************* Tracking *************************************/}
                             <div className="tab-header2 bg-blue-950 text-white">
                                <p>Track your Shipment</p>
                            </div>
                            <div className=" bg-white">
                            <form action="" className='tracking-form mx-auto'>
                                <div className='p-4 pt-10'>
                                <input
                                type="text"
                                id="input-field"
                                placeholder="Tracking No"
                                className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-full"
                            />
                                </div>
             {/********************************* Radio *********************************/}
                                <div className='flex p-4 pl-6'>
                                <input
                                id="option-1"
                                type="radio"
                                name="options"
                                value="1"
                                className="w-4 h-4 text-blue-900 bg-gray-100 border-gray-300"
                                />
                                <label htmlFor="option-1" className="ml-2 text-sm font-medium text-gray-700">
                                BL| Air Waybill
                                </label>
             {/********************************* Radio *********************************/}
            
                                </div>
                                <div className="flex p-4 pl-6">
                                <input
                                id="option-2"
                                type="radio"
                                name="options"
                                value="2"
                                className="w-4 h-4 text-blue-900 bg-gray-100 border-gray-300"
                                />
                                <label htmlFor="option-2" className="ml-2 text-sm font-medium text-gray-700">
                                Container No
                                </label>
                            </div>
             {/********************************* Radio *********************************/}
                            <div className="flex p-4 pl-6">
                                <input
                                id="option-3"
                                type="radio"
                                name="options"
                                value="2"
                                className="w-4 h-4 text-blue-900 bg-gray-100 border-gray-300 "
                                />
                                <label htmlFor="option-3" className="ml-2 text-sm font-medium text-gray-700">
                                CMR No
                                </label>
                            </div>
          {/********************************* Radio *********************************/}
          <div className="flex p-4 pl-6">
                                <input
                                id="option-4"
                                type="radio"
                                name="options"
                                value="2"
                                className="w-4 h-4 text-blue-900 bg-gray-100 border-gray-300"
                                />
                                <label htmlFor="option-3" className="ml-2 text-sm font-medium text-gray-700">
                                Train BL No
                                </label>
                            </div>  
          {/********************************* button *********************************/}
             <div className='p-4'>
             <button className="px-4 py-1 w-full bg-blue-950 text-white font-medium hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2">
              Track
            </button>
             </div>
                            </form>
                            </div>
            {/******************************************  ******************************************/}
                </div>
            default:
                return <div>
                            <div className="tab-header">
                                <p>Get instant quote for your freight forwarding service</p>
                            </div>
  {/*************************************** vehical-container  *************************************/} 
  <div className="grid-container">
                            <div className="Vehical-container my-col-8 p-2">
{/******************************************* row one *************************/}
                                
                                    <div className="Vehical vehical-col">
                                    <img src="./images/air-freight.png" className='mx-auto'  alt="some" width="50px"/>
                                    <h4 className="v-text">Air Freight</h4>
                                    </div>
                                    <div className="Vehical">
                                    <img src="./images/ocean-freight.png" className='mx-auto' alt="some" width="50px"/>
                                    <h4 className="v-text">Ocean Freight</h4>
                                    </div>
                                
{/************************************ row tow *********************************/}  

                                    <Link className="Vehical vehical-col" href="/rail-rate">
                                    <img src="./images/rail.png" className='mx-auto' alt="some" width="50px"/>
                                    <h4 className="v-text">Rail Rate</h4>
                                    </Link>
                                    <div className="Vehical">
                                    <img src="./images/truck.png" className='mx-auto' alt="some" width="50px"/>
                                    <h4 className="v-text">Truck Rate</h4>
                                    </div>

                            </div>

                                
 {/******************************* Qoute-for-all-mode ***********************************************/}
                            <div className="vehical-qoute my-col-4">
                                <p>Don’t have a preference?</p>
                                <div className="qoute-all"><a href="/">Qoute for all mode</a></div>
                                <br/>
                                <div className="temprature">
                                    <Link href="/temperature-controlled-logistics">Temperature-Controlled,
                                        <br />
                                        Logistic Solution</Link>
                                </div>
                            </div>
</div>
                      </div>

 {/***************************************************************************************************/}
 {/***************************************************************************************************/}

        }
    }
    return (
        <div className="tabs-container">
            {/* Tab buttons */}
            <div className="tabs">
                <button onClick={() => setActiveTab('Quote')} className={activeTab === 'Quote' ? 'active' : ''}><i className="fa fa-clock-o"></i>&nbsp;Quote</button>
                <button onClick={() => setActiveTab('Book') } className={activeTab === 'Book' ? 'active' : ''}><i className="fas fa-tablet-alt"></i>&nbsp;Book</button>
                <button onClick={() => setActiveTab('Tracking')} className={activeTab === 'Tracking' ? 'active' : ''}><i className="fas fa-map-marker-alt"></i>&nbsp;Tracking</button>  
            </div>
            
            {/* Content display */}
            <div className="tab-content">
                {renderContent()}
            </div>
        </div>
    );
}

export default Tabs;