import React, { Component } from 'react'
import { string } from 'prop-types'

import Button from '../components/Button'
import Input from '../components/Input'
import Newsletter from '../components/Newsletter'
import { validateField } from '../util/util.js'
import '../styles/main.css'

export default class FullNameCollection extends Component {
  static propTypes = {
    header: string.isRequired,
    title: string,
  }

  static defaultProps = {
    header: 'Join the list!',
    title: 'ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME.',
  }

  state = { 
    firstName: '',
    lastName: '',
    fieldError: 'none',
    firstNameErrorMessage: 'none',
    lastNameErrorMessage: 'none',
    requiredFieldsErrorMessageShow: 'none',
  }

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSignup = (event) => {
    event.preventDefault()
    const isFirstNameValid = validateField('name', this.state.firstName)
    const isLastNameValid = validateField('name', this.state.lastName)

    if (!isFirstNameValid && !isLastNameValid) {
      this.setState({
        fieldError: 'allFields',
        firstNameErrorMessage: 'none',
        lastNameErrorMessage: 'none',
        requiredFieldsErrorMessageShow: 'block'})
    } else if (!isFirstNameValid) {
      this.setState({
        fieldError: 'firstName',
        firstNameErrorMessage: 'block',
        lastNameErrorMessage: 'none',
        requiredFieldsErrorMessageShow: 'none'})
    } else if (!isLastNameValid) {
      this.setState({
        fieldError: 'lastName',
        firstNameErrorMessage: 'none',
        lastNameErrorMessage: 'block',
        requiredFieldsErrorMessageShow: 'none'})
    } else {
      this.props.handleSubmit({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      })
    }
  }
  
  render() {
    const { header, title } = this.props

    return (
      <Newsletter header= {header}
                  title = {title}
                  collectionType = { 'name-collection' }>

        <form noValidate onSubmit={ (event) => { this.handleSignup(event) }} className='name-collection row'>
          <Input valid={ (this.state.fieldError === 'firstName' || this.state.fieldError  === 'allFields') ? 'not-valid' : 'valid' } 
                  name='firstName' 
                  inputType={ 'text' } 
                  placeholderMessage={ 'First Name' } 
                  handleOnChange={this.handleFirstNameChange}/>
          <Input valid={ (this.state.fieldError === 'lastName' || this.state.fieldError  === 'allFields') ? 'not-valid' : 'valid' } 
                  name='lastName' 
                  inputType={ 'text' } 
                  placeholderMessage={ 'Last Name' } 
                  handleOnChange={this.handleLastNameChange}/>
          <Button message={ 'SIGN UP' }
                  buttonType={ 'name-collection' }/>

          <div className='error-message' style={ {'display': `${this.state.firstNameErrorMessage}`} }>* Please enter a valid first name.</div>
          <div className='error-message' style={ {'display': `${this.state.lastNameErrorMessage}`} }>* Please enter a valid last name.</div>
          <div className='error-message' style={ {'display': `${this.state.requiredFieldsErrorMessageShow}`} }>* Please enter a valid name.</div>

        </form>

      </Newsletter>
    );
  }
}
