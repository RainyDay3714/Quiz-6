import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { tvs, audioDevices, setups } from '../data'
import Product from '../components/Product'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function HomeScreen() {
    const [tvs, setTvs] = useState([])
    useEffect(() => {
        async function fetchTvs() {
            const { data } = await axios.get('http://127.0.0.1:8000/api/tvs/')
                setTvs(data)
        }
        fetchTvs()
    }, [])

    const [audioDevices, setAudioDevices] = useState([])
    useEffect(() => {
        async function fetchAudioDevices() {
            const { data } = await axios.get('http://127.0.0.1:8000/api/audio-devices/')
            setAudioDevices(data)
        }
        fetchAudioDevices()
    }, [])

    const [setups, setSetups] = useState([])
    useEffect(() => {
        async function fetchSetups() {
            const { data } = await axios.get('http://127.0.0.1:8000/api/setups/')
            setSetups(data)
        }
        fetchSetups()
    }, [])

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
