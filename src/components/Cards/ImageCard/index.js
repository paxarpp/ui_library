import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageCard = ({ bgColor = 'white', textColor = 'black', header, url, children }) => (
  <Wrap bgColor={bgColor}>
    <CardImg>
      <img src={url} />
      <Title>{header}</Title>
    </CardImg>
    <Content color={textColor}>
      <p>{children}</p>
    </Content>
    <CardAction>
      <a href="#">This is a link</a>
    </CardAction>
  </Wrap>
);

ImageCard.propTypes = {
  children: PropTypes.any,
  header: PropTypes.string,
  url: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
};

const Wrap = styled.div`
  background-color: ${props => props.bgColor};
  position: relative;
  margin: 0.5rem 0 1rem 0;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition: -webkit-box-shadow 0.25s;
  transition: -webkit-box-shadow 0.25s;
  transition: box-shadow 0.25s;
  transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
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
const Title = styled.span`
  color: #fff;
  font-size: 24px;
  font-weight: 300;
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 100%;
  padding: 24px;
  display: block;
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
    -webkit-transition: color 0.3s ease;
    transition: color 0.3s ease;
    text-transform: uppercase;
  }
`;
const CardImg = styled.div`
  overflow: hidden;
  position: relative;
  img {
    display: block;
    border-radius: 2px 2px 0 0;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
  }
`;

export default ImageCard;
