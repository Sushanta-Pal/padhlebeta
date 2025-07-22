import React, { useState } from 'react';
import { MessageCircle, Users, Star, BookOpen, User, Mail, Phone, Check, Search, Bell, Heart, Menu } from 'lucide-react';

const Dashboard = () => {
  const [activeStatus, setActiveStatus] = useState('New');

  const statusLevels = ['New', 'Recommended', 'Super Teacher', 'Ambassador'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-red-500">superprof</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Looking for Home Tuition near you?"
                className="pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm w-80 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-red-500" />
            <Heart className="w-6 h-6 text-gray-600 cursor-pointer hover:text-red-500" />
            <Menu className="w-6 h-6 text-gray-600 cursor-pointer hover:text-red-500" />
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </header> */}

      {/* Navigation */}
      <nav className="bg-gray-800 text-white px-6 py-3">
        <div className="flex space-x-8">
          <button className="text-white border-b-2 border-white pb-1">Dashboard</button>
          <button className="text-gray-300 hover:text-white">My messages</button>
          <button className="text-gray-300 hover:text-white">My Ads</button>
          <button className="text-gray-300 hover:text-white">Evaluations</button>
          <button className="text-gray-300 hover:text-white">My Account</button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="relative inline-block mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                  alt="Profile"
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Sushanta</h2>
              <p className="text-gray-600 text-sm mb-4">
                Haldia Riverside Estates Limited,<br />
                Haldia, West Bengal 721631, India
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Verified profile</span>
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-500">Email</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-500">Mobile Phone</span>
                </div>
              </div>
            </div>

            {/* Become A Pro Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Become A Pro!</h3>
              <div className="space-y-2 mb-6">
                <p className="text-blue-100">More students!</p>
                <p className="text-blue-100">Increased visibility</p>
                <p className="text-blue-100">Better statistics</p>
              </div>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Learn more
              </button>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status Upgrade */}
            <div className="bg-gradient-to-r from-red-400 to-pink-400 rounded-lg shadow-md p-6 text-white">
              <div className="flex justify-between items-center mb-4">
                {statusLevels.map((level, index) => (
                  <div key={level} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                      index <= statusLevels.indexOf(activeStatus) 
                        ? 'bg-white text-red-500' 
                        : 'bg-red-300 text-red-600'
                    }`}>
                      {index + 1}
                    </div>
                    <span className="text-xs text-center">{level}</span>
                  </div>
                ))}
              </div>
              <div className="w-full bg-red-300 rounded-full h-2 mb-4">
                <div className="bg-white h-2 rounded-full w-1/4"></div>
              </div>
              <button className="w-full bg-white text-red-500 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                Upgrade my status
              </button>
            </div>

            {/* Class Request */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Class Request</h3>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                  Verify your ad
                </button>
              </div>
              
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">No requests</p>
                </div>
              </div>
            </div>

            {/* My Ads */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">My Ads</h3>
              
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div className="flex space-x-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" 
                      alt="Profile"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 leading-tight">
                        I'm an HIT student Pursing B Tech in Information Technology and I teach maths and physics at primary school and secondary school level in Haldia.I have 2 Years Of
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold">Offline</span>
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-500 text-xs">×</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                    View ad
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;