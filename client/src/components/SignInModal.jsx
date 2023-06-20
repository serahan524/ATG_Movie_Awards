/**
 * SignInModal is react modal that pops up once clicked from pages or navbar 
 * It can redirect a user to register or to the home once user success to sign in
 * 
 * Current version does not have secured password authentication. 
 * This only simply requires user's email and password stored in user table 
 */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { getUser } from "../actions/userActions";

export const SignInModal = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [login, setLogin] = useState(
        JSON.parse(localStorage.getItem('login'))
      );

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const { success, loading, user } = users;

    useEffect(() => {
        dispatch(getUser())
    }, [])

    // Once login success, set localStorage and page direct to Home 
    const handleClick = () => {
        if (user?.length > 0) {
            for (let u = 0; u < user.length; u++){
                if (email === user[u].email && pass === user[u].password){
                    
                    localStorage.setItem('login', JSON.stringify(user[u].userID))
                    setLogin(user[u].userID)
                    
                    props.onHide()
                    return navigate('/', {state: user[u].userID})
                    
                }               
            }
        }
        alert("Login Failed. Please try again!")   
    }

    return (
        
            <Modal {...props} centered size='sm'>
                <Modal.Header closeButton>
                    <Modal.Title> Login Required </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter email"
                                    />   
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                placeholder="password"
                                />  
                        </Form.Group>
                    </Form>
                    <Modal.Footer>
                        <Button className="btn btn-success" onClick={() => {handleClick()}}>
                        LogIn
                        </Button>
                        <Button className="btn btn-secondary" onClick={props.onHide}>
                        Cancel
                        </Button>
                    </Modal.Footer>      
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/register">
                    Or register 
                    </Link>    
                </Modal.Footer>
            </Modal>
    
    )
}

export default SignInModal;