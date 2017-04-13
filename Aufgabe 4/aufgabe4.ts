//Aufgabe: 4 - Blumenwiese
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 23.04.17
//    
//Hiermit versichere ich, 
//dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace aufgabe4_Canvas {
    
    document.addEventListener('DOMContentLoaded', function () {
    
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0]; 
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
   
    drawWiese(0, 0, "#ADFF2F", "#ADFF2F");     
    drawHimmel(0, 0, "##48d1CC", "#48d1CC");
    drawBerg(0, 400, "#a9a9a9", "#a9a9a9");
       
    

    function drawWiese (_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
         
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y + 400);
        crc2.lineTo(_x + 1280, _y + 400);
        crc2.lineTo(_x + 1280, _y + 720);
        crc2.lineTo(_x - 1280, _y + 720);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();}
    
     function drawHimmel (_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
         
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 1280, _y);
        crc2.lineTo(_x + 1280, _y + 400);
        crc2.lineTo(_x - 1280, _y + 400);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();}
        
        
        
        
    function drawBerg(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
       
         crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x - 10, _y + 10);
        crc2.lineTo(_x, _y - 10);
        crc2.lineTo(_x + 10, _y + 10);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();}
        
     
        
        
});
   
 }   