/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { Route, Switch } from 'react-router-dom'
import { store } from './StoreProvider'

import About from './About'
import Home from './Home'
import Nav from './Nav'

const App = () => {
  const { state } = React.useContext(store)
  const color = state.darkMode ? '#fff' : '#34374c'
  const backgroundColor = state.darkMode ? '#34374c' : '#fff'
  return (
    <div
      css={css`
        background: ${backgroundColor};
        box-sizing: border-box;
        color: ${color};
        min-height: 100%;
        padding: 40px 80px;
        transition: background 0.2s ease-out, color 0.2s ease-out;
      `}
    >
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
