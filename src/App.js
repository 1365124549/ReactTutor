import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventDemo from './button-events/EventDemo';
import { simpleAction } from './redux/actions/simpleAction';
import Nav from './nav/Nav';
import './App.css';

const div2 = {
    color: "lightgreen"
}
class App extends Component {
  render() {
    console.log(this.props);
    return (

      <div className="App">
          <h1 style={div2}> I am in the ReactTutor</h1>

       <EventDemo
        myName = 'Jason'
       />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 })


const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
