import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "./Card";
import { colors } from "./styles";
import { calculatePlayerScore } from "./helpers/cards";

const StyledScore = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
`;

const Score = ({ cards, ...props }) =>
  <StyledScore {...props}>
    {calculatePlayerScore(cards)}
  </StyledScore>;

Score.propTypes = {
  cards: PropTypes.array.isRequired
};

export default Score;
