import React from 'react'
import {TemplateContext} from '../context/TemplateProvider'

const TemplateBox = () => {

  const {template, changeColor} = React.useContext(TemplateContext)
  
  const initialBoxState = {opened: false, position: -300}
  const [boxPosition, setBoxPosition] = React.useState(initialBoxState)

  const openBox = () => {
    if (boxPosition.opened) {
      setBoxPosition(initialBoxState)
    } else {
      setBoxPosition({opened: true, position: 0})
    }
  }

  return (
    <div style={{
      position: 'absolute',
      top: 153,
      right: boxPosition.position,
      width: '300px',
      height: '0px',
      zIndex: 1,
    }}>
      <button
        type="button"
        className=""
        style={{
          position: 'relative',
          top: 40,
          left: -40,
          width: '40px',
          height: '40px',
          border: '1px sodli #ccc'
        }}
        onClick={ () => openBox()}
      >CC</button>
        <div className="list-group">
          <button 
          onClick={() => changeColor({...template, color: 'white'})} 
          className="list-group-item list-group-item-action">White</button>
          <button 
          onClick={() => changeColor({...template, color: 'green'})} 
          className="list-group-item list-group-item-action">Green</button>
          <button 
          onClick={() => changeColor({...template, color: 'purple'})}  className="list-group-item list-group-item-action">Purple</button>
          <button 
          onClick={() => changeColor({...template, color: 'red'})}  className="list-group-item list-group-item-action">Red</button>
          <button 
          onClick={() => changeColor({...template, color: 'orange'})}  className="list-group-item list-group-item-action">Orange</button>
          <button 
          onClick={() => changeColor({...template, color: 'blue'})}  className="list-group-item list-group-item-action">Blue</button>
        </div>
    </div>
  )
}

export default TemplateBox
