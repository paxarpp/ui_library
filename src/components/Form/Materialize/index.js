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
      [data.fieldName]: { value: data.value, correct: data.correct }
    });
  };

  isDisable = () => {
    let correct = true;
    for (const key in this.state) {
      if (this.state[key].correct === false) {
        correct = false;
      }
    }
    return !correct;
  };

  render() {
    const disable = this.isDisable();
    return (
      <Wrapper>
        <Head>Login to your account</Head>
        <form>
          {this.props.field.map(
            elem =>
              elem.name === 'input' ? (
                <Input
                  type={elem.type}
                  placeholder={elem.placeholder}
                  regexp={elem.regexp || null}
                  data-field-name={elem.data_field}
                  handler={this.valueState}
                />
              ) : (
                <TextArea
                  type={elem.type}
                  placeholder={elem.placeholder}
                  regexp={elem.regexp || null}
                  data-field-name={elem.data_field}
                  handler={this.valueState}
                />
              )
          )}
          <Primary bottom handlerClick={this.handler} disable={disable}>
            Send Message
          </Primary>
        </form>
      </Wrapper>
    );
  }
}
Form.propTypes = {
  formValue: PropTypes.func.isRequired,
  field: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      regexp: (props, propName, componentName) => {
        if (props[propName] && !/.+/.test(props[propName])) {
          return new Error(`Invalid prop ${propName} supplied to ${componentName} Validation failed.`);
        }
      },
      data_field: PropTypes.string.isRequired
    })
  ).isRequired
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
