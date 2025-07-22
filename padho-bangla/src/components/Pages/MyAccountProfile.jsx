import React, { useState } from 'react';
import { MessageCircle, Users, Star, BookOpen, User, Mail, Phone, Check, Search, Bell, Heart, Menu, Calendar, MapPin, Camera, Lock, FileText } from 'lucide-react';

const MyAccountProfile = () => {
  const [activeTab, setActiveTab] = useState('My Profile');
  const [profileData, setProfileData] = useState({
    gender: 'Male',
    firstName: 'Sushanta',
    lastName: 'Pal',
    birthDate: '',
    email: 'sp007133l@gmail.com',
    phone: '089183 57997',
    skypeId: '',
    hangoutId: ''
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const accountTabs = ['My Profile', 'My Status', 'My Receipts'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white border-b border-gray-200 px-6 py-4">
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
          <button className="text-gray-300 hover:text-white">Dashboard</button>
          <button className="text-gray-300 hover:text-white">My messages</button>
          <button className="text-gray-300 hover:text-white">My Ads</button>
          <button className="text-gray-300 hover:text-white">Evaluations</button>
          <button className="text-white border-b-2 border-white pb-1">My Account</button>
        </div>
      </nav>

      {/* Sub Navigation */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-8">
            {accountTabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 ${
                  activeTab === tab 
                    ? 'text-gray-800 border-b-2 border-gray-800 font-medium' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* General Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-2 mb-6">
              <h3 className="text-lg font-semibold text-gray-800">General Information</h3>
              <span className="text-yellow-500">😊</span>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select 
                  value={profileData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  value={profileData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  value={profileData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Birth Date</label>
                <input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  value={profileData.birthDate}
                  onChange={(e) => handleInputChange('birthDate', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-green-600"
                />
                <Check className="absolute right-3 top-10 w-5 h-5 text-green-500" />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 rounded-l-lg">
                    🇮🇳
                  </span>
                  <input
                    type="text"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full p-3 pr-10 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-green-600"
                  />
                  <Check className="absolute right-3 top-10 w-5 h-5 text-green-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Skype ID</label>
                <input
                  type="text"
                  value={profileData.skypeId}
                  onChange={(e) => handleInputChange('skypeId', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hangout ID</label>
                <input
                  type="text"
                  value={profileData.hangoutId}
                  onChange={(e) => handleInputChange('hangoutId', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>

          {/* Postal Address */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-2 mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Postal Address</h3>
              <MapPin className="w-5 h-5 text-blue-500" />
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-3">Haldia Riverside Estates Limited...</p>
            </div>

            {/* Map */}
            <div className="w-full h-64 bg-gray-200 rounded-lg relative overflow-hidden mb-6">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 relative">
                {/* Simplified map representation */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-gray-500 rounded-lg"></div>
                </div>
                {/* Location marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                </div>
                {/* Google attribution */}
                <div className="absolute bottom-2 left-2 text-xs text-gray-600 bg-white px-2 py-1 rounded">
                  Google
                </div>
                <div className="absolute bottom-2 right-2 text-xs text-gray-600 bg-white px-2 py-1 rounded">
                  Map data ©2025
                </div>
              </div>
            </div>

            {/* Identification Section */}
            <div className="border-t pt-6">
              <div className="flex items-center space-x-2 mb-4">
                <h4 className="text-md font-semibold text-gray-800">Identification</h4>
                <FileText className="w-4 h-4 text-blue-500" />
              </div>
              
              <div className="flex items-center justify-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-8 h-8 text-blue-500" />
                  </div>
                  <p className="text-gray-500 text-sm">Upload identification document</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Photo & Password */}
          <div className="space-y-6">
            {/* Profile Photo */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-2 mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Profile Photo</h3>
                <Camera className="w-5 h-5 text-blue-500" />
              </div>
              
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                    alt="Profile"
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                </div>
                <button className="text-blue-600 text-sm hover:text-blue-700 font-medium">
                  Change Photo
                </button>
              </div>
            </div>

            {/* Modify Password */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-2 mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Modify password</h3>
                <Lock className="w-5 h-5 text-yellow-500" />
              </div>
              
              <button className="w-full bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium">
                Modify password
              </button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccountProfile;