import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listServiceDetails } from '../actions/serviceActions'

function DetailScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const serviceDetails = useSelector((state) => state.serviceDetails);
    const { loading, error, service } = serviceDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) { navigate('/signin'); }
        dispatch(listServiceDetails(id));
    }, [dispatch, id, userInfo, navigate]);

    return (
        <div className="mt-4">
            {loading ? <h5>Loading...</h5> : error ? <div>{error}</div> : (
                <Row>
                    <Col md={6}>
                        <Image src={service.sample_image} alt={service.service_name} fluid rounded />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item><h3>{service.service_name}</h3></ListGroup.Item>
                            <ListGroup.Item>Rating: {service.rating} </ListGroup.Item>
                            <ListGroup.Item><strong>Expert:</strong> {service.name_of_the_expert}</ListGroup.Item>
                            <ListGroup.Item><strong>Duration:</strong> {service.duration_of_service}</ListGroup.Item>
                            <ListGroup.Item>Description: {service.description}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col><strong>${service.price}</strong></Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant="success" className="w-100" type="button">
                                        Pay with PayPal
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </div>
    );
};

export default DetailScreen;