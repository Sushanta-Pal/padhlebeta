import { useState, useEffect } from "react";
import { 
  Heart, 
  CheckCircle, 
  Star, 
  Clock, 
  Users, 
  MessageCircle, 
  Filter,
  MapPin,
  Search,
  X,
  ChevronDown,
  DollarSign,
  GraduationCap,
  Globe,
  Video
} from "lucide-react";

// Enhanced dummy data with more filtering options
const dummyTeachers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    subject: "Mathematics",
    specialty: "Calculus & Statistics",
    image: "https://images.unsplash.com/photo-1494790108755-2616c640d6a9?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 124,
    experience: "8 years",
    students: 350,
    price: "₹800/hr",
    priceValue: 800,
    verified: true,
    location: "Mumbai",
    type: "online",
    availability: "available",
    languages: ["English", "Hindi"],
    degree: "PhD Mathematics",
    responseTime: "2 hours",
    level: ["high-school", "university"]
  },
  {
    id: 2,
    name: "Prof. Rajesh Kumar",
    subject: "Physics",
    specialty: "Quantum Mechanics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 89,
    experience: "12 years",
    students: 280,
    price: "₹1200/hr",
    priceValue: 1200,
    verified: true,
    location: "Delhi",
    type: "both",
    availability: "busy",
    languages: ["English", "Hindi", "Bengali"],
    degree: "PhD Physics",
    responseTime: "1 hour",
    level: ["university", "competitive"]
  },
  {
    id: 3,
    name: "Ms. Priya Sharma",
    subject: "English",
    specialty: "Literature & Grammar",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
    experience: "5 years",
    students: 420,
    price: "₹600/hr",
    priceValue: 600,
    verified: false,
    location: "Bangalore",
    type: "online",
    availability: "available",
    languages: ["English", "Tamil"],
    degree: "MA English",
    responseTime: "30 minutes",
    level: ["middle-school", "high-school"]
  },
  {
    id: 4,
    name: "Dr. Ahmed Ali",
    subject: "Chemistry",
    specialty: "Organic Chemistry",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 203,
    experience: "15 years",
    students: 500,
    price: "₹1000/hr",
    priceValue: 1000,
    verified: true,
    location: "Hyderabad",
    type: "in-person",
    availability: "available",
    languages: ["English", "Urdu"],
    degree: "PhD Chemistry",
    responseTime: "3 hours",
    level: ["high-school", "university", "competitive"]
  },
  {
    id: 5,
    name: "Ms. Anita Gupta",
    subject: "Biology",
    specialty: "Cell Biology & Genetics",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 78,
    experience: "6 years",
    students: 200,
    price: "₹700/hr",
    priceValue: 700,
    verified: true,
    location: "Chennai",
    type: "both",
    availability: "available",
    languages: ["English", "Tamil", "Telugu"],
    degree: "MSc Biology",
    responseTime: "1 hour",
    level: ["high-school", "university"]
  },
  {
    id: 6,
    name: "Mr. Vikram Singh",
    subject: "Computer Science",
    specialty: "Programming & Data Structures",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 145,
    experience: "10 years",
    students: 380,
    price: "₹1500/hr",
    priceValue: 1500,
    verified: true,
    location: "Pune",
    type: "online",
    availability: "available",
    languages: ["English", "Hindi", "Marathi"],
    degree: "MTech CS",
    responseTime: "45 minutes",
    level: ["university", "competitive", "professional"]
  }
];

const subjects = ["All Subjects", "Mathematics", "Physics", "Chemistry", "Biology", "English", "Computer Science"];
const locations = ["All Locations", "Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Pune"];
const types = [
  { value: "all", label: "All Types" },
  { value: "online", label: "Online" },
  { value: "in-person", label: "In-Person" },
  { value: "both", label: "Both" }
];
const levels = [
  { value: "all", label: "All Levels" },
  { value: "middle-school", label: "Middle School" },
  { value: "high-school", label: "High School" },
  { value: "university", label: "University" },
  { value: "competitive", label: "Competitive Exams" },
  { value: "professional", label: "Professional" }
];

