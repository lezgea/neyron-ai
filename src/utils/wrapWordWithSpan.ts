export function wrapWordWithSpan(text: string, wordToWrap: string) {
  // Escape special characters in the word for regex
  const escapedWord = wordToWrap.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Create a regular expression to match the word globally
  const regex = new RegExp(`\\b(${escapedWord})\\b`, 'gi');

  // Wrap the matched word(s) with span tags
  const newText = text.replace(regex, '<span>$1</span>');

  // Enclose the modified text within a paragraph tag
  const wrappedText = `<p>${newText}</p>`;

  return wrappedText;
}


