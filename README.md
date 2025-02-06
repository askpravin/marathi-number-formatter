

# Marathi Number Formatter

> My First Ever NPM Package\! 🎉

**A simple npm package to format numbers into Marathi words.**

This package takes a numerical input and converts it into its Marathi word representation.  It's designed to be easy to use for developers who need to display numbers in Marathi in their applications.

## Installation

You can install `marathi-number-formatter` using npm:

```bash
npm install marathi-number-formatter
```

## Usage

```javascript
const formatNumberToMarathi = require('marathi-number-formatter');

const number = 12345;
const marathiWords = formatNumberToMarathi(number);

console.log(marathiWords); // Output: एक लक्ष तेवीस हजार चारशे पंचेचाळीस
```

**Example Output:**

| Input Number | Marathi Word Output                   |
|--------------|---------------------------------------|
| `0`          | `शून्य`                               |
| `5`          | `पाच`                                 |
| `12`         | `बारा`                                |
| `25`         | `पंचवीस`                             |
| `100`        | `शंभर`                               |
| `123`        | `शंभर तेवीस`                         |
| `1234`       | `एक हजार दोनशे चौतीस`                |
| `123456`     | `एक लक्ष तेवीस हजार चारशे छप्पन्न`      |
| `12345678`   | `एक कोटी तेवीस लक्ष पंचेचाळीस हजार सहाशे अठ्ठ्यात्तर` |
| `-42`        | `ऋण बेचाळीस`                          |

**Supported Number Range:**

This package currently supports formatting numbers from negative values up to **Crores** (10,000,000).

**Error Handling:**

If you provide an input that is not a number (e.g., a string), the function will return:

```
"कृपया संख्या टाका"  // Please enter a number (Marathi)
```

## License

This package is released under the [MIT License](https://www.google.com/url?sa=E&source=gmail&q=https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute it.

## Author

Pravin Jadhav 

**This is my first npm package, and I'm excited to share it\!**  I hope you find it useful. If you have any suggestions, bug reports, or want to contribute, please feel free to reach out or open an issue/pull request.

-----

**Enjoy formatting numbers in Marathi\!** 😊
