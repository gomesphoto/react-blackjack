import React, { Component } from "react";
import styled from "styled-components";
import CardHand from "./components/CardHand";
import Score from "./components/Score";
import Result from "./components/Result";
import Button from "./components/Button";
import {
  newShuffledPokerDeck,
  getRandomFromArray,
  calculatePlayerScore
} from "./helpers/cards";
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
    deck: [],
    dealerCards: [],
    dealerScore: 0,
    playerCards: [],
    playerScore: 0,
    showResult: false
  };

  componentDidMount() {
    this.onDealNew();
  }

  onDealNew = () => {
    const newDeck = newShuffledPokerDeck();
    const newDealerCards = [getRandomFromArray(newDeck)];
    const newPlayerCards = [
      getRandomFromArray(newDeck),
      getRandomFromArray(newDeck)
    ];
    this.setState({
      showResult: false,
      deck: newDeck,
      dealerCards: newDealerCards,
      dealerScore: calculatePlayerScore(newDealerCards),
      playerCards: newPlayerCards,
      playerScore: calculatePlayerScore(newPlayerCards)
    });
  };

  onHitPlayer = () => {
    const newPlayerCards = [
      ...this.state.playerCards,
      getRandomFromArray(this.state.deck)
    ];
    this.setState({
      showResult: true,
      playerCards: newPlayerCards,
      playerScore: calculatePlayerScore(newPlayerCards)
    });
  };

  onHitDealer = () => {
    const newDealerCards = [
      ...this.state.dealerCards,
      getRandomFromArray(this.state.deck)
    ];
    this.setState({
      showResult: true,
      dealerCards: newDealerCards,
      dealerScore: calculatePlayerScore(newDealerCards),
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
            <Score label={"Dealer"} score={this.state.dealerScore} />
            <Result
              show={this.state.showResult}
              dealer={this.state.dealerScore}
              player={this.state.playerScore}
            />
            <Score label={"Player"} score={this.state.playerScore} />
          </Row>
          <ControlsRow>
            <Button label={"Deal"} type={"info"} onClick={this.onDealNew} />
            <Button label={"Hit"} type={"danger"} onClick={this.onHitPlayer} />
            <Button label={"Stick"} type={"success"} onClick={this.onHitDealer} />
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
