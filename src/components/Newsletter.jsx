import React from 'react'
import { string, node } from 'prop-types'

Newsletter.propTypes = {
  collectionType: string,
  header: string.isRequired,
  title: string,
  children: node,
}

function Newsletter({ collectionType, header, title, children}) {
  return (
    <div className='header'>
      <div className='newsletter-container'>
        <div className={`left-align-${ collectionType }`}>
          <header className={`newsletter-header newsletter-header-${ collectionType }`}>
            { header }
          </header>
          <div className='newsletter-content'>
            <h3 className={`newsletter-title newsletter-title-${ collectionType } row`}>
              { title }
            </h3>
              { children }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter; 
