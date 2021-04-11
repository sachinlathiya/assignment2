import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NavBar from './Components/NavBar';
  

import Game1 from './Game/Game1';
import Game2 from './Game/Game2';
import Game3 from './Game/Game3';
import Game4 from './Game/Game4';
import Game5 from './Game/Game5';

const App = () => {
    return (
      <Container fluid>
        <Row>
          <Col>
            <ul>
            <Link to="/">Game 1</Link>
            <Link to="/game2">Game 2</Link>
            <Link to="/game3">Game 3</Link>
            <Link to="/game4">Game 4</Link>
            <Link to="/game5">Game 5</Link>
            </ul>
          </Col>
        </Row>
        

        <Switch>
          <Route path="/game2" component={Game2} />
          <Route path="/game3" component={Game3} />
          <Route path="/game4" component={Game4} />
          <Route path="/game5" component={Game5} />
          <Route path="/" exact component={Game1} />
        </Switch>
        </Container>
    )
}

export default App;
