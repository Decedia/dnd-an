export const STORAGE_KEYS = {
  CHAR_INDEX: 'dnd-char-index',
  CHAR_PREFIX: 'dnd-char-',
}

export function saveCharacter(character) {
  const key = `${STORAGE_KEYS.CHAR_PREFIX}${character.id}`
  localStorage.setItem(key, JSON.stringify(character))

  const index = listCharacters()
  const existing = index.find(c => c.id === character.id)
  if (!existing) {
    index.push({ id: character.id, name: character.name || 'Untitled' })
    localStorage.setItem(STORAGE_KEYS.CHAR_INDEX, JSON.stringify(index))
  } else {
    existing.name = character.name || 'Untitled'
    localStorage.setItem(STORAGE_KEYS.CHAR_INDEX, JSON.stringify(index))
  }
}

export function loadCharacter(id) {
  const key = `${STORAGE_KEYS.CHAR_PREFIX}${id}`
  const raw = localStorage.getItem(key)
  if (!raw) return null
  return JSON.parse(raw)
}

export function listCharacters() {
  const raw = localStorage.getItem(STORAGE_KEYS.CHAR_INDEX)
  if (!raw) return []
  return JSON.parse(raw)
}

export function deleteCharacter(id) {
  const key = `${STORAGE_KEYS.CHAR_PREFIX}${id}`
  localStorage.removeItem(key)
  const index = listCharacters().filter(c => c.id !== id)
  localStorage.setItem(STORAGE_KEYS.CHAR_INDEX, JSON.stringify(index))
}

export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}
