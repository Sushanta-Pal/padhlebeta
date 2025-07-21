import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronLeft, ChevronRight, Heart, Star, Play, Users, Award, Globe, BookOpen, MessageCircle, Video, Clock, CheckCircle, Sparkles, Zap, Target, TrendingUp } from 'lucide-react';

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef(null);

  const subjects = [
    { name: 'Conversation', icon: '💬', color: 'from-pink-400 to-rose-500' },
    { name: 'Grammar', icon: '📚', color: 'from-blue-400 to-indigo-500' },
    { name: 'Literature', icon: '📖', color: 'from-purple-400 to-violet-500' },
    { name: 'Writing', icon: '✍️', color: 'from-green-400 to-emerald-500' },
    { name: 'Business', icon: '💼', color: 'from-orange-400 to-red-500' },
    { name: 'Culture', icon: '🎭', color: 'from-teal-400 to-cyan-500' },
    { name: 'Poetry', icon: '🎪', color: 'from-yellow-400 to-orange-500' },
    { name: 'History', icon: '🏛️', color: 'from-indigo-400 to-blue-500' }
  ];

  // Enhanced teachers data
  const teachers = [
    {
      id: 1,
      name: 'Dr. Ananya Sen',
      subject: 'Bengali Literature & Poetry',
      rating: 4.9,
      reviews: 247,
      price: '₹800/hr',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9905002?w=300&h=300&fit=crop&crop=face',
      verified: true,
      experience: '8 years',
      students: 150,
      specialty: 'Rabindranath Tagore specialist'
    },
    {
      id: 2,
      name: 'Rajesh Chakraborty',
      subject: 'Conversational Bengali',
      rating: 4.8,
      reviews: 189,
      price: '₹600/hr',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      verified: true,
      experience: '6 years',
      students: 230,
      specialty: 'Business Bengali'
    },
    {
      id: 3,
      name: 'Priya Mukherjee',
      subject: 'Bengali for Beginners',
      rating: 4.9,
      reviews: 312,
      price: '₹500/hr',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      verified: true,
      experience: '5 years',
      students: 180,
      specialty: 'Children & Adult beginners'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'International Student',
      content: 'Learning Bengali with these tutors has been transformative. The cultural insights are incredible!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'Business Professional',
      content: 'Perfect for my business needs in Kolkata. The tutors understand professional contexts perfectly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'Emma Wilson',
      role: 'Language Enthusiast',
      content: 'The interactive approach and cultural immersion made learning Bengali so enjoyable!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face'
    }
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Students' },
    { icon: Award, value: '500+', label: 'Expert Tutors' },
    { icon: Globe, value: '50+', label: 'Countries' },
    { icon: BookOpen, value: '95%', label: 'Success Rate' }
  ];

  // Mouse tracking for hero effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleSubjects = subjects.slice(currentSlide, currentSlide + 4);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (subjects.length - 3));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + subjects.length - 3) % (subjects.length - 3));
  };

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen overflow-hidden">
      {/* Floating Elements Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-300 to-cyan-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-green-300 to-teal-400 rounded-full opacity-20 animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Enhanced Hero Section */}
      <section 
        ref={heroRef}
        className="relative flex flex-col md:flex-row items-center justify-between px-6 py-20 min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform rotate-12"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-yellow-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="md:w-1/2 text-center md:text-left space-y-8 relative z-10">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
              #1 Bengali Learning Platform
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Master
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse"> Bengali</span>
              <br />with AI-Powered Tutoring
            </h1>
            
            <p className="text-xl text-white/80 leading-relaxed max-w-lg">
              Join thousands learning Bengali through immersive 1-on-1 sessions with native experts. 
              <span className="text-yellow-400 font-semibold"> 10x faster results guaranteed.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="group relative bg-gradient-to-r from-pink-500 to-violet-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25">
              <span className="relative z-10 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Start Learning Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>

          {/* Live Stats */}
          <div className="flex items-center space-x-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.9★</div>
              <div className="text-white/60 text-sm">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-white/60 text-sm">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/60 text-sm">Tutors</div>
            </div>
          </div>
        </div>

        {/* Floating Hero Image */}
        <div className="md:w-1/2 relative mt-12 md:mt-0">
          <div 
            className="relative transform transition-transform duration-300"
            style={{
              transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px) rotateY(${mousePosition.x * 0.5}deg)`
            }}
          >
            <div className="w-96 h-96 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full opacity-20 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-4 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full opacity-30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&crop=center" 
                alt="Bengali Learning" 
                className="absolute inset-8 w-80 h-80 object-cover rounded-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Glassmorphism Search Bar */}
      <div className="relative -mt-20 px-6 z-20">
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 mb-12 max-w-3xl mx-auto border border-white/30">
          <div className="flex items-center space-x-6">
            <div className="flex-1 relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6" />
              <input
                type="text"
                placeholder='Try "Bengali conversation" or "Business Bengali"'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-6 text-lg bg-white/80 backdrop-blur-sm border-2 border-transparent rounded-2xl focus:outline-none focus:ring-4 focus:ring-pink-400/50 focus:border-pink-400 transition-all duration-300 placeholder-gray-500"
              />
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-6 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Subject Carousel */}
      <div id="subjects" className={`bg-white/50 backdrop-blur-sm px-6 py-12 transition-all duration-1000 ${isVisible.subjects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Choose Your Learning Path
        </h2>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-6xl mx-auto border border-white/30">
          <div className="flex items-center justify-between">
            <button 
              onClick={prevSlide} 
              className="p-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white rounded-full transition-all duration-300 shadow-lg hover:scale-110"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <div className="flex items-center space-x-12 flex-1 justify-center">
              {visibleSubjects.map((subject, index) => (
                <div 
                  key={subject.name} 
                  className="flex flex-col items-center space-y-3 group hover:scale-110 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${subject.color} rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-6`}>
                    {subject.icon}
                  </div>
                  <span className="text-base font-bold text-gray-700 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {subject.name}
                  </span>
                </div>
              ))}
            </div>

            <button 
              onClick={nextSlide} 
              className="p-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white rounded-full transition-all duration-300 shadow-lg hover:scale-110"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section id="stats" className={`px-6 py-16 transition-all duration-1000 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:shadow-2xl transition-shadow">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Enhanced Featured Teachers */}
      <section id="teachers" className={`px-6 py-16 bg-gradient-to-br from-blue-50 to-purple-50 transition-all duration-1000 ${isVisible.teachers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h3 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Meet Our Expert Tutors
        </h3>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {teachers.map((teacher, index) => (
            <div 
              key={teacher.id} 
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-red-50 transition-colors group">
                  <Heart className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                </button>
                
                {teacher.verified && (
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    Verified Expert
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                    <p className="text-purple-600 font-semibold mb-2">{teacher.subject}</p>
                    <p className="text-gray-600 text-sm">{teacher.specialty}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-bold text-gray-900">{teacher.rating}</span>
                    <span className="text-gray-500 text-sm">({teacher.reviews})</span>
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {teacher.price}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {teacher.experience}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {teacher.students}+ students
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-lg">
                    Book Trial
                  </button>
                  <button className="px-6 py-4 border-2 border-gray-200 rounded-2xl hover:border-purple-400 hover:text-purple-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className={`px-6 py-20 bg-gradient-to-r from-purple-900 to-pink-900 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <h3 className="text-5xl font-bold text-center mb-16 text-white">
          What Our Students Say
        </h3>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-2xl text-white/90 mb-8 leading-relaxed">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full border-4 border-white/30"
                />
                <div className="text-left">
                  <div className="text-xl font-bold text-white">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-white/60">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeTestimonial 
                    ? 'bg-white w-8' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-6xl font-black text-white mb-8 leading-tight">
            Ready to Master Bengali?
          </h3>
          <p className="text-2xl text-white/80 mb-12">
            Join thousands of successful learners. Start your journey today with a free trial lesson.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-12 py-6 rounded-3xl font-black text-xl hover:scale-105 transition-all duration-300 shadow-2xl">
              <span className="relative z-10 flex items-center">
                <Target className="w-6 h-6 mr-3" />
                Start Free Trial
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <div className="text-white/80 text-lg">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;