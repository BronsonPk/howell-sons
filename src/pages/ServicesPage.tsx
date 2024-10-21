import React from 'react';
import { Home, DollarSign, FileText, Briefcase, Clock, Headphones } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Quick Property Evaluation",
      description: "Get a fair and accurate valuation of your property within 24 hours."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Best Price Guarantee",
      description: "We leverage our market expertise to ensure you get the best possible price for your property."
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Paperwork Assistance",
      description: "Our team handles all the necessary documentation, making the process hassle-free for you."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Negotiation Support",
      description: "Expert negotiators work on your behalf to secure the best deal possible."
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Expedited Closing",
      description: "We streamline the closing process to get you your money faster."
    },
    {
      icon: <Headphones className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Dedicated Support",
      description: "Receive personalized assistance throughout the entire selling process."
    }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8">Let us help you sell your property quickly and at the best price.</p>
          <a href="/contact" className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;