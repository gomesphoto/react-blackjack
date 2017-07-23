import React, { Component } from "react";
import styled from "styled-components";
import CardHand from "./components/CardHand";
import Button from "./components/Button";
import { newShuffledPokerDeck } from "./helpers/cards";
import { colors } from "./styles";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(${colors.black});
`;

const Column = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
`;

class App extends Component {
  state = {
    deck: newShuffledPokerDeck(),
    dealerCards: [],
    playerCards: []
  };
  render() {
    return (
      <Wrapper>
        <Column>
          <div>
            <CardHand cards={this.state.dealerCards} />
          </div>
          <div>
            <Score cards={this.state.dealerCards} />
            <Score cards={this.state.playerCards} />
          </div>
          <div>
            <Button label={"Deal"} type={"info"} />
            <Button label={"Hit"} type={"danger"} />
            <Button label={"Stand"} type={"success"} />
          </div>
          <div>
            <CardHand cards={this.state.playerCards} />
          </div>
        </Column>
      </Wrapper>
    );
  }
}

export default App;
