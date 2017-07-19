//Aufgabe: Abschlussaufgabe
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.07.17
//   
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Star = (function (_super) {
        __extends(Star, _super);
        function Star(_x, _y) {
            _super.call(this, _x, _y);
            this.x = Math.floor((Math.random() * Abschlussaufgabe.canvas.width) + 50);
            this.y = Math.floor((Math.random() * Abschlussaufgabe.canvas.height) + 50);
            this.draw();
        }
        //Methode 'draw' 
        Star.prototype.draw = function () {
            Abschlussaufgabe.crc2.beginPath();
            //        crc2.strokeStyle = "black";
            Abschlussaufgabe.crc2.fillStyle = "rgb(255,215,0,0.8)";
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.lineTo(this.x + 10, this.y);
            Abschlussaufgabe.crc2.lineTo(this.x + 15, this.y - 10);
            Abschlussaufgabe.crc2.lineTo(this.x + 20, this.y);
            Abschlussaufgabe.crc2.lineTo(this.x + 30, this.y);
            Abschlussaufgabe.crc2.lineTo(this.x + 21, this.y + 6);
            Abschlussaufgabe.crc2.lineTo(this.x + 25, this.y + 15);
            Abschlussaufgabe.crc2.lineTo(this.x + 15, this.y + 8);
            Abschlussaufgabe.crc2.lineTo(this.x + 7, this.y + 15);
            Abschlussaufgabe.crc2.lineTo(this.x + 9, this.y + 6);
            Abschlussaufgabe.crc2.closePath();
            //        crc2.stroke();
            Abschlussaufgabe.crc2.fill();
        };
        return Star;
    }(Abschlussaufgabe.movingObject));
    Abschlussaufgabe.Star = Star;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=stars.js.map