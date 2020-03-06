import React from 'react'
import Navigation from '../Navigation'

type Props = {
  children: JSX.Element
  title: string
}

function Layout({ children, title }: Props) {
  return (
    <div>
      <header className="bg-blue-500 max-w-sm rounded overflow-hidden shadow-lg">
        <h1>{title}</h1>
        <Navigation />
      </header>
      {children}
    </div>
  )
}

export default Layout
