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
    Abschlussaufgabe.z = 0;
    var v = 0;
    var r = 31;
    var e = true;
    Abschlussaufgabe.allCircles = [];
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
        //      canvas.addEventListener("touchend", addCircle);
        //      canvas.addEventListener("click", addCircle);
        Abschlussaufgabe.canvas.addEventListener("touchend", removeCircle);
        Abschlussaufgabe.canvas.addEventListener("click", removeCircle);
        //      div.addEventListener("touchend", removeCircle);
        //      div.addEventListener("click", removeCircle); 
        //      console.log(allCircles);  
    }
    function removeCircle(event) {
        for (var i = 0; i < Abschlussaufgabe.allCircles.length; i++) {
            var d = Abschlussaufgabe.allCircles[i];
            var clickX = event.clientX;
            var clickY = event.clientY;
            var differenceX = Math.abs(d.positionX - clickX);
            var differenceY = Math.abs(d.positionY - clickY);
            if (differenceX <= 40 && differenceY <= 40) {
                Abschlussaufgabe.allCircles.splice(i, 1);
                if (e == false) {
                    v--;
                }
                else {
                    v++;
                }
                console.log(v + " " + "catched ball(s)");
            }
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
            punkte.innerText = "Punkte: " + v;
        }
    }
    function checkPosition() {
        for (var i = 0; i < Abschlussaufgabe.allCircles.length; i++) {
            var a = Abschlussaufgabe.allCircles[i];
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
    function startGame() {
        //bunte Kreise
        for (var i = 0; i < 10; i++) {
            //       let y: number = 0;
            //       let x: number = 0;    
            //       let f: ColourCircle = new ColourCircle(x, y);
            //       allCircles[i] = f;
            //       f.draw();
            //       f.setRandomPosition();
            //       f.setRandomStyle();
            //       allCircles.push();
            var randomBiene = Math.floor(Math.random() * 2);
            switch (randomBiene) {
                case 0:
                    var b = new Abschlussaufgabe.ColourCircle(this.x, this.y);
                    Abschlussaufgabe.allCircles.push(b);
                    e == false;
                    console.log(b);
                    break;
                case 1:
                    var q = new Abschlussaufgabe.BlackCircle(this.x, this.y);
                    Abschlussaufgabe.allCircles.push(q);
                    e == true;
                    console.log(q);
                    break;
            }
            removeStarttext();
        }
        window.setTimeout(animate, 20);
    }
    function animate() {
        Abschlussaufgabe.crc2.putImageData(imgData, 0, 0);
        for (var i = 0; i < Abschlussaufgabe.allCircles.length; i++) {
            var b = Abschlussaufgabe.allCircles[i];
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
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc2.closePath();
        //       var image = new Image();
        //       image.src = 'Images/pfeilbutton.png';
        //       crc2.drawImage(image, 700, 350, 100, 100)
        ////       image.id += "button";
        //       let i: CSSStyleDeclaration = image.style;
        ////       i.position = "fixed";
        //      Textfeld
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "black";
        Abschlussaufgabe.crc2.font = "50px Georgia";
        Abschlussaufgabe.crc2.fillText("Bubble Catch", 480, 450);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fill();
    }
    function changeScreen() {
        //   Alertbox   
        alert("Bubble Catch\n\nFange so viele Baelle wie moeglich um Punkte zu sammeln! Bevor die Zeit abgelaufen ist!\n\nAber Achtung! Erwische nicht die schwarzen Kugeln - sie geben Minuspunkte!\n\nViel Spass!");
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "#F5DEB3";
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc2.closePath();
        //    Textfeld    
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "#F5DEB3";
        Abschlussaufgabe.crc2.font = "50px Georgia";
        Abschlussaufgabe.crc2.fillText("Bubble Catch", 480, 300);
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
    function addCircle(_event) {
        var c = new Abschlussaufgabe.ColourCircle(500, 1000);
        c.draw;
        Abschlussaufgabe.allCircles.push(c);
        Abschlussaufgabe.z++;
        console.log(Abschlussaufgabe.z);
    }
    function setCounter() {
        var timer = document.createElement("div");
        document.body.appendChild(timer);
        var t = timer.style;
        t.backgroundColor = "#FFFFFF";
        t.marginTop = "-585px";
        t.marginLeft = "1110px";
        t.paddingLeft = "20px";
        t.height = "20px";
        t.width = "150px";
        t.font = "20pt";
        t.position = "fixed";
        t.border = "3px solid #000000";
        //     Zeitanzeige
        setInterval(function () {
            if (r > 0) {
                r--;
                console.log(r);
                timer.innerHTML = "noch" + " " + r + " " + "Sekunden";
            }
        }, 1000);
    }
    function endGame() {
        //   Hintergrund
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "black";
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc2.closePath();
        //    Textfeld    
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.font = "50px Georgia";
        Abschlussaufgabe.crc2.fillText("Game Over", 480, 100);
        Abschlussaufgabe.crc2.fillText("You reached" + " " + v + " " + "points!", 400, 200);
        Abschlussaufgabe.crc2.fillText("Refresh to play again", 400, 300);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fill();
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
;
//# sourceMappingURL=abschlussaufgabe.js.map