//Aufgabe: Abschlussaufgabe
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.07.17
//   
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Uebung;
(function (Uebung) {
    window.addEventListener("load", init);
    var imgData;
    function init(_event) {
        Uebung.canvas = document.getElementsByTagName("canvas")[0];
        Uebung.crc2 = Uebung.canvas.getContext("2d");
        Uebung.crc2.beginPath();
        Uebung.crc2.fillStyle = "#F08080 ";
        Uebung.crc2.fillRect(0, 0, Uebung.canvas.width, Uebung.canvas.height);
        Uebung.crc2.closePath();
        Uebung.crc2.beginPath();
        Uebung.crc2.strokeStyle = "black";
        Uebung.crc2.fillStyle = "yellow";
        Uebung.crc2.moveTo(500, 300);
        Uebung.crc2.lineTo(520, 300);
        Uebung.crc2.lineTo(530, 280);
        Uebung.crc2.lineTo(540, 300);
        Uebung.crc2.lineTo(560, 300);
        Uebung.crc2.lineTo(542, 313);
        Uebung.crc2.lineTo(553, 335);
        Uebung.crc2.lineTo(530, 320);
        Uebung.crc2.lineTo(510, 335);
        Uebung.crc2.lineTo(519, 313);
        Uebung.crc2.closePath();
        Uebung.crc2.stroke();
        Uebung.crc2.fill();
        Uebung.crc2.beginPath();
        Uebung.crc2.fillStyle = "#000000";
        Uebung.crc2.arc(300, 300, 15, 0, 2 * Math.PI);
        Uebung.crc2.closePath();
        Uebung.crc2.fill();
    }
})(Uebung || (Uebung = {}));
;
//# sourceMappingURL=uebung.js.map