import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { CardProduct } from '../../components/CardProduct';

const Grains = () =>{
    return(
        <>
    <Navbar />
    <div className='grain-container'>
    <div className='grain-header'>
            <h1>Grains</h1>
        </div>
    <div className='grains'>
        
    <div className='m-4'>
        <CardProduct
         title="Wheat"
          detail="Premium  Wheat Supplier High-Quality Wheat for Pasta and Bread Production"
          img="src/assets/images/wheats.png"
          location="/wheat"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Barley"
        detail="Discover Premium Barley Products | Your Trusted Global Barley Supplier "
        img="src/assets/product/barley.png"
        location="/barley"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Oats"
        detail={<span>Top Supplier of Premium Oats <br /> Leading Global Producer </span> }
        img="src/assets/product/oats.webp"
        location="/oats"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Millet"
        detail={<span>Premier Supplier of High-Quality Red and Yellow Millet</span> }
        img="src/assets/product/millet.webp"
        location="/millet"
        />
        </div>
        
        <br /><br />
    </div>
    </div>
    {/**************************************** Lentails ****************************************/}
    {/********************************************  ********************************************/}

    <div className='grain-container'>
    <div className='grain-header'>
            <h1>Lentils</h1>
        </div>
    <div className='grains'>
        
    <div className='m-4'>
        <CardProduct
         title="Green lentils"
          detail="Premier Supplier of High-Quality Green Lentils"
          img="src/assets/product/green-lentils.webp"
          location="/wheat"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Red lentils"
        detail="Top Quality Red Lentils Supplier | Premium Lentils for Global Markets"
        img="src/assets/product/red-lentils.webp"
        location="/barley"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Chickpea"
        detail={<span>Top Quality Chickpea Supplier | Exporter of High-Grade Chickpeas</span> }
        img="src/assets/product/checkpeas.png"
        location="/oats"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Yellow Peas"
        detail={<span>Finest Yellow Peas Supplier – Whole and Split</span> }
        img="src/assets/product/yellowpeas.webp"
        location="/millet"
        />
        </div>
        
        <br /><br />
    </div>
    </div>
     {/*************************************** Seeds ****************************************/}
    {/********************************************  ********************************************/}

    <div className='grain-container'>
    <div className='grain-header'>
            <h1>Seeds</h1>
        </div>
    <div className='grains'>
        
    <div className='m-4'>
        <CardProduct
         title="Green lentils"
          detail="Premier Supplier of High-Quality Green Lentils"
          img="src/assets/product/green-lentils.webp"
          location="/wheat"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Red lentils"
        detail="Top Quality Red Lentils Supplier | Premium Lentils for Global Markets"
        img="src/assets/product/red-lentils.webp"
        location="/barley"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Chickpea"
        detail={<span>Top Quality Chickpea Supplier | Exporter of High-Grade Chickpeas</span> }
        img="src/assets/product/checkpeas.png"
        location="/oats"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Yellow Peas"
        detail={<span>Finest Yellow Peas Supplier – Whole and Split</span> }
        img="src/assets/product/yellowpeas.webp"
        location="/millet"
        />
        </div>
        
        <br /><br />
    </div>
    </div>
    </>
    );
}

export default Grains;