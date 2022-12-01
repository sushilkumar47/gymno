import React from 'react'
import Content from './Contentp'
import Footer from './Footer'
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
    <section className="navbar-primary bg-primary header">
       <div className="container">
          <div className="row">
           <div className="col-sm-12"> 
            <nav className="navbar navbar-expand-lg ">
              <a className="navbar-brand text-white" href="#"> <b>Gymno</b></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
 
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item ">
                    <a className="nav-link " href="#about"><b>About Us</b><span className="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#destinations"><b>Plans</b><span className="sr-only"></span></a>
                  </li>
                  <li className="nav-item dropdown">
                  <a className="nav-link" href="#places"><b>places</b><span className="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#tourist"><b>Trainers</b><span className="sr-only"></span></a>
                  </li>
                </ul>
                 
              </div>
              <button type="button" class="btn btn-warning mx-2" onClick={()=>navigate("/Login")}>Login</button>
              <button type="button" class="btn btn-warning mx-2" onClick={()=>navigate("/signup")}>Register</button>
             </nav>
            </div>
           
          </div>
        </div>
    </section> 
    <div className="container">
    <React.Fragment>
       <Content />
       <Footer/>
    </React.Fragment>
    </div>
    </>
  )
}
