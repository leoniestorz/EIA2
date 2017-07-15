
//Aufgabe: Abschlussaufgabe
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.07.17
//   
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    
    
    
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    
    let imgData: ImageData;
  
    export let z: number;
    export let allCircles: Circle[] = [];
    
    

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
        
      div.addEventListener("touchend", changeScreen); 
      div.addEventListener("click", changeScreen); 
      
      canvas.addEventListener("touchend", addCircle);
      canvas.addEventListener("click", addCircle);
        
//      canvas.addEventListener("touchend", removeCircle);
//      canvas.addEventListener("click", removeCircle); 
        
      console.log(allCircles);  
//      
//        
//        
//
//       for (var i = 0; i < 80; i++) {
//                    
//                    var randomFlower:number = Math.floor((Math.random() * 3));
//                    var height:number = Math.floor((Math.random() * 255) + 380);
//                    var width:number  = Math.floor((Math.random() * 1100) - 10); 
                   
        
//       switch (randomFlower) {
//                        
//                                case 0:
//                                    drawSonnenblume(width,height);
//                                    break;
//                                case 1:
//                                    drawMohnblume(width, height);
//                                    break;
//                                case 2:
//                                    drawTulpe(width, height);
//                                    break;} 
         }
        
        

//        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild

//Erscheinen der 10 Bienen am Ausgang des Bienenstocks
        
//        for (let i: number = 0; i < z; i++) {
//            
//            let b: Biene = {x: 0, y: 0, color: "", stachel: true};
//            b.x = 1190; 
//            b.y = 475;  
//            
//            b.color = "hsl(" + Math.random() * 60 + ", 100%, 50%)";
//            b.stachel = Boolean(Math.round(Math.random()));
//            
//            alleBienen[i] = b;
//        }
//
//        
//      
//        window.setTimeout(animate, 10);
//    }
//
//    
//
//    function animate(): void {
//        
//        crc2.putImageData(imgData, 0, 0); 
       
//Flugrichtung der Bienen 
              
//        for (let i: number = 0; i < z; i++) {
//           
//            let b: Biene = alleBienen[i];
//            b.x += Math.random() * 5 - 4;
//            b.y += Math.random() * 6 - 3;
            
//Erscheinen am gegenueberliegenden Rand nach Verlassen des Canvas            
            
//            if (b.x < 0) {
//                b.x = crc2.canvas.width;
//            }
//            if (b.y < 0) {
//                b.y = crc2.canvas.height;
//            }
//            if (b.y >= crc2.canvas.height) {
//                b.y = 0;
//            }
//            drawBiene(b); 
//        }
//        window.setTimeout(animate, 10);
        
//Bei KLick / Touch auf den Canvas erscheint eine neue Biene am Ausgang des Bienenstocks       
        
//        canvas.addEventListener("touchend", mehrBienen); 
//        canvas.addEventListener("click", mehrBienen);
//
//    }
//
//    function mehrBienen(): void {
//        alleBienen.push({
//            
//            x: 1190, 
//            y: 475, 
//            
//            color: "hsl(" + Math.random() * 60 + ", 100%, 50%)", 
//            stachel: Boolean(Math.round(Math.random()))});
//        
//        z++;
//       
//    }

    
//Funktionen
    
   
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
     
   
     
      showWelcomeText();
 };
  
 function showWelcomeText () : void {
     
 
     var action: string = prompt("Bitte Ihren Namen eingeben");
   
 };  
    
    
    function addCircle(_event:Event): void {
        
         let c: Circle = new Circle (10,10);
//        c.draw;
         c.setRandomStyle;
         allCircles.push(c);
         z++;}  


    
//    function removeCircle () : void {
//        
//         allCircles.pop();
//         z--;
//    
//    }


    
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