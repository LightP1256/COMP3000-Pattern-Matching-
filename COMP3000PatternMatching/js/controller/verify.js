"use strict";

const personName = document.getElementById(`personName`),
    personAge = document.getElementById(`personAge`),
    sendInfoButton = document.getElementById(`sendInfoButton`);

//Field Formats

const inputFieldFormats = {
    'name': `[a-z]`,
    'age': `[0-9]`
};

const inputsLengthData = {
    'personName': [personName, 3, 20],
    'personAge': [personAge, 10, 100]
};

// Verification

const verifyInputFormat = (expressionToValidate, event) => {
    const keyPressed = event.key;
    const expectedValues = new RegExp(expressionToValidate, `i`);
    (expectedValues.test(keyPressed)) ?
        keyPressed :
        event.preventDefault();
};

const hasInputWrongLength = (valueProvided, minLength, maxLength) => {
    if ((valueProvided.length < minLength) || (valueProvided.length > maxLength)) {
        alert(`Name needs to be between 3-20 letters`);
        return true;
    }
    return false;
};

const hasInputWrongNumber = (valueProvided, minLength, maxLength) => {
    if ((parseInt(valueProvided) >= minLength) && (parseInt(valueProvided) <= maxLength)) {
        return false;
    }
    alert(`Age needs to be between 10-100`);
    return true;
};

// Global Verification

const verifyFormData = (event) => {

    const [name, minLength, maxLength] = inputsLengthData.personName;
    const [age, minAge, maxAge] = inputsLengthData.personAge;

    if ((hasInputWrongLength(name.value, minLength, maxLength)) || (hasInputWrongNumber(age.value, minAge, maxAge))) {
        event.preventDefault();
        return false;
    }

    const personData = {
        'personName': name.value,
        'personAge': age.value
    };

    localStorage.setItem('personData', JSON.stringify(personData));
};

//Events

personName.addEventListener(`keypress`, (event) => verifyInputFormat(inputFieldFormats.name, event));
personAge.addEventListener(`keypress`, (event) => verifyInputFormat(inputFieldFormats.age, event));
sendInfoButton.addEventListener(`click`, verifyFormData);