import React from 'react';

import "../assets/style/controls.css";
import { cardData } from "../data/cardData";

export default class InfoZone extends React.Component {

    constructor(props) {
        super(props);
        this.state = { paire : "4", play : "Jouer"};
        this.handleChange = this.handleChange.bind(this);
    }


    play() {
      if (this.state.play == "Jouer") {
        this.setState( { play : "Stop" } );
      }
      else {
        this.setState( { play : "Jouer"} );
      }
    }

    handleChange(event) {
      this.setState( { paire : event.target.value } );
      this.props.handlePaires(this.state.paire);
    }

    render() {
        return (
            <div className="controls">
                <div>
                  <label> nb paires : </label>
                  <input type="number" name="pairs" min="0" max={cardData.length} onChange={this.handleChange.bind(this)} value={this.state.paire} className="pairs" />
                </div>

                <div> <button onClick={ () => {
                        this.props.startAndStop();
                        this.props.play();
                      }}> {this.state.play}
                    </button>
                </div>

                <div>
                  <span> {this.props.chrono} s </span>
                </div>

            </div>
        );
    }
}
