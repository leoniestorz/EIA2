//Aufgabe: 8 - Inheritance
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var A8Inheritance;
(function (A8Inheritance) {
    var SuperKlasseBlume = (function () {
        function SuperKlasseBlume() {
            this.setRandomPosition();
        }
        //Methode 'setRandomPosition'
        SuperKlasseBlume.prototype.setRandomPosition = function () {
            this.x = Math.floor((Math.random() * 1100) - 10);
            this.y = Math.floor((Math.random() * 255) + 380);
        };
        //Methode 'draw'
        SuperKlasseBlume.prototype.draw = function () {
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
        };
        return SuperKlasseBlume;
    }());
    A8Inheritance.SuperKlasseBlume = SuperKlasseBlume;
})(A8Inheritance || (A8Inheritance = {}));
//# sourceMappingURL=SuperKlasseBlume.js.map