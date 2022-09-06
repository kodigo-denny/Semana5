//OPERADORES DE COMPARACIÓN

//1. <   menor que 
//2. >   mayor que
//3. >=  mayor o igual que 
//4. <=  menor o igual que
//5. ==  igual que (igual valor)
//6. === estrictamente igual que (igual el valor y tipo de dato)
//7. !=  diferente que (distinto valor)
//8. !== estrictamente diferente que( distinto valor y tipo de dato)

let edadMaria=37; 
let edadJose='37';
let edadAntonio=14;
let edadCarmen=15; 
let edadCasimiro=36;

if(edadMaria===edadJose){
    console.log('tenemos la misma edad')
    document.write('tenemos la misma edad')
    document.write("<br>")
}else{
    console.log('no tenemos la misma edad')
    document.write('no tenemos la misma edad')
    document.write("<br>")
}

//OPERADORES ARITMETICOS 

console.log(3+5)//suma
document.write(3+5)
document.write("<br>")

console.log(56-34)//resta
document.write(56-34)
document.write("<br>")

console.log(3*56)//multiplicación 
document.write(3*56)
document.write("<br>")

console.log(5/2)//operacion de división 
document.write(5/2)
document.write("<br>")

console.log(10%2)//operador de modulo o resto
document.write(10%2)
document.write("<br>")


//OPERADORES LÓGICOS 
// ! operador de negación 
// &&  operador and o y  
// || operador or  o   ó 

let nombre="Maria"; 
let nombreMascota="Pipe"; 


if(nombreMascota){
    console.log(`La mascota tiene nombre y 
    su nombre es ${nombreMascota}`)

    document.write(`La mascota tiene nombre y 
    su nombre es ${nombreMascota}`)
    document.write("<br>")
}else{
    console.log(`La mascota no tiene nombre`)

    document.write(`La mascota no tiene nombre`)
    document.write("<br>")
}


let nombreMujer="Carla"
let edadMujer ='27'
let estadoMujer='soltera'
let isMujer=true


if(nombreMujer=="Carla" && edadMujer==27 ){
    console.log('Se cumple la condición')
    document.write('Se cumple la condición')
    document.write("<br>")
}else{
    console.log('No se cumple la condición ') 
    document.write('No se cumple la condición ')
    document.write("<br>")
}