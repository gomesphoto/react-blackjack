import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../styles";

const StyledMessage = styled.div`
  font-weight: 700;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: : ${({ show }) => (show ? "visible" : "hidden")};
`;

const StyledResult = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  padding: 20px;
  color: rgb(${colors.white});
  background: rgb(${colors.lightGrey});
  background-color: ${({ result, show }) => {
    if (!show) {
      return `rgb(${colors.white})`;
    } else if (result === "WIN") {
      return `rgba(${colors.green}, 0.5)`;
    } else if (result === "DRAW") {
      return `rgba(${colors.blue}, 0.5)`;
    } else {
      return `rgba(${colors.red}, 0.5)`;
    }
  }};
`;

const getResultMessage = (dealer, player) => {
  if (player > dealer && player <= 21) {
    return "WIN";
  } else if (player === dealer && player <= 21) {
    return "DRAW";
  } else {
    return "LOOSE";
  }
};

const Result = ({ dealer, player, show, ...props }) =>
  <StyledResult result={getResultMessage(dealer, player)} show={show} {...props}>
    <StyledMessage show={show}>
      {getResultMessage(dealer, player)}
    </StyledMessage>
  </StyledResult>;

Result.propTypes = {
  dealer: PropTypes.number.isRequired,
  player: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired
};

export default Result;
