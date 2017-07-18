
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
    export let canvas: HTMLCanvasElement;
    

  
    export let z: number = 0;
    let v: number = 0;
    let r:number = 11;
    export let e:number;
    export let j:number;
    
    export let allCircles: Circle[] = [];
   

    let imgData: ImageData;

    function init(_event: Event): void {
       
        
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        
//     Funktionsaufrufe
                 
       drawStartscreen(); 
           
       changeScreen();
       setCounter(); 

//     Div-Element erstellen
               
//        let div : HTMLDivElement = document.createElement ("div");
//        document.body.appendChild(div);
//        let s: CSSStyleDeclaration = div.style;
//        s.backgroundColor= "red";
//        s.marginTop = "-250px";
//        s.marginLeft = "620px";
//        s.height = "100px";
//        s.width = "100px";
//        s.position = "fixed";
//        s.borderBottomLeftRadius = "100px";
//        s.borderBottomRightRadius = "100px";
//        s.borderTopLeftRadius = "100px";
//        s.borderTopRightRadius = "100px";

//      Punkteanzeige
        
        let punkte = document.createElement("div");
        document.body.appendChild(punkte);
          let p: CSSStyleDeclaration = punkte.style;
        p.backgroundColor = "white";
        p.paddingLeft = "10px";
        p.marginTop = "10px";
        p.width = "120px";
        p.height = "25px";
        p.border = " 2px solid black";
        p.position = "fixed";
        p.marginLeft = "20px"
        p.marginTop = " -585px"
        p.fontSize = "20px"; 
        
        punkte.innerText = "Punkte:"
       
//      Speichern des Canvas als Bild
            
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); 
        
        window.setTimeout(animate, 20);
        
        startGame();
        
//      EventListener 
        
//      div.addEventListener("touchend", changeScreen); 
//      div.addEventListener("click", changeScreen); 
     
        
        canvas.addEventListener("touchend", removeCircle);
        canvas.addEventListener("click", removeCircle);   
           
//      div.addEventListener("touchend", removeCircle);
//      div.addEventListener("click", removeCircle); 
        
 
        
     
    
 } 
      let interval =  setInterval(
   
       function(){ if (z > 0) {
        z++;
        let b: ColourCircle = new ColourCircle(500, 0);
                                       e = 0;
                                        z++;
                                       allCircles.push(b);
                                       console.log(b)
                                       console.log(z + " " + "Circles"); }}, 2000
       
       ); 
     
    function startGame(): void {
         

        
       for (var i = 0; i < 10; i++) {    

           
            

       let randomCircle = Math.floor(Math.random() * 2); 
       
           switch (randomCircle) {
                        
                                case 0:
                                     let b: ColourCircle = new ColourCircle(this.x, this.y);
                                        e = 0;
                                        z++;
                                       allCircles.push(b);
//                                       console.log(b)
                                       console.log(z + " " + "Circles");
                  
                                       console.log(e);
                                    break;
                                case 1:
                                     let q: BlackCircle = new BlackCircle(this.x, this.y);
                                        e = 1;
                                        z++;
                                        allCircles.push(q);
//                                         console.log(q)
                                        console.log(z + " " + "Circles");
//                                         console.log(j);
                                    break;
                  
                   
                   }
           
           
   
        removeStarttext(); 
           
     

       }
        
               
  
      window.setTimeout(animate, 20);
  }    
    
    
        function removeCircle(event : MouseEvent): void {
            
            for (let i: number = 0; i < allCircles.length; i++) {
                
                let d: Circle = allCircles[i];
                
                
                let clickX: number = event.clientX;
                let clickY: number = event.clientY;
                
                let differenceX: number = Math.abs(d.positionX - clickX);
                let differenceY: number = Math.abs(d.positionY - clickY);

                if (differenceX <= 40 && differenceY <= 40) {
                    allCircles.splice(i, 1);
                   
                  
                if (e == 0)
                   v++;
          
                 else
                    v--;   
                    
               console.log(v + " " + "Punkte")
                
                   
               }
         
//      Punkteanzeige
        
        let punkte = document.createElement("div");
        document.body.appendChild(punkte);
        let p: CSSStyleDeclaration = punkte.style;
        p.backgroundColor = "white";
        p.paddingLeft = "10px";
        p.marginTop = "10px";
        p.width = "120px";
        p.height = "25px";
        p.border = " 2px solid black";
        p.position = "fixed";
        p.marginLeft = "20px"
        p.marginTop = " -585px"
        p.fontSize = "20px"; 
        
        punkte.innerText = "Punkte: " + v; 
            
            }
            
            
            
            

}

 function checkPosition(): void {
       
       
            for (let i: number = 0; i < allCircles.length; i++) {
                
                let a: Circle = allCircles[i];
                
                
                if (a.positionX>= 567 && a.positionX <= 750) {
                if (a.positionY >= 245 && a.positionY <= 429) {
                        console.log("Hey");


                    }
                };
            };
        }; 
        

        
        
      function animate(): void {
        
       crc2.putImageData(imgData, 0, 0); 
              
       for (let i: number = 0; i < allCircles.length; i++) {
           
       let b: Circle = allCircles[i];
       b.update();
       
      
       }
       
       window.setTimeout(animate, 20);
       
        if ( r == 0)   
        endGame();        
        
//        canvas.addEventListener("touchend",addCircle); 
//        canvas.addEventListener("click", addCircle);
    }      
        
        


    
