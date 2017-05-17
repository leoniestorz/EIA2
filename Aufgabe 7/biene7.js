//Aufgabe: 7 - OO-Blumenwiese
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 14.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert. 
var A7Classes;
(function (A7Classes) {
    var Biene = (function () {
        function Biene(_x, _y) {
            this.x = 1190;
            this.y = 475;
            this.draw();
            this.setRandomStyle();
        }
        //Methode 'update' - Biene an neuer Position malen 
        Biene.prototype.update = function () {
            this.draw();
            this.move();
        };
        //Methode 'draw' - Biene malen
        Biene.prototype.draw = function () {
            //      Koerper
            A7Classes.crc2.beginPath();
            A7Classes.crc2.strokeStyle = "#000000";
            A7Classes.crc2.fillStyle = "#000000";
            A7Classes.crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            A7Classes.crc2.arc(this.x - 8, this.y - 3, 4, 0, 2 * Math.PI);
            if (this.stachel == true) {
                A7Classes.crc2.moveTo(this.x, this.y);
                A7Classes.crc2.lineTo(this.x + 13, this.y + 3);
            }
            else { }
            A7Classes.crc2.stroke();
            A7Classes.crc2.fill();
            //      Streifen
            A7Classes.crc2.beginPath();
            A7Classes.crc2.fillStyle = this.color;
            A7Classes.crc2.rect(this.x - 6, this.y - 4, 2.5, 9);
            A7Classes.crc2.rect(this.x - 2, this.y - 6, 2.5, 13);
            A7Classes.crc2.rect(this.x + 2, this.y - 4, 2.5, 10);
            A7Classes.crc2.stroke;
            A7Classes.crc2.fill();
            //      Fluegel
            A7Classes.crc2.beginPath();
            A7Classes.crc2.fillStyle = "#aFEEEE";
            A7Classes.crc2.arc(this.x - 4, this.y - 15, 10, 0, 1.5);
            A7Classes.crc2.moveTo(this.x, this.y);
            A7Classes.crc2.arc(this.x - 1, this.y - 10, 10, 0, 1.5);
            A7Classes.crc2.closePath();
            A7Classes.crc2.fill();
        };
        //Methode 'move' - Biene bewegen
        Biene.prototype.move = function () {
            this.x += Math.random() * 5 - 4;
            this.y += Math.random() * 6 - 3;
            for (var i = 0; i < A7Classes.z; i++) {
                if (this.x < 0) {
                    this.x = A7Classes.crc2.canvas.width;
                }
                if (this.y < 0) {
                    this.y = A7Classes.crc2.canvas.height;
                }
                if (this.y >= A7Classes.crc2.canvas.height) {
                    this.y = 0;
                }
            }
        };
        //Methode 'setRandomStyle' - Zuf�llige Farbe und (k)ein Stachel 
        Biene.prototype.setRandomStyle = function () {
            var randomColor = "hsl(" + Math.random() * 60 + ", 100%, 50%)";
            var randomStachel = Boolean(Math.round(Math.random()));
            this.color = randomColor;
            this.stachel = randomStachel;
        };
        return Biene;
    }());
    A7Classes.Biene = Biene;
})(A7Classes || (A7Classes = {}));
//# sourceMappingURL=biene7.js.map