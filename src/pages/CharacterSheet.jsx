import { useNavigationParams, useNavigate } from '../utils/navigation.jsx'
import { loadCharacter, deleteCharacter } from '../utils/storage.js'

export default function CharacterSheet() {
  const navigate = useNavigate()
  const params = useNavigationParams()
  const id = params?.id
  const character = id ? loadCharacter(id) : null

  if (!character) {
    return (
      <div className="max-w-lg mx-auto px-4 pt-6 pb-4">
        <div className="text-center py-12">
          <i className="fa-solid fa-user text-5xl text-gold/30 mb-4" />
          <h2 className="text-xl font-title text-parchment mb-2">Character Not Found</h2>
          <button
            onClick={() => navigate('home')}
            className="bg-gold hover:bg-gold-dark text-charcoal font-bold px-6 py-3 rounded-full transition"
          >
            Return Home
          </button>
        </div>
      </div>
    )
  }

  const abilityScores = character.abilityScores || {
    str: character.str || 10, dex: character.dex || 10, con: character.con || 10,
    int: character.int || 10, wis: character.wis || 10, cha: character.cha || 10,
  }

  function getModifier(score) {
    const mod = Math.floor((score - 10) / 2)
    return mod >= 0 ? `+${mod}` : `${mod}`
  }

  const handleDelete = () => {
    if (window.confirm('Delete this character?')) {
      deleteCharacter(character.id)
      navigate('home')
    }
  }

  const bg = character.background || {}
  const ft = character.finalTouches || {}

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-4">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => navigate('home')} className="text-parchment-dark hover:text-parchment text-sm">
          <i className="fa-solid fa-arrow-left mr-2" />
          Back
        </button>
        <h1 className="text-2xl font-title text-gold">{character.name || 'Unnamed'}</h1>
        <button onClick={handleDelete} className="text-parchment-dark hover:text-burgundy text-sm">
          <i className="fa-solid fa-trash mr-1" />
          Delete
        </button>
      </div>

      <div className="space-y-4">
        <div className="bg-charcoal-light rounded-xl p-5">
          <h2 className="text-lg font-title text-gold mb-3">Identity</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div><span className="text-parchment-dark">Name:</span> <span className="text-parchment">{character.name || '-'}</span></div>
            <div><span className="text-parchment-dark">Player:</span> <span className="text-parchment">{character.playerName || '-'}</span></div>
            <div className="col-span-2"><span className="text-parchment-dark">Alignment:</span> <span className="text-parchment">{character.alignment || '-'}</span></div>
            <div><span className="text-parchment-dark">Race:</span> <span className="text-parchment">{character.race || '-'}</span></div>
            <div><span className="text-parchment-dark">Class:</span> <span className="text-parchment">{character.class || '-'}</span></div>
          </div>
        </div>

        <div className="bg-charcoal-light rounded-xl p-5">
          <h2 className="text-lg font-title text-gold mb-3">Ability Scores</h2>
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(abilityScores).map(([key, val]) => (
              <div key={key} className="bg-charcoal rounded-lg p-3 text-center">
                <div className="text-parchment-dark text-xs uppercase tracking-wide">{key}</div>
                <div className="text-2xl font-bold text-parchment">{val}</div>
                <div className="text-gold text-sm font-semibold">{getModifier(val)}</div>
              </div>
            ))}
          </div>
        </div>

        {bg.name && (
          <div className="bg-charcoal-light rounded-xl p-5">
            <h2 className="text-lg font-title text-gold mb-3">Background</h2>
            <div className="space-y-2 text-sm">
              <div><span className="text-parchment-dark">Name:</span> <span className="text-parchment">{bg.name}</span></div>
              {bg.trait1 && <div><span className="text-parchment-dark">Trait 1:</span> <span className="text-parchment">{bg.trait1}</span></div>}
              {bg.trait2 && <div><span className="text-parchment-dark">Trait 2:</span> <span className="text-parchment">{bg.trait2}</span></div>}
              {bg.ideal && <div><span className="text-parchment-dark">Ideal:</span> <span className="text-parchment">{bg.ideal}</span></div>}
              {bg.bond && <div><span className="text-parchment-dark">Bond:</span> <span className="text-parchment">{bg.bond}</span></div>}
              {bg.flaw && <div><span className="text-parchment-dark">Flaw:</span> <span className="text-parchment">{bg.flaw}</span></div>}
            </div>
          </div>
        )}

        {character.skills?.length > 0 && (
          <div className="bg-charcoal-light rounded-xl p-5">
            <h2 className="text-lg font-title text-gold mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {character.skills.map(skill => (
                <span key={skill} className="bg-charcoal-lighter text-parchment text-sm px-3 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
        )}

        {character.equipment?.length > 0 && (
          <div className="bg-charcoal-light rounded-xl p-5">
            <h2 className="text-lg font-title text-gold mb-3">Equipment</h2>
            <ul className="space-y-1">
              {character.equipment.map((item, i) => (
                <li key={i} className="text-parchment text-sm">{item.quantity > 1 ? `${item.quantity}x ` : ''}{item.name}</li>
              ))}
            </ul>
          </div>
        )}

        {character.spells?.length > 0 && (
          <div className="bg-charcoal-light rounded-xl p-5">
            <h2 className="text-lg font-title text-gold mb-3">Spells</h2>
            <ul className="space-y-1">
              {character.spells.map((spell, i) => (
                <li key={i} className="text-parchment text-sm">{spell.name} <span className="text-parchment-dark">(Level {spell.level})</span></li>
              ))}
            </ul>
          </div>
        )}

        {ft.age || ft.height || ft.weight || ft.eyes || ft.skin || ft.hair && (
          <div className="bg-charcoal-light rounded-xl p-5">
            <h2 className="text-lg font-title text-gold mb-3">Appearance</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {ft.age && <div><span className="text-parchment-dark">Age:</span> <span className="text-parchment">{ft.age}</span></div>}
              {ft.height && <div><span className="text-parchment-dark">Height:</span> <span className="text-parchment">{ft.height}</span></div>}
              {ft.weight && <div><span className="text-parchment-dark">Weight:</span> <span className="text-parchment">{ft.weight}</span></div>}
              {ft.eyes && <div><span className="text-parchment-dark">Eyes:</span> <span className="text-parchment">{ft.eyes}</span></div>}
              {ft.skin && <div><span className="text-parchment-dark">Skin:</span> <span className="text-parchment">{ft.skin}</span></div>}
              {ft.hair && <div><span className="text-parchment-dark">Hair:</span> <span className="text-parchment">{ft.hair}</span></div>}
            </div>
          </div>
        )}

        {ft.backstory && (
          <div className="bg-charcoal-light rounded-xl p-5">
            <h2 className="text-lg font-title text-gold mb-3">Backstory</h2>
            <p className="text-parchment text-sm whitespace-pre-wrap">{ft.backstory}</p>
          </div>
        )}
      </div>
    </div>
  )
}
