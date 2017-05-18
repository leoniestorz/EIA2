//Aufgabe: 8 - Inheritance
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A8Inheritance;
(function (A8Inheritance) {
    var Sonnenblume = (function (_super) {
        __extends(Sonnenblume, _super);
        function Sonnenblume(_x, _y) {
            _super.call(this, _x, _y);
            console.log("Create Sonnenblume");
            this.x = _x;
            this.y = _y;
        }
        //Methode 'drawSonnenblume'
        Sonnenblume.prototype.drawSonnenblume = function () {
            //Stiel
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.strokeStyle = "#556B2F";
            A8Inheritance.crc2.fillStyle = "#556B2F";
            A8Inheritance.crc2.fillRect(this.x + 68, this.y + 30, 3, 55);
            //Bl�tter
            A8Inheritance.crc2.lineTo(this.x + 70, this.y + 50);
            A8Inheritance.crc2.lineTo(this.x + 60, this.y + 50);
            A8Inheritance.crc2.lineTo(this.x + 70, this.y + 70);
            A8Inheritance.crc2.stroke();
            A8Inheritance.crc2.fill();
            //Blueten
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.fillStyle = "#FFD700";
            A8Inheritance.crc2.moveTo(this.x + 62, this.y + 24);
            A8Inheritance.crc2.lineTo(this.x + 50, this.y + 15);
            A8Inheritance.crc2.lineTo(this.x + 60, this.y + 28);
            A8Inheritance.crc2.lineTo(this.x + 45, this.y + 25);
            A8Inheritance.crc2.lineTo(this.x + 58, this.y + 33);
            A8Inheritance.crc2.lineTo(this.x + 48, this.y + 40);
            A8Inheritance.crc2.lineTo(this.x + 61, this.y + 37);
            A8Inheritance.crc2.lineTo(this.x + 55, this.y + 50);
            A8Inheritance.crc2.lineTo(this.x + 65, this.y + 38);
            A8Inheritance.crc2.lineTo(this.x + 66, this.y + 52);
            A8Inheritance.crc2.lineTo(this.x + 70, this.y + 39);
            A8Inheritance.crc2.lineTo(this.x + 76, this.y + 50);
            A8Inheritance.crc2.lineTo(this.x + 75, this.y + 37);
            A8Inheritance.crc2.lineTo(this.x + 85, this.y + 45);
            A8Inheritance.crc2.lineTo(this.x + 78, this.y + 33);
            A8Inheritance.crc2.lineTo(this.x + 90, this.y + 36);
            A8Inheritance.crc2.lineTo(this.x + 79, this.y + 28);
            A8Inheritance.crc2.lineTo(this.x + 92, this.y + 24);
            A8Inheritance.crc2.lineTo(this.x + 78, this.y + 23);
            A8Inheritance.crc2.lineTo(this.x + 88, this.y + 14);
            A8Inheritance.crc2.lineTo(this.x + 75, this.y + 20);
            A8Inheritance.crc2.lineTo(this.x + 78, this.y + 8);
            A8Inheritance.crc2.lineTo(this.x + 70, this.y + 20);
            A8Inheritance.crc2.lineTo(this.x + 69, this.y + 5);
            A8Inheritance.crc2.lineTo(this.x + 65, this.y + 20);
            A8Inheritance.crc2.lineTo(this.x + 58, this.y + 8);
            A8Inheritance.crc2.lineTo(this.x + 62, this.y + 24);
            A8Inheritance.crc2.fill();
            //Bluetenmitte
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.fillStyle = "#000000";
            A8Inheritance.crc2.arc(this.x + 70, this.y + 30, 5, 0, 2 * Math.PI);
            A8Inheritance.crc2.closePath();
            A8Inheritance.crc2.fill();
        };
        return Sonnenblume;
    }(A8Inheritance.SuperKlasseBlume));
    A8Inheritance.Sonnenblume = Sonnenblume;
})(A8Inheritance || (A8Inheritance = {}));
//# sourceMappingURL=Sonnenblume.js.map