import { useState } from 'react'
import { useNavigate } from '../utils/navigation.jsx'

const STEPS = [
  'Ability Scores',
  'Race',
  'Class',
  'Skills',
  'Equipment',
  'Spells',
  'Summary',
]

function StepAbilityScores({ character, updateCharacter }) {
  const stats = ['str', 'dex', 'con', 'int', 'wis', 'cha']
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-title text-gold mb-6">Ability Scores</h2>
      {stats.map(stat => (
        <div key={stat} className="bg-charcoal-light rounded-lg p-4">
          <label className="block text-parchment-dark text-sm mb-2 uppercase tracking-wide">{stat}</label>
          <input
            type="number"
            value={character[stat] || 10}
            onChange={e => updateCharacter({ [stat]: parseInt(e.target.value) || 0 })}
            className="w-full bg-charcoal-lighter text-parchment rounded px-3 py-2 text-lg"
            min="1"
            max="20"
          />
        </div>
      ))}
    </div>
  )
}

function StepRace({ character, updateCharacter }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-title text-gold mb-6">Race</h2>
      <div className="bg-charcoal-light rounded-lg p-4">
        <label className="block text-parchment-dark text-sm mb-2">Select Race</label>
        <select
          value={character.race || ''}
          onChange={e => updateCharacter({ race: e.target.value })}
          className="w-full bg-charcoal-lighter text-parchment rounded px-3 py-3 text-lg"
        >
          <option value="">Choose a race...</option>
          <option value="dragonborn">Dragonborn</option>
          <option value="dwarf">Dwarf</option>
          <option value="elf">Elf</option>
          <option value="gnome">Gnome</option>
          <option value="half-elf">Half-Elf</option>
          <option value="half-orc">Half-Orc</option>
          <option value="halfling">Halfling</option>
          <option value="human">Human</option>
          <option value="tiefling">Tiefling</option>
        </select>
      </div>
    </div>
  )
}

function StepClass({ character, updateCharacter }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-title text-gold mb-6">Class</h2>
      <div className="bg-charcoal-light rounded-lg p-4">
        <label className="block text-parchment-dark text-sm mb-2">Select Class</label>
        <select
          value={character.class || ''}
          onChange={e => updateCharacter({ class: e.target.value })}
          className="w-full bg-charcoal-lighter text-parchment rounded px-3 py-3 text-lg"
        >
          <option value="">Choose a class...</option>
          <option value="barbarian">Barbarian</option>
          <option value="bard">Bard</option>
          <option value="cleric">Cleric</option>
          <option value="druid">Druid</option>
          <option value="fighter">Fighter</option>
          <option value="monk">Monk</option>
          <option value="paladin">Paladin</option>
          <option value="ranger">Ranger</option>
          <option value="rogue">Rogue</option>
          <option value="sorcerer">Sorcerer</option>
          <option value="warlock">Warlock</option>
          <option value="wizard">Wizard</option>
        </select>
      </div>
    </div>
  )
}

function StepSkills({ character, updateCharacter }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-title text-gold mb-6">Skills</h2>
      <div className="bg-charcoal-light rounded-lg p-4">
        <p className="text-parchment-dark">Skill selection coming soon.</p>
      </div>
    </div>
  )
}

function StepEquipment({ character, updateCharacter }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-title text-gold mb-6">Equipment</h2>
      <div className="bg-charcoal-light rounded-lg p-4">
        <p className="text-parchment-dark">Equipment selection coming soon.</p>
      </div>
    </div>
  )
}

function StepSpells({ character, updateCharacter }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-title text-gold mb-6">Spells</h2>
      <div className="bg-charcoal-light rounded-lg p-4">
        <p className="text-parchment-dark">Spell selection coming soon.</p>
      </div>
    </div>
  )
}

function StepSummary({ character }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-title text-gold mb-6">Summary</h2>
      <div className="bg-charcoal-light rounded-lg p-4 space-y-2">
        <p className="text-parchment"><span className="text-parchment-dark">Name:</span> {character.name || 'Unnamed'}</p>
        <p className="text-parchment"><span className="text-parchment-dark">Race:</span> {character.race || '-'}</p>
        <p className="text-parchment"><span className="text-parchment-dark">Class:</span> {character.class || '-'}</p>
        <p className="text-parchment"><span className="text-parchment-dark">STR:</span> {character.str || '-'}</p>
        <p className="text-parchment"><span className="text-parchment-dark">DEX:</span> {character.dex || '-'}</p>
        <p className="text-parchment"><span className="text-parchment-dark">CON:</span> {character.con || '-'}</p>
        <p className="text-parchment"><span className="text-parchment-dark">INT:</span> {character.int || '-'}</p>
        <p className="text-parchment"><span className="text-parchment-dark">WIS:</span> {character.wis || '-'}</p>
        <p className="text-parchment"><span className="text-parchment-dark">CHA:</span> {character.cha || '-'}</p>
      </div>
    </div>
  )
}

const STEP_COMPONENTS = [
  StepAbilityScores,
  StepRace,
  StepClass,
  StepSkills,
  StepEquipment,
  StepSpells,
  StepSummary,
]

export default function Wizard({ onSave, onCancel }) {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [character, setCharacter] = useState({
    id: crypto.randomUUID(),
    name: '',
    race: '',
    class: '',
    str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10,
  })

  const updateCharacter = (updates) => {
    setCharacter(prev => ({ ...prev, ...updates }))
  }

  const goNext = () => {
    if (step < STEPS.length - 1) {
      setStep(s => s + 1)
    }
  }

  const goBack = () => {
    if (step > 0) {
      setStep(s => s - 1)
    }
  }

  const handleSave = () => {
    onSave(character)
  }

  const CurrentStepComponent = STEP_COMPONENTS[step]

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <button onClick={onCancel} className="text-parchment-dark hover:text-parchment text-sm">
          <i className="fa-solid fa-arrow-left mr-2" />
          Cancel
        </button>
        <h1 className="text-xl font-title text-gold">New Character</h1>
        <div className="w-16" />
      </div>

      <div className="mb-6">
        <div className="flex justify-between mb-2">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full mx-0.5 transition-colors ${
                i <= step ? 'bg-gold' : 'bg-charcoal-lighter'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-sm text-parchment-dark mt-2">
          Step {step + 1} of {STEPS.length}: {STEPS[step]}
        </p>
      </div>

      <div className="bg-parchment text-charcoal rounded-xl p-5 min-h-[320px]">
        <CurrentStepComponent character={character} updateCharacter={updateCharacter} />
      </div>

      <div className="flex gap-3 mt-6">
        {step > 0 && (
          <button
            onClick={goBack}
            className="flex-1 bg-charcoal-light hover:bg-charcoal-lighter text-parchment font-semibold py-3 rounded-full transition"
          >
            <i className="fa-solid fa-arrow-left mr-2" />
            Back
          </button>
        )}
        {step < STEPS.length - 1 ? (
          <button
            onClick={goNext}
            className="flex-1 bg-burgundy hover:bg-burgundy-dark text-parchment font-semibold py-3 rounded-full transition"
          >
            Next
            <i className="fa-solid fa-arrow-right ml-2" />
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="flex-1 bg-gold hover:bg-gold-dark text-charcoal font-bold py-3 rounded-full transition"
          >
            <i className="fa-solid fa-floppy-disk mr-2" />
            Save Character
          </button>
        )}
      </div>
    </div>
  )
}
