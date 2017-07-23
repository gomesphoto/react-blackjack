import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "./Card";
import { colors } from "./styles";

const StyledCardHand = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
`;

const CardHand = ({ cards, ...props }) =>
  <StyledCardHand {...props}>
    {cards.map(card => <Card />)}
  </StyledCardHand>;

CardHand.propTypes = {
  cards: PropTypes.array.isRequired
};

export default CardHand;
