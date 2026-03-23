export interface CardMetrics {
  left: number;
  width: number;
}

export function getCenteredCardIndex(
  cards: CardMetrics[],
  containerLeft: number,
  containerWidth: number,
) {
  if (cards.length === 0) {
    return 0;
  }

  const center = containerLeft + containerWidth / 2;
  let bestIndex = 0;
  let bestDistance = Number.POSITIVE_INFINITY;

  cards.forEach((card, index) => {
    const distance = Math.abs(card.left + card.width / 2 - center);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = index;
    }
  });

  return bestIndex;
}
