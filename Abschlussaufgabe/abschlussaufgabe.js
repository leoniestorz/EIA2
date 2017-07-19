//Aufgabe: Abschlussaufgabe
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.07.17
//   
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    Abschlussaufgabe.z = 0; //Anzahl der Kreise insgesamt
    Abschlussaufgabe.g = 1; //Anzahl der Sterne insgesamt
    var v = 0; //Anzahl der Punkte
    var r = 11; //Zeitangabe
    Abschlussaufgabe.allColourCircles = [];
    Abschlussaufgabe.allBlackCircles = [];
    Abschlussaufgabe.allStars = [];
    var imgData;
    function init(_event) {
        Abschlussaufgabe.canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = Abschlussaufgabe.canvas.getContext("2d");
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
        var punkte = document.createElement("div");
        document.body.appendChild(punkte);
        var p = punkte.style;
        p.backgroundColor = "white";
        p.paddingLeft = "10px";
        p.marginTop = "10px";
        p.width = "120px";
        p.height = "25px";
        p.border = " 2px solid black";
        p.position = "fixed";
        p.marginLeft = "20px";
        p.marginTop = " -585px";
        p.fontSize = "20px";
        punkte.innerText = "Punkte:";
        //      Speichern des Canvas als Bild
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        window.setTimeout(animate, 20);
        startGame();
        //      EventListener 
        //      div.addEventListener("touchend", changeScreen); 
        //      div.addEventListener("click", changeScreen); 
        Abschlussaufgabe.canvas.addEventListener("touchend", removeCircle);
        Abschlussaufgabe.canvas.addEventListener("click", removeCircle);
        //      div.addEventListener("touchend", removeCircle);
        //      div.addEventListener("click", removeCircle); 
    }
    //alle 2 Sekunden kommen 2 bunte Kreise hinzu
    var intervalCircles = setInterval(function () {
        if (Abschlussaufgabe.z > 0) {
            Abschlussaufgabe.z++;
            var b = new Abschlussaufgabe.ColourCircle(500, 0);
            Abschlussaufgabe.z++;
            Abschlussaufgabe.allColourCircles.push(b);
            console.log(b);
            console.log(Abschlussaufgabe.z + " " + "Circles");
        }
    }, 2000);
    //alle 2 Sekunden kommen 2 Sterne hinzu    
    var intervalStars = setInterval(function () {
        if (Abschlussaufgabe.g > 0) {
            Abschlussaufgabe.g++;
            var b = new Abschlussaufgabe.Star(500, 300);
            Abschlussaufgabe.g++;
            Abschlussaufgabe.allStars.push(b);
            console.log(b);
            console.log(Abschlussaufgabe.g + " " + "Stars");
        }
    }, 2000);
    function startGame() {
        for (var i = 0; i < 10; i++) {
            var randomCircle = Math.floor(Math.random() * 2);
            switch (randomCircle) {
                case 0:
                    var b = new Abschlussaufgabe.ColourCircle(this.x, this.y);
                    //                                       
                    Abschlussaufgabe.z++;
                    Abschlussaufgabe.allColourCircles.push(b);
                    //                                       console.log(b)
                    console.log(Abschlussaufgabe.z + " " + "Circles");
                    break;
                case 1:
                    var q = new Abschlussaufgabe.BlackCircle(this.x, this.y);
                    //                                        e == 1;
                    Abschlussaufgabe.z++;
                    Abschlussaufgabe.allBlackCircles.push(q);
                    //                                         console.log(q)
                    console.log(Abschlussaufgabe.z + " " + "Circles");
                    break;
            }
            removeStarttext();
        }
        window.setTimeout(animate, 20);
    }
    function removeCircle(event) {
        //Remove ColourCircles
        for (var i = 0; i < Abschlussaufgabe.allColourCircles.length; i++) {
            var d = Abschlussaufgabe.allColourCircles[i];
            var clickX = event.clientX;
            var clickY = event.clientY;
            var differenceX = Math.abs(d.positionX - clickX);
            var differenceY = Math.abs(d.positionY - clickY);
            if (differenceX <= 40 && differenceY <= 40) {
                Abschlussaufgabe.allColourCircles.splice(i, 1);
                v++; //Pluspunkte im Spiel ( + 1 Punkt)
                console.log(v + " " + "Punkte");
            }
            //Punkteanzeige
            var punkte = document.createElement("div");
            document.body.appendChild(punkte);
            var p = punkte.style;
            p.backgroundColor = "white";
            p.paddingLeft = "10px";
            p.marginTop = "10px";
            p.width = "120px";
            p.height = "25px";
            p.border = " 2px solid black";
            p.position = "fixed";
            p.marginLeft = "20px";
            p.marginTop = " -585px";
            p.fontSize = "20px";
            punkte.innerText = "Punkte: " + v;
        }
        //Remove BlackCircles
        for (var i = 0; i < Abschlussaufgabe.allBlackCircles.length; i++) {
            var d = Abschlussaufgabe.allBlackCircles[i];
            var clickX = event.clientX;
            var clickY = event.clientY;
            var differenceX = Math.abs(d.positionX - clickX);
            var differenceY = Math.abs(d.positionY - clickY);
            if (differenceX <= 40 && differenceY <= 40) {
                Abschlussaufgabe.allBlackCircles.splice(i, 1);
                if (v > 0)
                    v--; //Minuspunkte im Spiel (- 1 Punkt)
                console.log(v + " " + "Punkte");
            }
            //Punkteanzeige
            var punkte = document.createElement("div");
            document.body.appendChild(punkte);
            var p = punkte.style;
            p.backgroundColor = "white";
            p.paddingLeft = "10px";
            p.marginTop = "10px";
            p.width = "120px";
            p.height = "25px";
            p.border = " 2px solid black";
            p.position = "fixed";
            p.marginLeft = "20px";
            p.marginTop = " -585px";
            p.fontSize = "20px";
            punkte.innerText = "Punkte: " + v;
        }
        //Remove Stars
        for (var i = 0; i < Abschlussaufgabe.allStars.length; i++) {
            var d = Abschlussaufgabe.allStars[i];
            var clickX = event.clientX;
            var clickY = event.clientY;
            var differenceX = Math.abs(d.positionX - clickX);
            var differenceY = Math.abs(d.positionY - clickY);
            if (differenceX <= 40 && differenceY <= 40) {
                Abschlussaufgabe.allStars.splice(i, 1);
                v += 2; //Pluspunkte im Spiel (+ 2 Punkte)
                console.log(v + " " + "Punkte");
            }
            //Punkteanzeige
            var punkte = document.createElement("div");
            document.body.appendChild(punkte);
            var p = punkte.style;
            p.backgroundColor = "white";
            p.paddingLeft = "10px";
            p.marginTop = "10px";
            p.width = "120px";
            p.height = "25px";
            p.border = " 2px solid black";
            p.position = "fixed";
            p.marginLeft = "20px";
            p.marginTop = " -585px";
            p.fontSize = "20px";
            punkte.innerText = "Punkte: " + v;
        }
    }
    function checkPosition() {
        for (var i = 0; i < Abschlussaufgabe.allColourCircles.length; i++) {
            //Position of ColourCircles                 
            var a = Abschlussaufgabe.allColourCircles[i];
            if (a.positionX >= 567 && a.positionX <= 750) {
                if (a.positionY >= 245 && a.positionY <= 429) {
                    console.log("Hey");
                }
            }
            ;
        }
        ;
        //Position of BlackCircles
        for (var i = 0; i < Abschlussaufgabe.allBlackCircles.length; i++) {
            var a = Abschlussaufgabe.allBlackCircles[i];
            if (a.positionX >= 567 && a.positionX <= 750) {
                if (a.positionY >= 245 && a.positionY <= 429) {
                    console.log("Hey");
                }
            }
            ;
        }
        ;
        //Position of Stars
        for (var i = 0; i < Abschlussaufgabe.allStars.length; i++) {
            var a = Abschlussaufgabe.allStars[i];
            if (a.positionX >= 567 && a.positionX <= 750) {
                if (a.positionY >= 245 && a.positionY <= 429) {
                    console.log("Hey");
                }
            }
            ;
        }
        ;
    }
    ;
    function animate() {
        Abschlussaufgabe.crc2.putImageData(imgData, 0, 0);
        //animate ColourCircles
        for (var i = 0; i < Abschlussaufgabe.allColourCircles.length; i++) {
            var b = Abschlussaufgabe.allColourCircles[i];
            b.update();
        }
        //animate BlackCircles
        for (var i = 0; i < Abschlussaufgabe.allBlackCircles.length; i++) {
            var b = Abschlussaufgabe.allBlackCircles[i];
            b.update();
        }
        //animate Stars
        for (var i = 0; i < Abschlussaufgabe.allStars.length; i++) {
            var b = Abschlussaufgabe.allStars[i];
            b.update();
        }
        window.setTimeout(animate, 20);
        if (r == 0)
            endGame();
        //        canvas.addEventListener("touchend",addCircle); 
        //        canvas.addEventListener("click", addCircle);
    }
    //--------------------------------------Funktionen---------------------------------------------------------------------------
    function drawStartscreen() {
        //      Hintergrund
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "#F08080 ";
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc2.closePath();
        //       var image = new Image();
        //       image.src = 'Images/hintergrund.jpg';
        //       crc2.drawImage(image, 100, 450, 100, 100)
        //       image.id += "button";
        //       let i: CSSStyleDeclaration = image.style;
        //       i.position = "fixed";
        //      Textfeld
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "black";
        Abschlussaufgabe.crc2.font = "150px Indie Flower";
        Abschlussaufgabe.crc2.fillText("Bubble Catcher", 220, 520);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fill();
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
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.arc(100, 100, 35, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.arc(500, 600, 65, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.arc(1100, 300, 85, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.arc(250, 250, 85, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.arc(920, 150, 100, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.arc(200, 100, 15, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.stroke();
    }
    function changeScreen() {
        //   Alertbox   
        alert("So geht's:\n\n\nFange so viele herabfallende Baelle wie moeglich um Punkte zu sammeln!\nBlau = 2 Punkte, Rot = 3 Punkte, Gelb = 4 Punkte\n\nAber Achtung! Erwische nicht die schwarzen Baelle - sie geben Minuspunkte!\n\nDie Zeit laeuft sobald du mit 'Ok' bestaetigt hast.\n\n\n[ Hinweis: Wenn du auf dem Smartphone spielst drehe den Bildschirm ]");
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "#F5DEB3";
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc2.closePath();
        //    Textfeld    
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "#F5DEB3";
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fill();
    }
    function removeStarttext() {
        //   Hintergrund
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "#EEE8AA";
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc2.closePath();
        //    Textfeld    
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "#EEE8AA";
        Abschlussaufgabe.crc2.font = "50px Georgia";
        Abschlussaufgabe.crc2.fillText("Bubble Catch", 480, 300);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fill();
    }
    //Fuegt bei jedem Kick neue Kreise hinzu, 
    //damit der Spieler weiterhin Punkte erzielen kann
    function addCircle(_event) {
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
    function setCounter() {
        var timer = document.createElement("div");
        document.body.appendChild(timer);
        var t = timer.style;
        t.backgroundColor = "#FFFFFF";
        t.marginTop = "-585px";
        t.marginLeft = "1110px";
        t.paddingLeft = "20px";
        t.height = "100px";
        t.width = "200px";
        t.font = "50pt";
        t.position = "fixed";
        t.border = "3px solid #000000";
        //     Zeitanzeige
        setInterval(function () {
            if (r > 0) {
                r--;
                console.log("noch" + " " + r + " " + "Sekunden");
                timer.innerHTML = "Zeit:\n\nnoch" + " " + r + " " + "Sekunden";
            }
        }, 1000);
    }
    function endGame() {
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "black";
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.font = "50px Georgia";
        Abschlussaufgabe.crc2.fillText("Game Over - Deine Zeit ist abgelaufen", 350, 200);
        Abschlussaufgabe.crc2.fillText("You reached" + " " + v + " " + "points!", 400, 300);
        Abschlussaufgabe.crc2.fillText("Refresh to play again", 400, 400);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fill();
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
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
;
//# sourceMappingURL=abschlussaufgabe.js.map