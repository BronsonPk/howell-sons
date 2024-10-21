import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Home size={24} />
          <span className="text-xl font-bold">Howell & Sons</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-200">Services</Link></li>
            <li><Link to="/testimonials" className="hover:text-blue-200">Testimonials</Link></li>
            <li><Link to="/blog" className="hover:text-blue-200">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;