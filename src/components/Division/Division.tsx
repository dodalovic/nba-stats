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
      <h1 className="rounded-t-md p-1 tracking-wide shadow uppercase text-center m-auto bg-indigo-600 text-white">
        {name}
      </h1>
      <ul className="p-5 border border-black-500">
        {allTeams.get(name)?.map(it => (
          <li>{it}</li>
        ))}
      </ul>
    </div>
  )
}

export default Division
