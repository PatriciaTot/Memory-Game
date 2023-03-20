import React from 'react';

/** importation de la feuille de style */
import "../assets/style/memory.css";

/** importations des composants */
import CardBoard from "./cardBoard.jsx";
import InfoZone from "./infoZone.jsx";
import Controls from "./controls.jsx";

/** les images */
import { cardData } from "../data/cardData";

/** mélange les cartes */
import { shuffle } from "../scripts/utils";


/*
 define root component
*/
export default class Memory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cards: [], paires : 4, last: "?", play : false, chrono : 0 };
        this.handleCard = this.handleCard.bind(this);
        this.preventClick = false;
        this.firstCard = null;
        this.essais = 0;
        this.showed = 0;
    }
    componentDidMount() {
        const selected = shuffle(cardData).slice(this.state.paires);
        const cards = shuffle([...selected, ...selected]).map((card, index) => { return { visible: false, id : index, ...card } });
        this.setState( { cards : shuffle(cards) } );
    }

    handleCard(id) {
        const cards = this.state.cards;
        const i = cards.findIndex( card => card.id === id);
        const clickedCard = cards[i];
        if (!this.preventClick && !clickedCard.visible) {
            cards[i].visible = true;
            this.setState({ cards: cards, last: clickedCard.description });
            if (this.firstCard == null) {
                this.essais++;
                this.firstCard = clickedCard;
            }
            else {
                this.preventClick = true;
                const timeoutID = window.setTimeout(() => {
                    const j = cards.findIndex(card => card.id === this.firstCard.id);
                    if (clickedCard.src !== this.firstCard.src) {
                        cards[i].visible = false;
                        cards[j].visible = false;
                    } else {
                        this.showed++;
                    }
                    this.setState({ cards: cards, last: "?" }, () => {
                        this.firstCard = null;
                        this.preventClick = false;
                        window.clearTimeout(timeoutID);
                    })

                }, 1000)
            }
        }
    }

    startAndStop() {
      this.setState( { play : this.state.play ? false : true} );
      if ( !this.state.play && this.state.chrono == 0) {
        this.componentDidMount();
      }
      if ( !this.state.play) {
          chrono = setInterval( () => {
            this.setState( { chrono : this.state.chrono + 1});
          }, 1000)
      }
      else {
        clearInterval(chrono);
      }
    }

    handlePaires(n) {
      this.setState( { paires : n } );
    }

    render() {
        return (
            <div>
                <Controls paires={this.handlePaires.bind(this)} startAndStop={this.startAndStop.bind(this)} chrono={this.state.chrono}/>
                <CardBoard cards={this.state.cards} onCardClick={this.handleCard} />
                <InfoZone reste={this.state.paires - this.showed} last={this.state.last} essais={this.essais} />
            </div>
        );
    }
}
