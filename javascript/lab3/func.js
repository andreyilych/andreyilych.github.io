'use strict';


/**
 * Возвращает x в степени n (n - целое число).
 * @param {number} x - Основание степени.
 * @param {number} n - Показатель степени (целое число).
 * @returns {number} Результат возведения x в степень n.
 */
function pow(x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

/**
 * Вычисляет сумму чисел от 1 до n включительно.
 * @param {number} n - Натуральное число.
 * @returns {number} Сумма чисел от 1 до n.
 */
const sumTo = new Function('n', 'return n * (n + 1) / 2');

// console.log(sumTo(100)); // 5050

/**
 * Проверяет год на високосность.
 * @param {number} year - Год для проверки.
 * @returns {boolean} true, если год високосный, иначе false.
 */
function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
* Возвращает факториал числа n.
*
* @param {number} n число, для которого находится факториал
* @return {number} факториал числа n!
*/
function factorial(n) {
  if (n === 0)
    return 1n;
  return BigInt(n) * factorial(n - 1);
}

// Функция fib(n), возвращающая n-е число Фибоначчи
/**
 * Возвращает n-ое число Фибоначчи.
 *
 * @param {number} n номер искомого числа Фибоначчи
 * @return {BigInt} n-oe число Фибоначчи
 */
export function fib(n) {
  let a = 0n;
  let b = 1n;
  for (let i = 0; i < n; i++) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return a;
}

console.log(fib(0));   // 0n
console.log(fib(100)); // 354224848179261915075n

/**
 * Возвращает функцию, которая сравнивает свой аргумент с x.
 * @param {number} x - Число для сравнения.
 * @returns {function} Функция, сравнивающая свой аргумент с x.
 */
function compare(x) {
  return function (y) {
    if (y > x) return true;
    if (y < x) return false;
    return null;
  };
}

/**
 * Возвращает сумму всех своих аргументов.
 * @param {...number} args - Аргументы для суммирования.
 * @returns {number} Сумма всех аргументов.
 */
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

