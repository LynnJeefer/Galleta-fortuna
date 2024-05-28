import React from 'react'
import arr from '../utils/phrases.json'
import ramdomArr from '../services/ramdomArr'
import imagesArr from '../utils/images.json'


const ShowButton=({setRandomPhrase,setImage})=> {
  
  console.log(typeof setRandomPhrase)

  const handleClick=()=>{
    const quote=ramdomArr(arr)
    setRandomPhrase(quote)
    const photo=ramdomArr(imagesArr)
    setImage(photo)
  }
  
  return (
    <button onClick={handleClick} className='app__btn'>Probar mi suerte</button>
  )
}

export default ShowButton;