import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import Over15 from './Over15';
import Under10 from './Under10';
import Under15 from './Under15';

const MainGame = ({PLAYERSAU10,PLAYERSBU10,PLAYERSAU15,PLAYERSBU15,PLAYERSBO15,PLAYERSAO15}) => {
    return (
        <Row className='MainGame'>
            <Col>
                <div className='Game text-center'>
                    <label>Under 10</label>
                </div>
                <div className='Game'>
                    <Under10 initialPlayers={PLAYERSAU10} initialPlayers2={PLAYERSBU10}/>
                </div>                
            </Col>
            <Col>
                <div className='Game text-center'>
                    <label>Under 15</label>
                </div>
                <div className='Game'>
                    <Under15 initialPlayers={PLAYERSAU15} initialPlayers2={PLAYERSBU15}/>   
                </div>
            </Col>
            <Col>
                <div className='Game text-center'>
                    <label>Over 15</label>
                </div>
                <div className='Game'>
                    <Over15 initialPlayers={PLAYERSAO15} initialPlayers2={PLAYERSBO15}/>
                </div>
            </Col>
        </Row>
    )
}

export default MainGame




