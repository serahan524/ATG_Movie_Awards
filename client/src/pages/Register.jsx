/**
 * Register page communicate only with SignInModal, 
 * but also connects to django db table user to add new user's information as prompt.
 */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getUser, addUser } from '../actions/userActions';

const Register = () => {
    const [email, setEmail] = useState('')        
    const [fName, setFName] = useState('')        
    const [lName, setLName] = useState('')       
    const [pass, setPass] = useState('')     
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUser())
      }, [dispatch])

    // Calls dispatch to post prompt user's input to the user table 
    const handleClick = () => {
        const item = {
            firstName: fName,
            lastName: lName,
            email: email,
            password: pass,
        }
        if (fName === '' || lName === '' || email === '' || pass === ''){
            alert('Please fill all the fields.')
        }
        dispatch(addUser(item))
    }

    return (
      <div>
        <div className="App" style={{background: 'black', minHeight: '100vh'}}>
        <Navbar />
          <h2 className='text-white'>Sign Up</h2>
          <Form>
          <Form.Group className="mb-3 mt-5 w-75 mx-auto">
                <Form.Label className='text-white'>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="fName"
                        value={fName}
                        onChange={(e) => setFName(e.target.value)}
                        placeholder="Enter First Name"
                        style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}
                        />   
            </Form.Group>
            <Form.Group className="mb-3 w-75 mx-auto">
                <Form.Label className='text-white'>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lName"
                        value={lName}
                        onChange={(e) => setLName(e.target.value)}
                        placeholder="Enter Last Name"
                        />   
            </Form.Group>
            <Form.Group className="mb-3 w-75 mx-auto">
                <Form.Label className='text-white'>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        />   
            </Form.Group>
            <Form.Group className="mb-3 w-75 mx-auto">
                <Form.Label className='text-white'>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="password"
                    />  
            </Form.Group>
            <Link to='/'>
                <Button className='btn btn-success w-25 mt-5' onClick={() => {handleClick()}}>
                    Save
                </Button>
            </Link>
        </Form>
        
        </div>
        <div style={{marginTop: '-5vh'}}>
        <Footer />
        </div>
        
      </div>
    )
    
  }
  
  export default Register;