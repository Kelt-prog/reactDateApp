import React, { Component } from "react";
import { CheckBox } from "devextreme-react/check-box";
import { TextBox } from "devextreme-react/text-box";
import { Validator, RequiredRule, EmailRule } from "devextreme-react/validator";
import "./SubscribeForm.scss";

class SubscribeForm extends Component {
    constructor() {
        super();
        this.state = {
          checkBoxValue: false
        };
        this.onValueChanged = this.onValueChanged.bind(this);
      }
      onValueChanged(args) {
        this.setState({
          checkBoxValue: args.value
        });
        console.log(this.state);
      }
    render() {
        const isChecked = this.state.checkBoxValue;
        return (
            <div className='subscribe-form'>
                <div className='subscribe-form__title'>Free trial 2 days</div>
                <div className='subscribe-form__subtitle'>30$ per month / whole content</div>
                <TextBox placeholder='Your email'>
                    <Validator>
                        <RequiredRule message='Email is required' />
                        <EmailRule message='Email is invalid' />
                    </Validator>
                </TextBox>
                <div className='subscribe-form__field'>
                    <div className='subscribe-form__value'>
                        <CheckBox onValueChanged={this.onValueChanged} />
                    </div>
                    <div className='subscribe-form__label'>I am 18+ and agree with <a href="">Terms of service</a></div>
                </div>
                <div className='subscribe-form__field'>
                    <div className='subscribe-form__value'>
                        <CheckBox />
                    </div>
                    <label className='subscribe-form__label'>I agree to receive news</label>
                </div>
                <div className={isChecked ? "button-large" : "button-large button-large--disabled"}>Subscribe</div>
            </div>
        );
    }
}

export default SubscribeForm;
