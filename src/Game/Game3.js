import React from 'react'
import MainGame from '../Categories/MainGame';

import { Row,Col } from 'react-bootstrap';
let PLAYERSAU10 = [
    {
      name: "PLAYER 1",
      score: 31,
      id: 1
    },
  ];
  
let PLAYERSBU10 = [
    {
      name: "PLAYER 1",
      score: 12,
      id: 1  
    },
  ];

let PLAYERSAU15 = [
    {
      name: "PLAYER 1",
      score: 5,
      id: 1
    },
  ];
  
let PLAYERSBU15 = [
    {
      name: "PLAYER 1",
      score: 3,
      id: 1  
    },
  ];

let PLAYERSAO15 = [
    {
      name: "PLAYER 1",
      score: 2,
      id: 1
    },
  ];
  
let PLAYERSBO15 = [
    {
      name: "PLAYER 1",
      score: 23,
      id: 1  
    },
  ];



const Game3 = () => {
    return (
      <Row>
      <Col className='text-center'>
        <label className='GameScore'>GAME 3</label>
      </Col>            
        <MainGame 
            PLAYERSAU10={PLAYERSAU10}
            PLAYERSBU10={PLAYERSBU10}
            PLAYERSAU15={PLAYERSAU15}
            PLAYERSBU15={PLAYERSBU15}
            PLAYERSAO15={PLAYERSAO15}
            PLAYERSBO15={PLAYERSBO15} />
    </Row>
    )
}

export default Game3;