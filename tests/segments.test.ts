import {Segments} from '../src/segments'
const digit = new Segments()

test('Horizontaal segment', () => {
  expect(digit.segmenthorizontaal()).toBe(" - ");
});


test('Horizontaal segment big', () => {
  expect(digit.segmenthorizontaalbig()).toBe(" -- ");
  });

test('Right segment', () => {
  expect(digit.segmentverticaalrechts()).toBe("  |");
});

test('Right segment big', () => {
  expect(digit.segmentverticaalrechtsbig()).toBe("   |");
  });

test('Left segment', () => {
  expect(digit.segmentverticaallinks()).toBe("|  ");
});
test('Left segment big', () => {
  expect(digit.segmentverticaallinksbig()).toBe("|   ");
});

test('Combo segment', () => {
  expect(digit.segmentverticaalcombo()).toBe("| |");
  });

test('Combo segment big', () => {
  expect(digit.segmentverticaalcombobig()).toBe("|  |");
});

test('Decimal point segment', () => {
  expect(digit.segmentcomma()).toBe(" / ");
  });

test('Decimal point segment big', () => {
  expect(digit.segmentcommabig()).toBe("  / ");
});
test('Horizontal full segment', () => {
  expect(digit.segmentfullhorizontaal()).toBe(" ------- ");
});
test('Horizontal empty segment', () => {
  expect(digit.segmentemptyhorizontaal()).toBe("   ");
});
test('Horizontal empty segment big', () => {
  expect(digit.segmentemptyhorizontaalbig()).toBe("    ");
});