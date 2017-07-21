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
    var p = 0; //Anzahl der Punkte
    var r = 61; //Zeitangabe
    Abschlussaufgabe.allColourCircles = [];
    Abschlussaufgabe.allBlackCircles = [];
    Abschlussaufgabe.allStars = [];
    var imgData;
    function init(_event) {
        Abschlussaufgabe.canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = Abschlussaufgabe.canvas.getContext("2d");
        drawStartscreen();
        changeScreen();
        setCounter();
        removeStarttext();
        //      Punkteanzeige
        var punkte = document.createElement("div");
        document.body.appendChild(punkte);
        var i = punkte.style;
        i.backgroundColor = "rgb(143,188,143)";
        i.paddingLeft = "10px";
        i.marginTop = "10px";
        i.width = "220px";
        i.height = "50px";
        i.border = " 2px solid black";
        i.position = "fixed";
        i.marginLeft = "20px";
        i.marginTop = " -570px";
        i.fontSize = "40px";
        i.font = "Indie Flower";
        punkte.innerText = "Punkte:";
        //      Speichern des Canvas als Bild
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        window.setTimeout(animate, 20);
        startGame();
        Abschlussaufgabe.canvas.addEventListener("touchend", removeObject);
        Abschlussaufgabe.canvas.addEventListener("click", removeObject);
    }
    //alle 2 Sekunden kommen 2 bunte Kreise hinzu
    var intervalColourCircles = setInterval(function () {
        if (Abschlussaufgabe.z > 0) {
            Abschlussaufgabe.z++;
            var b = new Abschlussaufgabe.ColourCircle(500, 0);
            Abschlussaufgabe.z++;
            Abschlussaufgabe.allColourCircles.push(b);
            console.log(b);
            console.log(Abschlussaufgabe.z + " " + "Circles");
        }
    }, 1000);
    //alle 2 Sekunden kommen 2 schwarze Kreise hinzu
    var intervalBlackCircles = setInterval(function () {
        if (Abschlussaufgabe.z > 0) {
            Abschlussaufgabe.z++;
            var b = new Abschlussaufgabe.BlackCircle(500, 0);
            Abschlussaufgabe.z++;
            Abschlussaufgabe.allBlackCircles.push(b);
            console.log(b);
            console.log(Abschlussaufgabe.z + " " + "Circles");
        }
    }, 6000);
    //alle 8 Sekunden kommen 2 Sterne hinzu    
    var intervalStars = setInterval(function () {
        if (Abschlussaufgabe.g > 0) {
            Abschlussaufgabe.g++;
            var b = new Abschlussaufgabe.Star(500, 300);
            Abschlussaufgabe.g++;
            Abschlussaufgabe.allStars.push(b);
            console.log(b);
            console.log(Abschlussaufgabe.g + " " + "Stars");
        }
    }, 8000);
    function startGame() {
        //       console.log("startGame");
        for (var i = 0; i < 20; i++) {
            var randomCircle = Math.floor(Math.random() * 2);
            switch (randomCircle) {
                case 0:
                    var b = new Abschlussaufgabe.ColourCircle(this.x, this.y);
                    Abschlussaufgabe.z++;
                    Abschlussaufgabe.allColourCircles.push(b);
                    console.log(Abschlussaufgabe.z + " " + "Circles");
                    break;
                case 1:
                    var q = new Abschlussaufgabe.BlackCircle(this.x, this.y);
                    Abschlussaufgabe.z++;
                    Abschlussaufgabe.allBlackCircles.push(q);
                    console.log(Abschlussaufgabe.z + " " + "Circles");
                    break;
            }
        }
        window.setTimeout(animate, 20);
    }
    function removeObject(event) {
        //Remove ColourCircle
        for (var i = 0; i < Abschlussaufgabe.allColourCircles.length; i++) {
            var d = Abschlussaufgabe.allColourCircles[i];
            var clickX = event.clientX;
            var clickY = event.clientY;
            var differenceX = Math.abs(d.positionX - clickX);
            var differenceY = Math.abs(d.positionY - clickY);
            if (differenceX <= 30 && differenceY <= 30) {
                Abschlussaufgabe.allColourCircles.splice(i, 1);
                //                    console.log("removeColourCircle");
                if (r > 0)
                    p++; //Pluspunkte im Spiel ( + 1 Punkt)
                console.log(p + " " + "Punkte");
            }
            //Punkteanzeige
            var punkte = document.createElement("div");
            document.body.appendChild(punkte);
            var m = punkte.style;
            m.backgroundColor = "rgb(143,188,143)";
            m.paddingLeft = "10px";
            m.marginTop = "10px";
            m.width = "220px";
            m.height = "50px";
            m.border = " 2px solid black";
            m.position = "fixed";
            m.marginLeft = "20px";
            m.marginTop = " -570px";
            m.fontSize = "40px";
            m.font = "Indie Flower";
            punkte.innerText = "Punkte: " + p;
        }
        //Remove BlackCircle
        for (var i = 0; i < Abschlussaufgabe.allBlackCircles.length; i++) {
            var d = Abschlussaufgabe.allBlackCircles[i];
            var clickX = event.clientX;
            var clickY = event.clientY;
            var differenceX = Math.abs(d.positionX - clickX);
            var differenceY = Math.abs(d.positionY - clickY);
            if (differenceX <= 30 && differenceY <= 30) {
                Abschlussaufgabe.allBlackCircles.splice(i, 1);
                //                    console.log("removeBlackCircle");
                if (p > 4 && r > 0)
                    p -= 5; //Minuspunkte im Spiel (- 5 Punkt)
                console.log(p + " " + "Punkte");
            }
            //Punkteanzeige
            var punkte = document.createElement("div");
            document.body.appendChild(punkte);
            var m = punkte.style;
            m.backgroundColor = "rgb(143,188,143)";
            m.paddingLeft = "10px";
            m.marginTop = "10px";
            m.width = "220px";
            m.height = "50px";
            m.border = " 2px solid black";
            m.position = "fixed";
            m.marginLeft = "20px";
            m.marginTop = " -570px";
            m.fontSize = "40px";
            m.font = "Indie Flower";
            punkte.innerText = "Punkte: " + p;
        }
        //Remove Star
        for (var i = 0; i < Abschlussaufgabe.allStars.length; i++) {
            var d = Abschlussaufgabe.allStars[i];
            var clickX = event.clientX;
            var clickY = event.clientY;
            var differenceX = Math.abs(d.positionX - clickX);
            var differenceY = Math.abs(d.positionY - clickY);
            if (differenceX <= 30 && differenceY <= 30) {
                Abschlussaufgabe.allStars.splice(i, 1);
                //                    console.log("removeStar");
                if (r > 0) {
                    p += 3; //Pluspunkte im Spiel (+ 3 Punkte)
                    r += 3;
                } // 2 Sekunden Bonuszeit
                console.log(p + " " + "Punkte");
            }
            //Punkteanzeige
            var punkte = document.createElement("div");
            document.body.appendChild(punkte);
            var m = punkte.style;
            m.backgroundColor = "rgb(143,188,143)";
            m.paddingLeft = "10px";
            m.marginTop = "10px";
            m.width = "220px";
            m.height = "50px";
            m.border = " 2px solid black";
            m.position = "fixed";
            m.marginLeft = "20px";
            m.marginTop = " -570px";
            m.fontSize = "40px";
            m.font = "Indie Flower";
            punkte.innerText = "Punkte: " + p;
        }
    }
    function checkPosition() {
        for (var i = 0; i < Abschlussaufgabe.allColourCircles.length; i++) {
            //Position of ColourCircles                 
            var a = Abschlussaufgabe.allColourCircles[i];
            if (a.positionX >= 567 && a.positionX <= 750) {
                if (a.positionY >= 245 && a.positionY <= 429) {
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
    }
    //--------------------------------------Funktionen---------------------------------------------------------------------------
    function drawStartscreen() {
        console.log("drawStartscreen");
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "rgb(143,188,143,0.5) ";
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc2.closePath();
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
        Abschlussaufgabe.crc2.arc(100, 200, 35, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.arc(500, 650, 65, 0, 2 * Math.PI);
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
        console.log("changeScreen");
        //   Alertbox   
        alert("So geht's:\n\n\nFange so viele herabfallende Bubbles wie moeglich um Punkte zu sammeln!\n\nBunte Bubble = + 1 Punkt\nStern = + 3 Punkte und 2 Sekunden Bonuszeit\nSchwarze Bubble = - 5 Punkte\n\nDeine Minute laeuft sobald du mit 'Ok' bestaetigt hast.\n\n\n[ Hinweis: Wenn du auf dem Smartphone oder Tablet spielst drehe den Bildschirm ]");
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "rgb(143,188,143,0.5) ";
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "rgb(143,188,143,0.5) ";
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fill();
    }
    function removeStarttext() {
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "rgb(143,188,143,0.5) ";
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "rgb(143,188,143,0.5) F";
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fill();
    }
    function setCounter() {
        console.log("setCounter");
        //     Zeitanzeige
        setInterval(function () {
            if (r > 0) {
                r--;
                console.log("noch" + " " + r + " " + "Sekunden");
                timer.innerHTML = "noch" + " " + r + " " + "Sekunden";
            }
        }, 1000);
        var timer = document.createElement("div");
        document.body.appendChild(timer);
        var t = timer.style;
        t.marginTop = "-575px";
        t.marginLeft = "1060px";
        t.paddingLeft = "20px";
        t.paddingTop = "10px";
        t.height = "40px";
        t.width = "250px";
        t.fontSize = "30px";
        t.font = "Indie Flower";
        t.position = "fixed";
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.arc(1030, 50, 20, 0, 2 * Math.PI);
        Abschlussaufgabe.crc2.moveTo(1022, 22);
        Abschlussaufgabe.crc2.lineTo(1038, 22);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.stroke();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "#000000";
        Abschlussaufgabe.crc2.fillRect(1028, 22, 3, 8);
        Abschlussaufgabe.crc2.fill();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.strokeStyle = "#000000";
        Abschlussaufgabe.crc2.moveTo(1030, 50);
        Abschlussaufgabe.crc2.lineTo(1040, 60);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.stroke();
    }
    function endGame() {
        console.log("endGame");
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "black";
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.font = "50px Indie Flower";
        Abschlussaufgabe.crc2.fillText("GAME OVER", 500, 100);
        Abschlussaufgabe.crc2.fillText("Deine Zeit ist abgelaufen", 370, 200);
        Abschlussaufgabe.crc2.fillText("Du hast" + " " + p + " " + "Punkte erreicht!", 400, 300);
        Abschlussaufgabe.crc2.fillText("[Seite neu laden um erneut zu spielen]", 300, 500);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fill();
        clearInterval(intervalColourCircles);
        clearInterval(intervalBlackCircles);
        clearInterval(intervalStars);
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
;
//# sourceMappingURL=abschlussaufgabe.js.map