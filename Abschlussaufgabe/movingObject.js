//Aufgabe: Abschlussaufgabe
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.07.17
//   
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var MovingObject = (function () {
        function MovingObject(_x, _y) {
            this.x = Math.floor((Math.random() * Abschlussaufgabe.canvas.width) + 50);
            this.y = Math.floor((Math.random() * Abschlussaufgabe.canvas.height) + 50);
            this.draw();
        }
        //Kreisposition herausfinden
        MovingObject.prototype.takeObjectPosition = function () {
            this.positionX = this.x;
            this.positionY = this.y;
        };
        //Animation
        MovingObject.prototype.update = function () {
            this.draw();
            this.move();
            this.takeObjectPosition();
        };
        //Objekt zeichnen
        MovingObject.prototype.draw = function () {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = this.color;
            Abschlussaufgabe.crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
        };
        //zufaellige Bewegungsrichtung
        MovingObject.prototype.move = function () {
            this.y += Math.random() * 10;
            for (var i = 0; i < 100; i++) {
                if (this.x < 0) {
                    this.x = Abschlussaufgabe.crc2.canvas.width;
                }
                if (this.y < 0) {
                    this.y = Abschlussaufgabe.crc2.canvas.height;
                }
                if (this.y >= Abschlussaufgabe.crc2.canvas.height) {
                    this.y = 0;
                }
            }
        };
        //zufaellige Startposition
        MovingObject.prototype.setRandomPosition = function () {
            this.x = Math.floor((Math.random() * Abschlussaufgabe.canvas.width) - 50);
            this.y = Math.floor((Math.random() * Abschlussaufgabe.canvas.height) - 50);
        };
        return MovingObject;
    }());
    Abschlussaufgabe.MovingObject = MovingObject;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=movingObject.js.map