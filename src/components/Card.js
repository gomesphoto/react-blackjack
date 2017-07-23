import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../styles";

const StyledCard = styled.div`
  border: 1px solid rgb(${colors.black});
  height: 160px;
  width: 110px;
  background: rgb(${colors.white});
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = ({ card, ...props }) =>
  <StyledCard {...props}>
    <span>
      {card.face}
    </span>
  </StyledCard>;

Card.propTypes = {
  card: PropTypes.array.isRequired
};

export default Card;
