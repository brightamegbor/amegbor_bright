// This is direct function implementation in javascript
// to run the function you need to have node installed
// run node solution1.js in terminal to run the function
// if you do not have node, or you prefer running in a browser
// go to the second solution "solution2" instead

function convertToWord(number) {
    let convertedNumber = '';
    let numberString = number.toString();
    let finalConvertedNumber = new Array();

    const bigNumberArray = new Array(
        '',
        ' Thousand',
        ' Million',
        ' Billion',
        ' Trillion',
        ' Quadrillion',
        ' Quintillion'
    );

    if (numberString == '0') {
        return 'Zero';
    }

    if (numberString == 0) {
        return 'Enter only valid numbers';
    }

    let index = numberString.length - 1;

    while (numberString.length > 3) {
        let threeDigits = new Array(3);
        threeDigits[2] = numberString.charAt(numberString.length - 1);
        threeDigits[1] = numberString.charAt(numberString.length - 2);
        threeDigits[0] = numberString.charAt(numberString.length - 3);

        const resultedDigits = threeDigits[0] + threeDigits[1] + threeDigits[2];
        finalConvertedNumber.push(resultedDigits);
        index--;
        numberString = numberString.substring(0, numberString.length - 3);
    }
    finalConvertedNumber.push(numberString);
    finalConvertedNumber.reverse();

    //convert each group of three digits to english word
    //if all digits are zero the convertThreeDigits
    //function return the string "numberIsBig"
    for (j = 0; j < finalConvertedNumber.length; j++) {
        finalConvertedNumber[j] = convertThreeDigits(
            parseInt(finalConvertedNumber[j], 10)
        );
    }

    let bigNumberIndex = 0;

    for (b = finalConvertedNumber.length - 1; b >= 0; b--) {
        if (finalConvertedNumber[b] != 'numberIsBig') {
            finalConvertedNumber[b] =
                finalConvertedNumber[b] + bigNumberArray[bigNumberIndex] + '';
            bigNumberIndex++;
        } else {
            //replace "numberIsBig" with empty String.
            finalConvertedNumber[b] = '';
            bigNumberIndex++; //increase index counter
        }
    }

    //convert The convertedNumber Array to printable string
    for (n = 0; n < finalConvertedNumber.length; n++) {
        // check if last item, add "and" to last thousand word
        if (
            finalConvertedNumber.length >= 2 &&
            n == finalConvertedNumber.length - 1 &&
            !finalConvertedNumber[n].includes('and')
        ) {
            convertedNumber += ' and ' + finalConvertedNumber[n].trim();
        } else {
            convertedNumber += finalConvertedNumber[n];
        }
    }

    // convert to sentense case string
    convertedNumber =
        convertedNumber.trim().toLowerCase().substring(0, 1).toUpperCase() +
        convertedNumber.trim().toLowerCase().substring(1);

    return convertedNumber; //return convertedNumber
}

//convert 1 to 999 - numbers to words
function convertThreeDigits(number) {
    let convertedNumber = '';
    let numberString = number.toString();

    const ones = new Array(
        '',
        ' One',
        ' Two',
        ' Three',
        ' Four',
        ' Five',
        ' Six',
        ' Seven',
        ' Eight',
        ' Nine',
        ' Ten',
        ' Eleven',
        ' Twelve',
        ' Thirteen',
        ' Fourteen',
        ' Fifteen',
        ' Sixteen',
        ' Seventeen',
        ' Eighteen',
        ' Nineteen'
    );
    const tens = new Array(
        '',
        '',
        ' Twenty',
        ' Thirty',
        ' Forty',
        ' Fifty',
        ' Sixty',
        ' Seventy',
        ' Eighty',
        ' Ninety'
    );
    const hundred = ' Hundred';

    if (number == 0) {
        return 'numberIsBig';
    }
    //from 10, 11, 12 ,13, .... 19
    if (number < 20) {
        convertedNumber = ones[number];
        return convertedNumber;
    }

    //100 and more
    if (numberString.length == 3) {
        convertedNumber = ones[parseInt(numberString.charAt(0))] + hundred;

        // 100s
        if (ones[parseInt(numberString.charAt(1) + numberString.charAt(2))]) {
            convertedNumber +=
                ones[parseInt(numberString.charAt(1) + numberString.charAt(2))];

            // add "and" like how the question requested
            // split, add "and" before the last words, then join all
            let splittedNumberArr = convertedNumber.trim().split(' ');
            splittedNumberArr[splittedNumberArr.length - 1] =
                'and ' + splittedNumberArr[splittedNumberArr.length - 1];

            convertedNumber = splittedNumberArr.join(' ');

            return convertedNumber;
        }

        convertedNumber += tens[parseInt(numberString.charAt(1))];
        convertedNumber += ones[parseInt(numberString.charAt(2))];

        return convertedNumber;
    }

    convertedNumber += tens[parseInt(numberString.charAt(0))];
    convertedNumber += ones[parseInt(numberString.charAt(1))];

    return convertedNumber;
}

const words = convertToWord(10100000004); // pass the number you want to convert here
console.log(words);
