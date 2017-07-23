import React, { Component } from "react";
import styled from "styled-components";
import CardHand from "./components/CardHand";
import Score from "./components/Score";
import Button from "./components/Button";
import { newShuffledPokerDeck, getRandomFromArray } from "./helpers/cards";
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
  flex-direction: column;
`;

const Row = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: row;
`;

const ControlsRow = styled(Row)`
  justify-content: space-around;
`;

class App extends Component {
  state = {
    deckCards: newShuffledPokerDeck(),
    dealerCards: [],
    playerCards: []
  };
  onHitPlayer = () => {
    console.log("prevState", this.state.playerCards);
    console.log("newState", [
      ...this.state.playerCards,
      getRandomFromArray(this.state.deckCards)
    ]);
    this.setState({
      playerCards: [
        ...this.state.playerCards,
        getRandomFromArray(this.state.deckCards)
      ]
    });
  };
  onHitDealer = () => {
    console.log("prevState", this.state.dealerCards);
    console.log("newState", [
      ...this.state.dealerCards,
      getRandomFromArray(this.state.deckCards)
    ]);
    this.setState({
      dealerCards: [
        ...this.state.dealerCards,
        getRandomFromArray(this.state.deckCards)
      ]
    });
  };
  onNewDeal = () => {
    this.setState({
      deckCards: newShuffledPokerDeck(),
      dealerCards: [],
      playerCards: []
    });
  };
  render() {
    return (
      <Wrapper>
        <Column>
          <Row>
            <CardHand cards={this.state.dealerCards} />
          </Row>
          <Row>
            <Score label={"Dealer"} cards={this.state.dealerCards} />
            <Score label={"Player"} cards={this.state.playerCards} />
          </Row>
          <ControlsRow>
            <Button label={"Deal"} type={"info"} onClick={this.onNewDeal} />
            <Button label={"Hit"} type={"danger"} onClick={this.onHitPlayer} />
            <Button
              label={"Stand"}
              type={"success"}
              onClick={this.onHitDealer}
            />
          </ControlsRow>
          <Row>
            <CardHand cards={this.state.playerCards} />
          </Row>
        </Column>
      </Wrapper>
    );
  }
}

export default App;
