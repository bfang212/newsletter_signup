import React from 'react'
import { string, func } from 'prop-types'

Checkbox.propTypes = {
  checked: string,
  handleOnChange: func,
}

function Checkbox({ checked, handleOnChange }) {
  return (<input className={ `Checkbox ${ checked }` }
                  type='checkbox'
                  onChange={ handleOnChange }
          ></input>)}

export default Checkbox;
