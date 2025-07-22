import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  User,
  BookOpen,
  GraduationCap,
  ChevronDown,
  Bell,
  Search
} from 'lucide-react';

function NAV() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setProfileDropdown(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Find Tutors', path: '/tutors', icon: Search },
    { name: 'Become a Tutor', path: '/login', icon: GraduationCap },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <a href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity blur"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  PadhoBangla
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Learn. Grow. Excel.</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    className="group flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-200 relative py-2"
                  >
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{link.name}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                  </a>
                );
              })}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200">
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
              </button>

              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setProfileDropdown(!profileDropdown);
                  }}
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-xl transition-all duration-200 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${profileDropdown ? 'rotate-180' : ''}`} />
                </button>

                {profileDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-in slide-in-from-top-2 duration-200">
                    <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Profile</a>
                    <a href="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Dashboard</a>
                    <a href="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">Signup</a>
                    <hr className="my-2 border-gray-100" />
                    <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors">Sign out</button>
                  </div>
                )}
              </div>

              <a
                href="/login"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all">
                <Bell className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">

              <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Welcome back!</p>
                  <p className="text-sm text-gray-500">john@example.com</p>
                </div>
              </div>

              <div className="space-y-2">
                {navLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center space-x-3 p-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-all duration-200 group"
                    >
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{link.name}</span>
                    </a>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-gray-100">
                <a
                  href="/get-started"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-2xl font-semibold shadow-lg transition-all duration-200"
                >
                  <span>Get Started Today</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button className="flex items-center justify-center space-x-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all text-sm font-medium text-gray-700">
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </button>
                <button className="flex items-center justify-center space-x-2 p-3 bg-red-50 hover:bg-red-100 rounded-xl transition-all text-sm font-medium text-red-600">
                  <X className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="h-16"></div>
    </>
  );
}

export default NAV;
