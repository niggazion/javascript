//Strings e var
var nome = "rafael laranjeira";
alert ("Bem vindo " + nome);
alert (nome.replace("laranjeira","Gangster"));
alert(nome.toUpperCase());


// arrays e DIC

var lista = ["rafael","Duda","Tessy"];
alert(lista[0]);
// lista.push("lara"); poe um elemento na lista
//lista.pop(); tira o ultimo item da lista
//lista.join("-"); coloca um  -  entre os elementos da lista

 var dic = {nome:"rafael",idade:"33",Time:"coringao"};


 alert(dic.idade);

 dici = [{nome:"rafael",idade:"33",Time:"coringao"},{nome:"Tessy",idade:"28",Time:"Barcelona"}];
 alert(dici[1].Time)//imprime posicao 1 time

 //condicional e date

 var num = prompt("Qual a sua idade");// exibe na tela para o usuario digitar
 if (num > 18){
    alert("Pode beber");
 }
else{
    alert("nao pode Beber");
    }
/*var count = 0;

while (count <= 5 ){

cout = cout +1;

};

*/
var a = lista.length;
for(i = 0; i < a;i++){
    alert ("o nome e" + lista[i]);
    console.log(lista[1]);
}
var data = new Date();
alert(Date());
alert(data.getDay());
alert(data.getMinutes());
alert(data.getHours());

function load(){

document.getElementById("a").innerHTML = "Foi inserido pelo JS";

}
/*
var passo;
for (passo = 0; passo < 5; passo++) {
  // Executa 5 vezes, com os valores de passos de 0 a 4.
  console.log('Ande um passo para o leste');
}
*/