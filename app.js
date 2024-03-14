let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let getBmi = document.querySelector("#btn");
let showBmi = document.querySelector(".showBMI");
let showhealth = document.querySelector("#health");

getBmi.addEventListener("click",()=>{
    let weightValue = weight.value;
    let heightValue = height.value;
    let newHeight = parseFloat(height.value/100);
    let bmi = parseFloat(weightValue/(newHeight*newHeight)).toFixed(2);
    showBmi.style.border =" 1rem";

    if(weightValue==="" || heightValue===""){
        alert("Enter height and weight");
    }
    else if(bmi<18.5){
        showBmi.innerHTML = `YOUR BMI IS : ${bmi}`;
        showhealth.innerText = "TIME TO GAIN WEIGHT"; 
        showBmi.style.backgroundColor = "blue";
        document.querySelector(".healthyBMI").innerHTML = "Healthy BMI range: 18.5 kg/m2 - 25 kg/m2";
    }
    else if(bmi>=18.5 && bmi<=24.9){
        showBmi.innerHTML = `YOUR BMI IS : ${bmi}`;
        showhealth.innerText = "GREAT SHAPE!"
        showBmi.style.backgroundColor = "green";
        document.querySelector(".healthyBMI").innerHTML = "Healthy BMI range: 18.5 kg/m2 - 25 kg/m2";
    }
    else if(bmi>24.9 && bmi<30){
        showBmi.innerHTML = `YOUR BMI IS : ${bmi}`;
        showhealth.innerText = "TIME TO RUN!";
        showBmi.style.backgroundColor = "orange";
        document.querySelector(".healthyBMI").innerHTML = "Healthy BMI range: 18.5 kg/m2 - 25 kg/m2";
    }
    else{
        showBmi.innerHTML = `YOUR BMI IS : ${bmi}`;
        showhealth.innerText= "TIME TO WORKOUT"
        showBmi.style.backgroundColor = "red";
        document.querySelector(".healthyBMI").innerHTML = "Healthy BMI range: 18.5 kg/m2 - 25 kg/m2";
    }
   
});
