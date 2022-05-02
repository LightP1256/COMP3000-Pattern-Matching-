const groups = {
    firstGroup: {
        "5": 14,
        "10": 24,
        "25": 33,
        "50": 39,
        "75": 43,
        "90": 47,
        "95": 52,
        "99": 60
    },

    secondGroup: {
        "5": 17,
        "10": 27,
        "25": 34,
        "50": 40,
        "75": 45,
        "90": 49,
        "95": 53,
        "99": 60
    },

    thirdGroup: {
        "5": 19,
        "10": 29,
        "25": 35,
        "50": 41,
        "75": 46,
        "90": 50,
        "95": 54,
        "99": 60
    },

    fourthGroup: {
        "5": 28,
        "10": 35,
        "25": 39,
        "50": 45,
        "75": 49,
        "90": 52,
        "95": 55,
        "99": 60
    },

    fifthGroup: {
        "5": 29,
        "10": 36,
        "25": 42,
        "50": 46,
        "75": 50,
        "90": 53,
        "95": 56,
        "99": 60
    },

    sixthGroup: {
        "5": 30,
        "10": 37,
        "25": 42,
        "50": 47,
        "75": 51,
        "90": 54,
        "95": 56,
        "99": 60
    },

    seventhGroup: {
        "5": 30,
        "10": 37,
        "25": 43,
        "50": 47,
        "75": 51,
        "90": 54,
        "95": 57,
        "99": 60
    },

    eightGroup: {
        "5": 31,
        "10": 38,
        "25": 44,
        "50": 48,
        "75": 52,
        "90": 55,
        "95": 58,
        "99": 60
    }
};

const personRanges = {
    "12": "firstGroup",
    "14": "secondGroup",
    "16": "thirdGroup",
    "17": "fourthGroup",
    "18": "fifthGroup",
    "19": "sixthGroup",
    "21": "seventhGroup",
    "65": "eightGroup"
};

export const getPersonGroup = (personAge) => {
    for (let age in personRanges) {
        if (personAge <= parseInt(age)) {
            return personRanges[age];
        }
    }
    return "eightGroup";
};

export const getPercentile = (numberOfRightAnswers, rightGroup) => {
    const personGroup = groups[rightGroup];
    for (let percentile in personGroup) {
        if (numberOfRightAnswers <= personGroup[percentile]) {
            return percentile;
        }
    }
};