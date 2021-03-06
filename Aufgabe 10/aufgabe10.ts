//Aufgabe: 10 - ClientServer
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 22.06.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.



namespace FormElements {
    window.addEventListener("load", init);

//Auswahl gespeichert in Arrays
    let eissorten: string[] = ["Vanille", "Schokolade", "Erdbeere", "Cookies", "Mango", "Himbeere", "Haselnuss", "Straciatella", "Nougat", "Kirsche", "Joghurt"];
    let toppings: string[] = ["Sahne", "Schokostreusel", "Bunte Streusel", "Kokosraspeln", "Erdbeersosse", "Schokososse"];
    let behaelter: string[] = ["Waffel", "Becher"];
//Arrays f�r die Inputs
    let eisInput: HTMLInputElement[] = [];
    let toppingsInput: HTMLInputElement[] = [];
    let behaelterInput: HTMLInputElement[] = []; 
//HTMLElemente f�r die Inputs          
    let Eissorten: HTMLElement;
    let Toppings: HTMLElement;
    let Behaelter: HTMLElement;   
    let Bestellung: HTMLElement;
    let Button: HTMLElement;

    function init(): void {
        
        Eissorten = document.getElementById("Eissorten");
        Toppings = document.getElementById("Toppings");
        Behaelter = document.getElementById("Behaelter");
        Bestellung = document.getElementById("Bestellung");
        Button = document.getElementById("Button");

//aufruf der Funktion zur Erstellung der verschiedenen Inputs
        createInputs();
        
        Eissorten.addEventListener("change", change);
        Toppings.addEventListener("change", change);
        Behaelter.addEventListener("change", change);
        Button.addEventListener("click", DatenPruefen);}

//Erstellen von Inputs f�r Eissorten (Counter), Toppings (Checkbox) und Behaelter(RadioButton)
        
    function createInputs(): void {
       
        for (let i: number = 0; i < eissorten.length; i++) {
            createCounter(eissorten[i]);
        }
        for (let i: number = 0; i < toppings.length; i++) {
            createCheckbox(toppings[i]);
        }
        for (let i: number = 0; i < behaelter.length; i++) {
            createRadio(behaelter[i]);
        }
    }

//Einzelne Funktionen um jeweilige Inputs (Counter, Checkbox, Radio) zu ertsellen
    
    function createCounter(_eis: string): void {
      
        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
        

        label.innerText = _eis;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.value = "0";
        input.name = _eis;


        Eissorten.appendChild(label);
        eisInput.push(input);
    }

    function createCheckbox(_topping: string): void {
       
        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
        

        label.innerText = _topping;
        label.appendChild(input);
        input.type = "checkbox";
        input.name = _topping
     
        
        Toppings.appendChild(label);
        toppingsInput.push(input);
    }

    function createRadio(_behaelter: string): void {
        
        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
     

        label.innerText = _behaelter;
        label.appendChild(input);
        input.type = "radio";
        input.required = true;
        input.name = "behaelter";
        input.value = _behaelter;
        
        
       

        Behaelter.appendChild(label);
        behaelterInput.push(input);
    }     
    

//Veraenderung bei Wahl der Eissorte(n) und Toppings 
    
    function change(): void {
        let summe: number = 0;
        for (let i: number = 0; i < eisInput.length; i++) {
            summe += parseInt(eisInput[i].value);
        }
        for (let i: number = 0; i < toppingsInput.length; i++) {
            if(toppingsInput[i].checked)
            {summe += 0.5;}
        }
        
        
        BestellungAnzeigen(summe);

    }
    
    function BestellungAnzeigen(_summe: number): void {

        document.getElementById("Eissortenwahl").innerText = "";
        document.getElementById("Toppingwahl").innerText = "";
        document.getElementById("Behaelterwahl").innerText = "";
        
        for (let i: number = 0; i < eisInput.length; i++) {
            if (parseInt(eisInput[i].value) > 0) {
               document.getElementById("Eissortenwahl").innerText += eissorten[i] + " " + ": " + (parseInt(eisInput[i].value) * 1) + "\n";
            }
}
        for (let i: number = 0; i < toppingsInput.length; i++) {
            if(toppingsInput[i].checked)
            {
                document.getElementById("Toppingwahl").innerText += toppings[i] + " 0.50 Euro" + "\n";
            }
        }
        for (let i: number = 0; i < behaelterInput.length; i++) {
            if(behaelterInput[i].checked)
            {
                document.getElementById("Behaelterwahl").innerText += behaelter[i]  + "\n";
            }
        }    
        
        //Anzeigen der Gesamtsumme
        
        document.getElementById("Summe").innerText = _summe.toString() + " Euro";   
}    
    

//Bei Klick aug den Button werdne die eingegeben Daten ueberprueft und Feebdack gegeben
        
   function DatenPruefen(): void {
       
        let Vorname: HTMLInputElement = <HTMLInputElement>document.getElementById("Vorname");
        let Nachname: HTMLInputElement = <HTMLInputElement>document.getElementById("Nachname");
        let Mail: HTMLInputElement = <HTMLInputElement>document.getElementById("Mail");
        let Telefon: HTMLInputElement = <HTMLInputElement>document.getElementById("Telefon");
        let Strasse: HTMLInputElement = <HTMLInputElement>document.getElementById("Strasse");
        let PLZ: HTMLInputElement = <HTMLInputElement>document.getElementById("PLZ");
        let Ort: HTMLInputElement = <HTMLInputElement>document.getElementById("Ort");
        let Land: HTMLInputElement = <HTMLInputElement>document.getElementById("Land");

        let ungueltig: string[] = ["Nicht alle Ihrer Angaben sind gueltig. Bitte pruefen Sie folgende Eingaben erneut: \n"];
       
        if(Vorname.validity.valid != true)
            ungueltig.push("Vorname\n");
        if (Nachname.validity.valid != true)
            ungueltig.push("Nachname\n");
        if (Mail.validity.valid != true)
            ungueltig.push("Mail\n");
        if (Strasse.validity.valid != true)
            ungueltig.push("Strasse\n");
        if (PLZ.validity.valid != true)
            ungueltig.push("PLZ\n");
        if (Ort.validity.valid != true)
            ungueltig.push("Ort\n");
        if (Telefon.validity.valid != true)
            ungueltig.push("Telefon\n");
        if (Land.validity.valid != true){
            ungueltig.push("Land\n");
       
             alert(ungueltig.join(""));}
       
        else {
            alert("Ihre Bestellung wird bearbeitet.");
        }
  
    }

    

    
}