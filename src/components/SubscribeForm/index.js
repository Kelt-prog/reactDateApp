import React, { Component } from 'react';
import { CheckBox } from 'devextreme-react/check-box';
import { TextBox } from 'devextreme-react/text-box';
import {
  Validator,
  RequiredRule,
  EmailRule,
} from 'devextreme-react/validator';
import './SubscribeForm.scss';

class SubscribeForm extends Component {
  
    render() {
      return (
        <div className="subscribe-form">
        <div className="subscribe-form__title">
          Free trial 2 days
        </div>
        <div className="subscribe-form__subtitle">
          30$ per month / whole content
        </div>
        <TextBox placeholder="Your email">
            <Validator>
                <RequiredRule message="Email is required" />
                <EmailRule message="Email is invalid" />
            </Validator>
        </TextBox>
        <div className="subscribe-form__field">
            <div className="subscribe-form__value">
                <CheckBox />
            </div>  
            <div className="subscribe-form__label">
                I am 18+ and agree with Terms of service
            </div>
        </div>
        <div className="subscribe-form__field">
            <div className="subscribe-form__value">
                <CheckBox />
            </div>            
            <div className="subscribe-form__label">
                I agree to receive news
            </div>
        </div>
      </div>
      );
    }
  }

  export default SubscribeForm;