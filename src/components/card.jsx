import React from 'react';

/** importation des feuilles de style */
import "../assets/style/card.css";

/** importation de l'image inconnue */
import { UNKNOWN_SRC } from '../data/cardData';

export default class Card extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); /* lie la méthode au composant */
  }

  handleClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
          <div className="card" onClick = { this.handleClick } >
            { this.props.visible ? <img src={this.props.src} alt="" /> : < img src={UNKNOWN_SRC} alt="" />}
          </div>
    );
  }

}
