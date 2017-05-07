
//Aufgabe: 6b - StudiVZ
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 07.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace StudiVZ {
    interface StudentData {
        // hier ist noch die richtige Datenstruktur festzulegen
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Was moechten Sie tun? \n \n - Datensatz anlegen (n) \n - Datensatz abfragen(a) \n - Programm beenden (s) \n \n Bitte waehlen Sie n,a oder s");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        return "Hier fehlt noch der richtige Code...";
    }
    function queryData(_matrikel: number): string {
        return "Hier fehlt noch der richtige Code...";
    }
}