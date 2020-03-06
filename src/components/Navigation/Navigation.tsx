import React from 'react'
import { Link } from '@reach/router'

function Navigation() {
  return (
    <div>
      <Link to="/">Standings</Link>
      <Link to="/league-leaders">League leaders</Link>
    </div>
  )
}

export default Navigation
