import React, { useState } from 'react'
import { Slider } from "@/components/ui/slider"


import  {TabsDemo}   from './TabsDemo'

import { Luggages } from './Luggages'
import { SliderDemo } from './Slider'
import './App.css'

import { Theme } from '@radix-ui/themes';
function App() {
  
  return (
    <div style={ {width : '100vw',  display: 'flex' , alignItems: 'center', justifyContent:'center'} }>
      <Theme>
      <TabsDemo/>
      </Theme>
    </div>
  )
}

export default App
