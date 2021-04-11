import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Components/Header';
import Player from '../Components/Player';
import AddPlayerForm from '../Components/AddPlayerForm';
import moment from "moment";

var nextID = 4;
var nextID2 = 4;

class Under10 extends Component {
  constructor(props) {
    super(props);
    this.state = { players: this.props.initialPlayers, players2:this.props.initialPlayers2 };
    this.onPlayerAdd = this.onPlayerAdd.bind(this);
    this.onRemovePlayer = this.onRemovePlayer.bind(this);

    this.onPlayerAddB = this.onPlayerAddB.bind(this);
    this.onRemovePlayerB = this.onRemovePlayerB.bind(this);
  }

  onScoreChange(index, delta) {
    this.state.players[index].score += delta;
    this.setState(this.state);
  }

  onPlayerAdd(name) {
    console.log('Player added', name);
    this.state.players.push({
      name: name,
      score: 0,
      id: nextID
    });
    this.setState(this.state);  // updating the state
    nextID = nextID + 1;
  }

  onRemovePlayer(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);  // update the state
  }

  //FOR TEAM B
  onScoreChangeB(index, delta) {
    this.state.players2[index].score += delta;
    this.setState(this.state);
  }

  onPlayerAddB(name) {
    console.log('Player added', name);
    this.state.players2.push({
      name: name,
      score: 0,
      id: nextID2
    });
    this.setState(this.state);  // updating the state
    nextID2 = nextID2 + 1;
  }

  onRemovePlayerB(index) {
    this.state.players2.splice(index, 1);
    this.setState(this.state);  // update the state
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title1} diff={this.props.diff} startdate={this.props.astartdate} enddate={this.props.aenddate} players={this.state.players} />

        <div className="players">
          {this.state.players.map(function (player, index) {
            return (
              <Player
                onScoreChange={function (delta) { this.onScoreChange(index, delta) }.bind(this)}
                onRemove={function () { this.onRemovePlayer(index) }.bind(this)}
                name={player.name}
                score={player.score}
                key={player.id} />
            );
          }.bind(this))}
        </div>
        <AddPlayerForm onAdd={this.onPlayerAdd} />
        <hr
        style={{
            color: 'white',
            backgroundColor: 'white',
            height: 5
        }}
        />
        <Header title={this.props.title2} diff={this.props.diffb} startdate={this.props.bstartdate} enddate={this.props.benddate} players={this.state.players2} />
        <div className="players">
          {this.state.players2.map(function (player, index) {
            return (
              <Player
                onScoreChange={function (delta) { this.onScoreChangeB(index, delta) }.bind(this)}
                onRemove={function () { this.onRemovePlayerB(index) }.bind(this)}
                name={player.name}
                score={player.score}
                key={player.id} />
            );
          }.bind(this))}
        </div>
        <AddPlayerForm onAdd={this.onPlayerAddB} />

      </div>

    );
  }
}

Under10.propTypes = {
  title: PropTypes.string,
  initialPlayers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired,
  initialPlayers2: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired 
};

Under10.defaultProps = {  
  title1: "TEAM A",
  title2: "TEAM B",
  astartdate:  moment().format("DD-MM-YYYY hh:mm:ss"),
  aenddate: moment().add(0, 'hours').format("DD-MM-YYYY hh:mm:ss"),
  bstartdate:  moment().format("DD-MM-YYYY hh:mm:ss"),
  benddate: moment().add(2, 'hours').format("DD-MM-YYYY hh:mm:ss"),
  diff: moment().add(0, 'hours').diff(moment(),'seconds'),
  diffb: moment().add(2, 'hours').diff(moment(),'seconds')
};

export default Under10;