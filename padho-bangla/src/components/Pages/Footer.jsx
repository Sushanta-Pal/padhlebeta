import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand + tagline */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
              Padho Bangla
            </div>
            <p className="text-gray-400 mb-4">
              Empowering students and tutors through accessible, quality education in your local language.
            </p>
          </div>

          {/* For Students */}
          <div>
            <h3 className="font-bold mb-4">For Students</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/find-tutor" className="hover:text-white transition-colors">
                  Find a Tutor
                </Link>
              </li>
              <li>
                <Link to="/online-classes" className="hover:text-white transition-colors">
                  Online Classes
                </Link>
              </li>
              <li>
                <Link to="/subjects" className="hover:text-white transition-colors">
                  Subjects
                </Link>
              </li>
            </ul>
          </div>

          {/* For Tutors */}
          <div>
            <h3 className="font-bold mb-4">For Tutors</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/become-tutor" className="hover:text-white transition-colors">
                  Join as Tutor
                </Link>
              </li>
              <li>
                <Link to="/tutor-guide" className="hover:text-white transition-colors">
                  Tutor Guide
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/help-center" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-white transition-colors">
                  Safety & Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Padho Bangla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
