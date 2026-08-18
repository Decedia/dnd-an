import React from 'react'
import srd from '../../data/srd.json'

const ABILITIES = ['str', 'dex', 'con', 'int', 'wis', 'cha']
const ABILITY_LABELS = { str: 'Strength', dex: 'Dexterity', con: 'Constitution', int: 'Intelligence', wis: 'Wisdom', cha: 'Charisma' }

const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8]
const POINT_COSTS = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9 }
const POINT_BUY_TOTAL = 27

export default function StepAbilityScores({ character, updateCharacter }) {
  const method = character.abilityMethod || 'standard'
  const scores = character.abilityScores || { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 }
  const selectedRace = srd.races.find(r => r.name === character.race)
  const racialBonuses = selectedRace ? selectedRace.abilityScoreIncrease : {}

  function getModifier(score) {
    const mod = Math.floor((score - 10) / 2)
    return mod >= 0 ? `+${mod}` : `${mod}`
  }

  function setMethod(m) {
    updateCharacter({ abilityMethod: m })
  }

  function setScore(ability, value) {
    updateCharacter({ abilityScores: { ...scores, [ability]: value } })
  }

  const remainingPoints = POINT_BUY_TOTAL - ABILITIES.reduce((sum, ab) => {
    const score = scores[ab]
    return sum + (POINT_COSTS[score] ?? 0)
  }, 0)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-title text-gold mb-2">Ability Scores</h2>
      {selectedRace && (
        <p className="text-parchment-dark text-xs">
          Racial bonuses from {selectedRace.name} are applied automatically.
        </p>
      )}
      <div className="flex gap-2 mb-4">
        {['standard', 'pointbuy', 'manual'].map(m => (
          <button
            key={m}
            type="button"
            onClick={() => setMethod(m)}
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition ${
              method === m ? 'bg-gold text-charcoal' : 'bg-charcoal-light text-parchment-dark hover:text-parchment'
            }`}
          >
            {m === 'standard' ? 'Standard Array' : m === 'pointbuy' ? 'Point Buy' : 'Manual Entry'}
          </button>
        ))}
      </div>

      {method === 'standard' && (
        <div className="space-y-3">
          {ABILITIES.map(ab => {
            const base = scores[ab]
            const racial = racialBonuses[ab] || 0
            const finalScore = base + racial
            return (
              <div key={ab} className="bg-charcoal-light rounded-lg p-3">
                <label className="block text-parchment-dark text-xs uppercase tracking-wide mb-2">{ABILITY_LABELS[ab]}</label>
                <select
                  value={base}
                  onChange={e => setScore(ab, parseInt(e.target.value))}
                  className="w-full bg-charcoal-lighter text-parchment rounded px-3 py-2 text-lg"
                >
                  {STANDARD_ARRAY.map(v => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
                <div className="flex items-center justify-between mt-2 text-sm">
                  <span className="text-parchment-dark">
                    Base: <span className="text-parchment font-semibold">{base}</span>
                    {racial !== 0 && (
                      <span> + <span className="text-gold font-semibold">{racial > 0 ? '+' : ''}{racial}</span> racial</span>
                    )}
                  </span>
                  <span className="text-parchment font-semibold">Final: {finalScore}</span>
                </div>
                <p className="text-parchment-dark text-sm mt-1">Modifier: {getModifier(finalScore)}</p>
              </div>
            )
          })}
        </div>
      )}

      {method === 'pointbuy' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-charcoal-light rounded-lg px-4 py-2">
            <span className="text-parchment-dark text-sm">Remaining Points</span>
            <span className={`text-lg font-bold ${remainingPoints < 0 ? 'text-burgundy' : 'text-gold'}`}>{remainingPoints}</span>
          </div>
          {ABILITIES.map(ab => {
            const base = scores[ab]
            const racial = racialBonuses[ab] || 0
            const finalScore = base + racial
            const cost = POINT_COSTS[base] ?? 0
            const canIncrement = remainingPoints >= (POINT_COSTS[base + 1] ?? 0)
            const canDecrement = base > 8
            return (
              <div key={ab} className="bg-charcoal-light rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <label className="text-parchment-dark text-xs uppercase tracking-wide">{ABILITY_LABELS[ab]}</label>
                  <span className="text-parchment-dark text-sm">Modifier: {getModifier(finalScore)}</span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setScore(ab, Math.max(8, base - 1))}
                    disabled={!canDecrement}
                    className="w-8 h-8 rounded-full bg-charcoal-lighter text-parchment hover:bg-charcoal-lighter/80 disabled:opacity-40 transition flex items-center justify-center"
                  >
                    <i className="fa-solid fa-minus text-xs" />
                  </button>
                  <span className="text-2xl font-bold text-parchment w-10 text-center">{base}</span>
                  <button
                    type="button"
                    onClick={() => setScore(ab, Math.min(15, base + 1))}
                    disabled={!canIncrement}
                    className="w-8 h-8 rounded-full bg-charcoal-lighter text-parchment hover:bg-charcoal-lighter/80 disabled:opacity-40 transition flex items-center justify-center"
                  >
                    <i className="fa-solid fa-plus text-xs" />
                  </button>
                  <span className="text-parchment-dark text-sm ml-auto">{cost} pts</span>
                  {racial !== 0 && (
                    <span className="text-xs text-gold">+{racial} racial = {finalScore}</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {method === 'manual' && (
        <div className="space-y-3">
          {ABILITIES.map(ab => {
            const base = scores[ab]
            const racial = racialBonuses[ab] || 0
            const finalScore = base + racial
            return (
              <div key={ab} className="bg-charcoal-light rounded-lg p-3">
                <label className="block text-parchment-dark text-xs uppercase tracking-wide mb-2">{ABILITY_LABELS[ab]}</label>
                <input
                  type="number"
                  value={base}
                  onChange={e => setScore(ab, parseInt(e.target.value) || 0)}
                  className="w-full bg-charcoal-lighter text-parchment rounded px-3 py-2 text-lg"
                  min="1"
                  max="20"
                />
                <div className="flex items-center justify-between mt-2 text-sm">
                  <span className="text-parchment-dark">
                    Base: <span className="text-parchment font-semibold">{base}</span>
                    {racial !== 0 && (
                      <span> + <span className="text-gold font-semibold">{racial > 0 ? '+' : ''}{racial}</span> racial</span>
                    )}
                  </span>
                  <span className="text-parchment font-semibold">Final: {finalScore}</span>
                </div>
                <p className="text-parchment-dark text-sm mt-1">Modifier: {getModifier(finalScore)}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export function isStepValid(character) {
  return true
}
