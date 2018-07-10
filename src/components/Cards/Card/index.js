import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = ({ bgColor = 'white', textColor = 'black', children }) => (
  <Wrap bgColor={bgColor}>
    <Span color={textColor}>{children}</Span>
  </Wrap>
);

Card.propTypes = {
  children: PropTypes.any,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
};

const Wrap = styled.div`
  background-color: ${props => props.bgColor};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.25s;
  padding: 24px;
  margin: 0.5rem 0 1rem 0;
  border-radius: 2px;
`;
const Span = styled.span`
  color: ${props => props.color};
`;

export default Card;
