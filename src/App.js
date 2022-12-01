import './App.css';
import Login from './components/Login';
import SingnUp from './components/SingnUp';
import Navbar from './components/Navbar';


import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SingnUp/>}/>
        <Route path="/Home" element={<Navbar/>}/>
        {/* <Route path="/" element={<SingnUp/>}/> */}
    </Routes>
    </div>
    
    </Router>
    </>
  );
}

export default App;
