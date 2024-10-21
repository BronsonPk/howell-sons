import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "5 Common Complaints When Selling Property (And How We Solve Them)",
    excerpt: "Discover the top issues property owners face and learn how Howell & Sons addresses each one efficiently.",
    date: "April 15, 2024",
    author: "Jane Howell"
  },
  {
    title: "Why Speed Matters: The Benefits of a Quick Property Sale",
    excerpt: "Explore the advantages of selling your property quickly and how it can benefit your financial situation.",
    date: "April 8, 2024",
    author: "Michael Sons"
  },
  {
    title: "Maximizing Your Property's Value: Tips from Our Experts",
    excerpt: "Learn insider tips on how to increase your property's value before selling, even on a tight budget.",
    date: "April 1, 2024",
    author: "Sarah Johnson"
  },
  {
    title: "Understanding the Current Real Estate Market: What Sellers Need to Know",
    excerpt: "Get up-to-date insights on the real estate market trends and how they affect property sellers.",
    date: "March 25, 2024",
    author: "Robert Howell"
  },
  {
    title: "The Emotional Side of Selling Your Home: How to Prepare",
    excerpt: "Discover strategies to manage the emotional challenges of selling a property you've called home.",
    date: "March 18, 2024",
    author: "Emily Watson"
  },
  {
    title: "Navigating Legal Aspects of Property Sales: A Simplified Guide",
    excerpt: "Demystify the legal process of selling your property with our easy-to-understand guide.",
    date: "March 11, 2024",
    author: "David Miller"
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Howell & Sons Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.date}</span>
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <a href="#" className="text-blue-600 font-semibold flex items-center hover:text-blue-800">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Want More Insights?</h2>
          <p className="mb-8">Subscribe to our newsletter for the latest property selling tips and market updates.</p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-r-full hover:bg-blue-700 transition duration-300">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;