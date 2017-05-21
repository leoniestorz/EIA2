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
    var Mohnblume = (function (_super) {
        __extends(Mohnblume, _super);
        function Mohnblume() {
            _super.call(this);
            console.log("Create Mohnblume");
            this.drawMohnblume();
        }
        //Methode 'drawMohnblume'
        Mohnblume.prototype.drawMohnblume = function () {
            //Stiel
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.strokeStyle = "#556B2F";
            A8Inheritance.crc2.fillStyle = "#556B2F";
            A8Inheritance.crc2.fillRect(this.x - 10, this.y + 5, 4, 55);
            //Bl�tter 
            A8Inheritance.crc2.moveTo(this.x - 10, this.y + 30);
            A8Inheritance.crc2.lineTo(this.x + 5, this.y + 15);
            A8Inheritance.crc2.moveTo(this.x - 10, this.y + 40);
            A8Inheritance.crc2.lineTo(this.x - 20, this.y + 30);
            A8Inheritance.crc2.moveTo(this.x - 10, this.y + 55);
            A8Inheritance.crc2.lineTo(this.x + 2, this.y + 40);
            A8Inheritance.crc2.stroke();
            A8Inheritance.crc2.fill();
            //Blueten
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.fillStyle = "#8B0000";
            A8Inheritance.crc2.moveTo(this.x, this.y);
            A8Inheritance.crc2.arc(this.x - 5, this.y - 20, 10, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(this.x + 4, this.y - 8, 10, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(this.x - 10, this.y + 2, 10, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(this.x - 20, this.y - 10, 10, 0, 2 * Math.PI);
            A8Inheritance.crc2.fill();
            //Bluetenmitte
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.fillStyle = "#000000";
            A8Inheritance.crc2.arc(this.x - 8, this.y - 7, 5, 0, 2 * Math.PI);
            A8Inheritance.crc2.closePath();
            A8Inheritance.crc2.fill();
        };
        return Mohnblume;
    }(A8Inheritance.SuperKlasseBlume));
    A8Inheritance.Mohnblume = Mohnblume;
})(A8Inheritance || (A8Inheritance = {}));
//# sourceMappingURL=Mohnblume.js.map