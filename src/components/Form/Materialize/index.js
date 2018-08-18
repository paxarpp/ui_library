import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Primary } from '../../Button';
import { Input } from '../../Input';
import TextArea from '../../TextArea';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  handler = e => {
    e.preventDefault();
    this.props.formValue({ value: this.state });
  };

  valueState = data => {
    this.setState({
      [data.fieldName]: data.value,
      [`${data.fieldName}_correct`]: data.correct
    });
  };

  render() {
    return (
      <Wrapper>
        <Head>Login to your account</Head>
        <form>
          <Input
            type="text"
            placeholder="Full Name"
            regexp={/^[а-яА-Я]{1,20} [а-яА-Я]{1,20}$/}
            data-field-name={'full_Name'}
            handler={this.valueState}
          />
          <Input
            type="email"
            placeholder="Email"
            regexp={/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}
            data-field-name={'email'}
            handler={this.valueState}
          />
          <Input
            type="url"
            placeholder="Website"
            regexp={/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/}
            data-field-name={'url'}
            handler={this.valueState}
          />
          <TextArea placeholder="Message" type="message" data-field-name={'message'} handler={this.valueState} />
          <Primary bottom handlerClick={this.handler}>
            Send Message
          </Primary>
        </form>
      </Wrapper>
    );
  }
}
Form.propTypes = {
  formValue: PropTypes.func.isRequired
};

const Wrapper = styled.div`
  font-family: 'Open Sans Condensed', arial, sans;
  width: 500px;
  padding: 30px;
  background: #ffffff;
  margin: 50px auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
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

export default Form;
