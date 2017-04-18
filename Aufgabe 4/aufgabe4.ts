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
   
    drawWiese(0, 0, "#90EE90", "#90EE90");     
    drawHimmel(0, 0, "##48d1CC", "#48d1CC");
    drawBerg1(500, 400, "#a9a9a9", "#a9a9a9");
    drawBerg2(250, 400, "#696969", "#696969");   
    drawSonne(560, 120, "#FFFF00", "#FFFF00");
    drawBaum(750, 300);
    drawBuschGross(560, 120, "#556B2F", "#556B2F");
    drawBuschKlein(560, 120, "#556B2F", "#556B2F");
    drawWolke(560, 120, "#FFFFFF", "#FFFFFF");
    drawMohnblume(518, 565);
    drawSonnenblume(560, 565);
    drawTulpe(800, 600);


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
        
        
        
        
    function drawBerg1(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
       
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 200, _y - 300);
        crc2.lineTo(_x + 400, _y);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();}
        
     function drawBerg2(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
       
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 200, _y - 200);
        crc2.lineTo(_x + 400, _y);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();}
        
      function drawSonne(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
       
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;

        crc2.arc(_x,_y, 60, 0, 2 * Math.PI);
        crc2.moveTo(560,120);
        crc2.lineTo(800, 150);
        crc2.moveTo(560,120);
        crc2.lineTo(800, 50);
        crc2.moveTo(560,120);
        crc2.lineTo(700, 10);
        crc2.moveTo(560,120);
        crc2.lineTo(590, 15);
        crc2.moveTo(560,120);
        crc2.lineTo(490, 20);
        crc2.moveTo(560,120);
        crc2.lineTo(400, 30);
        crc2.moveTo(560,120);
        crc2.lineTo(400, 120);
        crc2.moveTo(560,120);
        crc2.lineTo(410, 200);
        crc2.moveTo(560,120);
        crc2.lineTo(480,270);
        crc2.moveTo(560,120);
        crc2.lineTo(590, 230);
        crc2.moveTo(560,120);
        crc2.lineTo(700,200);
         
         
         
         
         
         
          
        crc2.closePath();
      crc2.fill();
        crc2.stroke();}
        
     function drawBaum(_x: number, _y: number): void {
         
        crc2.beginPath();
        crc2.fillStyle ="#CD853F";
        crc2.fillRect(1080, 335, 35, 110);
        crc2.fillRect(1050, 350, 50, 6);
         
        crc2.beginPath();
        crc2.fillStyle = "#6B8e23"; 
        crc2.arc(1110, 255, 35, 0, 2 * Math.PI);
        crc2.arc(1140, 285, 35, 0, 2 * Math.PI);
        crc2.arc(1110, 315, 35, 0, 2 * Math.PI);
        crc2.arc(1065, 305, 35, 0, 2 * Math.PI);
        crc2.arc(1065, 265, 35, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();}
        
        
     function drawBuschGross(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
         
  
         
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(910, 355, 25, 0, 2 * Math.PI);
        crc2.arc(940, 375, 25, 0, 2 * Math.PI);
        crc2.arc(910, 385, 35, 0, 2 * Math.PI);
        crc2.arc(865, 390, 25, 0, 2 * Math.PI);
        crc2.arc(865, 365, 25, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();}
        
     function drawBuschKlein(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
         
  
         
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(170, 355, 25, 0, 2 * Math.PI);
        crc2.arc(200, 375, 25, 0, 2 * Math.PI);
        crc2.arc(170, 385, 35, 0, 2 * Math.PI);
        crc2.arc(125, 390, 25, 0, 2 * Math.PI);
        crc2.arc(125, 365, 25, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();}
        
      function drawWolke(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
         
  
         
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(270, 155, 25, 0, 2 * Math.PI);
        crc2.arc(300, 175, 25, 0, 2 * Math.PI);
        crc2.arc(270, 185, 35, 0, 2 * Math.PI);
        crc2.arc(225, 190, 25, 0, 2 * Math.PI);
        crc2.arc(225, 165, 25, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();}
      
     function drawMohnblume(_x: number, _y: number): void {
         
        
         
        crc2.beginPath();
        crc2.fillStyle = "#556B2F";
        crc2.fillRect(508, 553, 4, 55);
        crc2.fill();
   
        
        crc2.beginPath();
        crc2.fillStyle = "#8B0000";
        crc2.arc(_x - 5, _y - 20, 10, 0, 2 * Math.PI);
        crc2.arc(_x + 4, _y - 8, 10, 0, 2 * Math.PI);
        crc2.arc(_x - 10, _y + 2, 10, 0, 2 * Math.PI);
        crc2.arc(_x - 20, _y - 10, 10, 0, 2 * Math.PI);
        crc2.fill();
       
       
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(510, 555, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();}
        
        
     function drawSonnenblume(_x: number, _y: number): void {
         
        
         
        crc2.beginPath();
        crc2.fillStyle = "#556B2F";
        crc2.fillRect(_x + 68,_y + 30, 3, 55);
        crc2.fill();
   
        
        crc2.beginPath();
  
        crc2.fillStyle = "#FFD700";
        crc2.moveTo(_x + 62, _y + 24);
        crc2.lineTo(_x + 50,_y + 15);
        crc2.lineTo(_x + 60,_y + 28);
        crc2.lineTo(_x + 45,_y + 25);
        crc2.lineTo(_x + 58,_y + 33);
        crc2.lineTo(_x + 48,_y + 40);
        crc2.lineTo(_x + 61,_y + 37);
        crc2.lineTo(_x + 55,_y + 50);
        crc2.lineTo(_x + 65,_y + 38);
        crc2.lineTo(_x + 66,_y + 52);
        crc2.lineTo(_x + 70,_y + 39);
        crc2.lineTo(_x + 76,_y + 50);
        crc2.lineTo(_x + 75,_y + 37);
        crc2.lineTo(_x + 85,_y + 45);
        crc2.lineTo(_x + 78,_y + 33);
        crc2.lineTo(_x + 90,_y + 36);
        crc2.lineTo(_x + 79,_y + 28);
        crc2.lineTo(_x + 92,_y + 24);
        crc2.lineTo(_x + 78,_y + 23);
        crc2.lineTo(_x + 88,_y + 14);
        crc2.lineTo(_x + 75,_y + 20);
        crc2.lineTo(_x + 78,_y + 8);
        crc2.lineTo(_x + 70,_y + 20);
        crc2.lineTo(_x + 69,_y + 5);
        crc2.lineTo(_x + 65,_y + 20);
        crc2.lineTo(_x + 58,_y + 8);
        crc2.lineTo(_x + 62,_y + 24);
       

        crc2.fill();
       
       
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(_x  + 70, _y + 30, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();}
        
        
        
     function drawTulpe(_x: number, _y: number): void {
         
        
         
        crc2.beginPath();
        crc2.fillStyle = "#556B2F";
        
        crc2.fillRect(_x + 9,_y + 28, 3, 40);
        crc2.fill();
   
        
        crc2.beginPath();
        crc2.fillStyle = "#FF1493";
       
        crc2.arc(_x  + 10, _y + 20, 10, 0, 1 * Math.PI);
        crc2.moveTo(_x ,_y + 22);
        crc2.lineTo(_x ,_y + 7);
        crc2.lineTo(_x + 6 ,_y + 14);
        crc2.lineTo(_x + 10.5 ,_y + 4);
        crc2.lineTo(_x + 15 ,_y + 14);
        crc2.lineTo(_x + 20 ,_y + 7);
        crc2.lineTo(_x + 20 ,_y + 21);
        
        
         crc2.fill();
       
       
        
        crc2.closePath();}
         
         
       
        
});
   
 }   