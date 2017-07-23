import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "./styles";

const StyledButton = styled.div`
  background-color: ${({ type }) => {
    if (type === "danger") {
      return `rgba(${colors.red}, 0.5)`;
    } else if (type === "success") {
      return `rgba(${colors.green}, 0.5)`;
    } else {
      return `rgba(${colors.blue}, 0.5)`;
    }
  }};
  border: 1px solid;
  border-color: ${({ type }) => {
    if (type === "danger") {
      return `rgba(${colors.red}, 0.5)`;
    } else if (type === "success") {
      return `rgba(${colors.green}, 0.5)`;
    } else {
      return `rgba(${colors.blue}, 0.5)`;
    }
  }};
  border-radius: 50%;
  color: rgb(${colors.white});
`;

const Button = ({ label, type, ...props }) =>
  <StyledButton type={type} {...props}>
    {label}
  </StyledButton>;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Button;
