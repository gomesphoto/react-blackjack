import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "./Card";

const StyledCardHand = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  margin: 20px 0;
`;

const CardHand = ({ cards, ...props }) =>
  <StyledCardHand {...props}>
    {cards.map(card => <Card key={card.face} card={card} />)}
  </StyledCardHand>;

CardHand.propTypes = {
  cards: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
};

export default CardHand;
