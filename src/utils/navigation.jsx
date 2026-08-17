import React, { createContext, useContext, useState } from 'react'

const NavigationContext = createContext(null)

export function NavigationProvider({ children }) {
  const [currentView, setCurrentView] = useState('home')
  const [params, setParams] = useState({})

  const navigate = (view, payload = {}) => {
    setCurrentView(view)
    setParams(payload)
  }

  return (
    <NavigationContext.Provider value={{ currentView, navigate, params }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigate() {
  const context = useContext(NavigationContext)
  if (!context) throw new Error('useNavigate must be used within NavigationProvider')
  return context.navigate
}

export function useCurrentView() {
  const context = useContext(NavigationContext)
  if (!context) throw new Error('useCurrentView must be used within NavigationProvider')
  return context.currentView
}

export function useNavigationParams() {
  const context = useContext(NavigationContext)
  if (!context) throw new Error('useNavigationParams must be used within NavigationProvider')
  return context.params
}
