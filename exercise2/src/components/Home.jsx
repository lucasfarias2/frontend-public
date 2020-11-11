/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import { store } from './StoreProvider'

const Home = () => {
  const { state } = React.useContext(store)
  const { stocks, fetching, error } = state

  return (
    <div>
      <h1
        css={css`
          font-size: 48px;
          font-weight: 500;
          line-height: 60px;
        `}
      >
        Stocks
      </h1>
      {fetching ? (
        <div
          css={css`
            color: green;
          `}
        >
          Fetching stocks...
        </div>
      ) : null}
      {error ? (
        <div
          css={css`
            color: red;
          `}
        >
          Error fetching stocks
        </div>
      ) : null}
      {stocks.length ? (
        <ul
          css={css`
            padding: 0;
          `}
        >
          {stocks.map((stock) => {
            return (
              <div key={stock.symbol}>
                <Link
                  to={`/${stock.symbol}`}
                  css={css`
                    text-decoration: none;
                    color: #34374c;
                    font-size: 24px;
                  `}
                >
                  {stock.symbol}
                </Link>
              </div>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default Home
