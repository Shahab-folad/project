
'use client';

const CollaborateChart = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-5 " >
      {/* <div className="  h-[24.5rem] w-[24.5rem] lg:h-[32.5rem] lg:w-[32.5rem] border rounded-full border-black relative p-20 m-auto" >
        <div className="h-mobile-inner-circle lg:h-inner-circle  w-mobile-inner-circle lg:w-inner-circle border border-black rounded-full absolute left-0 lg:left-1 flex items-center justify-center">
          <p className="relative right-12" >
            Zenith Eclipse
          </p>

        </div>
        <div className="h-mobile-inner-circle w-mobile-inner-circle border border-black rounded-full absolute right-5 top-8 lg:top-12 flex items-center justify-center lg:h-inner-circle 
lg:w-inner-circle">
          <p className="relative left-10 text-lg font-Resolve">
            Partners
          </p>


        </div>
        <div className="h-mobile-inner-circle w-mobile-inner-circle border border-black rounded-full absolute bottom-0 left-24 flex items-center justify-center lg:h-inner-circle 
lg:w-inner-circle">
          <p className="relative top-12 left-5 text-lg font-Resolve" >
            Customers
          </p>

        </div>
      </div> */}

      <div className="flex-1 ">
        <img className='' src="./images/Samiullah Saleh Zada _ Brothers_20241129_205430_0001_1.gif" alt="digram" />
      </div>

      <div className="flex-1 p-5 shadow-2xl rounded-lg my-10 mx-2">
        <h2 className="mt-2 mb-5 collaborate" >Collaborate with Us</h2>
        <hr className="h-[2px] w-3/4 ml-auto border-none bg-custom-yellow" />
        <p className="my-10 standard-p" >  Partnering with us means choosing a path to success. We offer competitive pricing, exceptional customer service, and a commitment to excellence in everything we do. Our wide selection of seeds, including flaxseeds, rapeseeds, mustard seeds, and coriander seeds, is designed to help you meet your business goals. Together, we can cultivate a more sustainable and flavorful future for all.</p>

        <h3 className="p-5 sub-collaborate" > We are committed to excellence in every delivery.</h3>

        <hr className="h-[2px] w-3/4 ml-auto border-none bg-custom-yellow" />
        <p className="my-10 standard-p"> Our expansive global network ensures precise and efficient logistics services, connecting businesses to markets seamlessly. Each hub is equipped to provide tailored logistics solutions, customized to meet the unique demands of various industries. To discover how we can adapt our services to your specific needs, reach out to our team of experts, who will guide you through our versatile logistics capabilities.

          Whether you’re a startup or a multinational corporation, our dedication to consistent and reliable service remains unwavering, helping you succeed in the ever-evolving global marketplace.</p>
      </div>
    </div>
  )
}

export default CollaborateChart
