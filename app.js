// function numberToPower(number, power) {
//   // console.info(Math.log2(1024));
//   // Code here
//   let result = 1;
//   for (let i = 1; i <= power; i++) {
//     result *= number;
//   }
//   return result;
// }

// console.log(numberToPower.toString());

// const getPositions = (s) => {
//   s > 27 ? (s = s % 27) : s;
//   let a = -1,
//     b = 0,
//     c = 0;
//   for (let i = 0; i <= s; i++) {
//     a++;
//     if (a === 3) {
//       a = 0;
//       b++;
//     }
//     if (b === 3) {
//       b = 0;
//       c++;
//     }
//     if (c === 3) {
//       c = 0;
//     }
//   }
//   return [a, b, c];
// };

// console.log(getPositions(54));
// console.log(getPositions(98));
// console.log(getPositions(3));

// function mango(quantity, price) {
//   return (2 * Math.floor(quantity / 3) + (quantity % 3)) * price;
// }

// console.log(mango(2, 3));
// console.log(mango(3, 3));
// console.log(mango(5, 3));
// console.log(mango(9, 5));

// function solution(number) {
//   let sum = 0;
//   for (let i = 0; i < number; i++) {
//     i % 3 === 0 || i % 5 === 0 ? (sum += i) : sum;
//   }
//   return sum;
// }

// console.log(solution(5));
// console.log(solution(3));
// console.log(solution(6));
// console.log(solution(9));
// console.log(solution(10));

// a, 97
// e, 101
// i, 105
// o, 111
// u, 117

// console.log('a'.charCodeAt());
// console.log('e'.charCodeAt());
// console.log('i'.charCodeAt());
// console.log('o'.charCodeAt());
// console.log('u'.charCodeAt());
// console.log(String.fromCharCode(101));

// function isVow(a) {
//   return a.map((el) => {
//     return ['a', 'e', 'i', 'o', 'u'].includes(String.fromCharCode(el))
//       ? String.fromCharCode(el)
//       : el;
//   });
// }
// console.log(
//   isVow([
//     118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
//     120, 106,
//   ])
// );
// console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]));

// let map = {
//   97: 'a',
//   101: 'e',
//   105: 'i',
//   111: 'o',
//   117: 'u',
//   as: 112,
// };

// console.log(map[101]);
// console.log(map.as);

// function squareDigits(num) {
//   return +num
//     .toString()
//     .split('')
//     .map((a) => +a * a)
//     .join('');
// }

// console.log(squareDigits(22));
// console.log(squareDigits(254));
// console.log(squareDigits(14875));
// console.log(squareDigits(2765433));

// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }

// console.log(disemvowel('This website is for losers LOL!'));

// function solution(str) {
//   return str.split('').reverse().join('');
// }
// console.log(solution('world'));
// console.log(solution('word'));
// console.log(solution('abcd'));

// var isSquare = function (n) {
//   return Number.isInteger(Math.sqrt(n));
// };
// console.log(isSquare(-1));
// console.log(isSquare(0));
// console.log(isSquare(3));
// console.log(isSquare(4));
// console.log(isSquare(25));
// console.log(isSquare(26));

// function accum(s) {
//   return s
//     .split('')
//     .map((l, index) => {
//       const res = [];
//       for (let i = 0; i < index + 1; i++) {
//         res.push(i === 0 ? l.toUpperCase() : l.toLowerCase());
//       }
//       return res.join('');
//     })
//     .join('-');
// }

// const accum = (s) => {
//   return s
//     .split('')
//     .map((l, i) => l.toUpperCase() + l.toLowerCase().repeat(i))
//     .join('-');
// };

// console.log(accum('abcd'));
// console.log(accum('RqaEzty'));
// console.log(accum('cwAt'));
// console.log(accum('Fuck'));

// function dec2bin(dec) {
//   if (dec >= 0) {
//     return dec.toString(2).split('0').join('').length;
//   }
// }
// console.log(dec2bin(0));
// console.log(dec2bin(4));
// console.log(dec2bin(7));
// console.log(dec2bin(9));
// console.log(dec2bin(10));

