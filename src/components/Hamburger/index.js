import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

class Hamburger extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  render() {
    const { active } = this.state;
    const { ...props } = this.props;
    return (
      <Wrapper type="button" onClick={() => this.setState({ active: !active })}>
        <Box>
          <Inner active={active} {...props} />
        </Box>
      </Wrapper>
    );
  }
}
Hamburger.propTypes = {
  anim: PropTypes.oneOf(['slider', 'spin', 'spring'])
};
Hamburger.defaultProps = {
  anim: 'slider'
};

const Wrapper = styled.button`
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  :focus {
    outline: none;
  }
  :hover {
    opacity: 0.7;
  }
`;
const Box = styled.span`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
`;
const style = css`
  width: 40px;
  height: 4px;
  background-color: #000;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
`;
const animation = {
  slider: css`
    transform: translate3d(0, 10px, 0) rotate(45deg);
    :before {
      transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
      opacity: 0;
    }
    :after {
      transform: translate3d(0, -20px, 0) rotate(-90deg);
    }
  `,
  spring: css`
    transition-delay: 0.22s;
    background-color: transparent;
    :before {
      top: 0;
      transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
        transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 10px, 0) rotate(45deg);
    }
    :after {
      top: 0;
      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
        transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 10px, 0) rotate(-45deg);
    }
  `,
  spin: css`
    transform: rotate(225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    :before {
      top: 0;
      opacity: 0;
      transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
    }
    :after {
      bottom: 0;
      transform: rotate(-90deg);
      transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  `
};

const isActive = props => props.active && animation[props.anim];

const begin = {
  slider: css`
    top: 2px;
    :before {
      top: 10px;
      transition-property: transform, opacity;
      transition-timing-function: ease;
      transition-duration: 0.15s;
    }
    :after {
      top: 20px;
    }
  `,
  spring: css`
    top: 2px;
    transition: background-color 0s 0.13s linear;
    :before {
      top: 10px;
      transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
        transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    :after {
      top: 20px;
      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
        transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  `,
  spin: css`
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    :before {
      transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
    }
    :after {
      transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  `
};

const Inner = styled.span`
  display: block;
  top: 50%;
  margin-top: -2px;
  ${style};
  :before,
  :after {
    ${style};
    content: '';
    display: block;
  }
  :before {
    top: -10px;
  }
  :after {
    bottom: -10px;
  }
  ${props => begin[props.anim]};
  ${isActive};
`;
export default Hamburger;
