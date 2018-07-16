import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Head>
          Sign Up Now!<span>Sign up and tell us what you think of the site!</span>
        </Head>
        <form>
          <Section>
            <span>1</span>First Name &amp; Address
          </Section>
          <InnerWrap>
            <Label>
              Your Full Name <input type="text" name="field1" />
            </Label>
            <Label>
              Address <textarea name="field2" />
            </Label>
          </InnerWrap>
          <Section>
            <span>2</span>Email &amp; Phone
          </Section>
          <InnerWrap>
            <Label>
              Email Address <input type="email" name="field3" />
            </Label>
            <Label>
              Phone Number <input type="text" name="field4" />
            </Label>
          </InnerWrap>
          <Section>
            <span>3</span>Passwords
          </Section>
          <InnerWrap>
            <Label>
              Password <input type="password" name="field5" />
            </Label>
            <Label>
              Confirm Password <input type="password" name="field6" />
            </Label>
          </InnerWrap>
          <ButtonSection>
            <input type="submit" name="Sign Up" />
            <PrivacyPolicy>
              <input type="checkbox" name="field7" />
              You agree to our Terms and Policy.
            </PrivacyPolicy>
          </ButtonSection>
        </form>
      </Wrapper>
    );
  }
}
Form.propTypes = {};

const Wrapper = styled.div`
  width: 450px;
  padding: 30px;
  margin: 40px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.13);
  input[type='text'],
  input[type='date'],
  input[type='datetime'],
  input[type='email'],
  input[type='number'],
  input[type='search'],
  input[type='time'],
  input[type='url'],
  input[type='password'],
  textarea,
  select {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 8px;
    border-radius: 6px;
    border: 2px solid #fff;
    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.33);
  }
`;
const InnerWrap = styled.div`
  padding: 30px;
  background: #f8f8f8;
  border-radius: 6px;
  margin-bottom: 15px;
`;
const Head = styled.h1`
  background: #2a88ad;
  padding: 20px 30px 15px 30px;
  margin: -30px -30px 30px -30px;
  border-radius: 10px 10px 0 0;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12);
  font: normal 30px 'Bitter', serif;
  box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
  border: 1px solid #257c9e;
  > span {
    display: block;
    margin-top: 2px;
    font: 13px Arial, Helvetica, sans-serif;
  }
`;
const Label = styled.label`
  display: block;
  font: 13px Arial, Helvetica, sans-serif;
  color: #888;
  margin-bottom: 15px;
`;

const Section = styled.div`
  font: normal 20px 'Bitter', serif;
  color: #2a88ad;
  margin-bottom: 5px;
  span {
    background: #2a88ad;
    padding: 5px 10px 5px 10px;
    position: absolute;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border: 4px solid #fff;
    font-size: 14px;
    margin-left: -45px;
    color: #fff;
    margin-top: -3px;
  }
`;
const ButtonSection = styled.div`
  input[type='button'],
  input[type='submit'] {
    background: #2a88ad;
    padding: 8px 20px 8px 20px;
    border-radius: 5px;
    color: #fff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12);
    font: normal 30px 'Bitter', serif;
    box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
    border: 1px solid #257c9e;
    font-size: 15px;
  }
  input[type='button']:hover,
  input[type='submit']:hover {
    background: #2a6881;
    box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.28);
  }
`;
const PrivacyPolicy = styled.span`
  float: right;
  width: 250px;
  font: 12px Arial, Helvetica, sans-serif;
  color: #4d4d4d;
  margin-top: 10px;
  text-align: right;
`;

export default Form;
