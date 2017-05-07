//Aufgabe: 6b - StudiVZ
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 07.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        var InputArray = _input.split(",");
        var studi = {
            Matrikelnummer: parseInt(InputArray[0]),
            Vorname: InputArray[1],
            Name: InputArray[2],
            Alter: parseInt(InputArray[3]),
            Geschlecht: parseInt(InputArray[4]) == 0,
            Kommentar: InputArray[5],
        };
        students.push(studi);
        var Geschlecht;
        if (studi.Geschlecht == true) {
            Geschlecht = "m";
        }
        else {
            Geschlecht = "w";
        }
        return "Ihre Daten wurden gespeichert: \nMatrikel: " + +"\nVorname:" + "\nName:" + +"\nAlter:" + +"\nGeschlecht" + +"\nKommentar";
    }
    function queryData(_matrikel) {
        return "Folgende Daten sind unter dieser Matrikelnummer gespeichert:  \nMatrikelnummer:" + +"\nVorname:" + +"\nAlter:" + +"\nGeschlecht" + +"\nKommentar";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=aufgabe6b.js.map