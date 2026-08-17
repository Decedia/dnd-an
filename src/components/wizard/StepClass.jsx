const CLASSES = [
  { value: 'Fighter', label: 'Fighter', desc: 'A master of martial combat, skilled with weapons and armor.' },
  { value: 'Wizard', label: 'Wizard', desc: 'A scholarly magic-user who commands arcane power through study.' },
  { value: 'Rogue', label: 'Rogue', desc: 'A stealthy trickster who excels at precision, subterfuge, and skill.' },
]

export default function StepClass({ character, updateCharacter }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-title text-gold mb-6">Class</h2>
      <div className="grid grid-cols-1 gap-3">
        {CLASSES.map(cls => {
          const selected = character.class === cls.value
          return (
            <button
              key={cls.value}
              type="button"
              onClick={() => updateCharacter({ class: cls.value })}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                selected
                  ? 'bg-burgundy/20 border-gold shadow-lg shadow-gold/10'
                  : 'bg-charcoal-light border-charcoal-lighter hover:border-parchment-dark'
              }`}
            >
              <div className="text-parchment font-semibold text-lg">{cls.label}</div>
              <div className="text-parchment-dark text-sm mt-1">{cls.desc}</div>
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
