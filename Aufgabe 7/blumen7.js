//Aufgabe: 7 - OO-Blumenwiese
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 14.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert. 
var BienenInterface;
(function (BienenInterface) {
    var Blumen = (function () {
        function Blumen(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Methode 'setRandomPosition'
        Blumen.prototype.setRandomFlowers = function () {
            for (var i = 0; i < 40; i++) {
                var randomFlower = Math.floor((Math.random() * 3));
                this.x = Math.floor((Math.random() * 1100) - 10);
                this.y = Math.floor((Math.random() * 255) + 380);
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
            }
        };
        //Methode 'drawSonnenblume'
        Blumen.prototype.drawSonnenblume = function () {
            //Stiel
            BienenInterface.crc2.beginPath();
            BienenInterface.crc2.strokeStyle = "#556B2F";
            BienenInterface.crc2.fillStyle = "#556B2F";
            BienenInterface.crc2.fillRect(this.x + 68, this.y + 30, 3, 55);
            //Bl�tter
            BienenInterface.crc2.lineTo(this.x + 70, this.y + 50);
            BienenInterface.crc2.lineTo(this.x + 60, this.y + 50);
            BienenInterface.crc2.lineTo(this.x + 70, this.y + 70);
            BienenInterface.crc2.stroke();
            BienenInterface.crc2.fill();
            //Blueten
            BienenInterface.crc2.beginPath();
            BienenInterface.crc2.fillStyle = "#FFD700";
            BienenInterface.crc2.moveTo(this.x + 62, this.y + 24);
            BienenInterface.crc2.lineTo(this.x + 50, this.y + 15);
            BienenInterface.crc2.lineTo(this.x + 60, this.y + 28);
            BienenInterface.crc2.lineTo(this.x + 45, this.y + 25);
            BienenInterface.crc2.lineTo(this.x + 58, this.y + 33);
            BienenInterface.crc2.lineTo(this.x + 48, this.y + 40);
            BienenInterface.crc2.lineTo(this.x + 61, this.y + 37);
            BienenInterface.crc2.lineTo(this.x + 55, this.y + 50);
            BienenInterface.crc2.lineTo(this.x + 65, this.y + 38);
            BienenInterface.crc2.lineTo(this.x + 66, this.y + 52);
            BienenInterface.crc2.lineTo(this.x + 70, this.y + 39);
            BienenInterface.crc2.lineTo(this.x + 76, this.y + 50);
            BienenInterface.crc2.lineTo(this.x + 75, this.y + 37);
            BienenInterface.crc2.lineTo(this.x + 85, this.y + 45);
            BienenInterface.crc2.lineTo(this.x + 78, this.y + 33);
            BienenInterface.crc2.lineTo(this.x + 90, this.y + 36);
            BienenInterface.crc2.lineTo(this.x + 79, this.y + 28);
            BienenInterface.crc2.lineTo(this.x + 92, this.y + 24);
            BienenInterface.crc2.lineTo(this.x + 78, this.y + 23);
            BienenInterface.crc2.lineTo(this.x + 88, this.y + 14);
            BienenInterface.crc2.lineTo(this.x + 75, this.y + 20);
            BienenInterface.crc2.lineTo(this.x + 78, this.y + 8);
            BienenInterface.crc2.lineTo(this.x + 70, this.y + 20);
            BienenInterface.crc2.lineTo(this.x + 69, this.y + 5);
            BienenInterface.crc2.lineTo(this.x + 65, this.y + 20);
            BienenInterface.crc2.lineTo(this.x + 58, this.y + 8);
            BienenInterface.crc2.lineTo(this.x + 62, this.y + 24);
            BienenInterface.crc2.fill();
            //Bluetenmitte
            BienenInterface.crc2.beginPath();
            BienenInterface.crc2.fillStyle = "#000000";
            BienenInterface.crc2.arc(this.x + 70, this.y + 30, 5, 0, 2 * Math.PI);
            BienenInterface.crc2.closePath();
            BienenInterface.crc2.fill();
        };
        //Methode 'drawMohnblume'
        Blumen.prototype.drawMohnblume = function () {
            //Stiel
            BienenInterface.crc2.beginPath();
            BienenInterface.crc2.strokeStyle = "#556B2F";
            BienenInterface.crc2.fillStyle = "#556B2F";
            BienenInterface.crc2.fillRect(this.x - 10, this.y + 5, 4, 55);
            //Bl�tter 
            BienenInterface.crc2.moveTo(this.x - 10, this.y + 30);
            BienenInterface.crc2.lineTo(this.x + 5, this.y + 15);
            BienenInterface.crc2.moveTo(this.x - 10, this.y + 40);
            BienenInterface.crc2.lineTo(this.x - 20, this.y + 30);
            BienenInterface.crc2.moveTo(this.x - 10, this.y + 55);
            BienenInterface.crc2.lineTo(this.x + 2, this.y + 40);
            BienenInterface.crc2.stroke();
            BienenInterface.crc2.fill();
            //Blueten
            BienenInterface.crc2.beginPath();
            BienenInterface.crc2.fillStyle = "#8B0000";
            BienenInterface.crc2.moveTo(this.x, this.y);
            BienenInterface.crc2.arc(this.x - 5, this.y - 20, 10, 0, 2 * Math.PI);
            BienenInterface.crc2.arc(this.x + 4, this.y - 8, 10, 0, 2 * Math.PI);
            BienenInterface.crc2.arc(this.x - 10, this.y + 2, 10, 0, 2 * Math.PI);
            BienenInterface.crc2.arc(this.x - 20, this.y - 10, 10, 0, 2 * Math.PI);
            BienenInterface.crc2.fill();
            //Bluetenmitte
            BienenInterface.crc2.beginPath();
            BienenInterface.crc2.fillStyle = "#000000";
            BienenInterface.crc2.arc(this.x - 8, this.y - 7, 5, 0, 2 * Math.PI);
            BienenInterface.crc2.closePath();
            BienenInterface.crc2.fill();
        };
        //Methode 'drawTulpe'    
        Blumen.prototype.drawTulpe = function () {
            //Stiel
            BienenInterface.crc2.beginPath();
            BienenInterface.crc2.fillStyle = "#556B2F";
            BienenInterface.crc2.fillRect(this.x + 9, this.y + 28, 3, 40);
            //Blatt
            BienenInterface.crc2.arc(this.x + 8, this.y + 30, 20, 0, 1.5);
            BienenInterface.crc2.fill();
            //Bluete
            BienenInterface.crc2.beginPath();
            BienenInterface.crc2.fillStyle = "#FF1493";
            BienenInterface.crc2.arc(this.x + 10, this.y + 20, 10, 0, 1 * Math.PI);
            BienenInterface.crc2.moveTo(this.x, this.y + 22);
            BienenInterface.crc2.lineTo(this.x, this.y + 7);
            BienenInterface.crc2.lineTo(this.x + 6, this.y + 14);
            BienenInterface.crc2.lineTo(this.x + 10.5, this.y + 4);
            BienenInterface.crc2.lineTo(this.x + 15, this.y + 14);
            BienenInterface.crc2.lineTo(this.x + 20, this.y + 7);
            BienenInterface.crc2.lineTo(this.x + 20, this.y + 21);
            BienenInterface.crc2.closePath();
            BienenInterface.crc2.fill();
        };
        return Blumen;
    }());
    BienenInterface.Blumen = Blumen;
})(BienenInterface || (BienenInterface = {}));
//# sourceMappingURL=blumen7.js.map