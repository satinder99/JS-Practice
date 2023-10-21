function calc(){
    let height = document.querySelector('#height').value;
    let weight =  document.querySelector('#weight').value;

    let myBMI = Math.round(weight/(height*height));
    console.log(myBMI);
    let result=document.querySelector('#result');
    result.textContent = `BMI INDEX : ${myBMI}`
    if(myBMI<18.5 || myBMI>22){
        result.style.border = "2px solid red";
    }
    else{
        result.style.border = "2px solid green";
    }
}