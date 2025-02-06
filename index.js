const units = ['', 'एक', 'दोन', 'तीन', 'चार', 'पाच', 'सहा', 'सात', 'आठ', 'नऊ'];
const teens = ['', 'अकरा', 'बारा', 'तेरा', 'चौदा', 'पंधरा', 'सोळा', 'सतरा', 'अठरा', 'एकोणीस'];
const tens = ['', 'दहा', 'वीस', 'तीस', 'चाळीस', 'पन्नास', 'साठ', 'सत्तर', 'ऐंशी', 'नव्वद'];
const hundreds = ['', 'शंभर', 'दोनशे', 'तीनशे', 'चारशे', 'पाचशे', 'सहाशे', 'सातशे', 'आठशे', 'नऊशे'];
const crore_lakh_thousand = ['', 'कोटी', 'लक्ष', 'हजार'];


function formatNumberToMarathi(number) {
  if (isNaN(number)) {
    return "कृपया संख्या टाका"; // Please enter a number
  }
  if (number === 0) {
    return "शून्य"; // Zero
  }
  if (number < 0) {
    return "ऋण " + formatNumberToMarathi(Math.abs(number)); // Negative
  }

  let parts = [];

  function convertLessThanThousand(num) {
    if (num === 0) return '';
    if (num < 10) return units[num];
    if (num < 20) return teens[num - 10];
    if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' + units[num % 10] : '');
    return hundreds[Math.floor(num / 100)] + (num % 100 !== 0 ? ' ' + convertLessThanThousand(num % 100) : '');
  }

  if (number >= 10000000) { // Crore and above
    parts.push(convertLessThanThousand(Math.floor(number / 10000000)) + ' ' + crore_lakh_thousand[1]); // Crore
    number %= 10000000;
  }
  if (number >= 100000) { // Lakh and above
    parts.push(convertLessThanThousand(Math.floor(number / 100000)) + ' ' + crore_lakh_thousand[2]); // Lakh
    number %= 100000;
  }
  if (number >= 1000) { // Thousand and above
    parts.push(convertLessThanThousand(Math.floor(number / 1000)) + ' ' + crore_lakh_thousand[3]); // Thousand
    number %= 1000;
  }
  if (number > 0) { // Hundreds, Tens and Units
    parts.push(convertLessThanThousand(number));
  }

  return parts.join(' ').trim();
}

module.exports = formatNumberToMarathi;