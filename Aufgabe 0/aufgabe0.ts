
//Aufgabe: 0 - Eine winzige, interaktive Webseite
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 16.03.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.




document.addEventListener('DOMContentLoaded', function () {
 
      
    var text:string = "Hallo";
    
    var begruessung:string = "Toll, dass du hier bist!"
    
    
    
    var box: string = prompt("Bitte gebe hier deinen Namen ein");
    
        document.body.innerHTML = text + " " + box + "!" + " " + begruessung;
    
});