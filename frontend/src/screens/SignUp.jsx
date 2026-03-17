import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Container, Card, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '', username: '', phone_number: '', first_name: '',
        last_name: '', location: '', gender: '', password: '', confirm_password: ''
    });
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) { navigate('/'); }
    }, [navigate, userInfo]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirm_password) {
            setMessage('Passwords do not match');
        } else {
            setMessage(null);
            dispatch(register(formData));
        }
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-md-center">
                <Col xs={12} md={8}>
                    <Card className="shadow p-4">
                        <h2 className="text-center mb-4">Create Expert Account</h2>
                        {message && <Alert variant="danger">{message}</Alert>}
                        {error && <Alert variant="danger">{error}</Alert>}
                        
                        <Form onSubmit={submitHandler}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control name="email" type="email" required placeholder="email@example.com" onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control name="username" type="text" required placeholder="unique_username" onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="first_name">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control name="first_name" type="text" required placeholder="John" onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="last_name">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control name="last_name" type="text" required placeholder="Doe" onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="phone_number">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control name="phone_number" type="text" required placeholder="+63 9XX XXX XXXX" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="location">
                                <Form.Label>Location (City/Region)</Form.Label>
                                <Form.Control name="location" type="text" required placeholder="e.g. Angeles City" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select name="gender" required onChange={handleChange}>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </Form.Select>
                            </Form.Group>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name="password" type="password" required placeholder="********" onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="confirm_password">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control name="confirm_password" type="password" required placeholder="********" onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Button type="submit" variant="primary" className="w-100 mt-3" disabled={loading}>
                                {loading ? 'Creating Account...' : 'Register'}
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;