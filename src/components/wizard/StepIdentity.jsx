const ALIGNMENTS = [
  'Lawful Good', 'Neutral Good', 'Chaotic Good',
  'Lawful Neutral', 'True Neutral', 'Chaotic Neutral',
  'Lawful Evil', 'Neutral Evil', 'Chaotic Evil',
]

export default function StepIdentity({ character, updateCharacter }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-title text-gold mb-6">Identity</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-parchment-dark text-sm mb-2 uppercase tracking-wide">
            Character Name <span className="text-burgundy">*</span>
          </label>
          <input
            type="text"
            value={character.name || ''}
            onChange={e => updateCharacter({ name: e.target.value })}
            className="w-full bg-charcoal-lighter text-parchment rounded-lg px-4 py-3 text-lg"
            placeholder="Enter character name"
          />
        </div>
        <div>
          <label className="block text-parchment-dark text-sm mb-2 uppercase tracking-wide">Player Name</label>
          <input
            type="text"
            value={character.playerName || ''}
            onChange={e => updateCharacter({ playerName: e.target.value })}
            className="w-full bg-charcoal-lighter text-parchment rounded-lg px-4 py-3 text-lg"
            placeholder="Your name (optional)"
          />
        </div>
        <div>
          <label className="block text-parchment-dark text-sm mb-2 uppercase tracking-wide">Alignment</label>
          <select
            value={character.alignment || ''}
            onChange={e => updateCharacter({ alignment: e.target.value })}
            className="w-full bg-charcoal-lighter text-parchment rounded-lg px-4 py-3 text-lg"
          >
            <option value="">Choose an alignment...</option>
            {ALIGNMENTS.map(a => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export function isStepValid(character) {
  return !!character.name?.trim()
}
