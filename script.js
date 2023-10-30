// function yearDays(year) {
//   //   return year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)
//   //   return year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)
//   //     ? `${year} has 365 days`
//   //     : `${year} has 366 days`;

//   return !(year % 100) ? !(year % 100) : !(year % 100);

//   //   return (
//   //     year +
//   //     ' has ' +
//   //     ((!(year % 100) && year % 400) || year % 4 ? '365' : '366') +
//   //     ' days'
//   //   );
// }
// console.log(yearDays(500));

// const ownedCatAndDog = (catYears, dogYears) => [
//   catYears < 24 ? ~~(catYears / 15) : ~~((catYears - 16) / 4),
//   dogYears < 24 ? ~~(dogYears / 15) : ~~((dogYears - 14) / 5),
// ];

// console.log(ownedCatAndDog(15, 22));

// console.log(~~(-23 / 11));
// console.log(~~-1);

// function thetaFormula(radius, arc, angle) {
//   //Solve for the missing value!
//   const result =
//     !angle ||
//     (isNaN(radius) && isNaN(arc)) ||
//     (isNaN(angle) && isNaN(arc)) ||
//     (isNaN(radius) && isNaN(angle)) ||
//     (isNaN(radius) && isNaN(arc) && isNaN(angle))
//       ? null
//       : radius === '?'
//       ? arc / angle
//       : arc === '?'
//       ? radius * angle
//       : angle === '?'
//       ? arc / radius
//       : radius === arc / angle;
//   return typeof result !== 'number' ? result : Math.round(result * 1000) / 1000;
// }
// function thetaFormula(radius, arc, angle) {
//   let numLength = [radius, arc, angle].filter(
//     (x) => typeof x === 'number'
//   ).length;
//   //   console.log(numLength);
//   let numX = [radius, arc, angle].filter((x) => x === '?').length;
//   //   console.log(numX);
//   return numLength + numX === 3 && numLength > 1
//     ? numLength === 2
//       ? +(
//           radius === '?'
//             ? arc / angle
//             : arc === '?'
//             ? radius * angle
//             : arc / radius
//         ).toFixed(3)
//       : radius === arc / angle
//     : null;
// }

// console.log(thetaFormula(92, 6, '?'));
// console.log(thetaFormula('?', 12, 35));
// console.log(thetaFormula());
// console.log(thetaFormula('?', '?', '?'));
// console.log(thetaFormula(1, '?', '?'));
// console.log(thetaFormula('?', 2, '?'));
// console.log(thetaFormula('?', '?', 3));
// console.log('****************************************************');
// console.log(thetaFormula(3, 0, 14));
// console.log(thetaFormula(0, 3, 14));
// console.log(thetaFormula(''));
// console.log(thetaFormula('', '', ''));

// function isDivisible(n, x, y) {
//   return n % x === 0 && n % y === 0;
// }

// console.log(isDivisible(3, 3, 4));
// console.log(isDivisible(12, 3, 4));
// console.log(isDivisible(8, 3, 4));
// console.log(isDivisible(48, 3, 4));

//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

// const repeatString = (str, x, div) => {
//   return new Array(x).fill(str).join(div);
//   return (str + ' ').repeat(x).trim().replaceAll(' ', div);
// };

// console.log(repeatString('xxx', 4, ' '));
// console.log(repeatString('xxx', 4, ','));

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

// const checkStart = (str, alf) => {
//   return str.toLowerCase().startsWith(alf.toLowerCase());
//   return str.slice(0, alf.length).toLowerCase() === alf.toLowerCase();
//   return str.toLowerCase().indexOf(alf.toLowerCase()) === 0 ? true : false;
// };

// console.log(checkStart('Incubator', 'inc'));
// console.log(checkStart('Incubator', 'yo'));

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

// const truncateString = (str, x) => {
//   return str.slice(0, x) + '...';
// };

// console.log(truncateString('Всем студентам инкубатора желаю удачи!', 10));

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

// const getMinLengthWord = (str) => {
//   return str ? str.split(' ').sort((a, b) => a.length - b.length)[0] : null;
// };

// console.log(getMinLengthWord('Всем студентам инкубатора желаю удачи!'));
// console.log(getMinLengthWord(''));

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

// const setUpperCase = (str) => {
//   return (
//     str
//       .toLowerCase()
//       .split(' ')
//       // .map((w) => w[0].toUpperCase().concat(w.slice(1)))
//       .map((w) => w.replace(w[0], w[0].toUpperCase()))
//       .join(' ')
//   );
// };

// console.log(setUpperCase('всем стУдентам инкуБатора Желаю удачИ!'));

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

// const isIncludes = (str, sym) => {
//   return sym
//     .toLowerCase()
//     .split('')
//     .map((c) => str.toLowerCase().includes(c))
//     .includes(false)
//     ? false
//     : true;
// };

// console.log(isIncludes('Incubator', 'Cut'));
// console.log(isIncludes('Incubator', 'table'));
// console.log(isIncludes('Incubator', 'inbba'));
// console.log(isIncludes('Incubator', 'inba'));
// console.log(isIncludes('Incubator', 'Incubatorrr'));

// function squareSum(numbers) {
//   return numbers.reduce((acc, n) => acc + n * n, 0);
// }

// console.log(squareSum([0, 3, 4, 5]));

// function alphabetPosition(text) {
//   return text
//     .toLowerCase()
//     .split('')
//     .filter((c) => c.charCodeAt() - 96 >= 1 && c.charCodeAt() - 96 <= 26)
//     .map((c) => c.charCodeAt() - 96)
//     .join(' ');
// }

// console.log('a'.charCodeAt() - 96);
// console.log("'".charCodeAt() - 96);
// console.log('.'.charCodeAt() - 96);
// console.log(' '.charCodeAt() - 96);
// console.log('z'.charCodeAt() - 96);

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// console.log(alphabetPosition('The narwhal bacons at midnight.'));
// console.log(alphabetPosition('The narwhal'));

// function DNAStrand(dna) {
//   //your code here
//   return dna
//     .split('')
//     .map((c) => {
//       switch (c) {
//         case 'A':
//           return 'T';
//         case 'T':
//           return 'A';
//         case 'C':
//           return 'G';
//         case 'G':
//           return 'C';

//         default:
//           break;
//       }
//     })
//     .join('');
// }
// console.log(DNAStrand('AAAA'));
// console.log(DNAStrand('ATTGC'));
// console.log(DNAStrand('GTAT'));

// function maskify(cc) {
//   return cc.length < 5
//     ? cc
//     : new Array(cc.length - 4).fill('#').concat(cc.slice(-4)).join('');
// }

// console.log(maskify('4556364607935616'));
// console.log(maskify('1'));
// console.log(maskify('11111'));

// const summation = function (num) {
//   // Code here
//   let res = 0;
//   for (let i = 0; i <= num; i++) {
//     res += i;
//   }
//   return res;
// };

// console.log(summation(2));
