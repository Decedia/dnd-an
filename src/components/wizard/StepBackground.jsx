export default function StepBackground({ character, updateCharacter }) {
  const bg = character.background || {}
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-title text-gold mb-6">Background</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-parchment-dark text-sm mb-2 uppercase tracking-wide">Background Name</label>
          <input
            type="text"
            value={bg.name || ''}
            onChange={e => updateCharacter({ background: { ...bg, name: e.target.value } })}
            className="w-full bg-charcoal-lighter text-parchment rounded-lg px-4 py-3 text-lg"
            placeholder="e.g. Soldier, Sage, Criminal"
          />
        </div>
        <div>
          <label className="block text-parchment-dark text-sm mb-2 uppercase tracking-wide">Personality Trait 1</label>
          <textarea
            value={bg.trait1 || ''}
            onChange={e => updateCharacter({ background: { ...bg, trait1: e.target.value } })}
            className="w-full bg-charcoal-lighter text-parchment rounded-lg px-4 py-3 text-base"
            rows={2}
            placeholder="I..."
          />
        </div>
        <div>
          <label className="block text-parchment-dark text-sm mb-2 uppercase tracking-wide">Personality Trait 2</label>
          <textarea
            value={bg.trait2 || ''}
            onChange={e => updateCharacter({ background: { ...bg, trait2: e.target.value } })}
            className="w-full bg-charcoal-lighter text-parchment rounded-lg px-4 py-3 text-base"
            rows={2}
            placeholder="I..."
          />
        </div>
        <div>
          <label className="block text-parchment-dark text-sm mb-2 uppercase tracking-wide">Ideal</label>
          <textarea
            value={bg.ideal || ''}
            onChange={e => updateCharacter({ background: { ...bg, ideal: e.target.value } })}
            className="w-full bg-charcoal-lighter text-parchment rounded-lg px-4 py-3 text-base"
            rows={2}
            placeholder="I will..."
          />
        </div>
        <div>
          <label className="block text-parchment-dark text-sm mb-2 uppercase tracking-wide">Bond</label>
          <textarea
            value={bg.bond || ''}
            onChange={e => updateCharacter({ background: { ...bg, bond: e.target.value } })}
            className="w-full bg-charcoal-lighter text-parchment rounded-lg px-4 py-3 text-base"
            rows={2}
            placeholder="I..."
          />
        </div>
        <div>
          <label className="block text-parchment-dark text-sm mb-2 uppercase tracking-wide">Flaw</label>
          <textarea
            value={bg.flaw || ''}
            onChange={e => updateCharacter({ background: { ...bg, flaw: e.target.value } })}
            className="w-full bg-charcoal-lighter text-parchment rounded-lg px-4 py-3 text-base"
            rows={2}
            placeholder="I..."
          />
        </div>
      </div>
    </div>
  )
}

export function isStepValid() {
  return true
}
