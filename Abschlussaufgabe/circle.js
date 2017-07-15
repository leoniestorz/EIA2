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
            this.draw();
            this.setRandomStyle();
        }
        //Methode 'update' - Biene an neuer Position malen 
        Circle.prototype.update = function () {
            this.draw();
            this.move();
        };
        //Methode 'draw' - Biene malen
        Circle.prototype.draw = function () {
            //      Koerper
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.strokeStyle = "#000000";
            Abschlussaufgabe.crc2.fillStyle = "#000000";
            Abschlussaufgabe.crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.arc(this.x - 8, this.y - 3, 4, 0, 2 * Math.PI);
            if (this.stachel == true) {
                Abschlussaufgabe.crc2.moveTo(this.x, this.y);
                Abschlussaufgabe.crc2.lineTo(this.x + 13, this.y + 3);
            }
            else { }
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
            //      Streifen
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = this.color;
            Abschlussaufgabe.crc2.rect(this.x - 6, this.y - 4, 2.5, 9);
            Abschlussaufgabe.crc2.rect(this.x - 2, this.y - 6, 2.5, 13);
            Abschlussaufgabe.crc2.rect(this.x + 2, this.y - 4, 2.5, 10);
            Abschlussaufgabe.crc2.stroke;
            Abschlussaufgabe.crc2.fill();
            //      Fluegel
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = "#aFEEEE";
            Abschlussaufgabe.crc2.arc(this.x - 4, this.y - 15, 10, 0, 1.5);
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.arc(this.x - 1, this.y - 10, 10, 0, 1.5);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
        };
        //Methode 'move' - Biene bewegen
        Circle.prototype.move = function () {
            this.x += Math.random() * 5 - 4;
            this.y += Math.random() * 6 - 3;
            for (var i = 0; i < Abschlussaufgabe.z; i++) {
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