import React from 'react'
import Navigation from '../Navigation'
import './Layout.css'

type Props = {
  children: JSX.Element
  title: string
}

function Layout({ children, title }: Props) {
  return (
    <div className="container">
      <header className="bg-blue-500 overflow-hidden shadow-lg">
        <h1>{title}</h1>
        <Navigation />
      </header>
      {children}
    </div>
  )
}

export default Layout
