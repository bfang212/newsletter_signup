import React from 'react'
import { string, node } from 'prop-types'

Agreement.propTypes = {
  children: node,
  message: string,
  policy: string,
  url: string,
}

function Agreement({ children, message, url, policy }) {
  return (
    <div className="agreement">
      {children}
      
      <label className="agreement-text">
        { message }
        <a target="_blank" href={ url }>{ policy }</a>
        { "" }
      </label>
    </div>
  )
}

export default Agreement;