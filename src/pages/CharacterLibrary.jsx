import { useState, useEffect } from 'react'
import { useNavigate } from '../utils/navigation.jsx'
import { listCharacters, deleteCharacter } from '../utils/storage.js'

export default function CharacterLibrary() {
  const navigate = useNavigate()
  const [characters, setCharacters] = useState(listCharacters)

  const handleDelete = (e, id) => {
    e.stopPropagation()
    if (window.confirm('Delete this character?')) {
      deleteCharacter(id)
      setCharacters(listCharacters())
    }
  }

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-4">
      <h1 className="text-3xl font-title text-gold mb-2">Library</h1>
      <p className="text-parchment-dark text-sm mb-6">Browse and manage your saved characters.</p>

      {characters.length === 0 ? (
        <div className="bg-charcoal-light rounded-xl p-8 text-center mt-12">
          <i className="fa-solid fa-book text-5xl text-gold/30 mb-4" />
          <h2 className="text-xl font-title text-parchment mb-2">Library Empty</h2>
          <p className="text-parchment-dark mb-6">Your saved characters will appear here.</p>
          <button
            onClick={() => navigate('new')}
            className="bg-gold hover:bg-gold-dark text-charcoal font-bold px-6 py-3 rounded-full transition"
          >
            <i className="fa-solid fa-dragon mr-2" />
            Create Character
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {characters.map(char => (
            <div
              key={char.id}
              onClick={() => {}}
              className="bg-charcoal-light hover:bg-charcoal-lighter rounded-xl p-4 flex items-center justify-between transition cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-burgundy/30 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-user text-gold" />
                </div>
                <div>
                  <h3 className="text-parchment font-semibold">{char.name || 'Unnamed'}</h3>
                  <p className="text-parchment-dark text-sm">
                    {char.race && char.class ? `${char.race} ${char.class}` : 'Incomplete'}
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => handleDelete(e, char.id)}
                className="text-parchment-dark hover:text-burgundy p-2 transition"
              >
                <i className="fa-solid fa-trash" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
