import React, { Component } from 'react'
import { string } from 'prop-types'

import Newsletter from '../components/Newsletter'
import '../styles/main.css'

export default class Congratulations extends Component {  
  static propTypes = {
    header: string.isRequired,
    title: string,
    message: string,
  }

  static defaultProps = {
    header: 'congratulations!',
    title: 'Thank You For Signing Up!',
    message: 'Look out for the latest news on your favorite show.',
  }

  render() {
    const { header, title, message } = this.props

    return (
      <Newsletter header={ header }
                  title={ title }
                  collectionType={ 'congratulations' }>
        <p className='congratulations-message row'>{message}</p>
      </Newsletter>
    );
  }
}
