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
        var h = new BienenInterface.Hintergrund;
        //Random Blumen erstellen
        var y = 0;
        var x = 0;
        var f = new BienenInterface.Blumen(x, y);
        f.setRandomFlowers();
        //Fest platzierte Blumen 
        var f1 = new BienenInterface.Blumen(100, 400);
        f1.drawSonnenblume();
        BienenInterface.alleBlumen.push(f1);
        var f2 = new BienenInterface.Blumen(1000, 450);
        f2.drawMohnblume();
        BienenInterface.alleBlumen.push(f2);
        var f3 = new BienenInterface.Blumen(725, 360);
        f3.drawTulpe();
        BienenInterface.alleBlumen.push(f3);
        var f4 = new BienenInterface.Blumen(380, 510);
        f4.drawTulpe();
        BienenInterface.alleBlumen.push(f4);
        var f5 = new BienenInterface.Blumen(1030, 550);
        f5.drawSonnenblume();
        BienenInterface.alleBlumen.push(f5);
        var f6 = new BienenInterface.Blumen(500, 550);
        f6.drawMohnblume();
        BienenInterface.alleBlumen.push(f6);
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
        //         for (let i: number = 0; i < 5; i++) {
        //            
        //            let f: Blumen = new Blumen(200, 200,"");
        //            alleBlumen.push(f);
        //}
        //        for (let i: number = 0; i < alleBlumen.length; i++) {
        //           
        //         let f: Blumen = alleBlumen[i];
        //         alleBlumen[i].drawTulpe();}
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