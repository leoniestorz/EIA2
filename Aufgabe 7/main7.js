//Aufgabe: 7 - OO-Blumenwiese
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 14.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert. 
var BienenInterface;
(function (BienenInterface) {
    window.addEventListener("load", init);
    var canvas;
    var imgData;
    BienenInterface.z = 10;
    BienenInterface.alleBienen = [];
    BienenInterface.alleBlumen = [];
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        BienenInterface.crc2 = canvas.getContext("2d");
        //Hintergund mittels einer Klasse erstellen
        var h = new BienenInterface.Hintergrund;
        //Random Blumen erstellen
        var y = 0;
        var x = 0;
        var f = new BienenInterface.Blumen(x, y);
        f.setRandomFlowers();
        //Fest platzierte Blumen 
        var flower1 = new BienenInterface.Blumen(100, 400);
        flower1.drawSonnenblume();
        BienenInterface.alleBlumen.push(flower1);
        var flower2 = new BienenInterface.Blumen(1000, 450);
        flower2.drawMohnblume();
        BienenInterface.alleBlumen.push(flower2);
        var flower3 = new BienenInterface.Blumen(725, 360);
        flower3.drawTulpe();
        BienenInterface.alleBlumen.push(flower3);
        var flower4 = new BienenInterface.Blumen(380, 510);
        flower4.drawTulpe();
        BienenInterface.alleBlumen.push(flower4);
        var flower5 = new BienenInterface.Blumen(1030, 550);
        flower5.drawSonnenblume();
        BienenInterface.alleBlumen.push(flower5);
        var flower6 = new BienenInterface.Blumen(500, 550);
        flower6.drawMohnblume();
        BienenInterface.alleBlumen.push(flower6);
        imgData = BienenInterface.crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild
        //Erscheinen der 10 Bienen am Ausgang des Bienenstocks
        for (var i = 0; i < BienenInterface.z; i++) {
            var b = new BienenInterface.Bienen(1190, 475);
            BienenInterface.alleBienen[i] = b;
        }
        window.setTimeout(animate, 10);
    }
    function animate() {
        BienenInterface.crc2.putImageData(imgData, 0, 0);
        for (var i = 0; i < BienenInterface.alleBienen.length; i++) {
            var b = BienenInterface.alleBienen[i];
            b.update();
        }
        window.setTimeout(animate, 10);
        //Bei KLick / Touch auf den Canvas erscheint eine neue Biene am Ausgang des Bienenstocks       
        canvas.addEventListener("touchend", mehrBienen);
        canvas.addEventListener("click", mehrBienen);
    }
    function mehrBienen(_event) {
        var b = new BienenInterface.Bienen(1190, 475);
        b.setRandomStyle;
        BienenInterface.alleBienen.push(b);
        BienenInterface.z++;
    }
})(BienenInterface || (BienenInterface = {}));
//# sourceMappingURL=main7.js.map