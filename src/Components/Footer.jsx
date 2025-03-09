import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Shoaib Balghari</h2>
            <p className="text-sm leading-relaxed">
              Full-stack developer passionate about creating impactful solutions 
              and delivering exceptional user experiences.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="hover:text-green-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-green-400" />
                <a 
                  href="shoaibbalghari@gmail.com" 
                  className="hover:text-green-400 transition-colors"
                >
                  shoaibbalghari@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-green-400" />
                <span>+92 555711812</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect With Me</h3>
            <div className="flex gap-4">
              {[
                { icon: <FaLinkedin />, link: 'https://linkedin.com' },
                { icon: <FaGithub />, link: 'https://github.com' },
                { icon: <SiLeetcode />, link: 'https://leetcode.com' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Shoaib Balghari. All rights reserved.
            <br />
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;