import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { tvs, audioDevices, setups } from '../data'
import Product from '../components/Product'

function HomeScreen() {
  return (
    <div>
        <h1>TV & Home Entertainment Setup</h1>
        <Row>
            {tvs.map((tv) => (
                <Col key={tv.id} sm={12} md={6} lg={4}>
                    <Product tv={tv}/>
                </Col>
            ))}
        </Row>
        <Row>
            {audioDevices.map((device) => (
                <Col key={device.id} sm={12} md={6} lg={4}>
                    <Product audioDevice={device}/>
                </Col>
            ))}
        </Row>
        <Row>
            {setups.map((setup) => (
                <Col key={setup.id} sm={12} md={6} lg={4}>
                    <Product setup={setup}/>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen
