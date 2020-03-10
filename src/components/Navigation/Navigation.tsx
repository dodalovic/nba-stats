import React from 'react'
import { Link } from '@reach/router'

function Navigation() {
  return (
    <div className="flex justify-center">
      <Link className="mr-24 uppercase tracking-wide" to="/">
        Standings
      </Link>
      <Link className="ml-24 uppercase tracking-wide" to="/league-leaders">
        League leaders
      </Link>
    </div>
  )
}

export default Navigation
