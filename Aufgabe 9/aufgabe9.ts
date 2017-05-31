//Aufgabe: 9 - FormElements
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 04.06.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.



namespace FormElements {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }

    function handleChange(_event: Event): void {
       
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.name + " to " + target.value);
     
        //*/ note: this == _event.currentTarget in an event-handler
        if (this.id == "Eiskugelart")
            console.log("Changed " + target.name + " to " + target.checked);
        
//        if (target.name == "Slider") {
//            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("progress")[0];
//            progress.value = parseFloat(target.value);
//        }
       
        if (target.name == "Stepper") {
            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("meter")[0];
            progress.value = parseFloat(target.value);
        }
       
        
    }
    
    function move() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
} 
}