import React from 'react'
import { Router } from '@reach/router'

import Standings from './views/Standings'
import LeagueLeaders from './views/LeagueLeaders'

import './styles/index.css'

function App() {
  return (
    <Router>
      <Standings path="/" />
      <LeagueLeaders path="/league-leaders" />
    </Router>
  )
}

export default App
