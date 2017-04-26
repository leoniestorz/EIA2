//Aufgabe: 3a - Sissas Summe
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 09.04.17, korrigiert am 26.04.17 
//    
//Hiermit versichere ich, 
//dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function (event) {
    var markierteDivs = document.getElementsByClassName("markiert"); //Liste der geklickten Divs ("markiert") -> f�r Berechnung der Summe                                             
    for (var k = 0; k < 8; k++) {
        var allDivs = document.getElementsByTagName("div");
        allDivs[k].addEventListener("click", function () {
            this.classList.toggle("markiert"); // den angeklickten Feldern wird die KLasse "markiert" zugewiesen
            koernerSumme();
        });
    }
    function koernerSumme() {
        var summe = 0; //Summe der Koerner zu Beginn immer 0 wenn kein Feld markiert ist (vgl. zur�cksetzen) 
        if (markierteDivs.length <= 0) {
            document.getElementById("box").style.display = "none";
        } // Abfrage-> keine Felder angeklickt, d.h.Box mit Summe erscheint nicht bzw. ohne Inhalt
        if (markierteDivs.length > 0) {
            document.getElementById("box").style.display = "inline-block";
        } // Abfrage -> geklickte Felder -> for-Schleife zur Summenberechnung
        for (var k = 0; k < markierteDivs.length; k++) {
            summe += Number(markierteDivs[k].innerHTML);
            document.getElementById("box").innerHTML = "Summe der Reiskoerner " + "\r\n" + "Dezimalzahl: " + summe.toString() + "\r\n" + "Hexadezimalzahl: " + summe.toString(16);
        }
    }
});
document.addEventListener("mousemove", function (event) {
    var box = document.createElement("box"); //Box, welche die Summe anzeigt, wird erstellt und ihr wird die ID "box" gegeben
    document.body.appendChild(box);
    box.id = "box"; //die ID "box" wird vergeben
    document.getElementById("box").style.position = "absolute"; //Style-Eigenschaften dieser Box
    document.getElementById("box").style.width = "170px";
    document.getElementById("box").style.height = "50px";
    document.getElementById("box").style.background = "#CD5C5C";
    document.getElementById("box").style.fontSize = "12pt";
    document.getElementById("box").style.padding = "22px";
    document.getElementById("box").style.border = "1px solid #000000";
    document.getElementById("box").style.borderRadius = "10px";
    document.getElementById("box").style.left = (event.clientX + 25) + "px"; //Box wird am Mauscousor angeheftet
    document.getElementById("box").style.top = (event.clientY + 25) + "px";
});
//# sourceMappingURL=aufgabe3a.js.map