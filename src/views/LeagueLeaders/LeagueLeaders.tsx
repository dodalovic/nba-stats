import React from 'react'

import Layout from '../../components/Layout'

type Props = {
  path: string
}

function LeagueLeaders(p: Props) {
  return (
    <Layout title="LeagueLeaders">
      <div>League leaders</div>
    </Layout>
  )
}

export default LeagueLeaders
