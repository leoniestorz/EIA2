//Aufgabe: 8 - Inheritance
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var A8Inheritance;
(function (A8Inheritance) {
    var Hintergrund = (function () {
        function Hintergrund() {
            this.drawWiese(0, 0, "#90EE90", "#90EE90");
            this.drawHimmel(0, 0, "##48d1CC", "#48d1CC");
            this.drawBergGross(500, 400, "#a9a9a9");
            this.drawBergKlein(250, 400);
            this.drawSonne(560, 120, "#FFFF00", "#FFFF00");
            this.drawBaum(750, 300);
            this.drawBuschGross(860, 380, "#556B2F");
            this.drawBuschKlein(90, 380, "#556B2F");
            this.drawBuschGross(-20, 440, "#556B2F");
            this.drawWolke(160, 120, "#FFFFFF");
            this.drawWolke(750, 180, "#FFFFFF");
            this.drawVogel(1042, 315, "#000000", "#000000");
            this.drawBienenkorb(1200, 440);
        }
        //Methoden    
        Hintergrund.prototype.drawWiese = function (_x, _y, _strokeColor, _fillColor) {
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.strokeStyle = _strokeColor;
            A8Inheritance.crc2.fillStyle = _fillColor;
            A8Inheritance.crc2.moveTo(_x, _y + 400);
            A8Inheritance.crc2.lineTo(_x + 1280, _y + 400);
            A8Inheritance.crc2.lineTo(_x + 1280, _y + 720);
            A8Inheritance.crc2.lineTo(_x - 1280, _y + 720);
            A8Inheritance.crc2.closePath();
            A8Inheritance.crc2.stroke();
            A8Inheritance.crc2.fill();
        };
        Hintergrund.prototype.drawHimmel = function (_x, _y, _strokeColor, _fillColor) {
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.strokeStyle = _strokeColor;
            A8Inheritance.crc2.fillStyle = _fillColor;
            A8Inheritance.crc2.moveTo(_x, _y);
            A8Inheritance.crc2.lineTo(_x + 1280, _y);
            A8Inheritance.crc2.lineTo(_x + 1280, _y + 400);
            A8Inheritance.crc2.lineTo(_x - 1280, _y + 400);
            A8Inheritance.crc2.closePath();
            A8Inheritance.crc2.stroke();
            A8Inheritance.crc2.fill();
        };
        Hintergrund.prototype.drawBergGross = function (_x, _y, _fillColor) {
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.fillStyle = _fillColor;
            A8Inheritance.crc2.moveTo(_x + 200, _y - 300);
            A8Inheritance.crc2.lineTo(_x + 400, _y);
            A8Inheritance.crc2.lineTo(_x, _y);
            A8Inheritance.crc2.closePath();
            A8Inheritance.crc2.fill();
        };
        Hintergrund.prototype.drawBergKlein = function (_x, _y) {
            //Berg
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.strokeStyle = "#696969";
            A8Inheritance.crc2.fillStyle = "#696969";
            A8Inheritance.crc2.moveTo(_x + 200, _y - 200);
            A8Inheritance.crc2.lineTo(_x + 400, _y);
            A8Inheritance.crc2.lineTo(_x, _y);
            A8Inheritance.crc2.stroke();
            A8Inheritance.crc2.fill();
            //Schnee
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.fillStyle = "#FFFFFF";
            A8Inheritance.crc2.moveTo(451, 199);
            A8Inheritance.crc2.lineTo(_x + 250, _y - 150);
            A8Inheritance.crc2.arcTo(_x + 230, _y - 140, 60, 0, 2 * Math.PI);
            A8Inheritance.crc2.arcTo(_x + 225, _y - 145, 60, 0, 2 * Math.PI);
            A8Inheritance.crc2.arcTo(_x + 195, _y - 134, 80, 0, 2 * Math.PI);
            A8Inheritance.crc2.arcTo(_x + 180, _y - 150, 60, 0, 2 * Math.PI);
            A8Inheritance.crc2.arcTo(_x + 160, _y - 140, 80, 0, 2 * Math.PI);
            A8Inheritance.crc2.lineTo(_x + 150, _y - 150);
            A8Inheritance.crc2.lineTo(451, 199);
            A8Inheritance.crc2.closePath();
            A8Inheritance.crc2.fill();
        };
        Hintergrund.prototype.drawSonne = function (_x, _y, _strokeColor, _fillColor) {
            //Sonne
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.strokeStyle = _strokeColor;
            A8Inheritance.crc2.fillStyle = _fillColor;
            //Sonnenstrahlen
            A8Inheritance.crc2.arc(_x, _y, 60, 0, 2 * Math.PI);
            A8Inheritance.crc2.moveTo(560, 120);
            A8Inheritance.crc2.lineTo(800, 150);
            A8Inheritance.crc2.moveTo(560, 120);
            A8Inheritance.crc2.lineTo(800, 50);
            A8Inheritance.crc2.moveTo(560, 120);
            A8Inheritance.crc2.lineTo(700, 10);
            A8Inheritance.crc2.moveTo(560, 120);
            A8Inheritance.crc2.lineTo(590, 15);
            A8Inheritance.crc2.moveTo(560, 120);
            A8Inheritance.crc2.lineTo(490, 20);
            A8Inheritance.crc2.moveTo(560, 120);
            A8Inheritance.crc2.lineTo(400, 30);
            A8Inheritance.crc2.moveTo(560, 120);
            A8Inheritance.crc2.lineTo(400, 120);
            A8Inheritance.crc2.moveTo(560, 120);
            A8Inheritance.crc2.lineTo(410, 200);
            A8Inheritance.crc2.moveTo(560, 120);
            A8Inheritance.crc2.lineTo(480, 270);
            A8Inheritance.crc2.moveTo(560, 120);
            A8Inheritance.crc2.lineTo(590, 230);
            A8Inheritance.crc2.moveTo(560, 120);
            A8Inheritance.crc2.lineTo(700, 200);
            A8Inheritance.crc2.closePath();
            A8Inheritance.crc2.stroke();
            A8Inheritance.crc2.fill();
        };
        Hintergrund.prototype.drawBaum = function (_x, _y) {
            //Baumstamm
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.fillStyle = "#CD853F";
            A8Inheritance.crc2.fillRect(1080, 335, 35, 110);
            A8Inheritance.crc2.fillRect(1050, 350, 50, 6);
            //Baumkrone
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.fillStyle = "#6B8e23";
            A8Inheritance.crc2.arc(1110, 255, 35, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(1140, 285, 35, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(1110, 315, 35, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(1065, 305, 35, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(1065, 265, 35, 0, 2 * Math.PI);
            A8Inheritance.crc2.closePath();
            A8Inheritance.crc2.fill();
        };
        Hintergrund.prototype.drawBuschGross = function (_x, _y, _fillColor) {
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.fillStyle = _fillColor;
            A8Inheritance.crc2.arc(_x + 55, _y + 30, 25, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(_x + 75, _y + 10, 20, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(_x + 120, _y + 40, 24, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(_x + 90, _y + 30, 35, 0, 2 * Math.PI);
            A8Inheritance.crc2.closePath();
            A8Inheritance.crc2.fill();
        };
        Hintergrund.prototype.drawBuschKlein = function (_x, _y, _fillColor) {
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.fillStyle = _fillColor;
            A8Inheritance.crc2.arc(_x + 20, _y + 30, 28, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(_x + 50, _y + 10, 25, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(_x + 80, _y + 15, 20, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(_x + 55, _y + 30, 25, 0, 2 * Math.PI);
            A8Inheritance.crc2.closePath();
            A8Inheritance.crc2.fill();
        };
        Hintergrund.prototype.drawWolke = function (_x, _y, _fillColor) {
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.fillStyle = _fillColor;
            A8Inheritance.crc2.arc(_x + 10, _y + 30, 25, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(_x + 50, _y + 25, 40, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(_x + 90, _y + 20, 35, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(_x + 130, _y + 20, 25, 0, 2 * Math.PI);
            A8Inheritance.crc2.closePath();
            A8Inheritance.crc2.fill();
        };
        Hintergrund.prototype.drawVogel = function (_x, _y, _strokeColor, _fillColor) {
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.strokeStyle = _strokeColor;
            A8Inheritance.crc2.fillStyle = _fillColor;
            //Koerper und Kopf
            A8Inheritance.crc2.arc(_x + 22, _y + 20, 8, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(_x + 32, _y + 16, 5, 0, 2 * Math.PI);
            //Schnabel
            A8Inheritance.crc2.lineTo(_x + 42, _y + 18);
            //Beine
            A8Inheritance.crc2.moveTo(_x + 24, _y + 28);
            A8Inheritance.crc2.lineTo(_x + 24, _y + 35);
            A8Inheritance.crc2.moveTo(_x + 20, _y + 28);
            A8Inheritance.crc2.lineTo(_x + 20, _y + 35);
            //Schwanz
            A8Inheritance.crc2.moveTo(_x + 14, _y + 18);
            A8Inheritance.crc2.lineTo(_x + 10, _y + 14);
            A8Inheritance.crc2.lineTo(_x + 10, _y + 17);
            A8Inheritance.crc2.closePath();
            A8Inheritance.crc2.fill();
            A8Inheritance.crc2.stroke();
        };
        Hintergrund.prototype.drawBienenkorb = function (_x, _y) {
            //Bienenkorb
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.fillStyle = "#A0522D";
            A8Inheritance.crc2.arc(_x, _y, 26, 0, 2 * Math.PI);
            A8Inheritance.crc2.moveTo(_x, _y - 10);
            A8Inheritance.crc2.arc(_x + 23, _y, 10, 0, 2 * Math.PI);
            A8Inheritance.crc2.moveTo(_x, _y);
            A8Inheritance.crc2.arc(_x + 23, _y + 20, 10, 0, 2 * Math.PI);
            A8Inheritance.crc2.moveTo(_x, _y + 4);
            A8Inheritance.crc2.arc(_x + 23, _y + 41, 10, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(_x - 25, _y + 41, 10, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(_x - 25, _y + 20, 10, 0, 2 * Math.PI);
            A8Inheritance.crc2.arc(_x - 25, _y, 10, 0, 2 * Math.PI);
            A8Inheritance.crc2.fillRect(_x - 26, _y + 6, 51, 45);
            A8Inheritance.crc2.fill();
            A8Inheritance.crc2.beginPath();
            A8Inheritance.crc2.fillStyle = "#000000";
            //Oeffnung
            A8Inheritance.crc2.arc(_x - 5, _y + 33, 10, 0, 2 * Math.PI);
            A8Inheritance.crc2.closePath();
            A8Inheritance.crc2.fill();
        };
        return Hintergrund;
    }());
    A8Inheritance.Hintergrund = Hintergrund;
})(A8Inheritance || (A8Inheritance = {}));
//# sourceMappingURL=hintergrund.js.map