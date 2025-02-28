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
    if (newBasePrice <= minStep && newBasePrice <= maxStep && operator === -1) {
      return { base: newBasePrice, limitReached: true };
    }

    let stepValue;

    if (newBasePrice < threshold && operator > 0) {
      stepValue = minStep;
    } else if (newBasePrice > threshold && operator < 0) {
      stepValue = minStep;
    } else {
      stepValue = maxStep;
    }

    newBasePrice += stepValue * operator;

    newBasePrice = roundValue(newBasePrice);
  }

  return { base: newBasePrice, limitReached: false };
};
