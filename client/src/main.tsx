import React from 'react'
import ReactDOM from 'react-dom/client'
import 'tw-elements-react/dist/css/tw-elements-react.min.css'
import '@/styles/index.css'
import AppRouter from '@/router'
import { RootStore, RootStoreContext } from '@/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RootStoreContext.Provider value={new RootStore()}>
    <AppRouter />
  </RootStoreContext.Provider>
)
