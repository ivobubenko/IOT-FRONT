import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 bg-gray-600 text-white text-center py-4">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Smart-Pot. All rights reserved.
        </p>
        {/* You can add more content here such as links, images, etc. */}
      </div>
    </footer>
  );
};

export default Footer;
