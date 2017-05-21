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
    var normaleBiene = (function (_super) {
        __extends(normaleBiene, _super);
        function normaleBiene(_x, _y) {
            _super.call(this, _x, _y);
            console.log("Create normaleBiene");
            this.setRandomStyle();
        }
        return normaleBiene;
    }(A8Inheritance.SuperKlasseBiene));
    A8Inheritance.normaleBiene = normaleBiene;
})(A8Inheritance || (A8Inheritance = {}));
//# sourceMappingURL=normaleBiene.js.map