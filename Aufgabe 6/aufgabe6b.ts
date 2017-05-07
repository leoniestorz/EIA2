
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
            Vorname : (InputArray[1]),
            Name : (InputArray [2]),
            Alter : parseInt(InputArray[3]), 
            Geschlecht : parseInt(InputArray[4]) == 0,
            Kommentar : (InputArray [5]),}
        
       
//Angabe des Geschlechts
                
       let geschlechtEingabe: string;
        
       if (parseInt(InputArray[4]) == 0) 
       
            {geschlechtEingabe = "maennlich";} // 0 = männlich
       
       else {geschlechtEingabe = "weiblich";} // 1 = weiblich 

        
//Ungueltige Eingabe, wenn mind. eine Angabe fehlt      
        
        if(InputArray.length <= 5) {
        return "Ihre Eingabe enthielt nicht alle benoetigten Angaben.\nBitte erneut versuchen";}

//Ungueltige Matrikelnummer, wenn diese nicht in Zahlen eingegeben wurde        
        
        if(isNaN(parseInt(InputArray[0]))){
        return "Ihre Eingabe ist ungueltig.\nBitte geben Sie Ihre Martikelnummer als Zahl ein.";}

//Ungueltige Eingabe für Geschlecht, wenn nicht die Zahlen 0 oder 1 eingegeben wurden     
        if (parseInt(InputArray[4]) != 0 && parseInt(InputArray[4]) != 1){
        return "Ihre Eingabe ist ungeltig.\nBitte geben Sie für das Geschlecht 0 (männlich) oder 1 (weiblich) ein.";}

//Ungueltige Alterseingabe, wenn dieses nicht in Zahlen eingegeben wurde
        
        if(isNaN(parseInt(InputArray[3]))){
        return "Ihre Eingabe ist ungueltig.\nBitte geben Sie das Alter als Zahl an.";}

//Eingaben in Array students pushen
        
        students.push(studi);
        
//Textausgabe bei erfolgreicher Speicherung der Daten
               
         return "Ihre Daten wurden gespeichert: \n\nMatrikel:"+ studi.Matrikelnummer + "\nVorname:" + studi.Vorname + "\nName:"  + studi.Name + "\nAlter:"  + studi.Alter + "\nGeschlecht:" + geschlechtEingabe +"\nKommentar:" +studi.Kommentar;
     
    }

//Funktion zur Ausgabe der gespeicherten Daten
    
    function queryData(_matrikel: number): string {
        
        for (let i: number = 0; i < students.length; i++) {
        
              

            let geschlechtAusgabe: string;
                
            if (students[i].Geschlecht == false)
                  
                  {geschlechtAusgabe = "maennlich";}
              
             else {geschlechtAusgabe = "weiblich";}
            
            
         if (students[i].Matrikelnummer == _matrikel){    
                
//Textausgabe bei erfolgreichen Findung der gepeicherten Daten   
                     
        return "Folgende Daten sind unter dieser Matrikelnummer gespeichert:  \n\nMatrikel: " + students[i].Matrikelnummer + "\nVorname:" + students[i].Vorname + "\nName:" + students[i].Name + "\nAlter:" + students[i].Alter + "\nGeschlecht:"+ geschlechtAusgabe +"\nKommentar:" + students[i].Kommentar;}

//Textausgabe, falls unter eingegebener Matrikelnummer keine Daten gefunden wurden   
                
        else {return "Fuer diese Matrikelnummer ist noch kein Eintrag vorhanden."}
}
   }
    }