import React from 'react'

const ShowPhrase = ({randomPhrase}) => {

  const {phrase, autor} = randomPhrase
  return (
    <div className='app__container'>
      <p className='app__phrase'>{phrase}</p>
    </div>
  )
}

export default ShowPhrase;