
//Aufgabe: Abschlussaufgabe
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.07.17
//   
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    
//    alert("Bubble Casher\n\nFangen Sie so viele Baelle wie moeglich um Punkte zu sammeln! Bevor die Zeit abgelaufen ist!");
    
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    

  
    export let z: number = 0;
    export let allCircles: Circle[] = [];
     let imgData: ImageData;
    

    function init(_event: Event): void {
       
        
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        
        
       drawStartscreen("#E9967A"); 
       drawStarttext("#000000"); 
//      drawButton("red", "blue");    

        
    
       
//      drawCircle("FF00GG",700,350);
        
       
        let div : HTMLDivElement = document.createElement ("div");
        document.body.appendChild(div);
        let s: CSSStyleDeclaration = div.style;
        s.backgroundColor= "red";
        s.marginTop = "-250px";
        s.marginLeft = "620px";
        s.height = "100px";
        s.width = "100px";
        s.position = "fixed";
        s.borderBottomLeftRadius = "100px";
        s.borderBottomRightRadius = "100px";
        s.borderTopLeftRadius = "100px";
        s.borderTopRightRadius = "100px";
        
        
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild

//      div.addEventListener("touchend", changeScreen); 
//      div.addEventListener("click", changeScreen); 
      
//      canvas.addEventListener("touchend", addCircle);
//      canvas.addEventListener("click", addCircle);
        
//      div.addEventListener("touchend", removeCircle);
//      div.addEventListener("click", removeCircle); 
        
//      console.log(allCircles);  


       for (var i = 0; i < 50; i++) {    
           
       let y: number = 0;
       let x: number = 0;    
       let f: Circle = new Circle(x, y);
       allCircles[i] = f;
       f.draw();
       f.setRandomPosition();
       f.setRandomStyle();
       console.log(f)
       
       }
    
       window.setTimeout(animate, 20);}
           



   function animate(): void {
        
       crc2.putImageData(imgData, 0, 0); 
              
       for (let i: number = 0; i < allCircles.length; i++) {
           
       let b: Circle = allCircles[i];
       b.update();
       
      
       }
       
       window.setTimeout(animate, 20);

                  
        
//        canvas.addEventListener("touchend",addCircle); 
//        canvas.addEventListener("click", addCircle);
    }    
        
     


    
//--------------------------------------Funktionen---------------------------------------------------------------------------
    
   
 function drawStartscreen (_fillStyle:string): void {
         
        crc2.beginPath();
        crc2.fillStyle = _fillStyle;
        crc2.fillRect(0,0,canvas.width,canvas.height);
        crc2.closePath();
     
//       var image = new Image();
//       image.src = 'Images/pfeilbutton.png';
//       crc2.drawImage(image, 700, 350, 100, 100)
////       image.id += "button";
//       let i: CSSStyleDeclaration = image.style;
////       i.position = "fixed";
      
}
    
 function drawStarttext (_fillStyle: string): void {
         
        crc2.beginPath();
        crc2.fillStyle = _fillStyle;
       
 
        crc2.font="50px Georgia";
        crc2.fillText("Titel der Anwendung",460,300);
        crc2.closePath();
        crc2.fill();
     
}    
     
 function changeScreen () : void {
     

     
     crc2.beginPath();
        crc2.fillStyle = "#FF7F50";
        crc2.fillRect(0,0,canvas.width,canvas.height);
        crc2.closePath();
     
   
    
//      showWelcomeText();
 }
  
// function showWelcomeText () : void {
//     
// 
//     var action: string = prompt("Bitte Ihren Namen eingeben");
//   
// };  
    
    
    function addCircle(_event:Event): void {
        
         let c: Circle = new Circle (500,1000);
         c.draw;
//       c.setRandomStyle;
         allCircles.push(c);
         z++;
         console.log(z)
       
    
    
    }  


    
    function removeCircle () : void {
         
        this.parentNode.removeChild(this);
//        this.makeCircleInvisible;
         allCircles.push();
         z--
         console.log(z);
    
    }


    
//    function drawButton(_color:string, _farbe:string): void {
//        
//
//    var btn = document.createElement("BUTTON");
//    var t = document.createTextNode("Start");
//        btn.appendChild(t);
//    document.body.appendChild(btn);
//    btn.id += "button";
//        
//        btn.style.color = "#000000";
//        btn.style.backgroundColor = "#FFFFFF";
//        btn.style.height = "50px";
//        btn.style.marginTop = "-300px";
//        btn.style.marginLeft = "650px";
//}
        
// function drawCircle (_fillStyle: string, x:number, y:number) {
//     
//        crc2.beginPath();
//        crc2.fillStyle = _fillStyle;
//         
//        crc2.arc(x,y,15, 0, 2 * Math.PI);
//       
//        crc2.closePath();
//        crc2.fill();
//        
// 
// 
// }
        

//        let s: CSSStyleDeclaration = div.style;
//        s.backgroundColor=_color;
//        
//        let f: CSSStyleDeclaration = div.style;
//        f.color=_farbe;
        

    
// function createButton() {
//   
//    let button: HTMLButtonElement = document.createElement("button");
//        canvas.appendChild(button);
//        
////        button.id += "button"; 
////        
////      
//        document.getElementById("button").style.background = "#000000"; 
////        document.getElementById("button").style.width = "170px";
////        document.getElementById("button").style.height = "50px";
// }
//    ;   
    


    
//  function drawBiene(_b: Biene): void {
//        
//        //Koerper
//         
//        crc2.beginPath();
//        crc2.strokeStyle = "#000000";
//        crc2.fillStyle = "#000000";
//        crc2.arc(_b.x,_b.y, 7, 0, 2 * Math.PI);
//        crc2.arc(_b.x - 8 ,_b.y - 3, 4, 0, 2 * Math.PI);
//        
//       
//        if (_b.stachel == true) {
//        crc2.moveTo(_b.x, _b.y);
//        crc2.lineTo(_b.x + 13, _b.y + 3);}
//         
//        else {}
//        
//        crc2.stroke();
//        crc2.fill();
//        
//        //Streifen
//         
//        crc2.beginPath();
//        crc2.fillStyle = _b.color;
//        crc2.rect(_b.x - 6, _b.y - 4, 2.5, 9);
//        crc2.rect(_b.x - 2, _b.y - 6, 2.5, 13);
//        crc2.rect(_b.x + 2, _b.y - 4, 2.5, 10);
//        
//             
//        crc2.stroke;
//        crc2.fill();
//        
//        //Fluegel
//         
//        crc2.beginPath();
//        crc2.fillStyle = "#aFEEEE";
//        crc2.arc(_b.x - 4, _b.y - 15, 10, 0, 1.5);
//        crc2.moveTo(_b.x,_b.y);
//        crc2.arc(_b.x - 1, _b.y - 10, 10, 0, 1.5);
//
//
//        crc2.closePath();
//        crc2.fill();}  
     






};