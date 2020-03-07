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
      <div>
        <h1 className="text-indigo-700 text-center p-5">Standings</h1>
        <div className="flex">
          <Division name="East" />
          <Division name="West" />
        </div>
      </div>
    </Layout>
  )
}

export default Standings
