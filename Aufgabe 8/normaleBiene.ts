
//Aufgabe: 8 - Inheritance
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace A8Inheritance {
    
    export class normaleBiene extends SuperKlasseBiene {
     
        constructor(_x:number,_y:number) {
    
            super(_x,_y);
            console.log("Create normaleBiene");
            this.setRandomStyle();}
   

 
}
}