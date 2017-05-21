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
    var Tulpe = (function (_super) {
        __extends(Tulpe, _super);
        function Tulpe() {
            _super.call(this);
            console.log("Create Tulpe");
            this.drawTulpe();
        }
        //Methode 'drawTulpe'    
        Tulpe.prototype.drawTulpe = function () {
            //Stiel
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.fillStyle = "#556B2F";
            A8Inheritance.crc2.fillRect(this.x + 9, this.y + 28, 3, 40);
            //Blatt
            A8Inheritance.crc2.arc(this.x + 8, this.y + 30, 20, 0, 1.5);
            A8Inheritance.crc2.fill();
            //Bluete
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.fillStyle = "#FF1493";
            A8Inheritance.crc2.arc(this.x + 10, this.y + 20, 10, 0, 1 * Math.PI);
            A8Inheritance.crc2.moveTo(this.x, this.y + 22);
            A8Inheritance.crc2.lineTo(this.x, this.y + 7);
            A8Inheritance.crc2.lineTo(this.x + 6, this.y + 14);
            A8Inheritance.crc2.lineTo(this.x + 10.5, this.y + 4);
            A8Inheritance.crc2.lineTo(this.x + 15, this.y + 14);
            A8Inheritance.crc2.lineTo(this.x + 20, this.y + 7);
            A8Inheritance.crc2.lineTo(this.x + 20, this.y + 21);
            A8Inheritance.crc2.closePath();
            A8Inheritance.crc2.fill();
        };
        return Tulpe;
    }(A8Inheritance.SuperKlasseBlume));
    A8Inheritance.Tulpe = Tulpe;
})(A8Inheritance || (A8Inheritance = {}));
//# sourceMappingURL=Tulpe.js.map