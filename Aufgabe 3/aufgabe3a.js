//Aufgabe: 3a - Sissas Summe
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 09.04.17
//    
//Hiermit versichere ich, 
//dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function () {
    var markierteDivs = document.getElementsByClassName("markiert"); //Liste der geklickten Divs ("markiert") -> f�r Berechnung der Summe                                             
    var summe = 0; // Summe der Reiskoerner
    for (var k = 0; k < 9; k++) {
        var allDivs = document.getElementsByTagName("div");
        allDivs[k].addEventListener("click", function () {
            this.classList.toggle("markiert"); // den angeklickten Feldern wird die KLasse "markiert" zugewiesen
            koernerSumme();
        });
    }
    function koernerSumme() {
        if (markierteDivs.length == 0) {
            document.getElementById("box").style.display = "none";
        } // Abfrage-> keine Felder angeklickt, d.h.Box mit Summe erscheint nicht
        else {
            document.getElementById("box").style.display = "inline";
        } // geklickte Felder -> for-Schleife zur Summenberechnung
        for (var k = 0; k < markierteDivs.length; k++) {
            summe += Number(markierteDivs[k].textContent); // Summenberechnung mittels des textContent der markierten Divs
            document.getElementById("box").textContent = "Summe der Reiskoerner: " + "\r" + "Dezimalzahl: " + summe + "\r" + "Hexadezimalzahl: " + summe.toString(16);
        }
    }
});
document.addEventListener("mousemove", function (Event) {
    document.getElementById("box").style.left = (Event.clientX + 25) + "px";
    document.getElementById("box").style.top = (Event.clientY + 25) + "px";
});
//# sourceMappingURL=aufgabe3a.js.map