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
    var Honigbiene = (function (_super) {
        __extends(Honigbiene, _super);
        function Honigbiene(_x, _y) {
            _super.call(this, _x, _y);
            console.log("Create Honigbiene");
            this.x = 1190;
            this.y = 475;
            this.setRandomStyle();
        }
        //Methode 'move' (ueberschrieben) - Biene bewegen
        Honigbiene.prototype.move = function () {
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
        return Honigbiene;
    }(A8Inheritance.SuperKlasseBiene));
    A8Inheritance.Honigbiene = Honigbiene;
})(A8Inheritance || (A8Inheritance = {}));
//# sourceMappingURL=Honigbiene.js.map