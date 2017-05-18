
//Aufgabe: 8 - Inheritance
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert. 

namespace A8Inheritance {
    
    export class Tulpe extends SuperKlasseBlume{
      
        x: number;
        y: number;

 
        constructor(_x: number, _y: number) {
            super(_x,_y);
            console.log("Create Tulpe");
            this.x = _x;
            this.y = _y;}
        
//Methode 'drawTulpe'    
 
        drawTulpe(): void {
         
        //Stiel
         
        crc2.beginPath();
        crc2.fillStyle = "#556B2F";
         
        crc2.fillRect(this.x + 9,this.y + 28, 3, 40);
         
        //Blatt
         
        crc2.arc(this.x + 8, this.y + 30, 20, 0, 1.5);
         
        crc2.fill();
   
        //Bluete
          
        crc2.beginPath();
        crc2.fillStyle = "#FF1493";
         
        crc2.arc(this.x  + 10, this.y + 20, 10, 0, 1 * Math.PI);
        crc2.moveTo(this.x ,this.y + 22);
        crc2.lineTo(this.x ,this.y + 7);
        crc2.lineTo(this.x + 6 ,this.y + 14);
        crc2.lineTo(this.x + 10.5 ,this.y + 4);
        crc2.lineTo(this.x + 15 ,this.y + 14);
        crc2.lineTo(this.x + 20 ,this.y + 7);
        crc2.lineTo(this.x + 20 ,this.y + 21);
       
        crc2.closePath();
        crc2.fill();} 
        
        }
}