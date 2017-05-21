
//Aufgabe: 8 - Inheritance
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace A8Inheritance {
    
    export class SuperKlasseBlume {
    
        x: number;
        y: number;

 
        constructor() {
        
            this.setRandomPosition();
            
        }
        
//Methode 'setRandomPosition'
        
        setRandomPosition(): void {
       
            this.x = Math.floor((Math.random() * 1100) - 10); 
            this.y = Math.floor((Math.random() * 255) + 380);
       
}    
        
//Methode 'draw'
        
        draw(): void {
            
//           let randomFlower = Math.floor(Math.random() * 3);
//            
//           let s: Sonnenblume = new Sonnenblume(this.x,this.y); 
//           let m: Mohnblume = new Mohnblume(this.x,this.y); 
//           let t: Tulpe = new Tulpe(this.x,this.y); 
//            
//           switch (randomFlower) {
//                        
//                                case 0:
//                                    s.drawSonnenblume();
//                                    break;
//                                case 1:
//                                    m.drawMohnblume();
//                                    break;
//                                case 2:
//                                    t.drawTulpe();
//                                    break;}
        }
        }
    }