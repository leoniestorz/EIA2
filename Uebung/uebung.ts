

//Aufgabe: Abschlussaufgabe
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.07.17
//   
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.



        
namespace Uebung {
    window.addEventListener("load", init);
    
  
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;


    let imgData: ImageData;

    function init(_event: Event): void {
       
        
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");


        crc2.beginPath();
        crc2.fillStyle = "#F08080 ";
        crc2.fillRect(0,0,canvas.width,canvas.height);
        crc2.closePath();
  
       
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "yellow";
        crc2.moveTo(500,300);
        crc2.lineTo(520,300)
        crc2.lineTo(530,280)
        crc2.lineTo(540,300)
        crc2.lineTo(560,300)
        crc2.lineTo(542,313)
        crc2.lineTo(553,335)
        crc2.lineTo(530,320)
        crc2.lineTo(510,335)
        crc2.lineTo(519,313)
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(300,300,15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        
        
    
       
        }


};