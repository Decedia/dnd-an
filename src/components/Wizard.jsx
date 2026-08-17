import { useState } from 'react'
import { useNavigate, useNavigationParams } from '../utils/navigation.jsx'
import {
  StepIdentity,
  StepRace,
  StepClass,
  StepAbilityScores,
  StepBackground,
  StepSkills,
  StepEquipment,
  StepSpells,
  StepFinalTouches,
} from './wizard/index.js'

const STEPS = [
  { key: 'identity', label: 'Identity', Component: StepIdentity },
  { key: 'race', label: 'Race', Component: StepRace },
  { key: 'class', label: 'Class', Component: StepClass },
  { key: 'abilities', label: 'Abilities', Component: StepAbilityScores },
  { key: 'background', label: 'Background', Component: StepBackground },
  { key: 'skills', label: 'Skills', Component: StepSkills },
  { key: 'equipment', label: 'Equipment', Component: StepEquipment },
  { key: 'spells', label: 'Spells', Component: StepSpells },
  { key: 'final', label: 'Final', Component: StepFinalTouches },
]

const stepValidators = [
  StepIdentity.isStepValid,
  StepRace.isStepValid,
  StepClass.isStepValid,
  StepAbilityScores.isStepValid,
  StepBackground.isStepValid,
  StepSkills.isStepValid,
  StepEquipment.isStepValid,
  StepSpells.isStepValid,
  StepFinalTouches.isStepValid,
]

export default function Wizard({ onSave }) {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [character, setCharacter] = useState({
    id: crypto.randomUUID(),
    name: '',
    race: '',
    class: '',
    str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10,
    abilityMethod: 'standard',
    abilityScores: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
    skills: [],
    equipment: [],
    spells: [],
    background: {},
    finalTouches: {},
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

  const handleFinish = () => {
    onSave(character)
    navigate('character', { id: character.id })
  }

  const handleSkipSpells = () => {
    setStep(s => s + 1)
  }

  const CurrentStepComponent = STEPS[step].Component
  const isLastStep = step === STEPS.length - 1
  const isSpellsStep = step === 7
  const validator = stepValidators[step]
  const canProceed = validator ? validator(character) : true

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => navigate('home')} className="text-parchment-dark hover:text-parchment text-sm">
          <i className="fa-solid fa-arrow-left mr-2" />
          Cancel
        </button>
        <h1 className="text-xl font-title text-gold">New Character</h1>
        <div className="w-16" />
      </div>

      <div className="mb-6">
        <div className="flex gap-1.5 mb-2">
          {STEPS.map((s, i) => (
            <div
              key={s.key}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i <= step ? 'bg-gold' : 'bg-charcoal-lighter'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-sm text-parchment-dark mt-2">
          Step {step + 1} of {STEPS.length}: {STEPS[step].label}
        </p>
      </div>

      <div className="bg-parchment text-charcoal rounded-xl p-5 min-h-[320px]">
        {isSpellsStep ? (
          <CurrentStepComponent
            character={character}
            updateCharacter={updateCharacter}
            onSkip={handleSkipSpells}
          />
        ) : (
          <CurrentStepComponent character={character} updateCharacter={updateCharacter} />
        )}
      </div>

      <div className="flex gap-3 mt-6 pb-4">
        {step > 0 && (
          <button
            onClick={goBack}
            className="flex-1 bg-charcoal-light hover:bg-charcoal-lighter text-parchment font-semibold py-3 rounded-full transition"
          >
            <i className="fa-solid fa-arrow-left mr-2" />
            Back
          </button>
        )}
        {!isLastStep ? (
          <button
            onClick={goNext}
            disabled={!canProceed}
            className="flex-1 bg-burgundy hover:bg-burgundy-dark text-parchment font-semibold py-3 rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <i className="fa-solid fa-arrow-right ml-2" />
          </button>
        ) : (
          <button
            onClick={handleFinish}
            className="flex-1 bg-gold hover:bg-gold-dark text-charcoal font-bold py-3 rounded-full transition"
          >
            <i className="fa-solid fa-floppy-disk mr-2" />
            Finish &amp; Save
          </button>
        )}
      </div>
    </div>
  )
}
