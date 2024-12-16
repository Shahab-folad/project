import React from 'react';
import CardProduct from '../components/CardProduct';
import Layout from './layout';

const Services = () =>{


    return(
    <Layout >
    <div className='grain-container'>
    <div className='grain-header'>
            <h1>End-To-End Transportations</h1>
        </div>
    <div className='grains'>
        
    <div className='m-4'>
        <CardProduct
         title="End-To-End Transportations"
          detail="Comprehensive Freight Forwarding Solutions & Efficient Supply Chain"
          img="./servicesImage/endToend.jpeg"
          location="/end-to-end-transportation"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Air Freight Forwarding"
        detail="Global Coverage and Operational Efficiency and Comprehensive Air Cargo Services"
        img="./servicesImage/WhatsApp Image 2024-11-22 at 10.01.16 PM.jpeg"
        location="/air-freight-forwarding"
        />
        </div>
        <div className='m-4'>
        <CardProduct
        title="Ocean Freight"
        detail={<span>Ocean Freight Forwarding Sea Transport and Efficient Shipping Routes</span> }
        img="./servicesImage/WhatsApp Image 2024-11-22 at 8.48.22 PM.jpeg"
        location="/ocean-freight-forwarding"
        />
        </div>
        <div className='m-4'>
        <CardProduct
        title="Truck Transport Logistics"
        detail={<span>Truck Transport Logistics & Complete Road Transport Solutions for Optimal Efficiency</span> }
        img="./servicesImage/WhatsApp Image 2024-11-22 at 9.12.12 PM.jpeg"
        location="/road-transport"
        />
        </div>
        <div className='m-4'>
        <CardProduct
        title="Rail Transport"
        detail={<span>Rail Transport Solutions for Global Logistics Efficiency & Extensive Rail Network </span> }
        img="./servicesImage/WhatsApp Image 2024-11-22 at 10.01.26 PM.jpeg"
        location="/rail-transport"
        />
        </div>
        <div className='m-4'>
        <CardProduct
        title="Multimodal & intermodal Transportation"
        detail={<span>Innovative Multimodal Transportation & Supply Chain Solutions</span> }
        img="../servicesImage/WhatsApp Image 2024-11-22 at 10.00.49 PM.jpeg"
        location="/multimodal-transportation"
        />
        </div>
        <div className='m-4'>
        <CardProduct
        title="Transport Project Cargo"
        detail={<span>Expert Project Cargo & OOG Cargo Services <br /><br /></span> }
        img="./servicesImage/WhatsApp Image 2024-11-22 at 8.48.38 PM.jpeg"
        location="/transport-project-cargo"
        />
        </div>
        <div className='m-4'>
        <CardProduct
        title="Temperature Controlled Logistics"
        detail={<span>Food Logistics Solutions & Cold Chain Management for the Evolving Industry</span> }
        img="./servicesImage/WhatsApp Image 2024-11-22 at 9.12.02 PM.jpeg"
        location="/temperature-controlled-logistics"
        />
        </div>
        
        <br /><br />
    </div>
    </div>
    {/**************************************** Lentails ****************************************/}
    {/********************************************  ********************************************/}

    <div className='grain-container'>
    <div className='grain-header'>
            <h1>Supply Chain Solutions</h1>
        </div>
    <div className='grains'>
        
    <div className='m-4'>
        <CardProduct
         title="Supply Chain Solutions"
        detail={<span>Supply Chain Management Solutions & 4PL Services for Business Growth <br /> <br /> </span> }

          img="./servicesImage/WhatsApp Image 2024-11-22 at 10.01.56 PM.jpeg"
          location="/supply-chain-solutions"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Bussiness And Financial Management"
        detail="Business Management Solutions & Supply Chain Efficiency "
        img="./servicesImage/WhatsApp Image 2024-11-22 at 10.00.56 PM.jpeg"
        location="/supply-chain-management-services"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Elevate Your Operations With Us"
        detail={<span>Elevate Your Logistics Operations with Zenith Eclipse Expertise</span> }
        img="./servicesImage/WhatsApp Image 2024-11-22 at 10.00.36 PM.jpeg"
        location="/logistics-operations-management"
        />
        </div>
        
        <br /><br />
    </div>
    </div>
  
    </Layout>
    );
}

export default Services;