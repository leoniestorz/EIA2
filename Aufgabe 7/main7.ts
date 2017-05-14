
//Aufgabe: 7 - OO-Blumenwiese
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 14.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert. 


namespace BienenInterface {
    
    window.addEventListener("load", init);
    
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let imgData: ImageData;
    
    export let z: number = 10; 
    export let alleBienen: Bienen[] = [];
    export let alleBlumen:Blumen[] = [];
    

    function init(_event: Event): void {
        
       canvas = document.getElementsByTagName("canvas")[0];
       crc2 = canvas.getContext("2d");

       let h: Hintergrund = new Hintergrund;
        
  

        
//Random Blumen erstellen
                
       let y: number = 0;
       let x: number = 0;    
       let f: Blumen = new Blumen(x, y);
       f.setRandomFlowers();
        

//Fest platzierte Blumen 
 
        
        let f1: Blumen = new Blumen(100, 400);
            f1.drawSonnenblume();
            alleBlumen.push(f1);
        
        let f2: Blumen = new Blumen(1000, 450);
            f2.drawMohnblume()
            alleBlumen.push(f2);
        
        let f3: Blumen = new Blumen(725, 360);
            f3.drawTulpe();
            alleBlumen.push(f3);
        
        let f4: Blumen = new Blumen(380, 510);
            f4.drawTulpe();
            alleBlumen.push(f4);
        
        let f5: Blumen = new Blumen(1030, 550);
            f5.drawSonnenblume();
            alleBlumen.push(f5);
        
        let f6: Blumen = new Blumen(500, 550);
            f6.drawMohnblume();
            alleBlumen.push(f6);
        
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild

       
//Erscheinen der 10 Bienen am Ausgang des Bienenstocks
        
        for (let i: number = 0; i < z; i++) {
            
            let b: Bienen = new Bienen (1190,475);
            alleBienen[i] = b;}

            window.setTimeout(animate, 10);}

    

    
    function animate(): void {
        
        crc2.putImageData(imgData, 0, 0); 
              
        for (let i: number = 0; i < alleBienen.length; i++) {
           
         let b: Bienen = alleBienen[i];
         b.update();}
        

        
//         for (let i: number = 0; i < 5; i++) {
//            
//            let f: Blumen = new Blumen(200, 200,"");
//            alleBlumen.push(f);
//}
        
//        for (let i: number = 0; i < alleBlumen.length; i++) {
//           
//         let f: Blumen = alleBlumen[i];
//         alleBlumen[i].drawTulpe();}
        
        
        window.setTimeout(animate, 10);
        
//Bei KLick / Touch auf den Canvas erscheint eine neue Biene am Ausgang des Bienenstocks       
    
        
        canvas.addEventListener("touchend",mehrBienen); 
        canvas.addEventListener("click", mehrBienen);}

  

       
    function mehrBienen(_event:Event): void {
        
         let b: Bienen = new Bienen (1190,475);
         b.setRandomStyle;
         alleBienen.push(b);
         z++;}  

     


}