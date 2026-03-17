import { Link } from "react-router-dom";
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import { audioDevices, setups, tvs } from '../data'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function DetailScreen() {
    const {id} = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProduct() {
            try {
                const { data } = await axios.get(`http://127.0.0.1:8000/api/tvs/${id}/`)
                setProduct(data)
        fetchProduct()
    }, [])

    return (
        <div>
            <Link className='btn btn-light my-3' to='/'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.sample_image} alt={product.service_name} style={{ width: '500px', height: 'auto' }} fluid />
                </Col>  
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.service_name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Duration: {product.duration}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Expert: {product.expert}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>₱{product.price ? product.price : product.priceRange}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' type='button'>Add to Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default DetailScreen