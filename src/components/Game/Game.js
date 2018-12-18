import React, { Component } from "react";

import Player from "../Player/Player";
import "./Game.css";

class Game extends Component {
  render() {
    return (
      <main className="game-main">
        <section className="game-background">
          <section className="gameplay-frame">
            <Player avatar="4" status="idle" />
          </section>
        </section>
      </main>
    );
  }
}

export default Game;
