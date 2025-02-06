const formatNumberToMarathi = require('./index.js');

console.log(formatNumberToMarathi(0));         // Output: शून्य
console.log(formatNumberToMarathi(5));         // Output: पाच
console.log(formatNumberToMarathi(12));        // Output: बारा
console.log(formatNumberToMarathi(25));        // Output: पंचवीस
console.log(formatNumberToMarathi(100));       // Output: शंभर
console.log(formatNumberToMarathi(123));       // Output: शंभर तेवीस
console.log(formatNumberToMarathi(999));       // Output: नऊशे नव्वद नऊ
console.log(formatNumberToMarathi(1234));      // Output: एक हजार दोनशे चौतीस
console.log(formatNumberToMarathi(123456));    // Output: एक लक्ष तेवीस हजार चारशे छप्पन्न
console.log(formatNumberToMarathi(12345678));  // Output: एक कोटी तेवीस लक्ष पंचेचाळीस हजार सहाशे अठ्ठ्यात्तर
console.log(formatNumberToMarathi(-42));       // Output: ऋण बेचाळीस
console.log(formatNumberToMarathi("hello"));    // Output: कृपया संख्या टाका