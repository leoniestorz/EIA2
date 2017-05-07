
//Aufgabe: 6b - StudiVZ
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 07.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace StudiVZ {
    interface StudentData {

        Matrikelnummer : number;
        Vorname : string;
        Name : string;
        Alter : number;
        Geschlecht : boolean;
        Kommentar:string;
    
    }
    
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

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
        
        let InputArray: string[] = _input.split(",");
        
        let studi : StudentData = {
            
            Matrikelnummer : parseInt(InputArray[0]),
            Vorname : InputArray[1],
            Name : InputArray [2],
            Alter : parseInt(InputArray[3]), 
            Geschlecht : parseInt(InputArray[4]) == 0,
            Kommentar : InputArray [5],
            
            }
        
         students.push(studi)
        
        let Geschlecht: string;
      
        if (studi.Geschlecht == true) {
           Geschlecht = "m";}
        else {
           Geschlecht = "w";}
        
         return "Ihre Daten wurden gespeichert: \nMatrikel: " +    + "\nVorname:" +   "\nName:" +   + "\nAlter:" +   + "\nGeschlecht"+   +"\nKommentar"
     
    }
    
    function queryData(_matrikel: number): string {
        
        
        
        return "Folgende Daten sind unter dieser Matrikelnummer gespeichert:  \nMatrikelnummer:" +   + "\nVorname:" +     + "\nAlter:"+     +"\nGeschlecht"+   + "\nKommentar" 
    }
}