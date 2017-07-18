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
    var ColourCircle = (function (_super) {
        __extends(ColourCircle, _super);
        function ColourCircle(_x, _y) {
            _super.call(this, _x, _y);
            this.x = Math.floor((Math.random() * Abschlussaufgabe.canvas.width) + 50);
            this.y = Math.floor((Math.random() * Abschlussaufgabe.canvas.height) + 50);
            this.draw();
            this.setRandomStyle();
        }
        //Methode 'draw' 
        ColourCircle.prototype.draw = function () {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = this.color;
            Abschlussaufgabe.crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
        };
        //Methode 'setRandomStyle'
        ColourCircle.prototype.setRandomStyle = function () {
            var randomColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.color = randomColor;
        };
        return ColourCircle;
    }(Abschlussaufgabe.Circle));
    Abschlussaufgabe.ColourCircle = ColourCircle;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=colourCircle.js.map