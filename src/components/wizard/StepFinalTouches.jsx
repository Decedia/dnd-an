export default function StepFinalTouches({ character, updateCharacter }) {
  const ft = character.finalTouches || {}
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-title text-gold mb-6">Final Touches</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-parchment-dark text-sm mb-2 uppercase tracking-wide">Age</label>
          <input
            type="text"
            value={ft.age || ''}
            onChange={e => updateCharacter({ finalTouches: { ...ft, age: e.target.value } })}
            className="w-full bg-charcoal-lighter text-parchment rounded-lg px-4 py-3 text-base"
            placeholder="e.g. 25"
          />
        </div>
        <div>
          <label className="block text-parchment-dark text-sm mb-2 uppercase tracking-wide">Height</label>
          <input
            type="text"
            value={ft.height || ''}
            onChange={e => updateCharacter({ finalTouches: { ...ft, height: e.target.value } })}
            className="w-full bg-charcoal-lighter text-parchment rounded-lg px-4 py-3 text-base"
            placeholder="e.g. 6&apos;0&quot;"
          />
        </div>
        <div>
          <label className="block text-parchment-dark text-sm mb-2 uppercase tracking-wide">Weight</label>
          <input
            type="text"
            value={ft.weight || ''}
            onChange={e => updateCharacter({ finalTouches: { ...ft, weight: e.target.value } })}
            className="w-full bg-charcoal-lighter text-parchment rounded-lg px-4 py-3 text-base"
            placeholder="e.g. 180 lbs"
          />
        </div>
        <div>
          <label className="block text-parchment-dark text-sm mb-2 uppercase tracking-wide">Eyes</label>
          <input
            type="text"
            value={ft.eyes || ''}
            onChange={e => updateCharacter({ finalTouches: { ...ft, eyes: e.target.value } })}
            className="w-full bg-charcoal-lighter text-parchment rounded-lg px-4 py-3 text-base"
            placeholder="e.g. Blue"
          />
        </div>
        <div>
          <label className="block text-parchment-dark text-sm mb-2 uppercase tracking-wide">Skin</label>
          <input
            type="text"
            value={ft.skin || ''}
            onChange={e => updateCharacter({ finalTouches: { ...ft, skin: e.target.value } })}
            className="w-full bg-charcoal-lighter text-parchment rounded-lg px-4 py-3 text-base"
            placeholder="e.g. Fair"
          />
        </div>
        <div>
          <label className="block text-parchment-dark text-sm mb-2 uppercase tracking-wide">Hair</label>
          <input
            type="text"
            value={ft.hair || ''}
            onChange={e => updateCharacter({ finalTouches: { ...ft, hair: e.target.value } })}
            className="w-full bg-charcoal-lighter text-parchment rounded-lg px-4 py-3 text-base"
            placeholder="e.g. Brown"
          />
        </div>
      </div>
      <div>
        <label className="block text-parchment-dark text-sm mb-2 uppercase tracking-wide">Backstory</label>
        <textarea
          value={ft.backstory || ''}
          onChange={e => updateCharacter({ finalTouches: { ...ft, backstory: e.target.value } })}
          className="w-full bg-charcoal-lighter text-parchment rounded-lg px-4 py-3 text-base"
          rows={5}
          placeholder="Tell your character&apos;s story..."
        />
      </div>
    </div>
  )
}

export function isStepValid() {
  return true
}
