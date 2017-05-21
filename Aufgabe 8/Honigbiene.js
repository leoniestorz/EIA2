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
            this.setRandomStyle();
            this.speed = 0.005;
            this.setRandomFlowerPosition();
            this.setStartPosition();
        }
        //Methode 'setStart'
        Honigbiene.prototype.setStartPosition = function () {
            this.x = 1190;
            this.y = 475;
        };
        //zuf�llige Position x,y aus dem Blumenarray 
        Honigbiene.prototype.setRandomFlowerPosition = function () {
            var i = Math.round(Math.random() * (A8Inheritance.alleBlumen.length - 1));
            this.xTarget = A8Inheritance.alleBlumen[i].x;
            this.yTarget = A8Inheritance.alleBlumen[i].y;
        };
        //Honigbiene zu dieser Position x,y bewegen 
        Honigbiene.prototype.move = function () {
            var xDiff = this.xTarget - this.x - 10;
            var yDiff = this.yTarget - this.y - 20;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setRandomFlowerPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        };
        return Honigbiene;
    }(A8Inheritance.SuperKlasseBiene));
    A8Inheritance.Honigbiene = Honigbiene;
})(A8Inheritance || (A8Inheritance = {}));
//# sourceMappingURL=Honigbiene.js.map