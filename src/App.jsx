import './App.css'
import { useState } from 'react'
import ShowPhrase from './components/ShowPhrase'
import ShowButton from './components/ShowButton'

import ramdomArr from './services/ramdomArr'

import arr from './utils/phrases.json'
import imagesArr from './utils/images.json'

function App() {

  const quote=ramdomArr(arr);
  const [randomPhrase, setRandomPhrase] = useState(quote);
  const photo =ramdomArr(imagesArr)
  const [image, setImage] = useState(photo)

  const appStyle={
    backgroundImage:`url(../assets/fondo${image}.jpg)`,
  }
 
  return (
    <div className='app' style={appStyle}>
      <h1 className='app__title'>Galletas de la Fortuna</h1>
      <ShowPhrase
        randomPhrase={randomPhrase}
      />
      <ShowButton
        setRandomPhrase={setRandomPhrase}
        setImage={setImage}
      />
    </div>
  )
}

export default App
