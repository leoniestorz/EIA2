
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
    
         
            this.x = 1190;
            this.y = 475;
            this.draw(100,100,"hsl(" + Math.random() * 360 + ", 100%, 50%)")
            this.setRandomStyle();}
    
//Methode 'update' - Biene an neuer Position malen 
        
//    update () : void {
//            
//        this.draw ();
//        this.move ();}

 
//Methode 'draw' - Biene malen
        
    draw(_x:number,_y:number,_fillStyle:string): void {
       
        crc2.beginPath();
        crc2.fillStyle = _fillStyle;
        crc2.arc(_x,_y,15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    
 
//Methode 'move' - Biene bewegen
    
//      move() : void {
//           
//
//            this.x += Math.random() * 5 - 4;
//            this.y += Math.random() * 6 - 3;
//            
//            for (let i: number = 0; i < z; i++) {
//        
//            if (this.x < 0) {
//                this.x = crc2.canvas.width;
//            }
//            if (this.y < 0) {
//                this.y = crc2.canvas.height;
//            }
//            if (this.y >= crc2.canvas.height) {
//                this.y = 0;
//            }}}
//    
    
//Methode 'setRandomStyle' - Zuf�llige Farbe und (k)ein Stachel 
    
    setRandomStyle(): void {
     
    let randomColor: string = "hsl(" + Math.random() * 60 + ", 100%, 50%)";
    let randomStachel : boolean = Boolean(Math.round(Math.random()));  
    
    this.color = randomColor;
//    this.stachel = randomStachel;
    }
    

    
}
}
