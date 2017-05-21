
//Aufgabe: 8 - Inheritance
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace A8Inheritance {
    
    export class Honigbiene extends SuperKlasseBiene {
    
        xTarget:number;
        yTarget:number;
        speed:number;


    
        constructor(_x:number,_y:number) {
    
            super(_x,_y);
            console.log("Create Honigbiene");
            this.setRandomStyle();
            this.speed = 0.008;
            this.getRandomFlowerPosition();
            this.setStartPosition();}
        

 

    
 
//zufällige Position x,y aus dem Blumenarray holen 
        
        getRandomFlowerPosition(): void {
            
            let i:number = Math.floor(Math.random() * (alleBlumen.length - 1));
            this.xTarget = alleBlumen[i].x;
            this.yTarget = alleBlumen[i].y;
            
        }

        
//Biene zu dieser Position x,y bewegen 
        
        move(): void {
            
     

            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;
            
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.getRandomFlowerPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;}

      



}}
}