import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Layout from '../../components/Layout'
import Division from '../../components/Division'

import './Standings.css'

type Props = {
  path: string
}

function Standings(p: Props) {
  const [standings, setStandings] = useState({ east: [], west: [] })
  useEffect(() => {
    async function getStandings() {
      const response = await axios(
        'http://data.nba.net/data/10s/prod/v1/current/standings_conference.json'
      )
      setStandings({
        east: response.data.league.standard.conference.east,
        west: response.data.league.standard.conference.west
      })
    }
    getStandings()
  }, [])

  return (
    <Layout title="Standings">
      <div>
        <h1 className="text-indigo-700 text-center p-5">Standings</h1>
        <div className="divisions flex max-w-3xl m-auto">
          <Division name="West" />
          <Division name="East" />
        </div>
      </div>
    </Layout>
  )
}

export default Standings
