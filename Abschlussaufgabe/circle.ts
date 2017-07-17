
//Aufgabe: Abschlussaufgabe
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.07.17
//   
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.



namespace Abschlussaufgabe {
    

    
    export class Circle {
    
        x: number;
        y: number;
        color: string;
//        stachel:boolean;


    
        constructor(_x:number,_y:number) {
    
         
            this.x = Math.floor((Math.random() * canvas.width) + 50);
            this.y = Math.floor((Math.random() * canvas.height) + 50);
            this.draw();
            this.setRandomStyle();
//            this.makeCircleInvisible;
        }
    
//Methode 'update' - Biene an neuer Position malen 
        
    update () : void {
            
        this.draw ();
        this.move ();}

 
//Methode 'draw' - Biene malen
        
    draw(): void {
       
        crc2.beginPath();
        crc2.fillStyle = this.color;
        crc2.arc(this.x,this.y,15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    
 
//Methode 'move' - Biene bewegen
    
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
//Methode 'setRandomPosition'
        
   setRandomPosition(): void {
       
            this.x = Math.floor((Math.random() * canvas.width) - 10); 
            this.y = Math.floor((Math.random() * canvas.height) + 380);
       
}
        
//Methode 'setRandomStyle' - Zufällige Farbe und (k)ein Stachel 
    
    setRandomStyle(): void {
     
    let randomColor: string = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
     
    
    this.color = randomColor;}
                

        
    makeCircleInvisible (_x:number,_y:number) : void {
        
//    let randomColor: string = "#F000000";
//     
//    this.color = randomColor;
    crc2.beginPath();
    crc2.fillStyle = "#000000";
    crc2.fillRect(_x + 68,_y + 30, 3, 55);
    crc2.closePath();
    crc2.fill();
    }
    

    
}
}
