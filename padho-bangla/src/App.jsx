import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Pages/LandingPage';
import NAV from './components/Pages/NAV';
import Footer from './components/Pages/Footer';
import FindTutor from './components/Pages/FindTutor';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800">
        <NAV />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tutors" element={<FindTutor />} />
          {/* Future role-based routing setup:
            <Route path="/home" element={<Home />} />
            <Route path="/find-tutor" element={<FindTutor />} />
            <Route path="/profile" element={<Profile />} />
          */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