// function getMiddle(s) {
//   return s.length % 2 === 0
//     ? s[s.length / 2 - 1] + s[s.length / 2]
//     : s[Math.floor(s.length / 2)];
// }

// console.log(getMiddle('test'));
// console.log(getMiddle('testing'));
// console.log(getMiddle('middle'));
// console.log(getMiddle('A'));
// console.log(getMiddle('af'));
// console.log(
//   getMiddle(
//     'afghghhhgyyifpiygyifyfyfyuvfygpiugo[hiohuogyifutdryisryxdtoyguihioiuogjjhvjchtyufgiuoyinnerHeight;yifdtdtdtu'
//   )
// );

// function makeNegative(num) {
//   return num < 0 ? num : -num;
// }

// console.log(makeNegative(-5));
// console.log(makeNegative(2));
// console.log(makeNegative(0.2));

// function isIsogram(str) {
//   return !str
//     .toLowerCase()
//     .split('')
//     .map((c, i, str) => (str.filter((a) => a === c).length > 1 ? false : ''))
//     .includes(false);
// }

// function isIsogram(str) {
//   return new Set(str.toUpperCase()).size === str.length;
// }

// console.log(isIsogram('Dermatoglyphics'));
// console.log(isIsogram('isogram'));
// console.log(isIsogram('aba'));
// console.log(isIsogram('moOse'));
// console.log(isIsogram('isIsogram'));
// console.log(isIsogram(''));

// function findOutlier(integers) {
//   return integers.filter((a) => a % 2 === 0).length > 1
//     ? integers.filter((a) => a % 2 !== 0)[0]
//     : integers.filter((a) => a % 2 === 0)[0];
// }

// console.log(findOutlier([0, 1, 2]));
// console.log(findOutlier([1, 2, 3]));
// console.log(findOutlier([2, 6, 8, 10, 3]));
// console.log(findOutlier([0, 0, 3, 0, 0]));
// console.log(findOutlier([1, 1, 0, 1, 1]));
// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

// function boolToWord(bool) {
//   return bool ? 'Yes' : 'No';
// }

// console.log(boolToWord(true));
// console.log(boolToWord(false));

// function XO(str) {
//   const x = str
//     .toLowerCase()
//     .split('')
//     .filter((s) => s === 'x').length;
//   const o = str
//     .toLowerCase()
//     .split('')
//     .filter((s) => s === 'o').length;
//   return x === o;
// }
// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   console.log(x);
//   console.log(o);
//   return (x && x.length) === (o && o.length);
// }

// console.log(XO('ooxx'));
// console.log(XO('xooxx'));
// console.log(XO('ooxXm'));
// console.log(XO('zpzpzpp'));

// function duplicateCount(text) {
//   const textArray = text.toLowerCase().split('');
//   const unic = new Set(textArray);
//   const res = [];
//   unic.forEach((n) =>
//     textArray.filter((a) => a === n).length > 1 ? res.push(n) : res
//   );
//   return res.length;
// }

// console.log(duplicateCount(''));
// console.log(duplicateCount('abcde'));
// console.log(duplicateCount('aabbcde'));
// console.log(duplicateCount('aabBcde'));
// console.log(duplicateCount('Indivisibility'));
// console.log(duplicateCount('Indivisibilities'));

// function duplicateEncode(word) {
//   const res = new Array(word.length).fill(')');
//   const textArray = word.toLowerCase().split('');
//   const textSet = new Set(textArray);
//   const onlyOne = [];
//   textSet.forEach((a) => {
//     if (textArray.filter((b) => b === a).length === 1) onlyOne.push(a);
//   });
//   onlyOne.map((a) => (res[textArray.indexOf(a)] = '('));

//   return res.join('');
// }

// console.log(duplicateEncode('din'));
// console.log(duplicateEncode('recede'));
// console.log(duplicateEncode('Success'));
// console.log(duplicateEncode('(( @'));

