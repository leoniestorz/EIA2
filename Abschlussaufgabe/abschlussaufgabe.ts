
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
    
    let p: number = 0;         //Anzahl der Punkte
    let r:number = 61;         //Zeitangabe
 

    export let allColourCircles: ColourCircle[] = [];
    export let allBlackCircles:BlackCircle[] = [];
    export let allStars:Star[] = [];

    let imgData: ImageData;

    function init(_event: Event): void {
       
        
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

       drawStartscreen(); 
           
       changeScreen();
       setCounter(); 
       removeStarttext();


//      Punkteanzeige
        
        let punkte = document.createElement("div");
        document.body.appendChild(punkte);
          let i: CSSStyleDeclaration = punkte.style;
        i.backgroundColor = "rgb(143,188,143)";
        i.paddingLeft = "10px";
        i.marginTop = "10px";
        i.width = "220px";
        i.height = "50px";
        i.border = " 2px solid black";
        i.position = "fixed";
        i.marginLeft = "20px"
        i.marginTop = " -570px"
        i.fontSize = "40px"; 
        i.font = "Indie Flower";
        
        punkte.innerText = "Punkte:"
        

       
//      Speichern des Canvas als Bild
            
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        
        window.setTimeout(animate, 20);


        startGame();
        
        
        canvas.addEventListener("touchend", removeObject);
        canvas.addEventListener("click", removeObject);   

 } 
    
//alle 2 Sekunden kommen 2 bunte Kreise hinzu
       
      let intervalColourCircles =  setInterval(
   
       function(){ if (z > 0) {
        z++;
        let b: ColourCircle = new ColourCircle(500, 0);
                                
                                        z++;
                                       allColourCircles.push(b);
                                       console.log(b)
                                       console.log(z + " " + "Circles"); }}, 1000
       
       ); 
    
//alle 2 Sekunden kommen 2 schwarze Kreise hinzu
       
      let intervalBlackCircles =  setInterval(
   
       function(){ if (z > 0) {
        z++;
        let b: BlackCircle = new BlackCircle(500, 0);
                                
                                        z++;
                                       allBlackCircles.push(b);
                                       console.log(b)
                                       console.log(z + " " + "Circles"); }}, 6000
       
       ); 
    
