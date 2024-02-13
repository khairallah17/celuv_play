"use client"
import { useContext } from 'react'
import GlobalContextProvider from '@/context/stateContext'

const GlobalContextHooks = () => {
  return (
    useContext(GlobalContextProvider)
  )
}

export default GlobalContextHooks