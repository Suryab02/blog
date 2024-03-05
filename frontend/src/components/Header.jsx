import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold">Your Blog</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
            <li><Link to="/register" className="hover:text-gray-300">Register</Link></li>
            <li><Link to="/create-post" className="hover:text-gray-300">Create Post</Link></li>
            <li><Link to="/chat" className="hover:text-gray-300">Chat</Link></li>
            <li><Link to="/new-page" className="hover:text-gray-300">New Page</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
