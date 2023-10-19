export function validatePinCode(pinCode: string) {
  return /^[0-9]+$/.test(pinCode);
}
