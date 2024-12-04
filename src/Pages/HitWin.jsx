import React from 'react'
import Headerd from '../Components/Dashboard/Headerd'
// import MatchPrediction from '../Components/Dashboard/MatchPrediction'
import HitWinRulesModal from '../Components/Dashboard/HitWinRulesModal'
import Footerd from '../Components/Dashboard/Footerd'
// import LoginModal from '../Components/Dashboard/LoginModal'

const HitWin = () => {
  return (
    <div style={{ backgroundColor: '#2C3442', minHeight: '100vh' }}>
        <Headerd/>
        {/* <MatchPrediction/> */}
        <HitWinRulesModal/>
        {/* <LoginModal/> */}
        <Footerd/>
    </div>
  )
}

export default HitWin