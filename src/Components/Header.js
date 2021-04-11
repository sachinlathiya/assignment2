import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Blink from 'react-blink-text';
import moment from "moment";

function Header(props) {

 
    return (
      <div>
      <table className="headg text-center">
        <tbody>
          <tr>
              <td  colSpan="1"><span className="dateheading">Start Date:</span><br></br>{props.startdate}</td>
              <td  colSpan="2"><Blink color='lightgreen' text='LIVE' fontSize='16'>LIVE</Blink></td>
              <td  colSpan="1"><span className="dateheading">End Date:</span><br></br>{props.enddate}</td>
          </tr> 
        </tbody>
        </table>
        
      <div className="header">
        
        <Stats players={props.players} />
        <h1>{props.title}</h1>
        <table className="stats">
          <tbody>
            <tr>
              <td>Remaining Time:</td>
              <td>{props.diff} Seconds</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    );
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
  };

export default Header;