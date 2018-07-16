import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heightArea: 44
    };
    this.area = React.createRef();
  }

  render() {
    const { heightArea } = this.state;
    return (
      <Wrapper>
        <Head>Login to your account</Head>
        <form>
          <input type="text" name="field1" placeholder="Full Name" />
          <input type="email" name="field2" placeholder="Email" />
          <input type="url" name="field3" placeholder="Website" />
          <Textarea
            placeholder="Message"
            onChange={() =>
              this.setState({ heightArea: this.area.current.scrollHeight < 44 ? 44 : this.area.current.scrollHeight })
            }
            innerRef={this.area}
            heightArea={heightArea}
          />
          <input type="button" value="Send Message" />
        </form>
      </Wrapper>
    );
  }
}
Form.propTypes = {};

const Wrapper = styled.div`
  font-family: 'Open Sans Condensed', arial, sans;
  width: 500px;
  padding: 30px;
  background: #ffffff;
  margin: 50px auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  input[type='text'],
  input[type='date'],
  input[type='datetime'],
  input[type='email'],
  input[type='number'],
  input[type='search'],
  input[type='time'],
  input[type='url'],
  input[type='password'],
  textarea {
    box-sizing: border-box;
    outline: none;
    display: block;
    width: 100%;
    padding: 7px;
    border: none;
    border-bottom: 1px solid #ddd;
    background: transparent;
    margin-bottom: 10px;
    font: 16px Arial, Helvetica, sans-serif;
  }
  textarea {
    resize: none;
    overflow: hidden;
  }
  input[type='button'],
  input[type='submit'] {
    box-shadow: inset 0px 1px 0px 0px #45d6d6;
    background-color: #2cbbbb;
    border: 1px solid #27a0a0;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 14px;
    padding: 8px 18px;
    text-decoration: none;
    text-transform: uppercase;
  }
  input[type='button']:hover,
  input[type='submit']:hover {
    background: linear-gradient(to bottom, #34caca 5%, #30c9c9 100%);
    background-color: #34caca;
  }
`;
const Head = styled.div`
  background: #4d4d4d;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', sans-serif;
  color: #797979;
  font-size: 18px;
  font-weight: 100;
  padding: 20px;
  margin: -30px -30px 30px -30px;
`;
const Textarea = styled.textarea`
  height: ${({ heightArea }) => heightArea}px;
`;
export default Form;
