//Aufgabe: 7 - OO-Blumenwiese
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 14.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert. 
var BienenInterface;
(function (BienenInterface) {
    var Biene = (function () {
        function Biene() {
        }
        //Methode 'update'    
        Biene.prototype.update = function () {
            this.draw();
            this.move();
        };
        //Methode 'draw'
        Biene.prototype.draw = function () {
            //      Koerper
            BienenInterface.crc2.beginPath();
            BienenInterface.crc2.strokeStyle = "#000000";
            BienenInterface.crc2.fillStyle = "#000000";
            BienenInterface.crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            BienenInterface.crc2.arc(this.x - 8, this.y - 3, 4, 0, 2 * Math.PI);
            if (this.stachel == true) {
                BienenInterface.crc2.moveTo(this.x, this.y);
                BienenInterface.crc2.lineTo(this.x + 13, this.y + 3);
            }
            else { }
            BienenInterface.crc2.stroke();
            BienenInterface.crc2.fill();
            //      Streifen
            BienenInterface.crc2.beginPath();
            BienenInterface.crc2.fillStyle = this.color;
            BienenInterface.crc2.rect(this.x - 6, this.y - 4, 2.5, 9);
            BienenInterface.crc2.rect(this.x - 2, this.y - 6, 2.5, 13);
            BienenInterface.crc2.rect(this.x + 2, this.y - 4, 2.5, 10);
            BienenInterface.crc2.stroke;
            BienenInterface.crc2.fill();
            //      Fluegel
            BienenInterface.crc2.beginPath();
            BienenInterface.crc2.fillStyle = "#aFEEEE";
            BienenInterface.crc2.arc(this.x - 4, this.y - 15, 10, 0, 1.5);
            BienenInterface.crc2.moveTo(this.x, this.y);
            BienenInterface.crc2.arc(this.x - 1, this.y - 10, 10, 0, 1.5);
            BienenInterface.crc2.closePath();
            BienenInterface.crc2.fill();
        };
        //Methode 'move'
        Biene.prototype.move = function () {
            this.x += Math.random() * 5 - 4;
            this.y += Math.random() * 6 - 3;
            for (var i = 0; i < BienenInterface.z; i++) {
                if (this.x < 0) {
                    this.x = BienenInterface.crc2.canvas.width;
                }
                if (this.y < 0) {
                    this.y = BienenInterface.crc2.canvas.height;
                }
                if (this.y >= BienenInterface.crc2.canvas.height) {
                    this.y = 0;
                }
            }
        };
        return Biene;
    }());
    BienenInterface.Biene = Biene;
})(BienenInterface || (BienenInterface = {}));
//# sourceMappingURL=bienen7.js.map