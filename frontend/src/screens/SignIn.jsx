import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Row, Col, Card, Container, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, userInfo, redirect]);

    const submitHandler = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            dispatch(login(email, password));
        }
        setValidated(true);
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Card className="shadow-sm p-4">
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign In</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            
                            <Form noValidate validated={validated} onSubmit={submitHandler}>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Enter expert email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid email.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>

                                <Button 
                                    type="submit" 
                                    variant="primary" 
                                    className="w-100 mb-3"
                                    disabled={loading}
                                >
                                    {loading ? 'Authenticating...' : 'Sign In'}
                                </Button>
                            </Form>

                            <Row className="py-3">
                                <Col className="text-center">
                                    New to the platform? <Link to="/signup">Register Here</Link>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SignIn;