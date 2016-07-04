$(document).ready(function(){
    'use strict';
    console.log("Exmplos Functions Cap 6");



    function getExemplo_1(){
        return "Funcao Com retorno.  Chamada da funcao getExemplo_1()";
    }

    document.getElementById("divExemplo_1").innerHTML = getExemplo_1();
   
    
    
    function getExemplo_2(){
         return  "Referenciando a funcao getExemplo_2().  </br> const f = getExemplo_2; </br> f();";
    }

    const f = getExemplo_2;
    
    document.getElementById("divExemplo_2").innerHTML = f();
   
     function getExemplo_3(){
         return  "Ou atribuindo uma funcao a uma propriedade de objeto.  </br> const obj = {}; </br> obj.f = getExemplo_3; </br>obj.f();";
    }
    
    
    const obj = {};
    obj.f = getExemplo_3;
    
    document.getElementById("divExemplo_3").innerHTML =obj.f();


     
    document.getElementById("divExemplo_2").innerHTML = f();
   
     function getExemplo_4(){
         return  "Ou ate mesmo adicionar a funcao em um Array.  </br> const arr = [1,2,3]; </br> arr[1] = getExemplo_4; </br>arr[1]();";
    }
    
    const arr = [1,2,3]; 
    arr[1] = getExemplo_4;
    arr[1]();
    
    document.getElementById("divExemplo_4").innerHTML =arr[1]();


    function getSentence({ subject, verb, object }) {  
         var off = "";
         off += "function getSentence({ subject, verb, object }) {   </br> return `${subject} ${verb} ${object}`; </br>} </br>  ";
         off += " const o = {  subject: \"I\",   verb: \"love\",   object: \"JavaScript\" };</br></br>"
         off += "getSentence(o); </br></br>";
         
         off += "Retorno : ";
         off += `${subject} ${verb} ${object}`; 
         
          return off;
    }
    
    const o = {  subject: "I",   verb: "love",   object: "JavaScript" };

    document.getElementById("divExemplo_5").innerHTML = getSentence(o); 


  
   
   function addPrefix(prefix, ...words) {   
        const prefixedWords = [];  
        for(let i=0; i<words.length; i++) {     
            prefixedWords[i] = prefix + words[i];  
            }  
        return prefixedWords
    }

    var  exemplo_6 = "Exemplo utlizando o operador de propagacao (...)</br>";  
    exemplo_6 += "function addPrefix(prefix, ...words){ ... }  ";
    exemplo_6 += "addPrefix(\"con\", \"verse\", \"versAllStar\");</br> ";
    exemplo_6 += "Retorno da funcao : ";
    exemplo_6 += addPrefix("con", "verse", "versAllStar"); 

    document.getElementById("divExemplo_6").innerHTML = exemplo_6; 





    






});