/**
 * Check if the given character code, or the character code at the first
 * character, is decimal.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is a decimal
 */
export function isDecimal(character) {
  const code =
    typeof character === 'string' ? character.codePointAt(0) : character

  return code !== undefined && code >= 48 && code <= 57 /* 0-9 */
}
