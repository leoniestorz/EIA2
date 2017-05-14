
//Aufgabe: 7 - OO-Blumenwiese
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 14.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert. 

namespace BienenInterface {
    
export class Blumen {
    
        x: number;
        y: number;

 

    
    constructor(_x: number, _y: number) {
        
            this.x = _x;
            this.y = _y;

    }
    
    
//Methode 'setRandomPosition'
        
     setRandomFlowers() : void {
         
         for (var i:number = 0; i < 40; i++) {
             
         let randomFlower:number = Math.floor((Math.random() * 3));
         this.x = Math.floor((Math.random() * 1100) - 10); 
         this.y = Math.floor((Math.random() * 255) + 380);
         
         
         
           switch (randomFlower) {
                        
                                case 0:
                                    this.drawSonnenblume();
                                    break;
                                case 1:
                                    this.drawMohnblume();
                                    break;
                                case 2:
                                    this.drawTulpe();
                                    break;} 
           }

     }
    
 
    
    
//Methode 'drawSonnenblume'
   
        drawSonnenblume(): void {
         
        //Stiel
         
        crc2.beginPath();
        crc2.strokeStyle = "#556B2F";
        crc2.fillStyle = "#556B2F";
      
        crc2.fillRect(this.x + 68,this.y + 30, 3, 55);
         
        //Blätter
         
        crc2.lineTo(this.x + 70, this.y + 50);
        crc2.lineTo(this.x + 60, this.y + 50);
        crc2.lineTo(this.x + 70, this.y + 70);
         
        crc2.stroke();
        crc2.fill();
        
   
        //Blueten
         
        crc2.beginPath();
        crc2.fillStyle = "#FFD700";
         
        crc2.moveTo(this.x + 62,this.y + 24);
        crc2.lineTo(this.x + 50,this.y + 15);
        crc2.lineTo(this.x + 60,this.y + 28);
        crc2.lineTo(this.x + 45,this.y + 25);
        crc2.lineTo(this.x + 58,this.y + 33);
        crc2.lineTo(this.x + 48,this.y + 40);
        crc2.lineTo(this.x + 61,this.y + 37);
        crc2.lineTo(this.x + 55,this.y + 50);
        crc2.lineTo(this.x + 65,this.y + 38);
        crc2.lineTo(this.x + 66,this.y + 52);
        crc2.lineTo(this.x + 70,this.y + 39);
        crc2.lineTo(this.x + 76,this.y + 50);
        crc2.lineTo(this.x + 75,this.y + 37);
        crc2.lineTo(this.x + 85,this.y + 45);
        crc2.lineTo(this.x + 78,this.y + 33);
        crc2.lineTo(this.x + 90,this.y + 36);
        crc2.lineTo(this.x + 79,this.y + 28);
        crc2.lineTo(this.x + 92,this.y + 24);
        crc2.lineTo(this.x + 78,this.y + 23);
        crc2.lineTo(this.x + 88,this.y + 14);
        crc2.lineTo(this.x + 75,this.y + 20);
        crc2.lineTo(this.x + 78,this.y + 8);
        crc2.lineTo(this.x + 70,this.y + 20);
        crc2.lineTo(this.x + 69,this.y + 5);
        crc2.lineTo(this.x + 65,this.y + 20);
        crc2.lineTo(this.x + 58,this.y + 8);
        crc2.lineTo(this.x + 62,this.y + 24);
        
        crc2.fill();
            
        //Bluetenmitte
         
        crc2.beginPath();
        crc2.fillStyle = "#000000";
         
        crc2.arc(this.x  + 70, this.y + 30, 5, 0, 2 * Math.PI);
       
        crc2.closePath();
        crc2.fill();}  
        
    
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
       
    


}}