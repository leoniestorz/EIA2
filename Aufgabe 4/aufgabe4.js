//Aufgabe: 4 - Blumenwiese
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 23.04.17
//    
//Hiermit versichere ich, 
//dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var aufgabe4_Canvas;
(function (aufgabe4_Canvas) {
    document.addEventListener('DOMContentLoaded', function () {
        var canvas = document.getElementsByTagName("canvas")[0];
        var crc2 = canvas.getContext("2d");
        drawWiese(0, 0, "#ADFF2F", "#ADFF2F");
        drawHimmel(0, 0, "##48d1CC", "#48d1CC");
        drawBerg1(500, 400, "#a9a9a9", "#a9a9a9");
        drawBerg2(250, 400, "#696969", "#696969");
        drawSonne(560, 120, "#FFFF00", "#FFFF00");
        drawBaum(750, 300);
        drawBuschGross(560, 120, "#556B2F", "#556B2F");
        drawBuschKlein(560, 120, "#556B2F", "#556B2F");
        function drawWiese(_x, _y, _strokeColor, _fillColor) {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y + 400);
            crc2.lineTo(_x + 1280, _y + 400);
            crc2.lineTo(_x + 1280, _y + 720);
            crc2.lineTo(_x - 1280, _y + 720);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        function drawHimmel(_x, _y, _strokeColor, _fillColor) {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 1280, _y);
            crc2.lineTo(_x + 1280, _y + 400);
            crc2.lineTo(_x - 1280, _y + 400);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        function drawBerg1(_x, _y, _strokeColor, _fillColor) {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x + 200, _y - 300);
            crc2.lineTo(_x + 400, _y);
            crc2.lineTo(_x, _y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        function drawBerg2(_x, _y, _strokeColor, _fillColor) {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x + 200, _y - 200);
            crc2.lineTo(_x + 400, _y);
            crc2.lineTo(_x, _y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        function drawSonne(_x, _y, _strokeColor, _fillColor) {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.arc(560, 120, 60, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        function drawBaum(_x, _y) {
            crc2.beginPath();
            crc2.fillStyle = "#CD853F";
            crc2.fillRect(1080, 335, 35, 110);
            crc2.beginPath();
            crc2.fillStyle = "#6B8e23";
            crc2.arc(1110, 255, 35, 0, 2 * Math.PI);
            crc2.arc(1140, 285, 35, 0, 2 * Math.PI);
            crc2.arc(1110, 315, 35, 0, 2 * Math.PI);
            crc2.arc(1065, 305, 35, 0, 2 * Math.PI);
            crc2.arc(1065, 265, 35, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
        }
        function drawBuschGross(_x, _y, _strokeColor, _fillColor) {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.arc(910, 355, 25, 0, 2 * Math.PI);
            crc2.arc(940, 375, 25, 0, 2 * Math.PI);
            crc2.arc(910, 385, 35, 0, 2 * Math.PI);
            crc2.arc(865, 390, 25, 0, 2 * Math.PI);
            crc2.arc(865, 365, 25, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
        }
        function drawBuschKlein(_x, _y, _strokeColor, _fillColor) {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.arc(170, 355, 25, 0, 2 * Math.PI);
            crc2.arc(200, 375, 25, 0, 2 * Math.PI);
            crc2.arc(170, 385, 35, 0, 2 * Math.PI);
            crc2.arc(125, 390, 25, 0, 2 * Math.PI);
            crc2.arc(125, 365, 25, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
        }
    });
})(aufgabe4_Canvas || (aufgabe4_Canvas = {}));
//# sourceMappingURL=aufgabe4.js.map