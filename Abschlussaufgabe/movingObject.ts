
//Aufgabe: Abschlussaufgabe
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.07.17
//   
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.



namespace Abschlussaufgabe {
    

    
    export class MovingObject {
    
        x: number;
        y: number;
        color: string;
        positionY:number;
        positionX:number;
        


    
        constructor(_x:number,_y:number) {
    
         
            this.x = Math.floor((Math.random() * canvas.width) + 50);
            this.y = Math.floor((Math.random() * canvas.height) + 50);
            this.draw();

        }
 
//Kreisposition herausfinden
        
        takeObjectPosition(): void {
            this.positionX = this.x;
            this.positionY = this.y;   
}
        
//Animation
        
    update () : void {
            
        this.draw ();
        this.move ();
        this.takeObjectPosition();}

 
//Objekt zeichnen
        
    draw(): void {
       
        crc2.beginPath();
        crc2.fillStyle = this.color;
        crc2.arc(this.x,this.y,15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    
 
//zufaellige Bewegungsrichtung
    
 move() : void {
           
            this.y += Math.random() * 10 ;
            
            for (let i: number = 0; i < 100; i++) {
        
            if (this.x < 0) {
                this.x = crc2.canvas.width;
            }
            if (this.y < 0) {
                this.y = crc2.canvas.height;
            }
            if (this.y >= crc2.canvas.height) {
                this.y = 0;
            }}}
        
//zufaellige Startposition
        
   setRandomPosition(): void {
       
            this.x = Math.floor((Math.random() * canvas.width) -50); 
            this.y = Math.floor((Math.random() * canvas.height) -50);
       
}
          
             }}
