import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Pages/LandingPage';
import NAV from './components/Pages/NAV';
import Footer from './components/Pages/Footer';
import FindTutor from './components/Pages/FindTutor';
import Dashboard from './components/Pages/Dashboard';
import MyAccountProfile from './components/Pages/MyAccountProfile';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800">
        <NAV />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tutors" element={<FindTutor />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<MyAccountProfile />} />
           
          
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
