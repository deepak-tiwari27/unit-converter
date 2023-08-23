
const input = document.getElementById("number")
const btn = document.getElementById("convert")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")


btn.addEventListener("click",()=>{
    if(!input.value){
        length.innerHTML = `Please provide a value!`
        volume.innerHTML = `Please provide a  value!`
        mass.innerHTML = `Please provide a  value!`
    }else if(input.value<0){
     
      length.innerHTML=`Oops negative value!!!`
      volume.innerHTML =`Oops negative value!!!`
      mass.innerHTML =`Oops negative value!!!`
      input.value=''


    }
    
    else{

    length.innerHTML = `${input.value}metres= ${(input.value*3.281).toFixed(3)}feet/ ${input.value}feet = ${(input.value/3.281).toFixed(3)}metres`
    volume.innerHTML = `${input.value}litres= ${(input.value*.264).toFixed(3)}gallon/ ${input.value}gallon = ${(input.value/.264).toFixed(3)}litres`
 mass.innerHTML = `${input.value}kg= ${(input.value*2.204).toFixed(3)}pounds/ ${input.value}pounds = ${(input.value/2.204).toFixed(3)}kg`
 input.value=''
}})







    