import React, { Component } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
class Login extends Component {
    render() {
        return <>
        
        
        <section>
    <div className=" bg-backScreen w-100 min-vh-100 d-flex justify-content-center align-items-center">
      <div className="sizing bg-light m-3  rounded-2 shadow-sm  ">
        <div className="h-100">
          <form className="h-100" >
            <div className="d-flex flex-column gap-3  p-4 p-md-5 justify-content-center h-100">
                    <label htmlFor="Username">Username / Email</label>
                <div className='position-relative'>
                 <input id='Username' type="search" className="form-control pe-5" placeholder="Abde..@gmail.com" aria-label="Username" />
                   <span className="input-group-text position-absolute top-0 end-0">@</span>
                </div>
                <label htmlFor="password">Password</label>
                <div className='position-relative'>
                 <input id='password' type="password" className="form-control pe-5" placeholder="password" aria-label="Username" />
                   <span className="input-group-text position-absolute top-0 end-0 h-100 "><i className=" fa-solid fa-eye-slash"></i></span>
                </div>
            <button className='btn btn-danger p-0'><Link className='py-2 px-4 link-underline link-underline-opacity-0 text-white w-100 h-100 d-flex justify-content-center' to="/Product">Login</Link></button>
            </div>
          </form>
        </div>
      </div>
    </div>
</section>

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </>
        ;
    }
}

export default Login;