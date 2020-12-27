import {Digitassigmentbigframe} from '../src/digitassigmentbigframe'
import {Numbertosegmentbigframe} from '../src/numbertosegmentbigframe'
const digit = new Digitassigmentbigframe()
const number = new Numbertosegmentbigframe()

test('0 in bigdigits', () => {
  expect(digit.decide(0)).toBe(console.log(number.segmentzero()));
});

test('1 in bigdigits', () => {
    expect(digit.decide(1)).toBe(console.log(number.segmentone()));
  });

test('2 in bigdigits', () => {
  expect(digit.decide(2)).toBe(console.log(number.segmenttwo()));
});

test('3 in bigdigits', () => {
    expect(digit.decide(3)).toBe(console.log(number.segmentthree()));
  });

test('4 in bigdigits', () => {
  expect(digit.decide(4)).toBe(console.log(number.segmentfour()));
});
test('5 in bigdigits', () => {
  expect(digit.decide(5)).toBe(console.log(number.segmentfive()));
});

test('6 in bigdigits', () => {
    expect(digit.decide(6)).toBe(console.log(number.segmentsix()));
  });

test('7 in bigdigits', () => {
  expect(digit.decide(7)).toBe(console.log(number.segmentseven()));
});

test('8 in bigdigits', () => {
    expect(digit.decide(8)).toBe(console.log(number.segmenteight()));
  });

test('9 in bigdigits', () => {
  expect(digit.decide(9)).toBe(console.log(number.segmentnine()));
});
test(', in bigdigits', () => {
  expect(digit.decide(NaN)).toBe(console.log(number.segmentdot()));
});