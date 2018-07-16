import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heightArea: 44,
      value: ''
    };
    this.area = React.createRef();
  }
  changeValue = () => {
    this.setState({
      value: this.area.current.value,
      heightArea: this.area.current.scrollHeight < 44 ? 44 : this.area.current.scrollHeight
    });
  };
  render() {
    const { heightArea, value } = this.state;
    const { placeholder } = this.props;
    return (
      <Wrapper>
        <Textarea onChange={this.changeValue} innerRef={this.area} heightArea={heightArea} />
        <LabelWrap value={value}>{placeholder}</LabelWrap>
      </Wrapper>
    );
  }
}
Form.propTypes = {
  placeholder: PropTypes.string
};
const Wrapper = styled.div`
  position: relative;
`;
const Textarea = styled.textarea`
  height: ${({ heightArea }) => heightArea}px;
  box-sizing: border-box;
  display: block;
  width: 100%;
  resize: none;
  overflow: hidden;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  font-size: 1.2rem;
  margin: 0 0 8px 0;
  padding: 18px 0 0 0;
  box-shadow: none;
  transition: box-shadow 0.3s, border 0.3s;
  :disabled {
    border-bottom: 1px dotted rgba(0, 0, 0, 0.42);
  }
  :disabled + label {
    color: rgba(0, 0, 0, 0.42);
  }
  :focus + label {
    top: 0;
    font-size: 0.7rem;
    color: #26a69a;
  }
  :focus {
    border-bottom: 1px solid #26a69a;
    box-shadow: 0 1px 0 0 #26a69a;
  }
`;
const LabelWrap = styled.label`
  position: absolute;
  top: ${props => (props.value ? '0' : '1rem')};
  font-size: ${props => (props.value ? '0.7rem' : '1rem')};
  left: 0;
  color: #9e9e9e;
  transition: all 0.3s;
`;
export default Form;
