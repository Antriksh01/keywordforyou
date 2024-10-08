import { useState } from "react";

const faqData = [
  {
    question: "Can I Cancel My Plan Anytime?",
    answer: "Yes, you can cancel anytime from your account settings.",
  },
  {
    question: "What Payment Methods Do You Offer?",
    answer: "We accept major credit cards and PayPal.",
  },
  {
    question: "How Can I Switch/Change My Plan?",
    answer: "You can switch plans from the billing section of your account.",
  },
  {
    question: "Can I Purchase Only One Tool?",
    answer: "Yes, tools can be purchased individually.",
  },
  {
    question: "Do You Offer Discounts or Free Trials?",
    answer: "We offer seasonal discounts and a 7-day free trial.",
  },
  {
    question: "How Can I Cancel My Plan?",
    answer: "To cancel, go to account settings and select cancel.",
  },
  {
    question: "How Can I Switch to Annual Billing?",
    answer: "Switch to annual billing in the billing preferences.",
  },
  {
    question: "What is Your Refund Policy?",
    answer: "We offer a 30-day money-back guarantee.",
  },
  {
    question: "Can I Use Ytubetool for Free?",
    answer: "Ytubetool offers a free tier with limited features.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border rounded-lg shadow-sm transition-all duration-700 ${
              openIndex === index ? "bg-indigo-100" : "bg-white"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-4 text-left flex justify-between items-center transition-colors duration-500 hover:bg-indigo-200"
            >
              <span className="font-medium">{item.question}</span>
              <span
                className={`transition-transform duration-500 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
                openIndex === index
                  ? "max-h-80 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              style={{ maxHeight: openIndex === index ? "500px" : "0px" }}
            >
              <div className="p-4 border-t text-gray-600">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
