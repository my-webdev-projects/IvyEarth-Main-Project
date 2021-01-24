import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg'>
        <div className='container'>
          <Link className='navbar-brand' to='#' style={{ color: 'white' }}>
            IvyEarth
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i className='fas fa-align-right text-light'></i>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <div className='mr-auto'></div>
            <ul className='navbar-nav'>
              <form className='form-inline md-form form-sm mt-0 mr-5'>
                <input
                  className='form-control form-control-sm w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                />
                <button>
                  <i
                    className='fas fa-search ml-3'
                    aria-hidden='true'
                    style={{ color: 'white' }}
                  ></i>
                </button>
              </form>
              <li className='nav-item'>
                <Link className='nav-link' to='#'>
                  Home{' '}
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='#'>
                  Plants
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='#'>
                  About
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <div className='dropdown'>
                  <Link to='#' className='nav-link'>
                    Profile
                  </Link>
                  <div className='dropdown-content'>
                    <Link to='profile.html'>Your Profile</Link>
                    <Link to='editprofile.html'>Edit Profile</Link>
                    <Link to='signup.html'>Log Out</Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
