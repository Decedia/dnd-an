import React from 'react'

const SKILLS = [
  { key: 'acrobatics', name: 'Acrobatics', ability: 'Dex', desc: 'Used for balancing, tumbling, and performing aerial maneuvers.' },
  { key: 'animalHandling', name: 'Animal Handling', ability: 'Wis', desc: 'Used for calming, training, or reading the intentions of animals.' },
  { key: 'arcana', name: 'Arcana', ability: 'Int', desc: 'Used for recalling lore about spells, magic items, and magical phenomena.' },
  { key: 'athletics', name: 'Athletics', ability: 'Str', desc: 'Used for climbing, jumping, and swimming.' },
  { key: 'deception', name: 'Deception', ability: 'Cha', desc: 'Used for lying, disguising, or misleading others.' },
  { key: 'history', name: 'History', ability: 'Int', desc: 'Used for recalling lore about historical events, legends, and cultures.' },
  { key: 'insight', name: 'Insight', ability: 'Wis', desc: 'Used for reading body language, detecting lies, and gauging emotions.' },
  { key: 'intimidation', name: 'Intimidation', ability: 'Cha', desc: 'Used for threatening, bullying, or cowing others into submission.' },
  { key: 'investigation', name: 'Investigation', ability: 'Int', desc: 'Used for finding clues, piecing together puzzles, and deducing facts.' },
  { key: 'medicine', name: 'Medicine', ability: 'Wis', desc: 'Used for stabilizing the dying, diagnosing illness, and treating wounds.' },
  { key: 'nature', name: 'Nature', ability: 'Int', desc: 'Used for recalling lore about terrain, plants, animals, and weather.' },
  { key: 'perception', name: 'Perception', ability: 'Wis', desc: 'Used for spotting, hearing, or otherwise noticing hidden details.' },
  { key: 'performance', name: 'Performance', ability: 'Cha', desc: 'Used for entertaining others through music, dance, oratory, or acting.' },
  { key: 'persuasion', name: 'Persuasion', ability: 'Cha', desc: 'Used for negotiating, cajoling, or charming others to your point of view.' },
  { key: 'religion', name: 'Religion', ability: 'Int', desc: 'Used for recalling lore about deities, rites, prayers, and holy symbols.' },
  { key: 'sleightOfHand', name: 'Sleight of Hand', ability: 'Dex', desc: 'Used for picking pockets, planting items, or performing manual tricks.' },
  { key: 'stealth', name: 'Stealth', ability: 'Dex', desc: 'Used for hiding, moving silently, or avoiding notice.' },
  { key: 'survival', name: 'Survival', ability: 'Wis', desc: 'Used for tracking, foraging, navigating the wilds, and predicting weather.' },
]

function Tooltip({ text, children }) {
  const [open, setOpen] = React.useState(false)
  return (
    <span className="relative inline-flex items-center ml-1">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-parchment-dark hover:text-gold transition text-xs"
      >
        <i className="fa-solid fa-circle-info" />
      </button>
      {open && (
        <>
          <span className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute z-50 left-0 top-full mt-1 w-64 bg-charcoal-lighter border border-charcoal-lighter rounded-lg p-3 shadow-xl text-xs text-parchment">
            {text}
          </div>
        </>
      )}
    </span>
  )
}

export default function StepSkills({ character, updateCharacter }) {
  const selected = character.skills || []

  function toggle(key) {
    if (selected.includes(key)) {
      updateCharacter({ skills: selected.filter(s => s !== key) })
    } else {
      updateCharacter({ skills: [...selected, key] })
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-title text-gold mb-6">Skills</h2>
      <div className="bg-charcoal-light rounded-xl divide-y divide-charcoal-lighter">
        {SKILLS.map(skill => {
          const checked = selected.includes(skill.key)
          return (
            <label
              key={skill.key}
              className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-charcoal-lighter/50 transition"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggle(skill.key)}
                className="w-5 h-5 rounded border-charcoal-lighter text-burgundy focus:ring-burgundy bg-charcoal-lighter"
              />
              <span className="flex-1 text-parchment text-sm">{skill.name} ({skill.ability})</span>
              <Tooltip text={skill.desc} />
            </label>
          )
        })}
      </div>
    </div>
  )
}

export function isStepValid() {
  return true
}
