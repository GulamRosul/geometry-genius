function calculatorTriangleArea() {
    //  get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value; 
    const base = parseFloat(baseValueText);


    // get triangle height value 
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    const area = 0.5 * base * height;
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}
 
function calculatorRectangleArea() {
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);


    const area = width * length;
    const rectangleAreaSpan = document
        .getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}

// reusable function --->

function calculatorParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    const area = base * height;
    setElementInnerText('parallelogram-area', area);

}

function calculatorEllipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);
}



 
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;

    const value = parseFloat(inputValueText);
    return value;
}

function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}



