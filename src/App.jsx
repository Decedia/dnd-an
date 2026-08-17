import { useState } from 'react'
import { NavigationProvider, useCurrentView } from './utils/navigation.jsx'
import BottomNav from './components/BottomNav.jsx'
import Home from './pages/Home.jsx'
import CharacterLibrary from './pages/CharacterLibrary.jsx'
import Wizard from './components/Wizard.jsx'
import CharacterSheet from './pages/CharacterSheet.jsx'
import { saveCharacter, deleteCharacter } from './utils/storage.js'

function AppContent() {
  const currentView = useCurrentView()

  const handleSaveCharacter = (character) => {
    saveCharacter(character)
  }

  const handleDeleteCharacter = (id) => {
    if (window.confirm('Delete this character?')) {
      deleteCharacter(id)
    }
  }

  return (
    <div className="min-h-screen bg-charcoal">
      {currentView === 'home' && (
        <Home onDelete={handleDeleteCharacter} />
      )}
      {currentView === 'library' && (
        <CharacterLibrary onDelete={handleDeleteCharacter} />
      )}
      {currentView === 'new' && (
        <Wizard onSave={handleSaveCharacter} />
      )}
      {currentView === 'character' && (
        <CharacterSheet />
      )}
      <BottomNav />
    </div>
  )
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  )
}
