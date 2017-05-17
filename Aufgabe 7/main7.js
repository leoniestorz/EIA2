//Aufgabe: 7 - OO-Blumenwiese
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 14.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert. 
var A7Classes;
(function (A7Classes) {
    window.addEventListener("load", init);
    var canvas;
    var imgData;
    A7Classes.z = 10;
    A7Classes.alleBienen = [];
    A7Classes.nektarBlumen = [];
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        A7Classes.crc2 = canvas.getContext("2d");
        //Hintergund mittels einer Klasse erstellen
        var h = new A7Classes.Hintergrund;
        //Blumenwiese
        for (var i = 0; i < 80; i++) {
            var y = 0;
            var x = 0;
            var f = new A7Classes.Blume(x, y);
            var randomFlower = Math.floor((Math.random() * 3));
            f.setRandomPosition();
            switch (randomFlower) {
                case 0:
                    f.drawSonnenblume();
                    break;
                case 1:
                    f.drawMohnblume();
                    break;
                case 2:
                    f.drawTulpe();
                    break;
            }
        }
        //Fest platzierte Blumen 
        for (var i_1 = 0; i_1 < 10; i_1++) {
            var y = 0;
            var x = 0;
            var f = new A7Classes.Blume(x, y);
            f.setRandomPosition();
            A7Classes.nektarBlumen.push(f);
        }
        console.log(A7Classes.nektarBlumen);
        imgData = A7Classes.crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild
        //Erscheinen der 10 Bienen am Ausgang des Bienenstocks
        for (var i_2 = 0; i_2 < A7Classes.z; i_2++) {
            var b = new A7Classes.Biene(1190, 475);
            A7Classes.alleBienen[i_2] = b;
        }
        window.setTimeout(animate, 10);
    }
    function animate() {
        A7Classes.crc2.putImageData(imgData, 0, 0);
        for (var i = 0; i < A7Classes.alleBienen.length; i++) {
            var b = A7Classes.alleBienen[i];
            b.update();
        }
        window.setTimeout(animate, 10);
        //Bei KLick / Touch auf den Canvas erscheint eine neue Biene am Ausgang des Bienenstocks       
        canvas.addEventListener("touchend", mehrBienen);
        canvas.addEventListener("click", mehrBienen);
    }
    function mehrBienen(_event) {
        var b = new A7Classes.Biene(1190, 475);
        b.setRandomStyle;
        A7Classes.alleBienen.push(b);
        A7Classes.z++;
    }
})(A7Classes || (A7Classes = {}));
//# sourceMappingURL=main7.js.map