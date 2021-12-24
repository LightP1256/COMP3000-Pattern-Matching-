import {getPersonGroup} from "/js/percentiles.js";
import{getPercentile} from '/js/percentiles.js';
import {getNumberOfRightAnswers} from '/js/answer.js';
import {getPersonDiagnostic} from '/js/answer.js';
const [personData, personAnswers] = JSON.parse(localStorage.getItem('dataToEvaluate')),
    resultsTitle = document.getElementById('title'),
    resultsContainer = document.getElementById('personResults');
localStorage.clear();
const createResultField = (message, value) => {
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = `${message} ${value}`;
    resultsContainer.appendChild(paragraphElement);
};
const personGroup = getPersonGroup(personData.personAge);
const personHits = getNumberOfRightAnswers(personAnswers);
createResultField('Correct answers: ', personHits);
const personPercentile = getPercentile(personHits, personGroup);
createResultField('\n' + 'Percentile: ', personPercentile);
const [capacityDiagnostic, capacityRange] = getPersonDiagnostic(personPercentile);
createResultField('Intellectual capacity: ', capacityDiagnostic);
createResultField('Capacity range: ',capacityRange);
resultsTitle.textContent += ` ${personData.personName}.`;
