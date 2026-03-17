import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './rating'


function Product({ tv, audioDevice, setup }) {
  return (
    <Card className='my-3 p-3 rounded border shadow-sm'>
      <a href={`/product/${tv ? tv.id : audioDevice ? audioDevice.id : setup.id}`}>
        <Card.Img src={tv ? tv.sample_image : audioDevice ? audioDevice.sample_image : setup.sample_image} variant='top' />
      </a>
      <Card.Body>
        <a href={`/product/${tv ? tv.id : audioDevice ? audioDevice.id : setup.id}`}>
          <Card.Title as='div'>
            <strong>{tv ? tv.service_name : audioDevice ? audioDevice.service_name : setup.service_name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='div'>
          <div className='my-3'>
            {tv ? `${tv.size}" ${tv.resolution}" ${tv.description}` : audioDevice ? audioDevice.description : setup.description}
          </div>
        </Card.Text>
        <Card.Text as='h3'>₱{tv ? tv.price : audioDevice ? audioDevice.price : setup.priceRange}</Card.Text>
        <Card.Text as='div'>
          <div className='my-3'>
            {tv ? `${tv.rating} stars (${tv.numReviews} reviews)` : audioDevice ? `${audioDevice.rating} stars (${audioDevice.numReviews} reviews)` : `${setup.rating} stars (${setup.numReviews} reviews)`}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
