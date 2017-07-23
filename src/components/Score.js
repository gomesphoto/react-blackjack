import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { calculatePlayerScore } from "../helpers/cards";
import { colors } from "../styles";

const StyledLabel = styled.div`font-weight: 700;`;

const StyledScore = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgb(${colors.lightGrey});
  margin: 50px 0;
`;

const Score = ({ label, cards, ...props }) =>
  <StyledScore {...props}>
    <StyledLabel>{`${label} Score: `}</StyledLabel>
    {calculatePlayerScore(cards)}
  </StyledScore>;

Score.propTypes = {
  label: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired
};

export default Score;
