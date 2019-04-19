import React, { Component } from 'react';
import logo from './images/retard.jpg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import svino from './audio/svino.mp3';

class App extends Component {

  loud = (evt) => {
    console.log(evt.target.name);
    let sv = new Audio(svino);
    sv.play();
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="text-center">ΡΩΤΑ ΤΟΝ ΧΡΗΣΤΟ</h1>


        </header>
         <button name="svino" type="button" className="btn btn-primary btn-block"
           onClick={this.loud}>
           Πως τα βλέπεις τα πράγματα?
         </button>
         <button name="svino" type="button" className="btn btn-secondary btn-block"
           onClick={this.loud}>
           Θα ενισχύσεις οικονομικά το ΚΚΕ?
         </button>
         <button name="svino" type="button" className="btn btn-primary btn-block"
           onClick={this.loud}>
           Είδες που σου λέγαμε για τις συλλογικές συμβάσεις?
         </button>
         <button name="svino" type="button" className="btn btn-secondary btn-block"
           onClick={this.loud}>
           Πότε πιστέυεις θα καταστραφεί ο κόσμος?
         </button>

      </div>
    );
  }
}

export default App;
