function luhnCheck(value) {
  if (/[^0-9-\s]+/.test(value)) return false;

  var numberCheck = 0;
  var numberDigit = 0;
  var even = false;

  value = value.replace(/\D/g, '');

  for (var n = value.length - 1; n >= 0; n--) {
    var cardDigit = value.charAt(n);
    var numberDigit = parseInt(cardDigit, 10);

    if (even) {
      if ((numberDigit *= 2) > 9) {
        numberDigit -= 9;
      }
    }

    numberCheck += numberDigit;
    even = !even;
  }

  return (numberCheck % 10) === 0;
}

module.exports = luhnCheck;
