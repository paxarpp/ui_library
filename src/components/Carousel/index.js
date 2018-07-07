import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.images
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
    const { current } = this.state;
    this.setState({
      current: current.slice(-1, current.length).concat(current.slice(0, -1))
    });
  };
  render() {
    const { duration } = this.props;
    const { current } = this.state;
    return (
      <Wrapper>
        {current.map((img, indx) => (
          <Item key={indx} href={img.href} duration={duration}>
            <Img src={img.src} />
          </Item>
        ))}
      </Wrapper>
    );
  }
}
Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      href: PropTypes.string
    })
  ).isRequired,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Carousel.defaultProps = {
  duration: 1000,
  href: '#'
};
const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 600px;
  height: 400px;
  perspective: 500px;
  transform-style: preserve-3d;
  transform-origin: 0% 50%;
  box-sizing: border-box;
`;
const Item = styled.a`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  :nth-child(1) {
    z-index: -1;
    opacity: 0.6;
    visibility: visible;
    transform: translateX(157.5px) translateY(100px) translateX(200px) translateZ(-200px);
  }
  :nth-child(2) {
    transform: translateX(157.5px) translateY(100px) translateX(400px) translateZ(-400px);
    z-index: -2;
    opacity: 0.2;
    visibility: visible;
  }
  :nth-child(3) {
    transform: translateX(157.5px) translateY(100px) translateX(-400px) translateZ(-400px);
    z-index: -2;
    opacity: 0.2;
    visibility: visible;
  }
  :nth-child(4) {
    transform: translateX(157.5px) translateY(100px) translateX(-200px) translateZ(-200px);
    z-index: -1;
    opacity: 0.6;
    visibility: visible;
  }
  :nth-child(5) {
    transform: translateX(157.5px) translateY(100px) translateX(0px) translateX(0px) translateZ(0px);
    z-index: 0;
    opacity: 1;
    visibility: visible;
  }
`;
const Img = styled.img`
  width: 200px;
  height: 200px;
`;
export default Carousel;
