
//Aufgabe: 8 - Inheritance
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace A8Inheritance {
    
    export class Mohnblume extends SuperKlasseBlume {
    

 
        constructor() {
            super();
            console.log("Create Mohnblume");
            this.drawMohnblume();
           
        }
        
//Methode 'drawMohnblume'
    
        drawMohnblume(): void {
         
        //Stiel
         
        crc2.beginPath();
        crc2.strokeStyle = "#556B2F";
        crc2.fillStyle = "#556B2F";
       
        crc2.fillRect(this.x - 10,this.y + 5, 4, 55);
         
        //Blätter 
         
        crc2.moveTo(this.x - 10, this.y + 30);
        crc2.lineTo(this.x + 5, this.y + 15);
        crc2.moveTo(this.x - 10, this.y + 40);
        crc2.lineTo(this.x - 20, this.y + 30);
        crc2.moveTo(this.x - 10, this.y + 55);
        crc2.lineTo(this.x + 2, this.y + 40);
        
        crc2.stroke();
        crc2.fill();
   
        //Blueten
         
        crc2.beginPath();
        crc2.fillStyle = "#8B0000";
         
        crc2.moveTo(this.x, this.y);
        crc2.arc(this.x - 5, this.y - 20, 10, 0, 2 * Math.PI);
        crc2.arc(this.x + 4, this.y - 8, 10, 0, 2 * Math.PI);
        crc2.arc(this.x - 10, this.y + 2, 10, 0, 2 * Math.PI);
        crc2.arc(this.x - 20, this.y - 10, 10, 0, 2 * Math.PI);
         
        crc2.fill();
       
        //Bluetenmitte
         
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(this.x - 8, this.y - 7, 5, 0, 2 * Math.PI);
       
        crc2.closePath();
        crc2.fill();}
        
        }
    }