const RACES = [
  { value: 'Human', label: 'Human', desc: 'Versatile and ambitious, humans thrive in diverse environments.' },
  { value: 'Elf', label: 'Elf', desc: 'Graceful and long-lived, elves possess keen senses and magical affinity.' },
  { value: 'Dwarf', label: 'Dwarf', desc: 'Stout and resilient, dwarves are master craftsfolk and steadfast warriors.' },
  { value: 'Halfling', label: 'Halfling', desc: 'Small and cheerful, halflings are nimble, lucky, and surprisingly brave.' },
]

export default function StepRace({ character, updateCharacter }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-title text-gold mb-6">Race</h2>
      <div className="grid grid-cols-1 gap-3">
        {RACES.map(race => {
          const selected = character.race === race.value
          return (
            <button
              key={race.value}
              type="button"
              onClick={() => updateCharacter({ race: race.value })}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                selected
                  ? 'bg-burgundy/20 border-gold shadow-lg shadow-gold/10'
                  : 'bg-charcoal-light border-charcoal-lighter hover:border-parchment-dark'
              }`}
            >
              <div className="text-parchment font-semibold text-lg">{race.label}</div>
              <div className="text-parchment-dark text-sm mt-1">{race.desc}</div>
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
