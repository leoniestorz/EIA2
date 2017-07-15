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
        //        stachel:boolean;
        function Circle(_x, _y) {
            this.x = 1190;
            this.y = 475;
            this.draw(Math.floor((Math.random() * Abschlussaufgabe.canvas.width) + 50), Math.floor((Math.random() * 500) + 50), "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            //            this.setRandomStyle();
            //            this.makeCircleInvisible;
        }
        //Methode 'update' - Biene an neuer Position malen 
        //    update () : void {
        //            
        //        this.draw ();
        //        this.move ();}
        //Methode 'draw' - Biene malen
        Circle.prototype.draw = function (_x, _y, _fillStyle) {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = _fillStyle;
            Abschlussaufgabe.crc2.arc(_x, _y, 15, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
        };
        //Methode 'move' - Biene bewegen
        //      move() : void {
        //           
        //
        //            this.x += Math.random() * 5 - 4;
        //            this.y += Math.random() * 6 - 3;
        //            
        //            for (let i: number = 0; i < z; i++) {
        //        
        //            if (this.x < 0) {
        //                this.x = crc2.canvas.width;
        //            }
        //            if (this.y < 0) {
        //                this.y = crc2.canvas.height;
        //            }
        //            if (this.y >= crc2.canvas.height) {
        //                this.y = 0;
        //            }}}
        //    
        //Methode 'setRandomStyle' - Zuf�llige Farbe und (k)ein Stachel 
        //    setRandomStyle(): void {
        //     
        //    let randomColor: string = "hsl(" + Math.random() * 60 + ", 100%, 50%)";
        //    let randomStachel : boolean = Boolean(Math.round(Math.random()));  
        //    
        //    this.color = randomColor;
        ////    this.stachel = randomStachel;
        //    }
        Circle.prototype.makeCircleInvisible = function (_x, _y, _fillStyle) {
            //    let randomColor: string = "#F000000";
            //     
            //    this.color = randomColor;
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = "#000000";
            Abschlussaufgabe.crc2.fillRect(_x + 68, _y + 30, 3, 55);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
        };
        return Circle;
    }());
    Abschlussaufgabe.Circle = Circle;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=circle.js.map