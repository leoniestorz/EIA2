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
    Abschlussaufgabe.allCircles = [];
    var imgData;
    function init(_event) {
        Abschlussaufgabe.canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = Abschlussaufgabe.canvas.getContext("2d");
        drawStartscreen("#E9967A");
        drawStarttext("#000000");
        //      drawButton("red", "blue");    
        //      drawCircle("FF00GG",700,350);
        var div = document.createElement("div");
        document.body.appendChild(div);
        var s = div.style;
        s.backgroundColor = "red";
        s.marginTop = "-250px";
        s.marginLeft = "620px";
        s.height = "100px";
        s.width = "100px";
        s.position = "fixed";
        s.borderBottomLeftRadius = "100px";
        s.borderBottomRightRadius = "100px";
        s.borderTopLeftRadius = "100px";
        s.borderTopRightRadius = "100px";
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height); //Speichern des Canvas als Bild
        //      div.addEventListener("touchend", changeScreen); 
        //      div.addEventListener("click", changeScreen); 
        //      canvas.addEventListener("touchend", addCircle);
        //      canvas.addEventListener("click", addCircle);
        //      div.addEventListener("touchend", removeCircle);
        //      div.addEventListener("click", removeCircle); 
        //      console.log(allCircles);  
        for (var i = 0; i < 50; i++) {
            var y = 0;
            var x = 0;
            var f = new Abschlussaufgabe.Circle(x, y);
            Abschlussaufgabe.allCircles[i] = f;
            f.draw();
            f.setRandomPosition();
            f.setRandomStyle();
            console.log(f);
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
        //        canvas.addEventListener("touchend",addCircle); 
        //        canvas.addEventListener("click", addCircle);
    }
    //--------------------------------------Funktionen---------------------------------------------------------------------------
    function drawStartscreen(_fillStyle) {
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = _fillStyle;
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc2.closePath();
        //       var image = new Image();
        //       image.src = 'Images/pfeilbutton.png';
        //       crc2.drawImage(image, 700, 350, 100, 100)
        ////       image.id += "button";
        //       let i: CSSStyleDeclaration = image.style;
        ////       i.position = "fixed";
    }
    function drawStarttext(_fillStyle) {
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = _fillStyle;
        Abschlussaufgabe.crc2.font = "50px Georgia";
        Abschlussaufgabe.crc2.fillText("Titel der Anwendung", 460, 300);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fill();
    }
    function changeScreen() {
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "#FF7F50";
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc2.closePath();
        //      showWelcomeText();
    }
    // function showWelcomeText () : void {
    //     
    // 
    //     var action: string = prompt("Bitte Ihren Namen eingeben");
    //   
    // };  
    function addCircle(_event) {
        var c = new Abschlussaufgabe.Circle(500, 1000);
        c.draw;
        //       c.setRandomStyle;
        Abschlussaufgabe.allCircles.push(c);
        Abschlussaufgabe.z++;
        console.log(Abschlussaufgabe.z);
    }
    function removeCircle() {
        this.parentNode.removeChild(this);
        //        this.makeCircleInvisible;
        Abschlussaufgabe.allCircles.push();
        Abschlussaufgabe.z--;
        console.log(Abschlussaufgabe.z);
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
;
//# sourceMappingURL=abschlussaufgabe.js.map