import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { CardProduct } from '../../components/CardProduct';

const Lentils = () =>{
    return(
        <>
    <Navbar />
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
    </>
    );
}

export default Lentils;