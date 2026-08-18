import React from 'react'
import srd from '../../data/srd.json'

const SKILLS = srd.skills

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
              <Tooltip text={skill.description} />
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
