import React, { createContext, useReducer } from 'react'

const initialState = { stocks: [], error: false, fetching: false }

const store = createContext(initialState)
const { Provider } = store

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'fetching':
        return { ...state, fetching: true, error: false }
      case 'error':
        return { ...state, fetching: false, error: true }
      case 'fetch_stocks':
        return {
          ...state,
          stocks: action.payload,
          fetching: false,
          error: false,
        }
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StoreProvider }
