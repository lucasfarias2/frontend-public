/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { useParams } from 'react-router-dom'
import { store } from './StoreProvider'

const Detail = () => {
  const { state } = React.useContext(store)
  const { id } = useParams()
  let details

  if (state.stocks.length) {
    details = state.stocks.find((stock) => stock.symbol === id)
  }

  if (!details) {
    return null
  }

  return (
    <div>
      {details.symbol} <img src={details.image} alt={details.symbol} />
    </div>
  )
}

export default Detail
