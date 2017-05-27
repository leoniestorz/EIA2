//Aufgabe: 9 - FormElements
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 04.06.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Form;
(function (Form) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        var fieldsets = document.getElementsByTagName("fieldset");
        for (var i = 0; i < fieldsets.length; i++) {
            var fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        //console.log(_event);
        //*/
        var target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        //*/
        //*/ note: this == _event.currentTarget in an event-handler
        if (this.id == "checkbox")
            console.log("Changed " + target.name + " to " + target.checked);
        //*/
        //*/
        if (target.name == "Slider") {
            var progress = document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
        //*/
        if (target.name == "Stepper") {
            var progress = document.getElementsByTagName("meter")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
    }
})(Form || (Form = {}));
//# sourceMappingURL=aufgabe9.js.map