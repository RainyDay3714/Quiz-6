import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'


function Product({ tv, audioDevice, setup }) {
  return (
    <Card className='my-3 p-3 rounded border shadow-sm'>
      <Link to={`/product/${tv ? tv.id : audioDevice ? audioDevice.id : setup.id}`}>
        <Card.Img src={tv ? tv.sample_image : audioDevice ? audioDevice.sample_image : setup.sample_image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${tv ? tv.id : audioDevice ? audioDevice.id : setup.id}`}>
          <Card.Title as='div'>
            <strong>{tv ? tv.service_name : audioDevice ? audioDevice.service_name : setup.service_name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <div className='my-3'>
            {tv ? `${tv.size}" ${tv.resolution}" ${tv.description}` : audioDevice ? audioDevice.description : setup.description}
          </div>
        </Card.Text>
        <Card.Text as='h3'>₱{tv ? tv.price : audioDevice ? audioDevice.price : setup.priceRange}</Card.Text>
        <Card.Text as='div'>
          <div className='my-3'>
            <Rating value={tv ? tv.rating : audioDevice ? audioDevice.rating : setup.rating} text={`${tv ? tv.numReviews : audioDevice ? audioDevice.numReviews : setup.numReviews} reviews`} color={'#f8e825'}/>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
