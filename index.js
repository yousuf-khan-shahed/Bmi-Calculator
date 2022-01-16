const weightInput = document.querySelector("#weight")
const heightInput = document.querySelector("#height")
const calcButton = document.querySelector("#calculateBtn")
const resetButton = document.querySelector("#resetBtn")
const showResult = document.querySelector("#showResult")
const showMessage = document.querySelector("#showMessage")

function calculateBmi() {
    let weight = weightInput.value
    let height = heightInput.value
    let bmi = (weight / (height * height)).toFixed(2)
    let result = ("Your BMI Is : " + bmi)
    showResult.textContent = result
    let msg = showMsg(bmi) 
    showMessage.textContent = msg
}

function showMsg(bmiValue) {
    if(bmiValue < 16){
        return "You are Severe Thin"
    } else if(bmiValue >= 16 && bmiValue <= 17){
        return "You Are Moderate Thin"
    } else if(bmiValue > 17 && bmiValue <= 18.5){
        return "You are Mid Thin"
    } else if(bmiValue > 18.5 && bmiValue <= 25){
        return "You Are Normal"
    } else{
        return "You Are Overweight"
    }
}

function reset() {
    weightInput.value = ""
    heightInput.value = ""
    showResult.textContent = "Result Will Show Here"
    showMessage.textContent = " "
}

function eventHandeler(){
    if(Number(weightInput.value) && Number(heightInput.value) > 0){
        calculateBmi()
    }else{
        alert("Please provide valid input") 
        reset()
    }
}

calcButton.addEventListener('click',eventHandeler)
resetButton.addEventListener('click',reset)
