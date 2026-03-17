import React from 'react'
import { Row } from 'react-bootstrap'
import { tvs, audioDevices, setups } from '../data'

function HomeScreen() {
  return (
    <div>
        <h1>Welcome to our TV & Home Entertainment Setup website! This site is designed to help you create the perfect entertainment experience at home. Whether you're setting up a new TV, improving your sound system, or looking for simple and affordable ideas, we’ve got you covered. Our guides and tips are easy to follow, making it simple for anyone to build a comfortable and enjoyable setup for watching movies, playing games, or streaming your favorite shows.</h1>
        <Row>
            {tvs.map((tv) => (
                <col key={tv.id}>
                    <h2>{tv.name}</h2>
                </col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen
