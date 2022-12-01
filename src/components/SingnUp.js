import React from 'react'
import { useNavigate } from "react-router-dom";
export default function SingnUp() {
    const navigate = useNavigate();
  return (
    <>
    <div class="text-bg-dark p-3">
    <div className='container my-3'>
    <button type="button" class="btn btn-link" onClick={()=>navigate("/Home")}>Home</button>
        <h1>Register</h1>
      <form className="row g-3 needs-validation" noValidate>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" defaultValue="" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" defaultValue="" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="mb-8">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">put valid mail id.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword4"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04" required>
      <option defaultValue="">Choose...</option>
      <option>maharashtra</option>
      <option>goa</option>
      <option>gujrat</option>
      <option>tamilnadu</option>
      <option>delhi</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" required/>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
    </div>
    <div className="col-md-3">
    <label htmlFor="validationCustom06" className="form-label">Mobile</label>
    <input type="text" className="form-control" id="validationCustom06" required/>
    <div className="invalid-feedback">
      Please provide a valid number.
    </div>
    </div>
    <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked/>
  <label className="form-check-label" htmlFor="exampleRadios1">
    as a Trainer
  </label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className="form-check-label" htmlFor="exampleRadios2">
    as a Member
  </label>
</div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck" required/>
      <label className="form-check-label" htmlFor="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
   
  </div>
</form>
<div className="container my-3">
or<br /><span style={{color:'red'}} onClick={()=>navigate("/Login")}>Login</span>
</div>
    </div>
    </div>

    </>
  )
}
