//Aufgabe: 7 - OO-Blumenwiese
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 14.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert. 
var A7Classes;
(function (A7Classes) {
    var Blume = (function () {
        function Blume(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Methode 'setRandomPosition'
        Blume.prototype.setRandomPosition = function () {
            this.x = Math.floor((Math.random() * 1100) - 10);
            this.y = Math.floor((Math.random() * 255) + 380);
        };
        //Methode 'draw'
        Blume.prototype.draw = function () {
            var randomFlower = Math.floor(Math.random() * 3);
            switch (randomFlower) {
                case 0:
                    this.drawSonnenblume();
                    break;
                case 1:
                    this.drawMohnblume();
                    break;
                case 2:
                    this.drawTulpe();
                    break;
            }
        };
        //Methode 'drawSonnenblume'
        Blume.prototype.drawSonnenblume = function () {
            //Stiel
            A7Classes.crc2.beginPath();
            A7Classes.crc2.strokeStyle = "#556B2F";
            A7Classes.crc2.fillStyle = "#556B2F";
            A7Classes.crc2.fillRect(this.x + 68, this.y + 30, 3, 55);
            //Bl�tter
            A7Classes.crc2.lineTo(this.x + 70, this.y + 50);
            A7Classes.crc2.lineTo(this.x + 60, this.y + 50);
            A7Classes.crc2.lineTo(this.x + 70, this.y + 70);
            A7Classes.crc2.stroke();
            A7Classes.crc2.fill();
            //Blueten
            A7Classes.crc2.beginPath();
            A7Classes.crc2.fillStyle = "#FFD700";
            A7Classes.crc2.moveTo(this.x + 62, this.y + 24);
            A7Classes.crc2.lineTo(this.x + 50, this.y + 15);
            A7Classes.crc2.lineTo(this.x + 60, this.y + 28);
            A7Classes.crc2.lineTo(this.x + 45, this.y + 25);
            A7Classes.crc2.lineTo(this.x + 58, this.y + 33);
            A7Classes.crc2.lineTo(this.x + 48, this.y + 40);
            A7Classes.crc2.lineTo(this.x + 61, this.y + 37);
            A7Classes.crc2.lineTo(this.x + 55, this.y + 50);
            A7Classes.crc2.lineTo(this.x + 65, this.y + 38);
            A7Classes.crc2.lineTo(this.x + 66, this.y + 52);
            A7Classes.crc2.lineTo(this.x + 70, this.y + 39);
            A7Classes.crc2.lineTo(this.x + 76, this.y + 50);
            A7Classes.crc2.lineTo(this.x + 75, this.y + 37);
            A7Classes.crc2.lineTo(this.x + 85, this.y + 45);
            A7Classes.crc2.lineTo(this.x + 78, this.y + 33);
            A7Classes.crc2.lineTo(this.x + 90, this.y + 36);
            A7Classes.crc2.lineTo(this.x + 79, this.y + 28);
            A7Classes.crc2.lineTo(this.x + 92, this.y + 24);
            A7Classes.crc2.lineTo(this.x + 78, this.y + 23);
            A7Classes.crc2.lineTo(this.x + 88, this.y + 14);
            A7Classes.crc2.lineTo(this.x + 75, this.y + 20);
            A7Classes.crc2.lineTo(this.x + 78, this.y + 8);
            A7Classes.crc2.lineTo(this.x + 70, this.y + 20);
            A7Classes.crc2.lineTo(this.x + 69, this.y + 5);
            A7Classes.crc2.lineTo(this.x + 65, this.y + 20);
            A7Classes.crc2.lineTo(this.x + 58, this.y + 8);
            A7Classes.crc2.lineTo(this.x + 62, this.y + 24);
            A7Classes.crc2.fill();
            //Bluetenmitte
            A7Classes.crc2.beginPath();
            A7Classes.crc2.fillStyle = "#000000";
            A7Classes.crc2.arc(this.x + 70, this.y + 30, 5, 0, 2 * Math.PI);
            A7Classes.crc2.closePath();
            A7Classes.crc2.fill();
        };
        //Methode 'drawMohnblume'
        Blume.prototype.drawMohnblume = function () {
            //Stiel
            A7Classes.crc2.beginPath();
            A7Classes.crc2.strokeStyle = "#556B2F";
            A7Classes.crc2.fillStyle = "#556B2F";
            A7Classes.crc2.fillRect(this.x - 10, this.y + 5, 4, 55);
            //Bl�tter 
            A7Classes.crc2.moveTo(this.x - 10, this.y + 30);
            A7Classes.crc2.lineTo(this.x + 5, this.y + 15);
            A7Classes.crc2.moveTo(this.x - 10, this.y + 40);
            A7Classes.crc2.lineTo(this.x - 20, this.y + 30);
            A7Classes.crc2.moveTo(this.x - 10, this.y + 55);
            A7Classes.crc2.lineTo(this.x + 2, this.y + 40);
            A7Classes.crc2.stroke();
            A7Classes.crc2.fill();
            //Blueten
            A7Classes.crc2.beginPath();
            A7Classes.crc2.fillStyle = "#8B0000";
            A7Classes.crc2.moveTo(this.x, this.y);
            A7Classes.crc2.arc(this.x - 5, this.y - 20, 10, 0, 2 * Math.PI);
            A7Classes.crc2.arc(this.x + 4, this.y - 8, 10, 0, 2 * Math.PI);
            A7Classes.crc2.arc(this.x - 10, this.y + 2, 10, 0, 2 * Math.PI);
            A7Classes.crc2.arc(this.x - 20, this.y - 10, 10, 0, 2 * Math.PI);
            A7Classes.crc2.fill();
            //Bluetenmitte
            A7Classes.crc2.beginPath();
            A7Classes.crc2.fillStyle = "#000000";
            A7Classes.crc2.arc(this.x - 8, this.y - 7, 5, 0, 2 * Math.PI);
            A7Classes.crc2.closePath();
            A7Classes.crc2.fill();
        };
        //Methode 'drawTulpe'    
        Blume.prototype.drawTulpe = function () {
            //Stiel
            A7Classes.crc2.beginPath();
            A7Classes.crc2.fillStyle = "#556B2F";
            A7Classes.crc2.fillRect(this.x + 9, this.y + 28, 3, 40);
            //Blatt
            A7Classes.crc2.arc(this.x + 8, this.y + 30, 20, 0, 1.5);
            A7Classes.crc2.fill();
            //Bluete
            A7Classes.crc2.beginPath();
            A7Classes.crc2.fillStyle = "#FF1493";
            A7Classes.crc2.arc(this.x + 10, this.y + 20, 10, 0, 1 * Math.PI);
            A7Classes.crc2.moveTo(this.x, this.y + 22);
            A7Classes.crc2.lineTo(this.x, this.y + 7);
            A7Classes.crc2.lineTo(this.x + 6, this.y + 14);
            A7Classes.crc2.lineTo(this.x + 10.5, this.y + 4);
            A7Classes.crc2.lineTo(this.x + 15, this.y + 14);
            A7Classes.crc2.lineTo(this.x + 20, this.y + 7);
            A7Classes.crc2.lineTo(this.x + 20, this.y + 21);
            A7Classes.crc2.closePath();
            A7Classes.crc2.fill();
        };
        return Blume;
    }());
    A7Classes.Blume = Blume;
})(A7Classes || (A7Classes = {}));
//# sourceMappingURL=blume7.js.map