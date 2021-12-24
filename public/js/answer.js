const rightAnswers = {
    A1: 4,
    A2: 5,
    A3: 1,
    A4: 2,
    A5: 6,
    A6: 3,
    A7: 6,
    A8: 2,
    A9: 1,
    A10: 3,
    A11: 4,
    A12: 5,
    B1: 2,
    B2: 6,
    B3: 1,
    B4: 2,
    B5: 1,
    B6: 3,
    B7: 5,
    B8: 6,
    B9: 4,
    B10: 3,
    B11: 4,
    B12: 5,
    C1: 8,
    C2: 2,
    C3: 3,
    C4: 8,
    C5: 7,
    C6: 4,
    C7: 5,
    C8: 1,
    C9: 7,
    C10: 6,
    C11: 1,
    C12: 2,
    D1: 3,
    D2: 4,
    D3: 3,
    D4: 7,
    D5: 8,
    D6: 6,
    D7: 5,
    D8: 4,
    D9: 1,
    D10: 2,
    D11: 5,
    D12: 6,
    E1: 7,
    E2: 6,
    E3: 8,
    E4: 2,
    E5: 1,
    E6: 5,
    E7: 1,
    E8: 6,
    E9: 3,
    E10: 2,
    E11: 4,
    E12: 5
};
const diagnostics = {
    "5": ["Deficient", "V"],
    "10": ["Lower than average", "IV-"],
    "25": ["Lower than average", "IV"],
    "50": ["Middle term", "III"],
    "75": ["Higher than average", "II"],
    "90": ["Higher than average", "II+"],
    "95": ["Higher than average", "II+"],
    "99": ["Superior", "I"]
};
export const getNumberOfRightAnswers = (plaquesSelected) => {
    let numberOfRightAnswers = 0;

    for (let actualPlaque in plaquesSelected) {
        if (plaquesSelected[actualPlaque] === rightAnswers[actualPlaque]) {
            numberOfRightAnswers++;
        }
    }
    return numberOfRightAnswers;
};
export const getPersonDiagnostic = (percentile) => {
    return diagnostics[percentile];
};