//alle 8 Sekunden kommen 2 Sterne hinzu    
    
    let intervalStars =  setInterval(
   
       function(){ if (g > 0) {
        g++;
        let b: Star = new Star (500, 300);
                                
                                        g++;
                                       allStars.push(b);
                                       console.log(b)
                                       console.log(g + " " + "Stars"); }}, 8000
       
       ); 
    
    
     
    function startGame(): void {
         
//       console.log("startGame");
        
       for (var i = 0; i < 20; i++) {    
      

       let randomCircle = Math.floor(Math.random() * 2); 
       
           switch (randomCircle) {
                        
                                case 0:
                                     let b: ColourCircle = new ColourCircle(this.x, this.y);
                                        z++;
                                       allColourCircles.push(b);
                                       console.log(z + " " + "Circles");
                  
                                    break;
                                case 1:
                                     let q: BlackCircle = new BlackCircle(this.x, this.y);
                                        z++;
                                        allBlackCircles.push(q);
                                        console.log(z + " " + "Circles");

                                    break;
                  
                   
                   }
  
       }
        
      
  
      window.setTimeout(animate, 20);
  }    
    
    
        function removeObject(event : MouseEvent): void {

//Remove ColourCircle
                        
            for (let i: number = 0; i < allColourCircles.length; i++) {
                
                let d: ColourCircle = allColourCircles[i];
                
                
                let clickX: number = event.clientX;
                let clickY: number = event.clientY;
                
                let differenceX: number = Math.abs(d.positionX - clickX);
                let differenceY: number = Math.abs(d.positionY - clickY);

                if (differenceX <= 30 && differenceY <= 30) {
                    allColourCircles.splice(i, 1);
//                    console.log("removeColourCircle");
                  
                    if (r > 0)
                    p++; //Pluspunkte im Spiel ( + 1 Punkt)
  
                    
               console.log(p + " " + "Punkte")
                
                   
               }
         
        //Punkteanzeige
       let punkte = document.createElement("div");
        document.body.appendChild(punkte);
          let m: CSSStyleDeclaration = punkte.style;
        m.backgroundColor = "rgb(143,188,143)";
        m.paddingLeft = "10px";
        m.marginTop = "10px";
        m.width = "220px";
        m.height = "50px";
        m.border = " 2px solid black";
        m.position = "fixed";
        m.marginLeft = "20px"
        m.marginTop = " -570px"
        m.fontSize = "40px"; 
        m.font = "Indie Flower";
        
                
        punkte.innerText = "Punkte: " + p; 
                
                
                
                
            
            }
            

//Remove BlackCircle
            
        for (let i: number = 0; i < allBlackCircles.length; i++) {
                
                let d: BlackCircle = allBlackCircles[i];
                
                
                let clickX: number = event.clientX;
                let clickY: number = event.clientY;
                
                let differenceX: number = Math.abs(d.positionX - clickX);
                let differenceY: number = Math.abs(d.positionY - clickY);

                if (differenceX <= 30 && differenceY <= 30) {
                    allBlackCircles.splice(i, 1);
//                    console.log("removeBlackCircle");
                  
                    if (p > 4 && r > 0)//damit am Ende kein Punktestand im Minusbereich entsteht
                    p -= 5; //Minuspunkte im Spiel (- 5 Punkt)
                    
                    
               console.log(p + " " + "Punkte")
                
                   
               }
           
        //Punkteanzeige
        
       let punkte = document.createElement("div");
        document.body.appendChild(punkte);
          let m: CSSStyleDeclaration = punkte.style;
        m.backgroundColor = "rgb(143,188,143)";
        m.paddingLeft = "10px";
        m.marginTop = "10px";
        m.width = "220px";
        m.height = "50px";
        m.border = " 2px solid black";
        m.position = "fixed";
        m.marginLeft = "20px"
        m.marginTop = " -570px"
        m.fontSize = "40px"; 
        m.font = "Indie Flower";
        
        
        
        punkte.innerText = "Punkte: " + p; 
            
            }
         
//Remove Star
                       
      for (let i: number = 0; i < allStars.length; i++) {
                
                let d: Star = allStars[i];
                
                
                let clickX: number = event.clientX;
                let clickY: number = event.clientY;
                
                let differenceX: number = Math.abs(d.positionX - clickX);
                let differenceY: number = Math.abs(d.positionY - clickY);

                if (differenceX <= 30 && differenceY <= 30) {
                    allStars.splice(i, 1);
//                    console.log("removeStar");
                 
                    if (r > 0)
                   { p += 3; //Pluspunkte im Spiel (+ 3 Punkte)
                    r += 3;} // 2 Sekunden Bonuszeit
                    
               console.log(p + " " + "Punkte")
                
                   
               }
         
        //Punkteanzeige
        
      let punkte = document.createElement("div");
        document.body.appendChild(punkte);
          let m: CSSStyleDeclaration = punkte.style;
        m.backgroundColor = "rgb(143,188,143)";
        m.paddingLeft = "10px";
        m.marginTop = "10px";
        m.width = "220px";
        m.height = "50px";
        m.border = " 2px solid black";
        m.position = "fixed";
        m.marginLeft = "20px"
        m.marginTop = " -570px"
        m.fontSize = "40px"; 
        m.font = "Indie Flower";
        
        
        punkte.innerText = "Punkte: " + p; 
            
            }         
            

}

 function checkPosition(): void {
       

           
            for (let i: number = 0; i < allColourCircles.length; i++) {
                
//Position of ColourCircles                 
                
                let a: MovingObject = allColourCircles[i];
                
                
                if (a.positionX>= 567 && a.positionX <= 750) {
                if (a.positionY >= 245 && a.positionY <= 429) {
//                         console.log("checkColourCirclePosition");


                    }
                };
            };

//Position of BlackCircles
     
             for (let i: number = 0; i < allBlackCircles.length; i++) {
                
                let a: MovingObject = allBlackCircles[i];
                
                
                if (a.positionX>= 567 && a.positionX <= 750) {
                if (a.positionY >= 245 && a.positionY <= 429) {
//                        console.log("checkBlackCirclePosition");


                    }
                };
            };

//Position of Stars
     
            for (let i: number = 0; i < allStars.length; i++) {
                
                let a: MovingObject = allStars[i];
                
                
                if (a.positionX>= 567 && a.positionX <= 750) {
                if (a.positionY >= 245 && a.positionY <= 429) {
//                        console.log("checkStarPosition");


                    }
                };
            };
     
        }; 
        

        
        
      function animate(): void {
        
       crc2.putImageData(imgData, 0, 0);
        
//animate ColourCircles
                   
       for (let i: number = 0; i < allColourCircles.length; i++) {
           
       let b: MovingObject = allColourCircles[i];
       b.update();
       
       
      
       }

//animate BlackCircles
                    
       for (let i: number = 0; i < allBlackCircles.length; i++) {
           
       let b: MovingObject = allBlackCircles[i];
       b.update();
       
      
       }
 
//animate Stars
                    
       for (let i: number = 0; i < allStars.length; i++) {
           
       let b: MovingObject = allStars[i];
       b.update();
       
      
       }
       
       window.setTimeout(animate, 20);
       
       
        if ( r == 0)   
        endGame();       
    }      
        

