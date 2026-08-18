import React from 'react'
import srd from '../../data/srd.json'

export default function StepRace({ character, updateCharacter }) {
  const races = srd.races

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-title text-gold mb-6">Race</h2>
      <div className="grid grid-cols-1 gap-3">
        {races.map(race => {
          const selected = character.race === race.name
          return (
            <button
              key={race.name}
              type="button"
              onClick={() => updateCharacter({ race: race.name })}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                selected
                  ? 'bg-burgundy/20 border-gold shadow-lg shadow-gold/10'
                  : 'bg-charcoal-light border-charcoal-lighter hover:border-parchment-dark'
              }`}
            >
              <div className="text-parchment font-semibold text-lg">{race.name}</div>
              <div className="text-parchment-dark text-sm mt-1">
                {race.size} | Speed {race.speed} ft. | {race.darkvision ? `Darkvision ${race.darkvisionRange} ft.` : 'No darkvision'}
              </div>
              {selected && (
                <div className="mt-3 space-y-1">
                  {race.traits.map((trait, i) => (
                    <div key={i} className="text-parchment-dark text-xs">
                      <span className="text-gold font-semibold">{trait.name}:</span> {trait.description}
                    </div>
                  ))}
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function isStepValid(character) {
  return !!character.race
}
