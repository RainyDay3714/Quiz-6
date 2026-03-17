import { Row, Col } from 'react-bootstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listServices } from '../actions/serviceActions'
import { Link } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'

function HomeScreen() {
    const dispatch = useDispatch();
    const serviceList = useSelector((state) => state.serviceList);
    const { loading, error, services } = serviceList;

    useEffect(() => {
        dispatch(listServices());
    }, [dispatch]);

    return (
        <Container>
            <h2 className="my-4">Expert TV & Entertainment Services</h2>
            {loading ? <h5>Loading Services...</h5> : error ? <div className="text-danger">{error}</div> : (
                <Row>
                    {services.map((service) => (
                        <Col key={service.id} sm={12} md={6} lg={4}>
                            <Card className="my-3 shadow-sm border-0">
                                <Card.Img variant="top" src={service.sample_image} style={{ height: '200px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title>{service.service_name}</Card.Title>
                                    <Card.Text className="text-muted">
                                        {service.description.substring(0, 80)}...
                                    </Card.Text>
                                    <div className="mb-3">
                                        <span className="badge bg-warning text-dark">{service.rating} ⭐</span>
                                    </div>
                                    <Link to={`/service/${service.id}`}>
                                        <Button variant="primary" className="w-100">View Details</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default HomeScreen;
