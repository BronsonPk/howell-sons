import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "John D.",
    location: "Atlanta, GA",
    quote: "Howell & Sons made selling my house a breeze. I got more than I expected, and the process was so quick!",
    rating: 5
  },
  {
    name: "Sarah M.",
    location: "Chicago, IL",
    quote: "I was worried about selling my land, but their team guided me through every step. Couldn't be happier with the result.",
    rating: 5
  },
  {
    name: "Robert L.",
    location: "Houston, TX",
    quote: "The best decision I made was choosing Howell & Sons. They truly care about getting you the best deal.",
    rating: 4
  },
  {
    name: "Emily W.",
    location: "Phoenix, AZ",
    quote: "Fast, professional, and friendly. They turned what I thought would be a stressful process into a positive experience.",
    rating: 5
  },
  {
    name: "Michael T.",
    location: "Miami, FL",
    quote: "I was skeptical at first, but Howell & Sons exceeded all my expectations. Highly recommend their services!",
    rating: 5
  },
  {
    name: "Lisa K.",
    location: "Seattle, WA",
    quote: "Their market knowledge is impressive. I got a great price for my property, and the whole process was smooth.",
    rating: 4
  }
];

const TestimonialsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mb-4 italic">"{testimonial.quote}"</p>
              <div className="text-sm text-gray-600">
                <p className="font-semibold">{testimonial.name}</p>
                <p>{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Join Our Satisfied Clients?</h2>
          <p className="mb-8">Experience the Howell & Sons difference for yourself.</p>
          <a href="/contact" className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Get Your Free Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;