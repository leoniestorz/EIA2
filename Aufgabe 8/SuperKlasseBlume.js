//Aufgabe: 8 - Inheritance
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var A8Inheritance;
(function (A8Inheritance) {
    var SuperKlasseBlume = (function () {
        function SuperKlasseBlume(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Methode 'setRandomPosition'
        SuperKlasseBlume.prototype.setRandomPosition = function () {
            this.x = Math.floor((Math.random() * 1100) - 10);
            this.y = Math.floor((Math.random() * 255) + 380);
        };
        //Methode 'draw'
        SuperKlasseBlume.prototype.draw = function () {
            var randomFlower = Math.floor(Math.random() * 3);
            var s = new A8Inheritance.Sonnenblume(this.x, this.y);
            var m = new A8Inheritance.Mohnblume(this.x, this.y);
            var t = new A8Inheritance.Tulpe(this.x, this.y);
            switch (randomFlower) {
                case 0:
                    s.drawSonnenblume();
                    break;
                case 1:
                    m.drawMohnblume();
                    break;
                case 2:
                    t.drawTulpe();
                    break;
            }
        };
        return SuperKlasseBlume;
    }());
    A8Inheritance.SuperKlasseBlume = SuperKlasseBlume;
})(A8Inheritance || (A8Inheritance = {}));
//# sourceMappingURL=SuperKlasseBlume.js.map