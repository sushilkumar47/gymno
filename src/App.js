import './App.css';
import Login from './components/Login';
import SingnUp from './components/SingnUp';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import CreateProfile from './components/CreateProfile';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import ContactUs from './components/ContactUs';
import Logout from './components/Logout';




function App() {
  return (
    <>
    <Router>
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SingnUp/>}/>
        <Route path="/" element={<Navbar/>}/> 
        <Route path="/editProfile" element={<CreateProfile/>}/> 
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Contact" element={<ContactUs/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/Logout" element={<Logout/>}/>
      </Routes>
    </div>
    
    </Router>
    </>
  );
}

export default App;
