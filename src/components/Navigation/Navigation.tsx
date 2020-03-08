import React from 'react'
import { Link } from '@reach/router'

function Navigation() {
  return (
    <div>
      <Link className="uppercase tracking-wide" to="/">
        Standings
      </Link>
      &nbsp;|&nbsp;
      <Link className="uppercase tracking-wide" to="/league-leaders">
        League leaders
      </Link>
    </div>
  )
}

export default Navigation
