import React from 'react';
import { Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Howell & Sons</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Family</h2>
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img 
              src="/family-photo.jpg" 
              alt="Howell Family" 
              className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-8"
            />
            <div>
              <p className="mb-4">
                At Howell & Sons, we're more than just a business – we're a family. Founded by Robert Howell, our company brings together the strength of family values and professional expertise to serve our clients.
              </p>
              <p>
                Pictured here is Robert with his wife, their two sons, and their beloved family dog. This image represents the heart of our company: a commitment to family, trust, and building lasting relationships with our clients.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded with a passion for helping property owners, Howell & Sons has been a trusted name in the real estate industry for over two decades. We understand the challenges that property owners face when selling their homes or land, and we've made it our mission to provide a solution that's both effective and compassionate.
          </p>
          <p>
            Our team of experts, led by Robert Howell, has developed innovative systems and processes that streamline the selling experience, ensuring that our clients receive the best possible price for their property in the shortest amount of time.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            At Howell & Sons, our mission is to empower property owners by providing a fast, fair, and transparent selling process. We believe that everyone deserves the opportunity to maximize the value of their property, regardless of their financial situation. By combining cutting-edge technology with personalized service, we're revolutionizing the way people sell their homes and land.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="flex items-center justify-center mb-8">
            <Users size={64} className="text-blue-600" />
          </div>
          <p className="text-center">
            Led by Robert Howell and supported by his family, our dedicated team of real estate professionals, financial experts, and customer service specialists work tirelessly to ensure that every client receives the attention and results they deserve. With years of experience and a deep understanding of the local market, we're equipped to handle any property selling challenge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;