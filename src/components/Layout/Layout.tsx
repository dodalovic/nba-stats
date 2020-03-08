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
      <header className="uppercase bg-blue-500 overflow-hidden shadow-lg text-white mt-12 text-center p-4">
        <Navigation />
      </header>
      {children}
    </div>
  )
}

export default Layout
