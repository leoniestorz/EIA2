
//Aufgabe: 7 - OO-Blumenwiese
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 14.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert. 

namespace A7Classes {
    
    export class Biene {
    
        x: number;
        y: number;
        color: string;
        stachel:boolean;


    
        constructor(_x:number,_y:number) {
    
         
            this.x = 1190;
            this.y = 475;
            this.draw()
            this.setRandomStyle();}
    
//Methode 'update' - Biene an neuer Position malen 
        
    update () : void {
            
        this.draw ();
        this.move ();}

 
//Methode 'draw' - Biene malen
        
    draw(): void {
        
//      Koerper
         
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.fillStyle = "#000000";
        crc2.arc(this.x,this.y, 7, 0, 2 * Math.PI);
        crc2.arc(this.x - 8 ,this.y - 3, 4, 0, 2 * Math.PI);
        
       
        if (this.stachel == true) {
            
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x + 13, this.y + 3);}
         
        else {}
        
        crc2.stroke();
        crc2.fill();
        
//      Streifen
         
        crc2.beginPath();
        crc2.fillStyle = this.color;
        crc2.rect(this.x - 6, this.y - 4, 2.5, 9);
        crc2.rect(this.x - 2, this.y - 6, 2.5, 13);
        crc2.rect(this.x + 2, this.y - 4, 2.5, 10);
        
             
        crc2.stroke;
        crc2.fill();
        
//      Fluegel
         
        crc2.beginPath();
        crc2.fillStyle = "#aFEEEE";
        crc2.arc(this.x - 4, this.y - 15, 10, 0, 1.5);
        crc2.moveTo(this.x,this.y);
        crc2.arc(this.x - 1, this.y - 10, 10, 0, 1.5);


        crc2.closePath();
        crc2.fill();}
    
 
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
    
    
//Methode 'setRandomStyle' - Zufällige Farbe und (k)ein Stachel 
    
    setRandomStyle(): void {
     
    let randomColor: string = "hsl(" + Math.random() * 60 + ", 100%, 50%)";
    let randomStachel : boolean = Boolean(Math.round(Math.random()));  
    
    this.color = randomColor;
    this.stachel = randomStachel;}
    

    
}
}