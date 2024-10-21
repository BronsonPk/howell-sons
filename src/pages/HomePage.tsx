import React from 'react';
import { ArrowRight, Clock, DollarSign, ThumbsUp } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sell Your Property Fast & For the Best Price</h1>
          <p className="text-xl mb-8">Howell & Sons: Your trusted partner for quick and easy property sales.</p>
          <a href="/contact" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Howell & Sons?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Sales Process</h3>
              <p>We streamline the selling process to get you results fast.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <DollarSign className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
              <p>Our market expertise ensures you get the best value for your property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ThumbsUp className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hassle-Free Experience</h3>
              <p>We handle all the details, making selling your property stress-free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Property?</h2>
          <p className="text-xl mb-8">Let us help you get the best deal with our expert services.</p>
          <a href="/contact" className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center">
            Get Started <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;