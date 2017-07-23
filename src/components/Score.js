import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../styles";

const StyledLabel = styled.div`font-weight: 700;`;

const StyledScore = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgb(${colors.white});
  margin: 50px 0;
`;

const Score = ({ label, score, ...props }) =>
  <StyledScore {...props}>
    <StyledLabel>{`${label} Score: `}</StyledLabel>
    {score}
  </StyledScore>;

Score.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};

export default Score;
