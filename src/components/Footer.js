import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/sspsanewa" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Logo" className="h-8" />
        </a>
        <a href="https://linkedin.com/in/sandeep-patidar-11506723a" target="_blank" rel="noopener noreferrer">
          <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="LinkedIn Logo" className="h-8" />
        </a>
        <a href="https://www.hackerrank.com/spsanewa" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png" alt="HackerRank Logo" className="h-8" />
        </a>
      </div>
      <p className="mt-2">Connect with me on social media!</p>
    </footer>
  );
};

export default Footer;
