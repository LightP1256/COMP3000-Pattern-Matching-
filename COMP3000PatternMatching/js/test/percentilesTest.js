import {getPercentile, eigthGroup, fourthGroup} from "../controller/percentiles.js"

test('The percentile of a 60-year-old person with 40 correct answers is 10', () => {
    expect(getPercentile(40, eigthGroup)).toBe("25");
});

test('The percentile of a 45-year-old person with 50 correct answers is 75', () => {
    expect(getPercentile(50, eigthGroup)).toBe("75");
});

test('The percentile of a 16-year-old with 54 correct answers is 95', () => {
    expect(getPercentile(54, fourthGroup)).toBe("95");
});

test('The percentile of a 18-year-old with 29 correct answers is 10', () => {
    expect(getPercentile(29, fourthGroup)).toBe("10");
});

test('The percentile of a 63-year-old person with 60 correct answers is 99', () => {
    expect(getPercentile(60, eigthGroup)).toBe("99");
});

test('The percentile of a 17-year-old with 56 correct answers is 99', () => {
    expect(getPercentile(56, fourthGroup)).toBe("99");
});