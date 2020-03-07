import React from 'react'

type Props = {
  name: string
}

function Division({ name }: Props) {
  return (
    <div className="class">
      <h1>{name}</h1>
    </div>
  )
}

export default Division
