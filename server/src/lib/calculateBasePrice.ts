const roundValue = (input: number) => {
  return Number.parseFloat(input.toFixed(2));
};

export const calculateBasePrice = ({
  base,
  minStep,
  maxStep,
  threshold,
  steps,
}: {
  base: number;
  minStep: number;
  maxStep: number;
  threshold: number;
  steps: number;
}) => {
  let newBasePrice = base;
  const operator = Math.sign(steps);
  const repetitions = Math.abs(steps);

  for (let i = 0; i < repetitions; i++) {
    if (newBasePrice <= minStep && newBasePrice <= maxStep) {
      return newBasePrice;
    }

    if (newBasePrice < threshold) {
      newBasePrice += minStep * operator;
    } else if (newBasePrice > threshold) {
      newBasePrice += maxStep * operator;
    } else {
      if (operator === 1) {
        newBasePrice += maxStep * operator;
      } else {
        newBasePrice += minStep * operator;
      }
    }
    newBasePrice = roundValue(newBasePrice);
  }

  return newBasePrice;
};
