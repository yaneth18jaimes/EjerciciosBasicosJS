//pide la edad y si es mayor de 18 años indica que ya puede conducir 

//pedir por teclado la edad
var edad =prompt(parseInt("digite su edad"));

//comparar si el numero que digito es mayor que 18 o igual
if (edad >= 18 ) {

    //muestra el mensaje
    document.write("puedes conducir");
    
}else{

    //muestra el mensaje
    document.write("eres aun menor no puedes conducir");
}