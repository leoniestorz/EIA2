
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
    

  
    export let z: number = 0;  //Anzahl der Kreise insgesamt
    export let g:number = 1;    //Anzahl der Sterne insgesamt
    
    let v: number = 0;         //Anzahl der Punkte
    let r:number = 11;         //Zeitangabe
 

    export let allColourCircles: ColourCircle[] = [];
    export let allBlackCircles:BlackCircle[] = [];
    export let allStars:Star[] = [];

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
    
//alle 2 Sekunden kommen 2 bunte Kreise hinzu
       
      let intervalCircles =  setInterval(
   
       function(){ if (z > 0) {
        z++;
        let b: ColourCircle = new ColourCircle(500, 0);
                                
                                        z++;
                                       allColourCircles.push(b);
                                       console.log(b)
                                       console.log(z + " " + "Circles"); }}, 2000
       
       ); 
    
//alle 2 Sekunden kommen 2 Sterne hinzu    
    
    let intervalStars =  setInterval(
   
       function(){ if (g > 0) {
        g++;
        let b: Star = new Star (500, 300);
                                
                                        g++;
                                       allStars.push(b);
                                       console.log(b)
                                       console.log(g + " " + "Stars"); }}, 2000
       
       ); 
    
    
     
    function startGame(): void {
         

        
       for (var i = 0; i < 10; i++) {    

           
            

       let randomCircle = Math.floor(Math.random() * 2); 
       
           switch (randomCircle) {
                        
                                case 0:
                                     let b: ColourCircle = new ColourCircle(this.x, this.y);
//                                       
                                        z++;
                                        
                                       allColourCircles.push(b);
//                                       console.log(b)
                                       console.log(z + " " + "Circles");
                  
                                     
                                    break;
                                case 1:
                                     let q: BlackCircle = new BlackCircle(this.x, this.y);
//                                        e == 1;
                                        z++;
                                        
                                        allBlackCircles.push(q);
//                                         console.log(q)
                                        console.log(z + " " + "Circles");

                                    break;
                  
                   
                   }
           
           
   
        removeStarttext(); 
           
     

       }
        
               
  
      window.setTimeout(animate, 20);
  }    
    
    
        function removeCircle(event : MouseEvent): void {

//Remove ColourCircles
                        
            for (let i: number = 0; i < allColourCircles.length; i++) {
                
                let d: ColourCircle = allColourCircles[i];
                
                
                let clickX: number = event.clientX;
                let clickY: number = event.clientY;
                
                let differenceX: number = Math.abs(d.positionX - clickX);
                let differenceY: number = Math.abs(d.positionY - clickY);

                if (differenceX <= 40 && differenceY <= 40) {
                    allColourCircles.splice(i, 1);
                  
                    v++; //Pluspunkte im Spiel ( + 1 Punkt)
  
                    
               console.log(v + " " + "Punkte")
                
                   
               }
         
        //Punkteanzeige
        
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

//Remove BlackCircles
            
        for (let i: number = 0; i < allBlackCircles.length; i++) {
                
                let d: BlackCircle = allBlackCircles[i];
                
                
                let clickX: number = event.clientX;
                let clickY: number = event.clientY;
                
                let differenceX: number = Math.abs(d.positionX - clickX);
                let differenceY: number = Math.abs(d.positionY - clickY);

                if (differenceX <= 40 && differenceY <= 40) {
                    allBlackCircles.splice(i, 1);
                  
                    if (v > 0)//damit am Ende kein Punktestand im Minusbereich entsteht
                    v--; //Minuspunkte im Spiel (- 1 Punkt)
                    
                    
               console.log(v + " " + "Punkte")
                
                   
               }
           
        //Punkteanzeige
        
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
         
//Remove Stars
                       
      for (let i: number = 0; i < allStars.length; i++) {
                
                let d: ColourCircle = allStars[i];
                
                
                let clickX: number = event.clientX;
                let clickY: number = event.clientY;
                
                let differenceX: number = Math.abs(d.positionX - clickX);
                let differenceY: number = Math.abs(d.positionY - clickY);

                if (differenceX <= 40 && differenceY <= 40) {
                    allStars.splice(i, 1);
                  
                    v += 2; //Pluspunkte im Spiel (+ 2 Punkte)
  
                    
               console.log(v + " " + "Punkte")
                
                   
               }
         
        //Punkteanzeige
        
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
       
       
            for (let i: number = 0; i < allColourCircles.length; i++) {
                
//Position of ColourCircles                 
                
                let a: movingObject = allColourCircles[i];
                
                
                if (a.positionX>= 567 && a.positionX <= 750) {
                if (a.positionY >= 245 && a.positionY <= 429) {
                        console.log("Hey");


                    }
                };
            };

//Position of BlackCircles
     
             for (let i: number = 0; i < allBlackCircles.length; i++) {
                
                let a: movingObject = allBlackCircles[i];
                
                
                if (a.positionX>= 567 && a.positionX <= 750) {
                if (a.positionY >= 245 && a.positionY <= 429) {
                        console.log("Hey");


                    }
                };
            };

//Position of Stars
     
            for (let i: number = 0; i < allStars.length; i++) {
                
                let a: movingObject = allStars[i];
                
                
                if (a.positionX>= 567 && a.positionX <= 750) {
                if (a.positionY >= 245 && a.positionY <= 429) {
                        console.log("Hey");


                    }
                };
            };
     
        }; 
        

        
        
      function animate(): void {
        
       crc2.putImageData(imgData, 0, 0); 
        
//animate ColourCircles
                   
       for (let i: number = 0; i < allColourCircles.length; i++) {
           
       let b: movingObject = allColourCircles[i];
       b.update();
       
      
       }

//animate BlackCircles
                    
       for (let i: number = 0; i < allBlackCircles.length; i++) {
           
       let b: movingObject = allBlackCircles[i];
       b.update();
       
      
       }
 
//animate Stars
                    
       for (let i: number = 0; i < allStars.length; i++) {
           
       let b: movingObject = allStars[i];
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
        crc2.fillText("Bubble Catcher",220,520);
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
     
       crc2.beginPath();
       crc2.strokeStyle = "#000000";
       crc2.arc(200,100,15, 0, 2 * Math.PI);
       crc2.closePath();
       crc2.stroke();
}


      
   
  function changeScreen () : void {
      
//   Alertbox   
 alert( "So geht's:\n\n\nFange so viele herabfallende Baelle wie moeglich um Punkte zu sammeln!\nBlau = 2 Punkte, Rot = 3 Punkte, Gelb = 4 Punkte\n\nAber Achtung! Erwische nicht die schwarzen Baelle - sie geben Minuspunkte!\n\nDie Zeit laeuft sobald du mit 'Ok' bestaetigt hast.\n\n\n[ Hinweis: Wenn du auf dem Smartphone spielst drehe den Bildschirm ]");    
  
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
        t.height = "100px";
        t.width = "200px";
        t.font = "50pt";
        t.position = "fixed";
        t.border = "3px solid #000000";
    
      
//     Zeitanzeige
          
       setInterval(
   
       function(){ if (r > 0) {
        r--;
        console.log ("noch" + " " + r + " " + "Sekunden");
        timer.innerHTML = "Zeit:\n\nnoch" + " " + r + " " + "Sekunden"; }}, 1000
       
          
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
        
        
     clearInterval(intervalCircles);
     clearInterval(intervalStars);
        
        
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