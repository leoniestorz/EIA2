

//Aufgabe: Abschlussaufgabe
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.07.17
//   
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.



namespace Abschlussaufgabe {
    

    
    export class ColourCircle extends Circle {
    
        x: number;
        y: number;
        color: string;
        positionY:number;
        positionX:number;
        e:number = 0;



    
        constructor(_x:number,_y:number) {
    
            super(_x,_y);
            this.x = Math.floor((Math.random() * canvas.width) + 50);
            this.y = Math.floor((Math.random() * canvas.height) + 50);
            this.draw();
            this.setRandomStyle();
            this.e = 0;

        }
 

 
//Methode 'draw' 
        
    draw(): void {
       
        crc2.beginPath();
        crc2.fillStyle = this.color;
        crc2.arc(this.x,this.y,15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        
        e=0;
        
        
    }
    

  
        
//Methode 'setRandomStyle'
    
    setRandomStyle(): void {
     
    let randomColor: string = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    this.color = randomColor;}
   
}}