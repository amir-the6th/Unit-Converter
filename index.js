/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/*metrics variables*/
let feet = 0,
    meter = 0,
    galoons = 0,
    litres = 0,
    pounds = 0,
    kilos = 0;

/*user input*/
let conversionValue = 0;

/*DOM elements*/
const conversionEl = document.getElementById("conversion-number");
const lengthEl = document.getElementById("length-result");
const volumeEl = document.getElementById("volume-result");
const massEl = document.getElementById("mass-result");
const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", () => {
    conversionValue = conversionEl.value;
    runConversion(); 
});

function runConversion() {
    calculateLength();
    calculateVolume();
    calculateMass();

    lengthEl.textContent = `
        ${conversionValue} meters = ${feet} feet | ${conversionValue} feet = ${meters} meters
    `;
    volumeEl.textContent = `
        ${conversionValue} litres = ${galoons} galoons | ${conversionValue} galoons = ${litres} litres
    `;
    massEl.textContent = `
        ${conversionValue} kilos = ${pounds} pounds | ${conversionValue} pounds = ${kilos} kilos
    `;
}

function calculateLength() {
    //round to three decimals
    meters = parseFloat(conversionValue / 3.281).toFixed(3);
    feet = parseFloat(conversionValue * 3.281).toFixed(3);
    // better than using 
    //meter = Math.round((conversionValue / 3.281) * 1000) / 1000;
}

function calculateVolume() {
    litres = parseFloat(conversionValue / 0.264).toFixed(3);
    galoons = parseFloat(conversionValue * 0.264).toFixed(3);
}

function calculateMass() {
    kilos = parseFloat(conversionValue / 2.204).toFixed(3);
    pounds = parseFloat(conversionValue * 2.204).toFixed(3);
}