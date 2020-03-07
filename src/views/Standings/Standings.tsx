import React from 'react'

import Layout from '../../components/Layout'
import Division from '../../components/Division'

import './Standings.css'

type Props = {
  path: string
}

function Standings(p: Props) {
  return (
    <Layout title="Standings">
      <div className="standings">
        <h1 className="text-indigo-700">Standings</h1>
        <Division name="East" />
        <Division name="West" />
      </div>
    </Layout>
  )
}

export default Standings
