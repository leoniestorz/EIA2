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
            this.x = Math.floor((Math.random() * Abschlussaufgabe.canvas.width) + 50);
            this.y = Math.floor((Math.random() * Abschlussaufgabe.canvas.height) + 50);
            this.draw();
            //            this.setRandomStyle();
        }
        //Kreisposition herausfinden
        Circle.prototype.takeCirclePosition = function () {
            this.positionX = this.x;
            this.positionY = this.y;
        };
        //Methode 'update' 
        Circle.prototype.update = function () {
            this.draw();
            this.move();
            this.takeCirclePosition();
        };
        //Methode 'draw' 
        Circle.prototype.draw = function () {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = this.color;
            Abschlussaufgabe.crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
        };
        //Methode 'move' 
        Circle.prototype.move = function () {
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
        //Methode 'setRandomPosition'
        Circle.prototype.setRandomPosition = function () {
            this.x = Math.floor((Math.random() * Abschlussaufgabe.canvas.width) - 50);
            this.y = Math.floor((Math.random() * Abschlussaufgabe.canvas.height) - 50);
        };
        //Methode 'setRandomStyle'
        Circle.prototype.setRandomStyle = function () {
            var randomColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.color = randomColor;
        };
        return Circle;
    }());
    Abschlussaufgabe.Circle = Circle;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=circle.js.map