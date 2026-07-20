/**
 * Counts the number of non-empty "words" in a text string.
 * A word is any substring produced by splitting on spaces that
 * is not an empty string (matches original behavior exactly).
 *
 * @param {string} text - The input text to analyze.
 * @returns {number} The count of non-empty words.
 */
function analyze(text) {
  return text
    .split(" ")                  // Split the text into chunks by single spaces
    .filter(word => word !== "") // Keep only non-empty chunks
    .length;                     // Count them
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = analyze;
}
