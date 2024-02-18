// normalize greek text for search -- e.g. a word that contains 'έ' will still show up when searching for 'ε'

const normalizeGreekText = (text) => {
  return text
    .normalize('NFD') // Normalize to decomposed form
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
}

export { normalizeGreekText }
