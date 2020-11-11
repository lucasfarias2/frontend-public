/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import { store } from './StoreProvider'

import Home from './Home'
import Nav from './Nav'
import Detail from './Detail'

const App = () => {
  const { state, dispatch } = React.useContext(store)
  const [fetched, setHasFetched] = React.useState(false)

  const fetchStocks = React.useCallback(async () => {
    try {
      dispatch({ type: 'fetching' })
      const response = await axios.get(
        'https://universal.hellopublic.com/exercises/stocks.json'
      )

      dispatch({ type: 'fetch_stocks', payload: response.data.stocks })
    } catch (e) {
      dispatch({ type: 'error' })
      console.error(e)
    }
  }, [dispatch])

  React.useEffect(() => {
    if (!state.stocks.length && !fetched) {
      fetchStocks()
      setHasFetched(true)
    }
  }, [state, fetchStocks, fetched])

  return (
    <div
      css={css`
        background: #fff;
        box-sizing: border-box;
        color: #34374c;
        min-height: 100%;
        padding: 20px 80px;
      `}
    >
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:id">
          <Detail />
        </Route>
      </Switch>
    </div>
  )
}

export default App
