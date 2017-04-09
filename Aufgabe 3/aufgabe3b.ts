//Aufgabe: 3b - Mau Mau
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 09.04.17
//   
//Hiermit versichere ich, 
//dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.


document.addEventListener('DOMContentLoaded', function () {

    let spielkarten:string [] = ["Karo 7","Karo 8","Karo 9","Karo Bube","Karo Dame","Karo Koenig","Karo 10","Karo Ass",
                                 "Herz 7", "Herz 8", "Herz 9", "Herz Bube","Herz Dame", "Herz Koenig", "Herz 10 ","Herz Ass",
                                 "Pik 7", "Pik 8", "Pik 9", "Pik Bube", "Pik Dame", "Pik Koenig", "Pik 10", "Pik Ass",
                                 "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz Bube", "Kreuz Dame", "Kreuz Koenig", "Kreuz 10", "Kreuz Ass"]    
    
    let k:any = spielkarten.length;
    let handkarten:any [] = [];
    let h = handkarten.length;
    let abgelegteKarten: any = [];
    let a:any = abgelegteKarten.length;
   
 // Karte vom Nachziehstapel ziehen und als Handkarte platzieren
   
    document.getElementById("nachziehstapel").addEventListener("click", function () {
    
          
    if (k > 0 && h < 5){                                                                             
         
         let zufaelligeKarte = spielkarten[Math.floor(Math.random() * spielkarten.length)]                      //wählt eine zufällige Karte aus dem Nachziehstapel

         let div : HTMLDivElement = document.createElement("div")                                               //erstellt ein Div für diese Karte                                         
         document.getElementById("handkarten").appendChild(div);                                                //platziert dieses Div innerhalb des Handkarten-Divs
         
         div.innerText += zufaelligeKarte;                                                                      //platziert innerhalb diese Divs die zufällig gewählte Karte
         
         k--;                                                                                                   //Anzahl der Karten auf dem Nachziehstapel wird um 1 reduziert
         h++;                                                                                                   //Anzahl der Karten auf der Hand wird um 1 erhöht
        
         handkarten[h] = zufaelligeKarte;
        
         document.getElementById("nachziehstapel").textContent = "Karten:" + "" + k;                            // Info übrige Karten
        
 // Handkarte dem Ablagestapel hinzufügen
             
        div.addEventListener("click", function () {
                   
            for (let i = 0; i < k; i++) {
                    if (this.textContent == handkarten[i]) {
                           abgelegteKarten.push(handkarten[i]);                                                 // Handkarte wird dem Ablagestapel hinzufügt
                           handkarten.splice(i, 1); }                                                           // Handkarte wird aus dem Handkarten-Div entfernt
                       
                  }  
            a++;                                                                                                // Anzahl der Karten auf dem Ablagestapel wird um 1 erhöht
            h--;                                                                                                // Anzahl der Karten auf der Hand wird um 1 reduziert
                                                                                                                
            document.getElementById("ablagestapel").textContent =  "Karten: " + abgelegteKarten.length;         // Info über abgelegte Karten
            this.parentNode.removeChild(this);                                                                  //Handkarte wird aus dem Handkarten-Div ausgeblendet
           
        });  
      };
   });
}); 
    