const FindTutor = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [filters, setFilters] = useState({
    subject: "All Subjects",
    location: "All Locations",
    type: "all",
    level: "all",
    priceRange: [0, 2000],
    verified: false,
    availability: "all",
    search: ""
  });
  const [showFilters, setShowFilters] = useState(false);
  const [filteredTeachers, setFilteredTeachers] = useState(dummyTeachers);

  // Filter teachers based on current filters
  useEffect(() => {
    let filtered = dummyTeachers.filter(teacher => {
      // Search filter
      if (filters.search && !teacher.name.toLowerCase().includes(filters.search.toLowerCase()) 
          && !teacher.subject.toLowerCase().includes(filters.search.toLowerCase())
          && !teacher.specialty.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }

      // Subject filter
      if (filters.subject !== "All Subjects" && teacher.subject !== filters.subject) {
        return false;
      }

      // Location filter
      if (filters.location !== "All Locations" && teacher.location !== filters.location) {
        return false;
      }

      // Type filter
      if (filters.type !== "all" && teacher.type !== filters.type && teacher.type !== "both") {
        return false;
      }

      // Level filter
      if (filters.level !== "all" && !teacher.level.includes(filters.level)) {
        return false;
      }

      // Price range filter
      if (teacher.priceValue < filters.priceRange[0] || teacher.priceValue > filters.priceRange[1]) {
        return false;
      }

      // Verified filter
      if (filters.verified && !teacher.verified) {
        return false;
      }

      // Availability filter
      if (filters.availability !== "all" && teacher.availability !== filters.availability) {
        return false;
      }

      return true;
    });

    setFilteredTeachers(filtered);
    setVisibleCount(6); // Reset visible count when filters change
  }, [filters]);

  const teachersToShow = filteredTeachers.slice(0, visibleCount);

  const clearFilters = () => {
    setFilters({
      subject: "All Subjects",
      location: "All Locations",
      type: "all",
      level: "all",
      priceRange: [0, 2000],
      verified: false,
      availability: "all",
      search: ""
    });
  };

  return (
    <section className="px-6 py-16 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h3 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Find Your Perfect Tutor
        </h3>
        <p className="text-center text-gray-600 mb-12 text-lg">
          {filteredTeachers.length} expert tutors available
        </p>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-[250px]">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, subject, or specialty..."
                value={filters.search}
                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Quick Filters */}
            <select
              value={filters.subject}
              onChange={(e) => setFilters(prev => ({ ...prev, subject: e.target.value }))}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
             <select
              value={filters.type}
              onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            >
              {types.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
            <select
              value={filters.location}
              onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>

            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-purple-100 text-purple-700 rounded-xl hover:bg-purple-200 transition-colors"
            >
              <Filter className="w-4 h-4" />
              More Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="border-t pt-6 mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lesson Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                >
                  {types.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                <select
                  value={filters.level}
                  onChange={(e) => setFilters(prev => ({ ...prev, level: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                >
                  {levels.map(level => (
                    <option key={level.value} value={level.value}>{level.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range: ₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}/hr
                </label>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="100"
                  value={filters.priceRange[1]}
                  onChange={(e) => setFilters(prev => ({ 
                    ...prev, 
                    priceRange: [prev.priceRange[0], parseInt(e.target.value)]
                  }))}
                  className="w-full"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.verified}
                    onChange={(e) => setFilters(prev => ({ ...prev, verified: e.target.checked }))}
                    className="mr-2 rounded text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm">Verified tutors only</span>
                </label>

                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800"
                >
                  <X className="w-4 h-4" />
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachersToShow.map((teacher) => (
            <div key={teacher.id} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img src={teacher.image} alt={teacher.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-red-50 transition-colors group">
                  <Heart className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                </button>

                {teacher.verified && (
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </div>
                )}

                {teacher.availability === "available" && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    Available Now
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                <p className="text-purple-600 font-semibold mb-1">{teacher.subject}</p>
                <p className="text-gray-600 text-sm mb-3">{teacher.specialty}</p>

                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-900 text-sm">{teacher.rating}</span>
                  <span className="text-gray-500 text-sm">({teacher.reviews})</span>
                </div>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {teacher.location}
                    </div>
                    <div className="flex items-center gap-1">
                      {teacher.type === "online" && <Globe className="w-4 h-4" />}
                      {teacher.type === "in-person" && <Users className="w-4 h-4" />}
                      {teacher.type === "both" && <Video className="w-4 h-4" />}
                      {teacher.type}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {teacher.experience}
                    </div>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="w-4 h-4" />
                      {teacher.degree}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {teacher.price}
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-2 border-2 border-gray-200 rounded-xl hover:border-purple-400 hover:text-purple-600 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg">
                  Book Free Trial
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTeachers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto mb-4" />
              <p className="text-xl">No tutors found matching your criteria</p>
              <p className="text-sm">Try adjusting your filters or search terms</p>
            </div>
            <button
              onClick={clearFilters}
              className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Load More */}
        {visibleCount < filteredTeachers.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 py-3 bg-white border-2 border-purple-500 text-purple-600 font-semibold rounded-full shadow hover:bg-purple-50 hover:scale-105 transition-all"
            >
              Show More Tutors ({filteredTeachers.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FindTutor;