import React from 'react'

const PLACEHOLDER_SPELLS = {
  'Fire Bolt': 'A searing bolt of fire that ignites the target, dealing damage on a successful hit.',
  'Magic Missile': 'A guaranteed bolt of force that always strikes its target.',
  'Cure Wounds': 'Channeling positive energy to restore hit points to a creature.',
  'Shield': 'An invisible barrier of magical force that protects you from harm.',
}

export default function StepSpells({ character, updateCharacter, onSkip }) {
  const spells = character.spells || []
  const [name, setName] = React.useState('')
  const [level, setLevel] = React.useState(0)

  function addSpell() {
    if (!name.trim()) return
    updateCharacter({ spells: [...spells, { name: name.trim(), level }] })
    setName('')
    setLevel(0)
  }

  function removeSpell(index) {
    updateCharacter({ spells: spells.filter((_, i) => i !== index) })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-title text-gold mb-2">Spells</h2>
      <p className="text-parchment-dark text-sm">Skip this step if your class doesn&apos;t cast spells.</p>

      <div className="space-y-3">
        {spells.map((spell, i) => (
          <div key={i} className="bg-charcoal-light rounded-lg px-4 py-3 flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-parchment text-sm truncate">{spell.name}</span>
                {PLACEHOLDER_SPELLS[spell.name] && (
                  <span className="text-parchment-dark text-xs shrink-0" title={PLACEHOLDER_SPELLS[spell.name]}>
                    <i className="fa-solid fa-circle-info" />
                  </span>
                )}
              </div>
              <span className="text-parchment-dark text-xs">Level {spell.level}</span>
            </div>
            <button
              type="button"
              onClick={() => removeSpell(i)}
              className="text-parchment-dark hover:text-burgundy ml-3 transition"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
        ))}
        {spells.length === 0 && (
          <p className="text-parchment-dark text-sm text-center py-4">No spells added yet.</p>
        )}
      </div>

      <div className="bg-charcoal-light rounded-lg p-4 space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="flex-1 bg-charcoal-lighter text-parchment rounded-lg px-4 py-2 text-base"
            placeholder="Spell name"
            onKeyDown={e => e.key === 'Enter' && addSpell()}
          />
          <select
            value={level}
            onChange={e => setLevel(parseInt(e.target.value))}
            className="w-20 bg-charcoal-lighter text-parchment rounded-lg px-3 py-2 text-base text-center"
          >
            {[0,1,2,3,4,5,6,7,8,9].map(l => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={addSpell}
          className="w-full bg-burgundy hover:bg-burgundy-dark text-parchment font-semibold py-2.5 rounded-full transition text-sm"
        >
          <i className="fa-solid fa-plus mr-2" />
          Add Spell
        </button>
        {onSkip && (
          <button
            type="button"
            onClick={onSkip}
            className="w-full bg-charcoal-lighter hover:bg-charcoal-lighter/80 text-parchment-dark py-2.5 rounded-full transition text-sm"
          >
            Skip this step
          </button>
        )}
      </div>
    </div>
  )
}

export function isStepValid() {
  return true
}
