/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { store } from './StoreProvider'

const Switcher = () => {
  const { state, dispatch } = React.useContext(store)

  const handleOnClick = () => {
    dispatch({ type: 'switch_darkmode' })
  }

  return (
    <button
      css={css`
        position: fixed;
        bottom: 16px;
        right: 16px;
        padding: 12px 18px;
        background-color: white;
        border-radius: 8px;
        font-size: 14px;
        line-height: 1;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(0, 0, 0, 0.23);
        border: none;
        outline: none;
        cursor: pointer;
      `}
      onClick={handleOnClick}
    >
      {state.darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  )
}

export default Switcher
