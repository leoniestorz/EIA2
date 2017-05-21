
//Aufgabe: 8 - Inheritance
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace A8Inheritance {
    
    window.addEventListener("load", init);
    
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let imgData: ImageData;
    
    export let z: number = 10; 
    export let alleBienen: SuperKlasseBiene[] = [];
    export let alleBlumen: SuperKlasseBlume[] = [];


    

    function init(_event: Event): void {
        
       canvas = document.getElementsByTagName("canvas")[0];
       crc2 = canvas.getContext("2d");
        
//Hintergund mittels einer Klasse erstellen
        
       let hg: Hintergrund = new Hintergrund;
        


//Blumenwiese aus Tulpen

       for (var i = 0; i < 30; i++) {    
           
          let t:Tulpe = new Tulpe();
          t.draw(); }
 

//Spezielle Blumen (Sonnenblumen und Mohnblumen, jeweils 5) im Array speichern 
 
    for (let i:number = 0; i < 5; i++){ 


        let m:Mohnblume = new Mohnblume ();
        alleBlumen.push(m);
        console.log(m);
        alleBlumen[i].draw();
   
        let s:Sonnenblume = new Sonnenblume ();
        alleBlumen.push(s); 
        console.log(s);
        alleBlumen[i].draw();   
}

 imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild

       
//Erscheinen der 10 Bienen am Ausgang des Bienenstocks
        
    for (let i: number = 0; i < z; i++) {

    
    
            let b: normaleBiene = new normaleBiene(1190,475);
            alleBienen.push(b);
    
            var h: Honigbiene = new Honigbiene(1190, 475);
            alleBienen.push(h);

    
    
//    let randomBiene = Math.floor(Math.random() * 2); 
//       
//           switch (randomBiene) {
//                        
//                                case 0:
//                                    let b:normaleBiene = new normaleBiene(1190,475);
//                                    alleBienen.push(b);
//                                    console.log(alleBienen)
//                                    z++;
//                                    break;
//                                case 1:
//                                    let h:Honigbiene = new Honigbiene(1190,475);
//                                    alleBienen.push(h);
//                                    z++;
//                                    break;
//                                }

}

            window.setTimeout(animate, 10);}
    
    

    
//Bienen bewegen
    
   function animate(): void {
        
        crc2.putImageData(imgData, 0, 0); 
    
       for (let i: number = 0; i < alleBienen.length; i++) {
       

         let nb: normaleBiene = alleBienen[i];
         nb.update();

        }
 

        window.setTimeout(animate, 10);
        
//Bei KLick / Touch auf den Canvas erscheint eine neue Biene am Ausgang des Bienenstocks       
    
        
        canvas.addEventListener("touchend",mehrBienen); 
        canvas.addEventListener("click", mehrBienen);}

//eine weitere Biene hinzufuegen (zufaellig ob normaleBiene oder Honigbiene)    
   
    function mehrBienen(_event:Event): void {
        

           let randomBiene = Math.floor(Math.random() * 2); 
        
           switch (randomBiene) {
                        
                                case 0:
                                    let b:normaleBiene = new normaleBiene(1190,475);
                                    alleBienen.push(b);
                                    z++;
                                    break;
                                case 1:
                                    let h:Honigbiene = new Honigbiene(1190,475);
                                    alleBienen.push(h);
                                    z++;
                                    break;
                                }}
   

}