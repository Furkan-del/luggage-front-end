import React, { useState } from 'react'
import { Slider } from "@/components/ui/slider"


import { AuthenticationTab } from './AuthenticationTab'

import { Luggages } from './Luggages'
import { SliderDemo } from './Slider'


function App() {
  
  return (
    <div>
       <Luggages/>
       <SliderDemo/>
    </div>
  )
}

export default App
