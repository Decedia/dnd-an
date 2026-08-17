import React from 'react'

const PLACEHOLDER_ITEMS = {
  'Longsword': 'A versatile one-handed martial weapon, slashing or piercing.',
  'Shortbow': 'A simple ranged weapon ideal for hunters and scouts.',
  'Leather Armor': 'Light armor made from supple leather, offering basic protection.',
  'Shield': 'A sturdy metal or wooden shield that adds to your Armor Class.',
  'Potion of Healing': 'A common magical draught that restores hit points when consumed.',
}

export default function StepEquipment({ character, updateCharacter }) {
  const items = character.equipment || []
  const [name, setName] = React.useState('')
  const [qty, setQty] = React.useState(1)

  function addItem() {
    if (!name.trim()) return
    updateCharacter({ equipment: [...items, { name: name.trim(), quantity: qty }] })
    setName('')
    setQty(1)
  }

  function removeItem(index) {
    updateCharacter({ equipment: items.filter((_, i) => i !== index) })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-title text-gold mb-6">Equipment</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="bg-charcoal-light rounded-lg px-4 py-3 flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-parchment text-sm truncate">{item.name}</span>
                {PLACEHOLDER_ITEMS[item.name] && (
                  <span className="text-parchment-dark text-xs shrink-0" title={PLACEHOLDER_ITEMS[item.name]}>
                    <i className="fa-solid fa-circle-info" />
                  </span>
                )}
              </div>
              <span className="text-parchment-dark text-xs">Qty: {item.quantity}</span>
            </div>
            <button
              type="button"
              onClick={() => removeItem(i)}
              className="text-parchment-dark hover:text-burgundy ml-3 transition"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-parchment-dark text-sm text-center py-4">No equipment added yet.</p>
        )}
      </div>

      <div className="bg-charcoal-light rounded-lg p-4 space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="flex-1 bg-charcoal-lighter text-parchment rounded-lg px-4 py-2 text-base"
            placeholder="Item name"
            onKeyDown={e => e.key === 'Enter' && addItem()}
          />
          <input
            type="number"
            value={qty}
            onChange={e => setQty(parseInt(e.target.value) || 1)}
            className="w-16 bg-charcoal-lighter text-parchment rounded-lg px-3 py-2 text-base text-center"
            min="1"
          />
        </div>
        <button
          type="button"
          onClick={addItem}
          className="w-full bg-burgundy hover:bg-burgundy-dark text-parchment font-semibold py-2.5 rounded-full transition text-sm"
        >
          <i className="fa-solid fa-plus mr-2" />
          Add Item
        </button>
      </div>
    </div>
  )
}

export function isStepValid() {
  return true
}
