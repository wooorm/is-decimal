/**
 * Check if the given code point, or the code point at the first index, is
 * decimal.
 *
 * @param {string|number} value
 *   Code point or string.
 * @returns {boolean}
 *   Whether `value` is decimal.
 */
export function isDecimal(value) {
  const code = typeof value === 'string' ? value.codePointAt(0) : value

  return code !== undefined && code >= 48 && code <= 57 /* 0-9 */
}
