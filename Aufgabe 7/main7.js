//Aufgabe: 7 - OO-Blumenwiese
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 14.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert. 
var BienenInterface;
(function (BienenInterface) {
    window.addEventListener("load", init);
    var canvas;
    var imgData;
    BienenInterface.z = 10;
    var alleBienen = [];
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        BienenInterface.crc2 = canvas.getContext("2d");
        drawWiese(0, 0, "#90EE90", "#90EE90");
        drawHimmel(0, 0, "##48d1CC", "#48d1CC");
        drawBergGross(500, 400, "#a9a9a9");
        drawBergKlein(250, 400);
        drawSonne(560, 120, "#FFFF00", "#FFFF00");
        drawBaum(750, 300);
        drawBuschGross(860, 380, "#556B2F");
        drawBuschKlein(90, 380, "#556B2F");
        drawBuschGross(-20, 440, "#556B2F");
        drawWolke(160, 120, "#FFFFFF");
        drawWolke(750, 180, "#FFFFFF");
        drawMohnblume(550, 565);
        drawSonnenblume(760, 465);
        drawTulpe(900, 600);
        drawVogel(1042, 315, "#000000", "#000000");
        drawBienenkorb(1200, 440);
        for (var i = 0; i < 80; i++) {
            var randomFlower = Math.floor((Math.random() * 3));
            var height = Math.floor((Math.random() * 255) + 380);
            var width = Math.floor((Math.random() * 1100) - 10);
            switch (randomFlower) {
                case 0:
                    drawSonnenblume(width, height);
                    break;
                case 1:
                    drawMohnblume(width, height);
                    break;
                case 2:
                    drawTulpe(width, height);
                    break;
            }
        }
        imgData = BienenInterface.crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild
        //Erscheinen der 10 Bienen am Ausgang des Bienenstocks
        for (var i_1 = 0; i_1 < BienenInterface.z; i_1++) {
            var b = new BienenInterface.Biene;
            b.x = 1190;
            b.y = 475;
            b.color = "hsl(" + Math.random() * 60 + ", 100%, 50%)";
            b.stachel = Boolean(Math.round(Math.random()));
            alleBienen[i_1] = b;
        }
        window.setTimeout(animate, 10);
    }
    function animate() {
        BienenInterface.crc2.putImageData(imgData, 0, 0);
        for (var i = 0; i < BienenInterface.z; i++) {
            var b = alleBienen[i];
            b.update();
        }
        window.setTimeout(animate, 10);
        //Bei KLick / Touch auf den Canvas erscheint eine neue Biene am Ausgang des Bienenstocks       
        //        canvas.addEventListener("touchend", mehrBienen); 
        //        canvas.addEventListener("click", mehrBienen);
    }
    //    function mehrBienen(): void {
    //        alleBienen.push({
    //            
    //            x: 1190, 
    //            y: 475, 
    //            color: "hsl(" + Math.random() * 60 + ", 100%, 50%)", 
    //            stachel: Boolean(Math.round(Math.random()))});
    //        
    //        z++;
    //       
    //    }
    //Funktionen
    function drawWiese(_x, _y, _strokeColor, _fillColor) {
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.strokeStyle = _strokeColor;
        BienenInterface.crc2.fillStyle = _fillColor;
        BienenInterface.crc2.moveTo(_x, _y + 400);
        BienenInterface.crc2.lineTo(_x + 1280, _y + 400);
        BienenInterface.crc2.lineTo(_x + 1280, _y + 720);
        BienenInterface.crc2.lineTo(_x - 1280, _y + 720);
        BienenInterface.crc2.closePath();
        BienenInterface.crc2.stroke();
        BienenInterface.crc2.fill();
    }
    function drawHimmel(_x, _y, _strokeColor, _fillColor) {
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.strokeStyle = _strokeColor;
        BienenInterface.crc2.fillStyle = _fillColor;
        BienenInterface.crc2.moveTo(_x, _y);
        BienenInterface.crc2.lineTo(_x + 1280, _y);
        BienenInterface.crc2.lineTo(_x + 1280, _y + 400);
        BienenInterface.crc2.lineTo(_x - 1280, _y + 400);
        BienenInterface.crc2.closePath();
        BienenInterface.crc2.stroke();
        BienenInterface.crc2.fill();
    }
    function drawBergGross(_x, _y, _fillColor) {
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.fillStyle = _fillColor;
        BienenInterface.crc2.moveTo(_x + 200, _y - 300);
        BienenInterface.crc2.lineTo(_x + 400, _y);
        BienenInterface.crc2.lineTo(_x, _y);
        BienenInterface.crc2.closePath();
        BienenInterface.crc2.fill();
    }
    function drawBergKlein(_x, _y) {
        //Berg
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.strokeStyle = "#696969";
        BienenInterface.crc2.fillStyle = "#696969";
        BienenInterface.crc2.moveTo(_x + 200, _y - 200);
        BienenInterface.crc2.lineTo(_x + 400, _y);
        BienenInterface.crc2.lineTo(_x, _y);
        BienenInterface.crc2.stroke();
        BienenInterface.crc2.fill();
        //Schnee
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.fillStyle = "#FFFFFF";
        BienenInterface.crc2.moveTo(451, 199);
        BienenInterface.crc2.lineTo(_x + 250, _y - 150);
        BienenInterface.crc2.arcTo(_x + 230, _y - 140, 60, 0, 2 * Math.PI);
        BienenInterface.crc2.arcTo(_x + 225, _y - 145, 60, 0, 2 * Math.PI);
        BienenInterface.crc2.arcTo(_x + 195, _y - 134, 80, 0, 2 * Math.PI);
        BienenInterface.crc2.arcTo(_x + 180, _y - 150, 60, 0, 2 * Math.PI);
        BienenInterface.crc2.arcTo(_x + 160, _y - 140, 80, 0, 2 * Math.PI);
        BienenInterface.crc2.lineTo(_x + 150, _y - 150);
        BienenInterface.crc2.lineTo(451, 199);
        BienenInterface.crc2.closePath();
        BienenInterface.crc2.fill();
    }
    function drawSonne(_x, _y, _strokeColor, _fillColor) {
        //Sonne
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.strokeStyle = _strokeColor;
        BienenInterface.crc2.fillStyle = _fillColor;
        //Sonnenstrahlen
        BienenInterface.crc2.arc(_x, _y, 60, 0, 2 * Math.PI);
        BienenInterface.crc2.moveTo(560, 120);
        BienenInterface.crc2.lineTo(800, 150);
        BienenInterface.crc2.moveTo(560, 120);
        BienenInterface.crc2.lineTo(800, 50);
        BienenInterface.crc2.moveTo(560, 120);
        BienenInterface.crc2.lineTo(700, 10);
        BienenInterface.crc2.moveTo(560, 120);
        BienenInterface.crc2.lineTo(590, 15);
        BienenInterface.crc2.moveTo(560, 120);
        BienenInterface.crc2.lineTo(490, 20);
        BienenInterface.crc2.moveTo(560, 120);
        BienenInterface.crc2.lineTo(400, 30);
        BienenInterface.crc2.moveTo(560, 120);
        BienenInterface.crc2.lineTo(400, 120);
        BienenInterface.crc2.moveTo(560, 120);
        BienenInterface.crc2.lineTo(410, 200);
        BienenInterface.crc2.moveTo(560, 120);
        BienenInterface.crc2.lineTo(480, 270);
        BienenInterface.crc2.moveTo(560, 120);
        BienenInterface.crc2.lineTo(590, 230);
        BienenInterface.crc2.moveTo(560, 120);
        BienenInterface.crc2.lineTo(700, 200);
        BienenInterface.crc2.closePath();
        BienenInterface.crc2.stroke();
        BienenInterface.crc2.fill();
    }
    function drawBaum(_x, _y) {
        //Baumstamm
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.fillStyle = "#CD853F";
        BienenInterface.crc2.fillRect(1080, 335, 35, 110);
        BienenInterface.crc2.fillRect(1050, 350, 50, 6);
        //Baumkrone
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.fillStyle = "#6B8e23";
        BienenInterface.crc2.arc(1110, 255, 35, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(1140, 285, 35, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(1110, 315, 35, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(1065, 305, 35, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(1065, 265, 35, 0, 2 * Math.PI);
        BienenInterface.crc2.closePath();
        BienenInterface.crc2.fill();
    }
    function drawBuschGross(_x, _y, _fillColor) {
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.fillStyle = _fillColor;
        BienenInterface.crc2.arc(_x + 55, _y + 30, 25, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(_x + 75, _y + 10, 20, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(_x + 120, _y + 40, 24, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(_x + 90, _y + 30, 35, 0, 2 * Math.PI);
        BienenInterface.crc2.closePath();
        BienenInterface.crc2.fill();
    }
    function drawBuschKlein(_x, _y, _fillColor) {
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.fillStyle = _fillColor;
        BienenInterface.crc2.arc(_x + 20, _y + 30, 28, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(_x + 50, _y + 10, 25, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(_x + 80, _y + 15, 20, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(_x + 55, _y + 30, 25, 0, 2 * Math.PI);
        BienenInterface.crc2.closePath();
        BienenInterface.crc2.fill();
    }
    function drawWolke(_x, _y, _fillColor) {
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.fillStyle = _fillColor;
        BienenInterface.crc2.arc(_x + 10, _y + 30, 25, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(_x + 50, _y + 25, 40, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(_x + 90, _y + 20, 35, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(_x + 130, _y + 20, 25, 0, 2 * Math.PI);
        BienenInterface.crc2.closePath();
        BienenInterface.crc2.fill();
    }
    function drawMohnblume(_x, _y) {
        //Stiel
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.strokeStyle = "#556B2F";
        BienenInterface.crc2.fillStyle = "#556B2F";
        BienenInterface.crc2.fillRect(_x - 10, _y + 5, 4, 55);
        //Bl�tter 
        BienenInterface.crc2.moveTo(_x - 10, _y + 30);
        BienenInterface.crc2.lineTo(_x + 5, _y + 15);
        BienenInterface.crc2.moveTo(_x - 10, _y + 40);
        BienenInterface.crc2.lineTo(_x - 20, _y + 30);
        BienenInterface.crc2.moveTo(_x - 10, _y + 55);
        BienenInterface.crc2.lineTo(_x + 2, _y + 40);
        BienenInterface.crc2.stroke();
        BienenInterface.crc2.fill();
        //Blueten
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.fillStyle = "#8B0000";
        BienenInterface.crc2.moveTo(_x, _y);
        BienenInterface.crc2.arc(_x - 5, _y - 20, 10, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(_x + 4, _y - 8, 10, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(_x - 10, _y + 2, 10, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(_x - 20, _y - 10, 10, 0, 2 * Math.PI);
        BienenInterface.crc2.fill();
        //Bluetenmitte
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.fillStyle = "#000000";
        BienenInterface.crc2.arc(_x - 8, _y - 7, 5, 0, 2 * Math.PI);
        BienenInterface.crc2.closePath();
        BienenInterface.crc2.fill();
    }
    function drawSonnenblume(_x, _y) {
        //Stiel
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.strokeStyle = "#556B2F";
        BienenInterface.crc2.fillStyle = "#556B2F";
        BienenInterface.crc2.fillRect(_x + 68, _y + 30, 3, 55);
        //Bl�tter
        BienenInterface.crc2.lineTo(_x + 70, _y + 50);
        BienenInterface.crc2.lineTo(_x + 60, _y + 50);
        BienenInterface.crc2.lineTo(_x + 70, _y + 70);
        BienenInterface.crc2.stroke();
        BienenInterface.crc2.fill();
        //Blueten
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.fillStyle = "#FFD700";
        BienenInterface.crc2.moveTo(_x + 62, _y + 24);
        BienenInterface.crc2.lineTo(_x + 50, _y + 15);
        BienenInterface.crc2.lineTo(_x + 60, _y + 28);
        BienenInterface.crc2.lineTo(_x + 45, _y + 25);
        BienenInterface.crc2.lineTo(_x + 58, _y + 33);
        BienenInterface.crc2.lineTo(_x + 48, _y + 40);
        BienenInterface.crc2.lineTo(_x + 61, _y + 37);
        BienenInterface.crc2.lineTo(_x + 55, _y + 50);
        BienenInterface.crc2.lineTo(_x + 65, _y + 38);
        BienenInterface.crc2.lineTo(_x + 66, _y + 52);
        BienenInterface.crc2.lineTo(_x + 70, _y + 39);
        BienenInterface.crc2.lineTo(_x + 76, _y + 50);
        BienenInterface.crc2.lineTo(_x + 75, _y + 37);
        BienenInterface.crc2.lineTo(_x + 85, _y + 45);
        BienenInterface.crc2.lineTo(_x + 78, _y + 33);
        BienenInterface.crc2.lineTo(_x + 90, _y + 36);
        BienenInterface.crc2.lineTo(_x + 79, _y + 28);
        BienenInterface.crc2.lineTo(_x + 92, _y + 24);
        BienenInterface.crc2.lineTo(_x + 78, _y + 23);
        BienenInterface.crc2.lineTo(_x + 88, _y + 14);
        BienenInterface.crc2.lineTo(_x + 75, _y + 20);
        BienenInterface.crc2.lineTo(_x + 78, _y + 8);
        BienenInterface.crc2.lineTo(_x + 70, _y + 20);
        BienenInterface.crc2.lineTo(_x + 69, _y + 5);
        BienenInterface.crc2.lineTo(_x + 65, _y + 20);
        BienenInterface.crc2.lineTo(_x + 58, _y + 8);
        BienenInterface.crc2.lineTo(_x + 62, _y + 24);
        BienenInterface.crc2.fill();
        //Bluetenmitte
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.fillStyle = "#000000";
        BienenInterface.crc2.arc(_x + 70, _y + 30, 5, 0, 2 * Math.PI);
        BienenInterface.crc2.closePath();
        BienenInterface.crc2.fill();
    }
    function drawTulpe(_x, _y) {
        //Stiel
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.fillStyle = "#556B2F";
        BienenInterface.crc2.fillRect(_x + 9, _y + 28, 3, 40);
        //Blatt
        BienenInterface.crc2.arc(_x + 8, _y + 30, 20, 0, 1.5);
        BienenInterface.crc2.fill();
        //Bluete
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.fillStyle = "#FF1493";
        BienenInterface.crc2.arc(_x + 10, _y + 20, 10, 0, 1 * Math.PI);
        BienenInterface.crc2.moveTo(_x, _y + 22);
        BienenInterface.crc2.lineTo(_x, _y + 7);
        BienenInterface.crc2.lineTo(_x + 6, _y + 14);
        BienenInterface.crc2.lineTo(_x + 10.5, _y + 4);
        BienenInterface.crc2.lineTo(_x + 15, _y + 14);
        BienenInterface.crc2.lineTo(_x + 20, _y + 7);
        BienenInterface.crc2.lineTo(_x + 20, _y + 21);
        BienenInterface.crc2.closePath();
        BienenInterface.crc2.fill();
    }
    function drawVogel(_x, _y, _strokeColor, _fillColor) {
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.strokeStyle = _strokeColor;
        BienenInterface.crc2.fillStyle = _fillColor;
        //Koerper und Kopf
        BienenInterface.crc2.arc(_x + 22, _y + 20, 8, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(_x + 32, _y + 16, 5, 0, 2 * Math.PI);
        //Schnabel
        BienenInterface.crc2.lineTo(_x + 42, _y + 18);
        //Beine
        BienenInterface.crc2.moveTo(_x + 24, _y + 28);
        BienenInterface.crc2.lineTo(_x + 24, _y + 35);
        BienenInterface.crc2.moveTo(_x + 20, _y + 28);
        BienenInterface.crc2.lineTo(_x + 20, _y + 35);
        //Schwanz
        BienenInterface.crc2.moveTo(_x + 14, _y + 18);
        BienenInterface.crc2.lineTo(_x + 10, _y + 14);
        BienenInterface.crc2.lineTo(_x + 10, _y + 17);
        BienenInterface.crc2.closePath();
        BienenInterface.crc2.fill();
        BienenInterface.crc2.stroke();
    }
    function drawBienenkorb(_x, _y) {
        //Bienenkorb
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.fillStyle = "#A0522D";
        BienenInterface.crc2.arc(_x, _y, 26, 0, 2 * Math.PI);
        BienenInterface.crc2.moveTo(_x, _y - 10);
        BienenInterface.crc2.arc(_x + 23, _y, 10, 0, 2 * Math.PI);
        BienenInterface.crc2.moveTo(_x, _y);
        BienenInterface.crc2.arc(_x + 23, _y + 20, 10, 0, 2 * Math.PI);
        BienenInterface.crc2.moveTo(_x, _y + 4);
        BienenInterface.crc2.arc(_x + 23, _y + 41, 10, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(_x - 25, _y + 41, 10, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(_x - 25, _y + 20, 10, 0, 2 * Math.PI);
        BienenInterface.crc2.arc(_x - 25, _y, 10, 0, 2 * Math.PI);
        BienenInterface.crc2.fillRect(_x - 26, _y + 6, 51, 45);
        BienenInterface.crc2.fill();
        BienenInterface.crc2.beginPath();
        BienenInterface.crc2.fillStyle = "#000000";
        //Oeffnung
        BienenInterface.crc2.arc(_x - 5, _y + 33, 10, 0, 2 * Math.PI);
        BienenInterface.crc2.closePath();
        BienenInterface.crc2.fill();
    }
})(BienenInterface || (BienenInterface = {}));
//# sourceMappingURL=main7.js.map