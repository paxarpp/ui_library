import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrIndx: [
        ...Array(5)
          .fill(0)
          .map((_, indx) => indx)
      ]
    };
  }
  componentDidMount() {
    this.runInterval();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  runInterval = () => {
    this.interval = setInterval(this.step, +this.props.duration);
  };
  step = () => {
    const { arrIndx } = this.state;
    this.setState({
      arrIndx: arrIndx.slice(-1).concat(arrIndx.slice(0, -1))
    });
  };
  handler = x => () => {
    const { arrIndx } = this.state;
    let arr = arrIndx.slice();
    for (let i = 0; i < arrIndx[x]; i++) {
      arr = arr.slice(-1).concat(arr.slice(0, -1));
    }
    this.setState({
      arrIndx: arr
    });
    clearInterval(this.interval);
    this.runInterval();
  };
  render() {
    const { images, width, height } = this.props;
    const { arrIndx } = this.state;
    return (
      <Wrapper width={width} height={height}>
        {images.map((img, indx) => (
          <Link key={indx} index={arrIndx[indx]} onClick={this.handler(indx)}>
            <Img src={img.src} />
          </Link>
        ))}
      </Wrapper>
    );
  }
}
Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired
    })
  ).isRequired,
  duration: PropTypes.PropTypes.number,
  width: PropTypes.PropTypes.string,
  height: PropTypes.PropTypes.string
};
Carousel.defaultProps = {
  duration: 5000,
  width: '600px',
  height: '400px'
};
const Wrapper = styled.div`
  height: ${props => props.height};
  position: relative;
  width: ${props => props.width};
  overflow: hidden;
  perspective: 500px;
  transform-style: preserve-3d;
  transform-origin: 0% 50%;
  box-sizing: border-box;
`;
const isNumber0 = props =>
  props.index === 0 &&
  css`
    transform: translateX(205px) translateY(100px) translateX(0px) translateX(0px) translateZ(0px);
    z-index: 0;
    opacity: 1;
    visibility: visible;
  `;
const isNumber1 = props =>
  props.index === 1 &&
  css`
    z-index: -1;
    opacity: 0.6;
    visibility: visible;
    transform: translateX(205px) translateY(100px) translateX(200px) translateZ(-200px);
  `;
const isNumber2 = props =>
  props.index === 2 &&
  css`
    transform: translateX(205px) translateY(100px) translateX(400px) translateZ(-400px);
    z-index: -2;
    opacity: 0.2;
    visibility: visible;
  `;
const isNumber4 = props =>
  props.index === 4 &&
  css`
    transform: translateX(205px) translateY(100px) translateX(-200px) translateZ(-200px);
    z-index: -1;
    opacity: 0.6;
    visibility: visible;
  `;
const isNumber3 = props =>
  props.index === 3 &&
  css`
    transform: translateX(205px) translateY(100px) translateX(-400px) translateZ(-400px);
    z-index: -2;
    opacity: 0.2;
    visibility: visible;
  `;
const Link = styled.div`
  visibility: hidden;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s linear;
  ${isNumber0};
  ${isNumber1};
  ${isNumber2};
  ${isNumber3};
  ${isNumber4};
  :hover {
    cursor: pointer;
  }
`;
const Img = styled.img`
  width: 200px;
  height: 200px;
  border-style: none;
`;
export default Carousel;
