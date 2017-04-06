//Aufgabe: 2a - DynHTML: Sissa Ibn Dahir
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 02.04.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst, sowie in Zusammenarbeit mit Lingnau, Jonathan erstellt habe. Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function () {
    var n = 64;
    var c;
    var f;
    var zeile = 0;
    var koerner = 1;
    var div;
    for (var i = 0; i < n; i++) {
        if (i % 8 == 0) {
            zeile++;
        }
        if (zeile % 2 == 0) {
            if (i % 2 == 0) {
                c = "#ffffff";
                f = "#000000";
            }
            if (i % 2 == 1) {
                c = "#000000";
                f = "#ffffff";
            }
        }
        if (zeile % 2 == 1) {
            if (i % 2 == 1) {
                c = "#ffffff";
                f = "#000000";
            }
            if (i % 2 == 0) {
                c = "#000000";
                f = "#ffffff";
            }
        }
        placeDiv(c, f);
    }
    function placeDiv(_color, _farbe) {
        var div = document.createElement("div");
        document.body.appendChild(div);
        div.className += "felder";
        div.innerText = "" + koerner;
        koerner = koerner * 2;
        var s = div.style;
        s.backgroundColor = _color;
        var f = div.style;
        f.color = _farbe;
    }
});
//# sourceMappingURL=aufgabe2.js.map