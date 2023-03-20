import React from 'react';
import '../assets/style/cardBoard.css';

/* importation du composant card */
import Card from './card.jsx';

export default class CardBoard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let cards = this.props.cards.map( card => <Card {...card} onClick={this.props.onCardClick} key={card.id} />);
    return (
          <div className="cardboard">
            {cards}
          </div>
    );
  }

}
