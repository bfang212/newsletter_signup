import React from 'react'
import { string, func } from 'prop-types'

Input.propTypes = {
  valid: string,
  InputType: string,
  placeholderMessage: string,
  handleOnChange: func,
}

function Input({ valid, inputType, placeholderMessage, handleOnChange }) {
  return (<input className={ `Input Input-${ inputType } ${ valid }` }
                  placeholder={ placeholderMessage }
                  type={ inputType }
                  spellCheck='false'
                  onChange={ handleOnChange }
          ></input>)}


export default Input;
