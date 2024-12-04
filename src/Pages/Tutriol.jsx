import React from 'react'

import Tutrioalc from '../Components/Dashboard/Tutrioalc'
import Header from '../Components/Header'
import Footerd from '../Components/Dashboard/Footerd'

const Tutriol = () => {
  return (
    <div style={{backgroundColor:'#2C3442'}}>
        <Header/>
        <Tutrioalc/>
        <Footerd/>
    </div>
  )
}

export default Tutriol