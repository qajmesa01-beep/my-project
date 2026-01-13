function calculateBMI() {
    const h = parseFloat(document.getElementById("height").value);
    const w = parseFloat(document.getElementById("weight").value);
    const r = document.getElementById("result");
    
    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
        r.innerText = "Enter valid positive numbers.";
        return;
    }
    
    const bmi = (w / ((h / 100) ** 2)).toFixed(2);
    let cat = "";
    let desc = "";
    
    if (bmi < 18.5) {
        cat = "Underweight";
        desc = "May indicate malnutrition.";
    } else if (bmi < 25) {
        cat = "Normal";
        desc = "Healthy range.";
    } else if (bmi < 30) {
        cat = "Overweight";
        desc = "Consider lifestyle changes.";
    } else {
        cat = "Obese";
        desc = "Seek medical advice.";
    }
    
    r.innerText = `BMI: ${bmi} (${cat}). ${desc}`;
}

function reset() {
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").innerText = "Result here";
}

document.getElementById("calculateBtn").addEventListener("click", calculateBMI);
document.getElementById("resetBtn").addEventListener("click", reset);

["height", "weight"].forEach(id => {
    document.getElementById(id).addEventListener("keypress", e => {
        if (e.key === "Enter") calculateBMI();
    });
});Z
