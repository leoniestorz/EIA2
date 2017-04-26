//Aufgabe: 3b - Mau Mau
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 09.04.17, korrigiert am 26.04.17 
//   
//Hiermit versichere ich, 
//dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function () {
    var spielkarten = ["Karo 7", "Karo 8", "Karo 9", "Karo Bube", "Karo Dame", "Karo Koenig", "Karo 10", "Karo Ass",
        "Herz 7", "Herz 8", "Herz 9", "Herz Bube", "Herz Dame", "Herz Koenig", "Herz 10 ", "Herz Ass",
        "Pik 7", "Pik 8", "Pik 9", "Pik Bube", "Pik Dame", "Pik Koenig", "Pik 10", "Pik Ass",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz Bube", "Kreuz Dame", "Kreuz Koenig", "Kreuz 10", "Kreuz Ass"];
    var k = spielkarten.length;
    var handkarten = [];
    var h = handkarten.length;
    var abgelegteKarten = [];
    var a = abgelegteKarten.length;
    // Karte vom Nachziehstapel ziehen und als Handkarte platzieren
    document.getElementById("nachziehstapel").addEventListener("click", karteZiehen);
    function karteZiehen(_event) {
        if (k > 0 && h < 5) {
            var zufaelligeKarte = spielkarten[Math.floor(Math.random() * spielkarten.length)]; //w�hlt eine zuf�llige Karte aus dem Nachziehstapel
            var div = document.createElement("div"); //erstellt ein Div f�r diese Karte                                         
            document.getElementById("handkarten").appendChild(div); //platziert dieses Div innerhalb des Handkarten-Divs
            div.innerText += zufaelligeKarte; //platziert innerhalb diese Divs die zuf�llig gew�hlte Karte
            k--; //Anzahl der Karten auf dem Nachziehstapel wird um 1 reduziert
            h++; //Anzahl der Karten auf der Hand wird um 1 erh�ht
            handkarten[h] = zufaelligeKarte;
            document.getElementById("nachziehstapel").textContent = "Karten:" + "" + k; // Info �brige Karten
            // Handkarte dem Ablagestapel hinzuf�gen
            div.addEventListener("click", karteAblegen);
            function karteAblegen(_event) {
                for (var i = 0; i < k; i++) {
                    if (this.textContent == handkarten[i]) {
                        abgelegteKarten.push(handkarten[i]); // Handkarte wird dem Ablagestapel hinzuf�gt
                        handkarten.splice(i, 1);
                    } // Handkarte wird aus dem Handkarten-Div entfernt
                }
                a++; // Anzahl der Karten auf dem Ablagestapel wird um 1 erh�ht
                h--; // Anzahl der Karten auf der Hand wird um 1 reduziert
                document.getElementById("ablagestapel").textContent = abgelegteKarten[abgelegteKarten.length - 1]; // Info �ber abgelegte Karten
                this.parentNode.removeChild(this); //Handkarte wird aus dem Handkarten-Div ausgeblendet
            }
        }
        ;
    }
    ;
});
//# sourceMappingURL=aufgabe3b.js.map