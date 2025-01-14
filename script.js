//SLIDER CONFIG
const slider = document.getElementById("age-slider");
const value = document.querySelector(".value");

value.textContent = slider.value;

slider.addEventListener("input", () => {
    value.textContent = slider.value;
})

const weightInput = document.getElementById("weight-input2");
const heightInput = document.getElementById("height-input2");
const weightResult = document.getElementById("weight-result");
const heightResult = document.getElementById("height-result");

weightInput.addEventListener("input", () => {
    const isMetric = document.getElementById("metric").checked;

    if(isMetric) {
        weightResult.innerHTML = (weightInput.value / 2.20462).toFixed(2) + " kg";
    } else {
        weightResult.innerHTML = (weightInput.value * 2.20462).toFixed(2) + " lbs";
    }
})

heightInput.addEventListener("input", () => {
    const isMetric = document.getElementById("metric").checked;

    if(isMetric) {
        heightResult.innerHTML = (heightInput.value / 0.393701).toFixed(2) + " cm";
    } else {
        heightResult.innerHTML = (heightInput.value * 0.393701).toFixed(2) + " inches";
    }
})  

function switchToMetric() {
    weight = document.getElementById("weight-input");
    height = document.getElementById("height-input");
    weight2 = document.getElementById("weight-input2");
    height2 = document.getElementById("height-input2");
    bmiUnit = document.getElementById("bmi-unit");

    weight.placeholder = "kg";
    weight2.placeholder = "lbs";
    weight.value = "";
    weight2.value = "";

    height.placeholder = "cm";
    height2.placeholder = "inches";
    height.value = "";
    height2.value = "";

    bmiUnit.innerHTML = `kg/m&#178;`;
}

function switchToImperial() {
    weight = document.getElementById("weight-input");
    height = document.getElementById("height-input");
    weight2 = document.getElementById("weight-input2");
    height2 = document.getElementById("height-input2");
    bmiUnit = document.getElementById("bmi-unit");

    weight.placeholder = "lbs";
    weight2.placeholder = "kg";
    weight2.value = "";
    weight.value = "";

    height.placeholder = "inches";
    height2.placeholder = "cm";
    height.value = "";    
    height2.value = "";

    bmiUnit.innerHTML = `lbs/inches&#178;`;
}

function calculateBMI() {
    const weight = document.getElementById("weight-input").value;
    const height = document.getElementById("height-input").value;

    const isMetric= document.getElementById("metric").checked;

    let bmi;

    if (isMetric) {
        bmi = weight / ((height / 100) ** 2);
    } else {
        bmi = (weight / (height ** 2)) * 703;
    }

    displayBMI(bmi.toFixed(1));
}

function displayBMI(bmi) {
    if (bmi === "NaN"|| bmi === "Infinity") {
        return;
    }

    bmiResult = document.getElementById("bmi-result");
    bmiText = document.getElementById("bmi-text");
    needle = document.getElementById("needle");

    bmiResult.innerHTML = bmi;

    if(bmi <= 16.0) {
        bmiText.innerHTML = "Severe Thinness";
        bmiResult.style.color = "rgb(255, 247, 0)";
        bmiText.style.color = "rgb(255, 247, 0)";
    } else if (bmi > 16.0 && bmi <= 17.0) {
        bmiText.innerHTML = "Moderate Thinness";
        bmiResult.style.color = "rgb(250, 240, 101)";
        bmiText.style.color = "rgb(250, 240, 101)";
    } else if (bmi > 17.0 && bmi <= 18.5) {
        bmiText.innerHTML = "Mild Thinness";
        bmiResult.style.color = "rgb(198, 240, 100)";
        bmiText.style.color = "rgb(198, 240, 100)";
    } else if (bmi > 18.5 && bmi <= 25.0) {
        bmiText.innerHTML = "Normal";
        bmiResult.style.color = "rgb(87, 243, 95)";
        bmiText.style.color = "rgb(87, 243, 95)";
    } else if (bmi > 25.0 && bmi <= 30.0) {
        bmiText.innerHTML = "Overweight";
        bmiResult.style.color = "rgb(252, 214, 48)";
        bmiText.style.color = "rgb(252, 214, 48)";
    } else if (bmi > 30.0 && bmi <= 35.0) {
        bmiText.innerHTML = "Obese Class I";
        bmiResult.style.color = "rgb(255, 188, 43)";
        bmiText.style.color = "rgb(255, 188, 43)";
    } else if (bmi > 35.0 && bmi <= 40.0) {
        bmiText.innerHTML = "Obese Class II";
        bmiResult.style.color = "rgb(255, 105, 35)";
        bmiText.style.color = "rgb(255, 105, 35)";
    } else {
        bmiText.innerHTML = "Obese Class III";
        bmiResult.style.color = "rgb(190, 38, 0)";
        bmiText.style.color = "rgb(190, 38, 0)";
    }

    if (bmi <= 16.0) {
        needle.style.transform = "translate(-50%, -50%) rotate(-100deg)";
    } else if (bmi >= 40.0) {
        needle.style.transform = "translate(-50%, -50%) rotate(100deg)";
    } else {       
        const bmiAvg = bmi - 16.0; 
        let bmiDeg;

        if (bmiAvg < 12.0) {
            bmiDeg = -(90 - (7.5 * bmiAvg));
        } else {
            bmiDeg = (7.5 * bmiAvg) - 90;
        }
        console.log(bmiDeg);

        needle.style.transform = `translate(-50%, -50%) rotate(${bmiDeg}deg)`;
    }
}
