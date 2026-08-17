import React, { createContext, useContext } from 'react'

const NavigationContext = createContext(null)

export function NavigationProvider({ children }) {
  const [currentView, setCurrentView] = React.useState('home')

  const navigate = (view) => {
    setCurrentView(view)
  }

  return (
    <NavigationContext.Provider value={{ currentView, navigate }}>
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
