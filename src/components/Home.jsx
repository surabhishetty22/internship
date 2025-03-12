import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
        <h1>
        Home
        </h1>
        <Link to="/arrow">Arrow</Link> <br />
        <Link to="/array">Array</Link> <br />
        <Link to="/destruturing">Destruturing</Link> <br />
        <Link to="/spread">Spread</Link> <br />
        <Link to="/props">Props</Link> <br />
        <Link to="/ternary">Ternary</Link> <br />
        <Link to="/demo">Demo</Link> <br />
        <Link to="mui">MUI</Link> <br />
        <Link to="card">Card</Link> <br />
        <Link to="/*">Error</Link> <br />
    </div>
  )
}
