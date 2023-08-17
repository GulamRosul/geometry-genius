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