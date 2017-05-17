
//Aufgabe: 7 - OO-Blumenwiese
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 14.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert. 


namespace A7Classes {
    
    window.addEventListener("load", init);
    
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let imgData: ImageData;
    
    export let z: number = 10; 
    export let alleBienen: Biene[] = [];
    export let nektarBlumen:Blume[] = [];

    

    function init(_event: Event): void {
        
       canvas = document.getElementsByTagName("canvas")[0];
       crc2 = canvas.getContext("2d");

//Hintergund mittels einer Klasse erstellen
        
       let h: Hintergrund = new Hintergrund;

//Blumenwiese

       for (var i = 0; i < 80; i++) {    
           
       let y: number = 0;
       let x: number = 0;    
       let f: Blume = new Blume(x, y);
       var randomFlower:number = Math.floor((Math.random() * 3));
       f.setRandomPosition();
       f.draw();}


//Fest platzierte Blumen 
 
for (let i:number = 0; i < 10; i++){ 

         let y: number = 0;
         let x: number = 0;  
         let f: Blume = new Blume(x, y);
         f.setRandomPosition();
         nektarBlumen.push(f);}

        console.log(nektarBlumen);
        
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild

       
//Erscheinen der 10 Bienen am Ausgang des Bienenstocks
        
        for (let i: number = 0; i < z; i++) {
            
            let b: Biene = new Biene (1190,475);
            alleBienen[i] = b;}

            window.setTimeout(animate, 10);}
    
    

    

    
    function animate(): void {
        
        crc2.putImageData(imgData, 0, 0); 
              
        for (let i: number = 0; i < alleBienen.length; i++) {
           
         let b: Biene = alleBienen[i];
         b.update();}
 

        window.setTimeout(animate, 10);
        
//Bei KLick / Touch auf den Canvas erscheint eine neue Biene am Ausgang des Bienenstocks       
    
        
        canvas.addEventListener("touchend",mehrBienen); 
        canvas.addEventListener("click", mehrBienen);}

    
    function mehrBienen(_event:Event): void {
        
         let b: Biene = new Biene (1190,475);
         b.setRandomStyle;
         alleBienen.push(b);
         z++;}  

}