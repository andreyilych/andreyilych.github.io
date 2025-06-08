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

/**
 * Проверяет год на високосность.
 * @param {number} year - Год для проверки.
 * @returns {boolean} true, если год високосный, иначе false.
 */
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Возвращает факториал числа n (рекурсивно).
 * @param {number} n - Число для вычисления факториала.
 * @returns {bigint} Факториал числа n.
 */
function factorial(n) {
    if (n === 0) return 1n;
    return BigInt(n) * factorial(n - 1);
}

/**
 * Возвращает n-е число Фибоначчи.
 * @param {number} n - Номер числа Фибоначчи.
 * @returns {bigint} n-е число Фибоначчи.
 */
function fib(n) {
    let a = 0n;
    let b = 1n;
    if (n === 0) return a;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

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

/**
 * Добавляет символьное свойство blackSpot к объекту.
 * @param {Object} obj - Объект, к которому добавляется свойство.
 * @returns {Object} Объект с добавленным свойством blackSpot.
 */
function addBlackSpot(obj) {
    obj[Symbol.for('blackSpot')] = true;
    return obj;
}