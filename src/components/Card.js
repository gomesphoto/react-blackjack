import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../styles";
import clubs from '../assets/clubs.png';
import diamond from '../assets/diamond.png';
import heart from '../assets/heart.png';
import spade from '../assets/spade.png';

const StyledCard = styled.div`
  border: 1px solid rgb(${colors.black});
  height: 160px;
  width: 110px;
  background: rgb(${colors.white});
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSuit = styled.img`
  width: 50%;
  padding: 50%:
`;

const StyledValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${({ color }) => color ? `rgb(${colors[color]})` : `rgb(${colors.black})`};
`;

const getSuitAsset = (suit) => {
  switch (suit) {
    case "clubs":
      return clubs;
    case "diamond":
      return diamond;
    case "heart":
      return heart;
    case "spade":
      return spade;
    default:
      return null;
  }
}

const Card = ({ card, ...props }) =>
  <StyledCard {...props}>
    <StyledValue color={card.color}>
      {card.value}
    </StyledValue>
    <StyledSuit src={getSuitAsset(card.suit)} alt={card.suit} />
  </StyledCard>;

Card.propTypes = {
  card: PropTypes.array.isRequired
};

export default Card;