//--------------------------------------Funktionen---------------------------------------------------------------------------
    
   
 function drawStartscreen (): void {

//      Hintergrund
        crc2.beginPath();
        crc2.fillStyle = "#F08080 ";
        crc2.fillRect(0,0,canvas.width,canvas.height);
        crc2.closePath();
     
//       var image = new Image();
//       image.src = 'Images/hintergrund.jpg';
//       crc2.drawImage(image, 100, 450, 100, 100)
//       image.id += "button";
//       let i: CSSStyleDeclaration = image.style;
//       i.position = "fixed";
     
     
//      Textfeld
        crc2.beginPath();
        crc2.fillStyle = "black";
       
 
        crc2.font="150px Indie Flower";
        crc2.fillText("Bubble Catcher",220,490);
        crc2.closePath();
        crc2.fill();

//      Ecken
//        //links oben
//        crc2.beginPath();
//        crc2.strokeStyle = "#000000";
//        crc2.moveTo(420,190);
//        crc2.lineTo(420,120);
//        crc2.lineTo(490,120);
//        crc2.stroke();
//        //links unten
//        crc2.beginPath();
//        crc2.strokeStyle = "#000000";
//        crc2.moveTo(490,340);
//        crc2.lineTo(420,340);
//        crc2.lineTo(420,280);
//        crc2.stroke();
//        //rechts unten
//        crc2.beginPath();
//        crc2.strokeStyle = "#000000";
//        crc2.moveTo(860,340);
//        crc2.lineTo(930,340);
//        crc2.lineTo(930,280);
//        crc2.stroke();
//        //rechts oben
//        crc2.beginPath();
//        crc2.strokeStyle = "#000000";
//        crc2.moveTo(870,120);
//        crc2.lineTo(930,120);
//        crc2.lineTo(930,180);
//        crc2.stroke();
     
//     Kreise
     
       crc2.beginPath();
       crc2.strokeStyle = "#000000";
       crc2.arc(100,100,35, 0, 2 * Math.PI);
       crc2.closePath();
       crc2.stroke();
     
       crc2.beginPath();
       crc2.strokeStyle = "#000000";
       crc2.arc(500,600,65, 0, 2 * Math.PI);
       crc2.closePath();
       crc2.stroke();
     
       crc2.beginPath();
       crc2.strokeStyle = "#000000";
       crc2.arc(1100,300,85, 0, 2 * Math.PI);
       crc2.closePath();
       crc2.stroke();
       
       crc2.beginPath();
       crc2.strokeStyle = "#000000";
       crc2.arc(250,250,85, 0, 2 * Math.PI);
       crc2.closePath();
       crc2.stroke();
     
       crc2.beginPath();
       crc2.strokeStyle = "#000000";
       crc2.arc(920,150,100, 0, 2 * Math.PI);
       crc2.closePath();
       crc2.stroke();
}


      
   
  function changeScreen () : void {
      
//   Alertbox   
 alert( "Fange so viele herabfallende Baelle wie moeglich um Punkte zu sammeln!\n\nAber Achtung! Erwische nicht die schwarzen Baelle - sie geben Minuspunkte!\n\n Die Zeit laeuft sobald du mit 'Ok' bestaetigt hast");    
  
       crc2.beginPath();
     crc2.fillStyle = "#F5DEB3";
     crc2.fillRect(0,0,canvas.width,canvas.height);
     crc2.closePath();
     
     
//    Textfeld    
    
     crc2.beginPath();
     crc2.fillStyle = "#F5DEB3";
     crc2.closePath();
     crc2.fill();
  

  
  }   
 


 function removeStarttext () : void {
     
 //   Hintergrund
     
     crc2.beginPath();
     crc2.fillStyle = "#EEE8AA";
     crc2.fillRect(0,0,canvas.width,canvas.height);
     crc2.closePath();
     
     
//    Textfeld    
     
     crc2.beginPath();
     crc2.fillStyle = "#EEE8AA";
      crc2.font="50px Georgia";
     crc2.fillText("Bubble Catch",480,300);
     crc2.closePath();
     crc2.fill();
 
 
 }
     
  
