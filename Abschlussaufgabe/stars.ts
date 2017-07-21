
//Aufgabe: Abschlussaufgabe
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.07.17
//   
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.


namespace Abschlussaufgabe {
    

    
    export class Star extends MovingObject {

    
        constructor(_x:number,_y:number) {
    
            super(_x,_y);
            this.x = Math.floor((Math.random() * canvas.width) + 50);
            this.y = Math.floor((Math.random() * canvas.height) + 50);
            this.draw();
           


        }

 
//Stern zeichnen
        
    draw(): void {
       
        crc2.beginPath();
        crc2.fillStyle = "rgb(255,215,0,0.8)";
        crc2.moveTo(this.x,this.y);
        crc2.lineTo(this.x + 10,this.y)
        crc2.lineTo(this.x + 15,this.y - 10)
        crc2.lineTo(this.x + 20,this.y )
        crc2.lineTo(this.x + 30,this.y)
        crc2.lineTo(this.x + 21,this.y + 6)
        crc2.lineTo(this.x + 25,this.y + 15)
        crc2.lineTo(this.x + 15,this.y + 8)
        crc2.lineTo(this.x + 7,this.y + 15)
        crc2.lineTo(this.x + 9,this.y +6)
        crc2.closePath();
        crc2.fill();
        
        
    }
  

  } 

   
}