// console.log(duplicateEncode(' ( ( )')); // expected '((((((' to equal ')))))('
// console.log(duplicateEncode('Svnnnn)annOn')); // expected '((((((((((((' to equal '(())))(())

// var str = "How can mirrors be real if our eyes aren't real";

// String.prototype.toJadenCase = function () {
//   return this.split(' ')
//     .map((a) => a.replace(a[0], a[0].toUpperCase()))
//     .join(' ');
// };

// console.log(str.toJadenCase());

// function removeChar(str) {
//   return str.slice(1, -1);
// }

// console.log(removeChar('eloquent'));

// function repeatStr(n, s) {
//   return new Array(n).fill(s).join('');
// }

// function repeatStr(n, s) {
//   return s.repeat(n);
// }
// console.log(repeatStr(3, '*'));
// console.log(repeatStr(5, '#'));
// console.log(repeatStr(2, 'ha '));

// function filter_list(l) {
//   return l.filter((a) => typeof a === 'number');
// }

// console.log(filter_list([1, 2, 'a', 'b']));

// function arrayPlusArray(arr1, arr2) {
//   return [...arr1, ...arr2].reduce((s, a) => s + a); //something went wrong
// }
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// function isValidWalk(walk) {
//   //insert brilliant code here
//   const n = walk.filter((a) => a === 'n').length;
//   const w = walk.filter((a) => a === 'w').length;
//   const s = walk.filter((a) => a === 's').length;
//   const e = walk.filter((a) => a === 'e').length;

//   return walk.length === 10 && n === s && w === e;
// }

// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
// console.log(
//   isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])
// );
// console.log(isValidWalk(['w']));
// console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));

// function divideStrings(a, b) {
//   return [
//     Math.floor(a / b)
//       .toPrecision(100)
//       .split('.')[0],
//     (+a % +b).toPrecision(100),
//   ]; // This doesn't work on big numbers!
// }

// console.log(divideStrings(46350528630000, 676229300));
// console.log(
//   divideStrings(
//     7711204801413302919526590818551287111729188125765382417063294120393489313832392310304013839849277835058151055502743550324976342419304749922108,
//     9275929188716882728209876314856925718979930170965118668962883257509487400902369678509528469283314380978656305051945080913806104
//   )
// );
// console.log(
//   divideStrings(
//     410880131643823240491543121071872920232640214532506695892159701025515120745718163318180959421228437366526500000000,
//     429172786338579640962408505927551775339148866000720000
//   )
// );
// console.log(BigInt('600') / BigInt('2'));

// console.log(
//   '3024520247146086866523992143407059324919740316472841840298271937510471537467120737559645140589916137370308004081461659150'
//     .length
// );

function stringIntGreaterThan(a, b) {
  const arrA = a.split('');
  const arrB = b.split('');
  let result;
  if (arrA.length > arrB.length) {
    result = true;
  }
  if (arrA.length < arrB.length) {
    result = false;
  }
  if (arrA.length === arrB.length) {
    for (let i = 0; i < arrA.length; i++) {
      if (+arrA[i] > +arrB[i]) {
        result = true;
        break;
      }
      if (+arrA[i] < +arrB[i]) {
        result = false;
        break;
      }
      if (+arrA[i] === +arrB[i]) {
        result = false;
        continue;
      }
    }
  }

  return result;
}

// function stringIntGreaterThan(a, b) {
//   const arrA = a.split('');
//   const arrB = b.split('');
//   let result =
//     arrA.length > arrB.length
//       ? true
//       : arrA.length < arrB.length
//       ? false
//       : arrA.map((n, i) => {
//         +n > +arrB[i] ?
//       });

//   return result;
// }

console.log(stringIntGreaterThan('161', '31'));
console.log(stringIntGreaterThan('31', '162'));
console.log(stringIntGreaterThan('234', '134'));
console.log(stringIntGreaterThan('1345345', '134534'));
console.log(
  stringIntGreaterThan(
    '1329879643513216515489679841651615',
    '1329879643513216515489679841651614'
  )
);
