'use client';

import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPlus, FaMinus } from 'react-icons/fa';


const Faq = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Business and Financial Management",
      answer: "Are you aiming to refine your supply chain operations? Our Business and Financial Management services offer you the flexibility to tailor a mix of capabilities that suit your specific needs. As your strategic ally, we tackle the challenges posed by rapidly shifting market conditions and supply chain disruptions. We focus on streamlining your operations, enabling you to concentrate on expanding your brand, growing your business, and satisfying your customers. Essentially, we excel in our specialty so you can excel in yours."
    },
    {
      id: 2,
      question: "Customized Solution Design",
      answer: "Since no two businesses are the same, we dedicate ourselves to designing, developing, and formulating a supply chain solution tailored to your unique requirements. We pinpoint areas for improvement related to logistics costs, service quality, and strategic objectives that enhance your supply chain strengths and align with your broader company goals."
    },
    {
      id: 3,
      question: "Advanced Network Engineering",
      answer: "We employ sophisticated modeling techniques that account for costs, seasonal trends, and inventory positioning to determine the most efficient freight options, routing networks, and distribution centers for delivering your products. Our collaborative approach ensures that your network design is both effective and adaptable, aligning with your business strategies and investment priorities."
    },
    {
      id: 4,
      question: "Strategic Procurement",
      answer: "Our services extend to competitive benchmarking and refined procurement processes across various modes of transportation—including air, ocean, and land—as well as warehousing and customs brokerage. Leveraging automated performance data and our extensive industry experience, we conduct cost comparisons against defined KPIs for effective control and proactive management.",
    },
    {
      id: 5,
      question: "Logistics Partner Management",
      answer: "As an impartial service provider, we adopt a structured, data-driven methodology for selecting and overseeing logistics services that best fit your business needs. Utilizing advanced tools for comprehensive supply chain management, we provide extensive oversight and coordinate every facet of your supply chain across multiple logistics service providers."
    },
    {
      id: 6,
      question: "Proactive Operations Management",
      answer: "Zenith Eclipse is proactive, not just reactive, to market changes. We leverage real-time data and robust operational strategies to manage any discrepancies swiftly and maintain consistent service excellence. Our suite of value-added services enhances your competitive advantage in logistics."
    }
  ];

  return (
    <div className="flex flex-col gap-3 py-10 px-5 md:px-16 lg:px-36 bg-[#F5F7F9]" >
      <h2 className="faq-title font-bold text-center my-5 mb-14" >Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={faq.id}
          className={`border ${index === openIndex ? "border-custom-yellow" : ""}`}
        >
          <button onClick={() => setOpenIndex(index === openIndex ? null : index)}
            className={`px-5 w-full flex items-center justify-start gap-5 py-2 text-base md:text-lg transition-all standard-p-big hover:text-gray-100 hover:bg-blue-950  cursor-pointer border ${index === openIndex ? "bg-blue-950 text-gray-100" : "bg-custom-gray border-custom-gray "} `}
          >
           <div>
           {index === openIndex ? <FaMinus /> : <FaPlus />}
            </div>

            {faq.question}
            <div className={`ml-auto transition-all ease-out  ${openIndex === index ? "rotate-90" : ""}`} >
              <MdKeyboardArrowRight />
            </div>
          </button>
          {<div className={` px-5 standard-p-big transition-all max-h-0 overflow-hidden ease-out ${openIndex === index ? 'max-h-max py-5' : ''}`}>
            <p>{faq.answer}</p>
          </div>}
        </div>
      ))}
    </div>
  );
}

export default Faq