//Fuegt bei jedem Kick neue Kreise hinzu, 
//damit der Spieler weiterhin Punkte erzielen kann
        
    function addCircle(_event:Event): void {
        
//        setInterval(
//   
//       function(){ if (z > 0) {
//        z++;
//        let b: ColourCircle = new ColourCircle(500, 0);
//                                       e = 0;
//                                        z++;
//                                       allCircles.push(b);
//                                       console.log(b)
//                                       console.log(z); }}, 1000
//       
//       ); 
        
        
        
//         for (var i = 0; i < 2; i++) {    
//
//           
//            
//
//    let randomCircle = Math.floor(Math.random() * 2); 
//       
//           switch (randomCircle) {
//                        
//                                case 0:
//                                     let b: ColourCircle = new ColourCircle(500, 0);
//                                       e = 0;
//                                        z++;
//                                       allCircles.push(b);
//                                       console.log(b)
//                                       console.log(z);
//                                    break;
//                                case 1:
//                                     let q: BlackCircle = new BlackCircle(500, 0);
//                                        e = 1;
//                                          z++;
//                                        allCircles.push(q);
//                                         console.log(q)
//                                        console.log(z);
//                                    break;
//                                }   
//   
//        removeStarttext();   
//
//       }
//  
       
 }  
     
   function setCounter () : void {
        
       let timer : HTMLDivElement = document.createElement ("div");
        document.body.appendChild(timer);
        let t: CSSStyleDeclaration = timer.style;
        t.backgroundColor= "#FFFFFF";
        t.marginTop = "-585px";
        t.marginLeft = "1110px";
        t.paddingLeft = "20px";
        t.height = "20px";
        t.width = "150px";
        t.font = "20pt";
        t.position = "fixed";
        t.border = "3px solid #000000";
    
      
//     Zeitanzeige
          
       setInterval(
   
       function(){ if (r > 0) {
        r--;
        console.log ("noch" + " " + r + " " + "Sekunden");
        timer.innerHTML = "noch" + " " + r + " " + "Sekunden"; }}, 1000
       
          
       );   
       

        
   
   
   
   
   }
    
    
    function endGame () : void {
        
        
         
       crc2.beginPath();
     crc2.fillStyle = "black";
     crc2.fillRect(0,0,canvas.width,canvas.height);
     crc2.closePath();
     
     crc2.beginPath();
     crc2.fillStyle = "white";
      crc2.font="50px Georgia";
     crc2.fillText("Game Over - Deine Zeit ist abgelaufen",350,200);
     crc2.fillText("You reached" + " " + v + " " + "points!", 400, 300);  
     crc2.fillText("Refresh to play again", 400, 400)  
     crc2.closePath();
     crc2.fill();
        
        
     clearInterval(interval);
        
        
//        if (v > 10){
//     
//     crc2.beginPath();
//     crc2.fillStyle = "black";
//     crc2.fillRect(0,0,canvas.width,canvas.height);
//     crc2.closePath();
//     
//     crc2.beginPath();
//     crc2.fillStyle = "white";
//      crc2.font="50px Georgia";
//     crc2.fillText("Game Over",480,100);
//     crc2.fillText("Good! You reached" + " " + v + " " + "points!", 400, 200);  
//     crc2.fillText("Refresh to play again", 400, 300)  
//     crc2.closePath();
//     crc2.fill();
//     }
//        
//      
//      if ( v = 5) {
//     
//     crc2.beginPath();
//     crc2.fillStyle = "black";
//     crc2.fillRect(0,0,canvas.width,canvas.height);
//     crc2.closePath();
//     
//     crc2.beginPath();
//     crc2.fillStyle = "white";
//      crc2.font="50px Georgia";
//     crc2.fillText("Game Over",480,100);
//     crc2.fillText("Wow! You reached" + " " + v + " " + "points!", 400, 200);  
//     crc2.fillText("Refresh to play again", 400, 300)  
//     crc2.closePath();
//     crc2.fill();
//     }    
        

    
      
    
    }
    

     
       
       
//    function removeCircle () : void {
//         
//        this.parentNode.removeChild(this);
//         allCircles.push();
//         z--
//         console.log(z);
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
    

};