import React from 'react'

import './Division.css'

type Props = {
  name: string
}

const allTeams = new Map<string, Array<string>>()
  .set('East', [
    'Milwaukee Bucks',
    'Toronto Raptors',
    'Boston Celtics',
    'Miami Heat',
    'Indiana Pacers',
    'Philadelphia 76ers',
    'Brooklyn Nets',
    'Orlando Magic'
  ])
  .set('West', [
    'Los Angeles Lakers',
    'LA Clippers',
    'Denver Nuggets',
    'Utah Jazz',
    'Houston Rockets',
    'Oklahoma City Thunder',
    'Dallas Mavericks',
    'Memphis Grizzlies'
  ])

function Division({ name }: Props) {
  return (
    <div className="division">
      <h1 className="rounded shadow uppercase text-center mb-5 bg-indigo-500 text-white">
        {name}
      </h1>
      <ul className="bg-indigo-200">
        {allTeams.get(name)?.map(it => (
          <li>{it}</li>
        ))}
      </ul>
    </div>
  )
}

export default Division
