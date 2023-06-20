/**
 * Navbar has function to go home or calls user's movie list page 
 * This component can be called in each pages so that enables communicate between components and pages 
 * 
 */
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import '../App.css';
import Modal from './SignInModal';

const Navbar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { propsLogin } = props;
  
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem('login'))
);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLocation = () => {
    navigate('/user', {state: propsLogin})
  }
  
  return (
    <div>
      <nav className="navbar navbar-light mb-5 py-5 nav-custom">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              ATG Movie Awards
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block" >
            
            <Button style={{backgroundColor: 'transparent', borderColor:'transparent', boxShadow: 'none'}} 
                    onClick={(login !== null || propsLogin !== null) ? ()=>handleLocation() : ()=>setShowModal(true)}>             
              <i className='fas fa-film fa-3x'></i>
            MyMovie
            </Button>
            <Modal show={showModal}
                    onHide={() => setShowModal(false)} />
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
