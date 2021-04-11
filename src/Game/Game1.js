import React from 'react'
import { Row,Col } from 'react-bootstrap';
import MainGame from '../Categories/MainGame';

let PLAYERSAU10 = [
    {
      name: "A Player 1",
      score: 21,
      id: 1
    },
    {
      name: "A Player 2",
      score: 3,
      id: 2
    },
    {
      name: "A Player 3",
      score: 5,
      id: 3
    },
  ];
  
let PLAYERSBU10 = [
    {
      name: "B Player 1",
      score: 25,
      id: 1  
    },
  ];

let PLAYERSAU15 = [
  {
    name: "A Player 1",
    score: 31,
    id: 1
  },
  {
    name: "A Player 2",
    score: 24,
    id: 2
  },
  ];
  
let PLAYERSBU15 = [
  {
    name: "B Player 1",
    score: 29,
    id: 1  
  },
  {
    name: "B Player 2",
    score: 11,
    id: 1  
  },
  ];

let PLAYERSAO15 = [
  {
    name: "A Player 1",
    score: 4,
    id: 1
  },
  ];
  
let PLAYERSBO15 = [
  {
    name: "B Player 1",
    score: 21,
    id: 1
  },
  {
    name: "B Player 2",
    score: 3,
    id: 2
  },
  {
    name: "B Player 3",
    score: 5,
    id: 3
  },
  ];



const Game1 = () => {
    return (
        <Row>
          <Col className='text-center'>
            <label className='GameScore'>GAME 1</label>
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

export default Game1;