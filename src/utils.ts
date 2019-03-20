function splitTextWithHighlight(text, highlight) {
  const match = text.match(`(${highlight})`);
  if (!match) {
    return ['', text, ''];
  }

  const start = match.index;
  const end = start + highlight.length;

  const first = text.slice(0, start);
  const second = text.slice(start, end);
  const last = text.slice(end);

  return [first, second, last];
}

export { splitTextWithHighlight };
