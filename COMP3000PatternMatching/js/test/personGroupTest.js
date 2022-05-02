import {getPersonGroup, personRanges} from './percentiles.js';

test('A 10-year-old person belongs to the group: firstGroup', () => {
    expect(getPersonGroup(10)).toBe('firstGroup');
});

test('A 13-year-old person belongs to the group: secondGroup', () => {
    expect(getPersonGroup(13)).toBe('secondGroup');
});

test('A 16-year-old person belongs to the group: thirdGroup', () => {
    expect(getPersonGroup(16)).toBe('thirdGroup');
});

test('A 17-year-old person belongs to the group: fourthGroup', () => {
    expect(getPersonGroup(17)).toBe('fourthGroup');
});

test('An 18-year-old person belongs to the group: fifthGroup', () => {
    expect(getPersonGroup(18)).toBe('fifthGroup');
});