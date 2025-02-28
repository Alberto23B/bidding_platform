import { InputData } from '../types/types';

export default function checkForZero(inputData: InputData) {
  if (!inputData.base || !inputData.minStep || !inputData.maxStep) {
    return false;
  }
  return true;
}
