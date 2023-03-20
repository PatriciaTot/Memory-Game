import React from 'react';

import "../assets/style/infoZone.css";

export default class InfoZone extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="infoZone">
                {this.props.reste != 0 ? <div className="remaining"> encore {this.props.reste} paires </div> : <div className="remaining"> Gagné </div> }
                <div className="last"> {this.props.last} </div>
                <div className="flips">{this.props.essais} essais</div>
            </div>
        );
    }
}
