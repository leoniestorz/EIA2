//Aufgabe: 8 - Inheritance
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var A8Inheritance;
(function (A8Inheritance) {
    var SuperKlasseBiene = (function () {
        function SuperKlasseBiene(_x, _y) {
            this.x = 1190;
            this.y = 475;
            this.draw();
            this.setRandomStyle();
        }
        //Methode 'update' - Biene an neuer Position malen 
        SuperKlasseBiene.prototype.update = function () {
            this.draw();
            this.move();
        };
        //Methode 'draw' - Biene malen
        SuperKlasseBiene.prototype.draw = function () {
            //      Koerper
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.strokeStyle = "#000000";
            A8Inheritance.crc2.fillStyle = "#000000";
            A8Inheritance.crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(this.x - 8, this.y - 3, 4, 0, 2 * Math.PI);
            if (this.stachel == true) {
                A8Inheritance.crc2.moveTo(this.x, this.y);
                A8Inheritance.crc2.lineTo(this.x + 13, this.y + 3);
            }
            else { }
            A8Inheritance.crc2.stroke();
            A8Inheritance.crc2.fill();
            //      Streifen
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.fillStyle = this.color;
            A8Inheritance.crc2.rect(this.x - 6, this.y - 4, 2.5, 9);
            A8Inheritance.crc2.rect(this.x - 2, this.y - 6, 2.5, 13);
            A8Inheritance.crc2.rect(this.x + 2, this.y - 4, 2.5, 10);
            A8Inheritance.crc2.stroke;
            A8Inheritance.crc2.fill();
            //      Fluegel
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.fillStyle = "#aFEEEE";
            A8Inheritance.crc2.arc(this.x - 4, this.y - 15, 10, 0, 1.5);
            A8Inheritance.crc2.moveTo(this.x, this.y);
            A8Inheritance.crc2.arc(this.x - 1, this.y - 10, 10, 0, 1.5);
            A8Inheritance.crc2.closePath();
            A8Inheritance.crc2.fill();
        };
        //Methode 'move' - Biene bewegen
        SuperKlasseBiene.prototype.move = function () {
            this.x += Math.random() * 5 - 4;
            this.y += Math.random() * 6 - 3;
            for (var i = 0; i < A8Inheritance.z; i++) {
                if (this.x < 0) {
                    this.x = A8Inheritance.crc2.canvas.width;
                }
                if (this.y < 0) {
                    this.y = A8Inheritance.crc2.canvas.height;
                }
                if (this.y >= A8Inheritance.crc2.canvas.height) {
                    this.y = 0;
                }
            }
        };
        //Methode 'setRandomStyle' - Zuf�llige Farbe und (k)ein Stachel 
        SuperKlasseBiene.prototype.setRandomStyle = function () {
            var randomColor = "hsl(" + Math.random() * 60 + ", 100%, 50%)";
            var randomStachel = Boolean(Math.round(Math.random()));
            this.color = randomColor;
            this.stachel = randomStachel;
        };
        return SuperKlasseBiene;
    }());
    A8Inheritance.SuperKlasseBiene = SuperKlasseBiene;
})(A8Inheritance || (A8Inheritance = {}));
//# sourceMappingURL=SuperKlasseBiene.js.map