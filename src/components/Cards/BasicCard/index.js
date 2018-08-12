import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BasicCard = ({ bgColor = 'white', textColor = 'black', header, children }) => (
  <Wrap bgColor={bgColor}>
    <Content color={textColor}>
      <Title color={textColor}>{header}</Title>
      <p>{children}</p>
    </Content>
    <CardAction>
      <a href="#">This is a link</a>
      <a href="#">This is a link</a>
    </CardAction>
  </Wrap>
);

BasicCard.propTypes = {
  /** message on card */
  children: PropTypes.any,
  /** header card */
  header: PropTypes.string,
  /** background card color */
  bgColor: PropTypes.string,
  /** color text on card */
  textColor: PropTypes.string
};

const Wrap = styled.div`
  background-color: ${props => props.bgColor};
  position: relative;
  margin: 0.5rem 0 1rem 0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.25s;
  border-radius: 2px;
`;

const Content = styled.div`
  color: ${props => props.color};
  padding: 24px;
  border-radius: 0 0 2px 2px;
  p {
    margin: 0;
  }
`;

const CardAction = styled.div`
  background-color: inherit;
  border-top: 1px solid rgba(160, 160, 160, 0.2);
  position: relative;
  padding: 16px 24px;
  :last-child {
    border-radius: 0 0 2px 2px;
  }
  a {
    color: #ffab40;
    margin-right: 24px;
    transition: color 0.3s ease;
    text-transform: uppercase;
  }
`;

const Title = styled.span`
  color: ${props => props.color};
  font-size: 24px;
  font-weight: 300;
  max-width: 100%;
  display: block;
  line-height: 32px;
  margin-bottom: 8px;
`;

export default BasicCard;
