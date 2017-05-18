
//Aufgabe: 8 - Inheritance
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace A8Inheritance {
    
    export class Honigbiene extends SuperKlasseBiene {
    
        x: number;
        y: number;
        color: string;
        stachel:boolean;


    
        constructor(_x:number,_y:number) {
    
            super(_x,_y);
            console.log("Create Honigbiene");
            this.x = 1190;
            this.y = 475;
            this.setRandomStyle();}
    

 

    
 
//Methode 'move' (ueberschrieben) - Biene bewegen
    
      move() : void {
           

            this.x += Math.random() * 5 - 4;
            this.y += Math.random() * 6 - 3;
            
            for (let i: number = 0; i < z; i++) {
        
            if (this.x < 0) {
                this.x = crc2.canvas.width;
            }
            if (this.y < 0) {
                this.y = crc2.canvas.height;
            }
            if (this.y >= crc2.canvas.height) {
                this.y = 0;
            }}}
    
    
//Methode 'speed'
        
//     speed() : void {}
//    
//
//
        

}
}