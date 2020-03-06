import React from 'react'

type Props = {
  children: JSX.Element
  title: string
}

function Layout({ children, title }: Props) {
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      {children}
    </div>
  )
}

export default Layout
