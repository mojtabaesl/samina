export function formatCardNumber(cardNumber: string) {
  cardNumber = cardNumber.replace(/\D/g, '');
  const parts = cardNumber.match(/[\s\S]{1,4}/g);
  return parts?.join('-');
}

export function formatIBAN(iban: string) {
  const removedNonAlphanumeric = iban.replace(/[^a-zA-Z0-9]/g, '');

  return removedNonAlphanumeric.replace(
    /(.{2})(.{2})(.{4})(.{4})(.{4})(.{4})(.{2})/,
    '$1-$2-$3-$4-$5-$6-$7'
  );
}
