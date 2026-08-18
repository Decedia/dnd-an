import React from 'react'
import srd from '../../data/srd.json'

export default function StepClass({ character, updateCharacter }) {
  const classes = srd.classes

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-title text-gold mb-6">Class</h2>
      <div className="grid grid-cols-1 gap-3">
        {classes.map(cls => {
          const selected = character.class === cls.name
          return (
            <button
              key={cls.name}
              type="button"
              onClick={() => updateCharacter({ class: cls.name })}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                selected
                  ? 'bg-burgundy/20 border-gold shadow-lg shadow-gold/10'
                  : 'bg-charcoal-light border-charcoal-lighter hover:border-parchment-dark'
              }`}
            >
              <div className="text-parchment font-semibold text-lg">{cls.name}</div>
              <div className="text-parchment-dark text-sm mt-1">{cls.flavor}</div>
              {selected && (
                <div className="mt-3 space-y-1">
                  {cls.features.map((feature, i) => (
                    <div key={i} className="text-parchment-dark text-xs">
                      <span className="text-gold font-semibold">{feature.name}:</span> {feature.description}
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
  return !!character.class
}
