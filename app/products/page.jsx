

import React from 'react';
import CardProduct from '../components/CardProduct';
// import { useState, useEffect } from "react";
import './product.css';
import Layout from './layout';

export default function productsPage() {
    
    return(
        
        <Layout>
    <div className='grain-container'>
    <div className='grain-header'>
            <h1>Grains</h1>
        </div>
    <div className='grains'>
        
    <div className='m-4'>
        <CardProduct
         title="Wheat"
          detail="Premium  Wheat Supplier High-Quality Wheat for Pasta and Bread Production"
          img="./product/Wheat.jpg"
          location="/Wheat"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Barley"
        detail="Discover Premium Barley Products | Your Trusted Global Barley Supplier "
        img="./product/Barley.jpg"
        location="/Barly"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Oats"
        detail={<span>Top Supplier of Premium Oats <br /> Leading Global Producer </span> }
        img="./product/Oats.jpg"
        location="/oats"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Millet"
        detail={<span>Premier Supplier of High-Quality Red and Yellow Millet</span> }
        img="./product/Millet.jpg"
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
          img="./product/Green Lentils.jpg"
          location="/green-lentils"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Red lentils"
        detail="Top Quality Red Lentils Supplier | Premium Lentils for Global Markets"
        img="./product/Red Lentils.jpg"
        location="/red-lentils"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Chickpea"
        detail={<span>Top Quality Chickpea Supplier | Exporter of High-Grade Chickpeas</span> }
        img="./product/Chickpeas.jpg"
        location="/chickpeas"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Yellow Peas"
        detail={<span>Finest Yellow Peas Supplier – Whole and Split</span> }
        img="./product/Yellow Peas.jpg"
        location="/whole-yellow-peas"
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
         title="Flaxseeds"
          detail="Trusted Non-GMO Flaxseed Supplier – High-Quality and Sustainable Seeds"
          img="./product/Flaxseed.jpg"
          location="/flaxseeds"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Rapeseeds"
        detail="Premium Rapeseeds Supplier – Pure & Non-GMO"
        img="./product/Rapeseed.jpg"
        location="/rapeseeds"
        />
        </div><div className='m-4'>
        <CardProduct
        title="sunflower Seeds"
        detail={<span>Premium Sunflower Seeds – Versatility and Excellence in Every Seed</span> }
        img="./product/Sunflower.jpg"
        location="/sunflowerseed"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Coriander Seeds"
        detail={<span>Premium Coriander Seeds Supplier – Aromatic Excellence</span> }
        img="./product/Coriander Seeds.jpg"
        location="/corianderseed"
        />
        </div>
        
        <br /><br />
    </div>
    </div>
  {/*************************************** Meals (Animal Feeds) ****************************************/}
    {/********************************************  ********************************************/}

    <div className='grain-container'>
    <div className='grain-header'>
            <h1>Meals (Animal Feeds)</h1>
        </div>
    <div className='grains'>
        
    <div className='m-4'>
        <CardProduct
         title="Sunflower Meal"
          detail="Sunflower Meal for Animal Feed. Premium Sunflower Meal"
          img="./product/Sunflower Meal.jpg"
          location="/sunflower-meal"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Flaxseed Meal"
        detail="Flaxseed Meal – Non-GMO Flaxseed Meal Supplier"
        img="./product/Flaxseed Meal.jpg"
        location="/flaxseed-meal"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Rapeseed Meal"
        detail={<span>Rapeseed Meal Supplier & Bulk Rapeseed Meal for Animal Feed</span> }
        img="./product/Rapseeds Meal.jpg"
        location="/rapeseed-meal"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Soybean Meal"
        detail={<span>Trusted Soybean Meal Supplier & Premium High-Protein Soya Meal...</span> }
        img="./product/Soya Meal.jpg"
        location="/soya-meal-supplier"
        />
        </div>
        
        <br /><br />
    </div>
    </div>

 {/*************************************** Productions ****************************************/}
    {/********************************************  ********************************************/}

    <div className='grain-container'>
    <div className='grain-header'>
            <h1>Productions</h1>
        </div>
    <div className='grains'>
        
    <div className='m-4'>
        <CardProduct
         title="Flour"
          detail="Trusted wheat Flour Supplier & Leading Wholesale Flour Distributor"
          img="./product/Flour.jpg"
          location="/flour"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Sunflower Oil"
        detail="Top-Quality Sunflower Products – Refined and Unrefined Sunflower Oil"
        img="./product/Sunflower Oil.jpg"
        location="/sunflower-oil"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Flaxseed Oil"
        detail={<span>Pure and Nutritious Flaxseed Oil – Ethically Sourced for Health </span> }
        img="./product/Flaxseed Oil.jpg"
        location="/flaxseed-oil"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Rapeseed Oil"
        detail={<span>Premium Rapeseed Oil – Sustainably Sourced and Rich in Health Benefits</span> }
        img="./product/Rapeseed Meal.jpg"
        location="/rapeseeds-oil"
        />
        </div>
        
        <br /><br />
    </div>
    </div>
{/*************************************** petrochemical products ****************************************/}
    {/********************************************  ********************************************/}

    <div className='grain-container'>
    <div className='grain-header'>
            <h1>petrochemical products</h1>
        </div>
    <div className='grains'>
        
    <div className='m-4'>
        <CardProduct
         title="Ethylene"
          detail="Premier Ethylene Solutions – Advancing Industrial Excellence"
          img="./product/Ethylene.jpg"
          location="/ethylene-solution"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Propylene"
        detail="Premier Propylene Solutions – Leading the Way in Industrial Innovation"
        img="./product/Propylene.jpg"
        location="/propylene-supplier"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Polyethylene"
        detail={<span>Premier Polyethylene Solutions – Pioneering Excellence... </span> }
        img="./product/Polyethylene.jpg"
        location="/polyethylene"
        />
        </div>
        
        <br /><br />
    </div>
    </div>
    </Layout>
    
    );
}

