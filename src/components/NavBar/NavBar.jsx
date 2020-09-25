import React, {Link} from 'react';
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav className="navbar-nav">
          <div>
            <span className="navbar-brand">
             <div className='image-container'>             </div>
             <div className="d-flex justify-content-around">  Welcome, {user.name} </div> 
             <div><a href="/my-trips">Your Trips</a></div>
              <div><a href="/add-trip">Add A Trip</a></div>
              <div><a href="/index">Vacation Ideas</a></div>
            <div>
              <a href='/' onClick={handleLogout}>
                Log Out
              </a>
            </div>
            </span>
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
            <span  className="navbar-brand">
              <div className=""><a href="/login" ></a></div>
              
              <div><a href="/signup" className="nav-link"></a></div>
            </span>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;