//--------------------------------------Funktionen---------------------------------------------------------------------------
    
   
 function drawStartscreen (): void {

     console.log("drawStartscreen");

        crc2.beginPath();
        crc2.fillStyle = "rgb(143,188,143,0.5) ";
        crc2.fillRect(0,0,canvas.width,canvas.height);
        crc2.closePath();

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
       crc2.arc(100,200,35, 0, 2 * Math.PI);
       crc2.closePath();
       crc2.stroke();
     
       crc2.beginPath();
       crc2.strokeStyle = "#000000";
       crc2.arc(500,650,65, 0, 2 * Math.PI);
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
      
  console.log("changeScreen");    
      
//   Alertbox   

     alert( "So geht's:\n\n\nFange so viele herabfallende Bubbles wie moeglich um Punkte zu sammeln!\n\nBunte Bubble = + 1 Punkt\nStern = + 3 Punkte und 2 Sekunden Bonuszeit\nSchwarze Bubble = - 5 Punkte\n\nDeine Minute laeuft sobald du mit 'Ok' bestaetigt hast.\n\n\n[ Hinweis: Wenn du auf dem Smartphone oder Tablet spielst drehe den Bildschirm ]");     
     
     crc2.beginPath();
     crc2.fillStyle = "rgb(143,188,143,0.5) ";
     crc2.fillRect(0,0,canvas.width,canvas.height);
     crc2.closePath();
   
    
     crc2.beginPath();
     crc2.fillStyle = "rgb(143,188,143,0.5) ";
     crc2.closePath();
     crc2.fill();

  }   
 


 function removeStarttext () : void {
 
     crc2.beginPath();
     crc2.fillStyle = "rgb(143,188,143,0.5) ";
     crc2.fillRect(0,0,canvas.width,canvas.height);
     crc2.closePath();

     crc2.beginPath();
     crc2.fillStyle = "rgb(143,188,143,0.5) F";
     crc2.closePath();
     crc2.fill();
 
 
 }
     
 
   function setCounter () : void {
       
 console.log("setCounter");
       
//     Zeitanzeige
          
       setInterval(
   
       function(){ if (r > 0) {
        r--;
        console.log ("noch" + " " + r + " " + "Sekunden");
        timer.innerHTML = "noch" + " " + r + " " + "Sekunden"; }}, 1000
       
          
       );         
       
       
       let timer : HTMLDivElement = document.createElement ("div");
        document.body.appendChild(timer);
        let t: CSSStyleDeclaration = timer.style;
        t.marginTop = "-575px";
        t.marginLeft = "1060px";
        t.paddingLeft = "20px";
        t.paddingTop = "10px";
        t.height = "40px";
        t.width = "250px";
        t.fontSize = "30px";
        t.font = "Indie Flower";
        t.position = "fixed";
       
       
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.arc(1030,50,20, 0, 2 * Math.PI);
        crc2.moveTo(1022,22)
        crc2.lineTo(1038,22)
        crc2.closePath();
        crc2.stroke();
       
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.fillRect(1028,22,3, 8);
        crc2.fill();
       
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.moveTo(1030,50)
        crc2.lineTo(1040,60)
        crc2.closePath();
        crc2.stroke();
       

   }
    
    
    function endGame () : void {
        
       console.log("endGame"); 
         
       crc2.beginPath();
     crc2.fillStyle = "black";
     crc2.fillRect(0,0,canvas.width,canvas.height);
     crc2.closePath();
     
     crc2.beginPath();
     crc2.fillStyle = "white";
      crc2.font="50px Indie Flower";
     crc2.fillText("GAME OVER",500,100)
     crc2.fillText("Deine Zeit ist abgelaufen",370,200);
     crc2.fillText("Du hast" + " " + p + " " + "Punkte erreicht!", 400, 300);  
     crc2.fillText("[Seite neu laden um erneut zu spielen]", 300, 500)  
     crc2.closePath();
     crc2.fill();
        
        
     clearInterval(intervalColourCircles);
     clearInterval(intervalBlackCircles);
     clearInterval(intervalStars);
   
    
    }


    

};