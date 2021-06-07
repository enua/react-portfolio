import React from 'react'

export const TemplateContext = React.createContext()

const TemplateProvider = (props) => {
  
  const templateStart = {
    color: 'red',
    backgroundColor: 'blue',
  }

  const [template, setTemplate] = React.useState(templateStart)

  React.useEffect(() => {
    if(localStorage.getItem('themeLocal')){
        const themeLocal = JSON.parse(localStorage.getItem('themeLocal'))
        setTemplate(themeLocal)
    }
}, [])

  const changeColor = (value) => {
    setTemplate(value)
    localStorage.setItem('themeLocal', JSON.stringify(value))
  }

  return (
    <TemplateContext.Provider value={{
      template,
      changeColor
    }}>
      { props.children }
    </TemplateContext.Provider>
  )
}

export default TemplateProvider
