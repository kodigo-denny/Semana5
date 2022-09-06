//var, let y const  

//variable:Valor que me permite guardar un espacio en 
//memoria  

//declaración de la variable
let mascota;

//inicialización de la varible 
mascota="perro"

//declaración e inicialización 
//de una variable  

let mascota1="perro"

console.log(mascota1)
document.write(mascota1)
document.write("<br>")

//REGLAS DE LAS VARIABLES  
/* 1.let no me permite declarar la variable 
     con el mismo nombre
   
   2.let permite declarar la variable y no inicializarla 
     y más tarde en cualquier lugar del código 
     inicializarla

    1.var me permite declarar otra variable con el mismo 
      nombre

    2.Tambien me permite declarar sin inicializar.
  
    3.const no nos deja declarar una variable sin inicializarla

    4.const no nos deja declarar una variable con el mismo nombre
    */

var nombre="Pedro"

console.log(nombre)
document.write(nombre)
document.write("<br>")

var nombre="Carlos"

console.log(nombre)
document.write(nombre)
document.write("<br>")

var pajaro; 


pajaro="Loro"

console.log(pajaro)
document.write(pajaro)
document.write("<br>")

//variable undefined o variable null  

let pez ; 

console.log(pez)
document.write(pez)
document.write("<br>")


function saltar(){
    let tiburon="blanco"
    console.log(tiburon)
    document.write(tiburon)
    document.write("<br>")
}
saltar();
//console.log(tiburon)

//Estado inicial 

let encendido=null 

console.log(encendido)
document.write(encendido)
document.write("<br>")

//const  

const perro="lucas";

const perro1="perez"

console.log(perro)
document.write(perro)
document.write("<br>")
console.log(perro1)
document.write(perro1)
document.write("<br>")

//No usaremos nunca var  
//Usaremos let cuando nuestra variable vaya a cambiar 
//Usaremos const cuando nuestra variable sea fija y no cambie 


let fuerzaEnemigo=20;


fuerzaEnemigo=30

console.log(fuerzaEnemigo)
document.write(fuerzaEnemigo)
document.write("<br>")