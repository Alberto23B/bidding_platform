export interface InputData {
  base: number;
  minStep: number;
  maxStep: number;
  threshold: number;
  steps: number;
}

export interface FormProps {
  'currentBid': number;
  'handleChange': () => void;
  'handleSubmit': () => void;
  'handleReset': () => void;
}
