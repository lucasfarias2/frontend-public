import React, { createContext, useReducer } from 'react'

const initialState = { darkMode: false }

const store = createContext(initialState)
const { Provider } = store

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'switch_darkmode':
        const newState = {
          darkMode: !state.darkMode,
        }
        return newState
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StoreProvider }
