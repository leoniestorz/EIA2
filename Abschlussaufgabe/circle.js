//Aufgabe: Abschlussaufgabe
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.07.17
//   
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Circle = (function () {
        function Circle(_x, _y) {
            this.x = 1190;
            this.y = 475;
            this.draw(100, 100, "red");
            this.setRandomStyle();
        }
        //Methode 'update' - Biene an neuer Position malen 
        //    update () : void {
        //            
        //        this.draw ();
        //        this.move ();}
        //Methode 'draw' - Biene malen
        Circle.prototype.draw = function (_x, _y, _fillStyle) {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = _fillStyle;
            Abschlussaufgabe.crc2.arc(_x, _y, 15, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
        };
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
        Circle.prototype.setRandomStyle = function () {
            var randomColor = "hsl(" + Math.random() * 60 + ", 100%, 50%)";
            var randomStachel = Boolean(Math.round(Math.random()));
            this.color = randomColor;
            this.stachel = randomStachel;
        };
        return Circle;
    }());
    Abschlussaufgabe.Circle = Circle;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=circle.js.map