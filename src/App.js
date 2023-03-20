import React, { useContext } from 'react'
import { About } from './Components/About/About'
import Intro from './Components/intro/Intro'
import ProductList from './Components/ProductList/ProductList'
import Contact from './Components/Contact/Contact'
import Toggle from './Components/Toggle/Toggle'
import { ThemeContext } from './Context'


export default function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor:darkMode?"#222":"white",color:darkMode && "white"}}>
     
        <Toggle />
        <Intro />
        <About />
        <ProductList />
        <Contact />
     
    </div>
  )
}
