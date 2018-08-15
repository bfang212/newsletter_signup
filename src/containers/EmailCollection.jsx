import React, { Component } from 'react'
import { string } from 'prop-types'

import Button from '../components/Button'
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'
import Agreement from '../components/Agreement'
import Newsletter from '../components/Newsletter'
import { validateField } from '../util/util.js'
import '../styles/main.css'

export default class EmailCollection extends Component {
  static propTypes = {
    header: string.isRequired,
    title: string,
    agreementText: string,
    agreementUrl: string,
    agreementPolicy: string,
  }

  static defaultProps = {
    header: 'Join the list!',
    title: 'SIGN UP FOR THE TLC NEWSLETTER.',
    agreementText: 'I agree to receive information from Discovery Communications in accordance with the following ',
    agreementUrl: 'https://www.thespotlyte.com/legal',
    agreementPolicy: 'Privacy Policy',
  }

  state = { 
    email: '',
    agreementCheckbox: false,
    fieldError: 'none',
    emailErrorMessageShow: 'none',
    checkBoxErrorMessageShow: 'none',
    requiredFieldsErrorMessageShow: 'none',
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handleEmailSubmit = (event) => {
    event.preventDefault();
    const isEmailValid = validateField('email', this.state.email)
    const isCheckBox = this.state.agreementCheckbox

    if (!isEmailValid && !isCheckBox) {
      this.setState({
        fieldError: 'allFields',
        emailErrorMessageShow: 'none',
        checkBoxErrorMessageShow: 'none',
        requiredFieldsErrorMessageShow: 'block'})
    } else if (!isEmailValid) {
      this.setState({
        fieldError: 'email',
        emailErrorMessageShow: 'block',
        checkBoxErrorMessageShow: 'none',
        requiredFieldsErrorMessageShow: 'none'})
    } else if (!isCheckBox) {
      this.setState({
        fieldError: 'checkbox',
        emailErrorMessageShow: 'none',
        checkBoxErrorMessageShow: 'block',
        requiredFieldsErrorMessageShow: 'none'})
    } else {
      this.props.handleSubmit(this.state.email)
    }
  }

  handleCheckbox = () => {
    this.setState((prevState) => ({
      agreementCheckbox: !prevState.agreementCheckbox}),
    )
  }
  
  
  render() {
    const { header, title, agreementText, agreementUrl, agreementPolicy } = this.props

    return (
      <Newsletter header= {header}
                  title = {title}
                  collectionType = { 'email-collection' }>

        <form noValidate onSubmit={ (event) => this.handleEmailSubmit(event)} className='email-collection row'>
          
          <Input valid={ (this.state.fieldError === 'email' || this.state.fieldError  === 'allFields') ? 'not-valid' : 'valid' } 
                  name='email' 
                  inputType={ 'email' } 
                  placeholderMessage = { 'enter email address' } 
                  handleOnChange={ this.handleEmailChange } />
          <Button message={ 'NEXT' }
                  buttonType={ 'email-collection' }/>

          <div className='error-message' style={ {'display': `${this.state.emailErrorMessageShow}`} }>* Please enter a valid email.</div>
          <div className='error-message' style={ {'display': `${this.state.checkBoxErrorMessageShow}`} }>* Please check the box to proceed.</div>
          <div className='error-message' style={ {'display': `${this.state.requiredFieldsErrorMessageShow}`} }>* Fields not valid, please check.</div>

          <Agreement url={ agreementUrl } policy={ agreementPolicy } message={ agreementText }>
            <Checkbox checked={ (this.state.fieldError === 'checkbox' || this.state.fieldError === 'allFields') ? 'not-valid' : 'valid' } 
                      handleOnChange={ this.handleCheckbox }/>
          </Agreement>

        </form>
      
       </Newsletter>
    );
  }
}
