import {
  isArray,
  isUndefined,
  isUndef,
  isDef,
  isTrue,
  isFalse,
  isString,
  isNumber,
  isObject,
  isFormData,
  isDate,
  isFile,
  trim,
  isPrimitive,
  isPlainObject,
  isRegExp,
  isMap,
  isSet,
  calcTimes
} from '../src/utils/index'
const FormData = require('form-data');

test('isArray-No', () => {
  expect(isArray(1)).toBe(false);
});

test('isArray-Yes', () => {
  expect(isArray([1,'2'])).toBe(true);
});


test('isUndefined-No', () => {
  expect(isUndefined(false)).toBe(false);
})

test('isUndefined-Yes', () => {
  expect(isUndefined(undefined)).toBe(true);
})

test('isUndef-Yes', () => {
  expect(isUndef(undefined)).toBe(true);
})

test('isUndef-No', () => {
  expect(isUndef(2)).toBe(false);
})


test('isTrue-Yes', () => {
  expect(isTrue(true)).toBe(true);
})

test('isTrue-No', () => {
  expect(isTrue(false)).toBe(false);
})

test('isFalse-Yes', () => {
  expect(isFalse(false)).toBe(true);
})

test('isFalse-No', () => {
  expect(isFalse(true)).toBe(false);
})

test('isDef-Yes', () => {
  expect(isDef(2)).toBe(true);
})

test('isDef-No', () => {
  expect(isDef(null)).toBe(false);
})

test('isString-Yes', () => {
  expect(isString('1234')).toBe(true);
})

test('isNumber-No', () => {
  expect(isNumber('12')).toBe(false);
})

test('isNumber-Yes', () => {
  expect(isNumber(12)).toBe(true);
})

test('isObject-No', () => {
  expect(isObject('12')).toBe(false);
})

test('isObject-Yes', () => {
  expect(isObject({a:1})).toBe(true);
})

test('isFormData-No', () => {
  const fd = new FormData()
  expect(isFormData(fd)).toBe(false);
})

test('isDate-No', () => {
  expect(isDate('12')).toBe(false);
})

test('isDate-Yes', () => {
  expect(isDate(new Date())).toBe(true);
})

test('isFile-No', () => {
  expect(isFile('12')).toBe(false);
})

test('trim-Yes', () => {
  expect(trim('  hello  ')).toBe('hello');
})

test('isPrimitive-Yes', () => {
  expect(isPrimitive('hello')).toBe(true);
})

test('isPrimitive-No', () => {
  expect(isPrimitive({})).toBe(false);
})

test('isPlainObject-Yes', () => {
  expect(isPlainObject({a: 1})).toBe(true);
})

test('isPlainObject-No', () => {
  expect(isPlainObject([1, 2])).toBe(false);
})

test('isRegExp-Yes', () => {
  expect(isRegExp(/[123]/)).toBe(true);
})

test('isRegExp-No', () => {
  expect(isRegExp([1, 2])).toBe(false);
})

test('isMap-Yes', () => {
  const map = new Map()
  map.set('say', 'hello')
  expect(isMap(map)).toBe(true);
})

test('isMap-No', () => {
  const obj = {say: 'hello'}
  expect(isMap(obj)).toBe(false);
})

test('isSet-Yes', () => {
  const set = new Set()
  set.add(1)
  expect(isSet(set)).toBe(true);
})

test('isSet-No', () => {
  const obj = {say: 'hello'}
  expect(isSet(obj)).toBe(false);
})

test('calcTimes-Yes', () => {
  expect(calcTimes(4830)).toBe('01:20:30');
})