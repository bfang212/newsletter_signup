import React from 'react'
import { string } from 'prop-types'

Button.propTypes = {
  message: string,
  buttonType: string,
}

function Button({ message, buttonType }) {
  return (<button className={`Button Button-${ buttonType }`}>{ message }</button>)
}

export default Button;