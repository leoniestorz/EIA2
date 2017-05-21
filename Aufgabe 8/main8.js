//Aufgabe: 8 - Inheritance
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var A8Inheritance;
(function (A8Inheritance) {
    window.addEventListener("load", init);
    var canvas;
    var imgData;
    A8Inheritance.z = 10;
    A8Inheritance.alleBienen = [];
    A8Inheritance.alleBlumen = [];
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        A8Inheritance.crc2 = canvas.getContext("2d");
        //Hintergund mittels einer Klasse erstellen
        var hg = new A8Inheritance.Hintergrund;
        //Blumenwiese aus Tulpen
        for (var i = 0; i < 30; i++) {
            var t = new A8Inheritance.Tulpe();
            t.draw();
        }
        //Spezielle Blumen (Sonnenblumen und Mohnblumen, jeweils 5) im Array speichern 
        for (var i_1 = 0; i_1 < 5; i_1++) {
            var m = new A8Inheritance.Mohnblume();
            A8Inheritance.alleBlumen.push(m);
            console.log(m);
            A8Inheritance.alleBlumen[i_1].draw();
            var s = new A8Inheritance.Sonnenblume();
            A8Inheritance.alleBlumen.push(s);
            console.log(s);
            A8Inheritance.alleBlumen[i_1].draw();
        }
        imgData = A8Inheritance.crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild
        //Erscheinen der Bienen am Ausgang des Bienenstocks
        for (var i_2 = 0; i_2 < A8Inheritance.z; i_2++) {
            var randomBiene = Math.floor(Math.random() * 2);
            switch (randomBiene) {
                case 0:
                    var b = new A8Inheritance.normaleBiene(1190, 475);
                    A8Inheritance.alleBienen.push(b);
                    break;
                case 1:
                    var h = new A8Inheritance.Honigbiene(1190, 475);
                    A8Inheritance.alleBienen.push(h);
                    break;
            }
        }
        window.setTimeout(animate, 10);
    }
    //Bienen bewegen
    function animate() {
        A8Inheritance.crc2.putImageData(imgData, 0, 0);
        for (var i = 0; i < A8Inheritance.alleBienen.length; i++) {
            var nb = A8Inheritance.alleBienen[i];
            nb.update();
        }
        window.setTimeout(animate, 10);
        //Bei KLick / Touch auf den Canvas erscheint eine neue Biene am Ausgang des Bienenstocks       
        canvas.addEventListener("touchend", mehrBienen);
        canvas.addEventListener("click", mehrBienen);
    }
    //eine weitere Biene hinzufuegen (zufaellig ob normaleBiene oder Honigbiene)    
    function mehrBienen(_event) {
        var randomBiene = Math.floor(Math.random() * 2);
        switch (randomBiene) {
            case 0:
                var b = new A8Inheritance.normaleBiene(1190, 475);
                A8Inheritance.alleBienen.push(b);
                A8Inheritance.z++;
                break;
            case 1:
                var h = new A8Inheritance.Honigbiene(1190, 475);
                A8Inheritance.alleBienen.push(h);
                A8Inheritance.z++;
                break;
        }
    }
})(A8Inheritance || (A8Inheritance = {}));
//# sourceMappingURL=main8.js.map