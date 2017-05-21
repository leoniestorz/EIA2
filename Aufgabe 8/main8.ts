
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

//Aufruf der Funktionen für den Hintergund 

       drawWiese(0, 0, "#90EE90", "#90EE90");     
       drawHimmel(0, 0, "##48d1CC", "#48d1CC");

       drawBergGross(500, 400, "#a9a9a9");
       drawBergKlein(250, 400); 
       drawSonne(560, 120, "#FFFF00", "#FFFF00");
       drawBaum(750, 300);
       drawBuschGross(860, 380, "#556B2F");
       drawBuschKlein(90, 380, "#556B2F");
       drawBuschGross(- 20, 440, "#556B2F");       
       drawWolke(160, 120, "#FFFFFF");
       drawWolke(750, 180, "#FFFFFF");

                    
       drawVogel(1042, 315, "#000000", "#000000");
       drawBienenkorb(1200, 440);

//Blumenwiese aus Tulpen

       for (var i = 0; i < 20; i++) {    
           
          let t:Tulpe = new Tulpe();
          t.draw(); }
 
//       let y: number = 0;
//       let x: number = 0;    
//       let f: SuperKlasseBlume = new SuperKlasseBlume(x, y);
      

//    
//       let m:Mohnblume = new Mohnblume (x,y);
//       alleBlumen.push(m);
//    
//       let s:Sonnenblume = new Sonnenblume (x,y);
//       alleBlumen.push(s);   
           
//           
//       f.setRandomPosition();
//       f.draw();
       


//Spezielle Blumen (Sonnenblumen und Mohnblumen, jeweils 5) im Array speichern 
 
    for (let i:number = 0; i < 5; i++){ 

//         let y: number = 0;
//         let x: number = 0;  
//         let f: SuperKlasseBlume = new SuperKlasseBlume(x, y);
         
//        let t:Tulpe = new Tulpe (x,y);
//        alleBlumen.push(t);
//    
        let m:Mohnblume = new Mohnblume ();
        alleBlumen.push(m);
        console.log(m);
        alleBlumen[i].draw();
   
       let s:Sonnenblume = new Sonnenblume ();
       alleBlumen.push(s); 
        console.log(s);
        alleBlumen[i].draw();   

        
        
//         f.setRandomPosition();
//         alleBlumen.push(f);


}

        
        
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild

       
//Erscheinen der 10 Bienen am Ausgang des Bienenstocks
        
for (let i: number = 0; i < z; i++) {

    
    
            let b: normaleBiene = new normaleBiene(1190,475);
            alleBienen.push(b);
    
            var h: Honigbiene = new Honigbiene(1190, 475);
            alleBienen.push(h);

    
    
//    let randomBiene = Math.floor(Math.random() * 2); 
////        
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
//            let nb: normaleBiene = new normaleBiene (1190,475);
//            alleBienen.push(nb);
//            alleBienen[i] = nb;

//            let hb: Honigbiene = new Honigbiene (1190,475);
//            alleBienen.push(hb);
//            alleBienen[i] = hb;
}

            window.setTimeout(animate, 10);}
    
    

    
//Bienen bewegen
    
   function animate(): void {
        
        crc2.putImageData(imgData, 0, 0); 
              
        
//      for (let i: number = 0; i < alleBlumen.length; i++) {
//            let f: SuperKlasseBlume = alleBlumen[i];
//            f.draw();
//} 
       
       
       for (let i: number = 0; i < alleBienen.length; i++) {
       

         let nb: normaleBiene = alleBienen[i];
         nb.update();
         
        
//         let hb: Honigbiene = alleBienen[i];
//         hb.move();
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
      


        

//Funktionen für den Hintergrund
    
    function drawWiese (_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
         
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.fillStyle = _fillColor;
        
        crc2.moveTo(_x, _y + 400);
        crc2.lineTo(_x + 1280, _y + 400);
        crc2.lineTo(_x + 1280, _y + 720);
        crc2.lineTo(_x - 1280, _y + 720);
        
        crc2.closePath();
        crc2.stroke();
        crc2.fill();}
    
     function drawHimmel (_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
         
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.fillStyle = _fillColor;
       
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 1280, _y);
        crc2.lineTo(_x + 1280, _y + 400);
        crc2.lineTo(_x - 1280, _y + 400);
         
        crc2.closePath();
        crc2.stroke();
        crc2.fill();}
    
    
    
    
    function drawBergGross(_x: number, _y: number, _fillColor: string): void {
       
       
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        
        crc2.moveTo(_x + 200, _y - 300);
        crc2.lineTo(_x + 400, _y);
        crc2.lineTo(_x, _y);
         
        crc2.closePath();
        crc2.fill();}
        
     function drawBergKlein(_x: number, _y: number): void {
       
        //Berg
         
        crc2.beginPath();
        crc2.strokeStyle = "#696969";
        crc2.fillStyle = "#696969";
           
        crc2.moveTo(_x + 200, _y - 200);
        crc2.lineTo(_x + 400, _y);
        crc2.lineTo(_x, _y);
        
        crc2.stroke(); 
        crc2.fill();
     
        
       //Schnee
         
       crc2.beginPath();
       crc2.fillStyle = "#FFFFFF";
         
       crc2.moveTo(451, 199);
       crc2.lineTo(_x + 250, _y - 150);
       crc2.arcTo(_x + 230,_y - 140, 60, 0, 2 * Math.PI)
       crc2.arcTo(_x + 225,_y - 145, 60, 0, 2 * Math.PI)
       crc2.arcTo(_x + 195,_y - 134, 80, 0, 2 * Math.PI)
       crc2.arcTo(_x + 180,_y - 150, 60, 0, 2 * Math.PI) 
       crc2.arcTo(_x + 160,_y - 140, 80, 0, 2 * Math.PI) 
       crc2.lineTo(_x + 150, _y - 150);
       crc2.lineTo(451, 199);
       
       crc2.closePath();
       crc2.fill();}
    
    
    
    
    
    function drawSonne(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
       
        //Sonne
          
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.fillStyle = _fillColor; 

        //Sonnenstrahlen
          
        crc2.arc(_x,_y, 60, 0, 2 * Math.PI);
        crc2.moveTo(560,120);
        crc2.lineTo(800, 150);
        crc2.moveTo(560,120);
        crc2.lineTo(800, 50);
        crc2.moveTo(560,120);
        crc2.lineTo(700, 10);
        crc2.moveTo(560,120);
        crc2.lineTo(590, 15);
        crc2.moveTo(560,120);
        crc2.lineTo(490, 20);
        crc2.moveTo(560,120);
        crc2.lineTo(400, 30);
        crc2.moveTo(560,120);
        crc2.lineTo(400, 120);
        crc2.moveTo(560,120);
        crc2.lineTo(410, 200);
        crc2.moveTo(560,120);
        crc2.lineTo(480,270);
        crc2.moveTo(560,120);
        crc2.lineTo(590, 230);
        crc2.moveTo(560,120);
        crc2.lineTo(700,200);
      
        
        crc2.closePath();
        crc2.stroke();
        crc2.fill();}
    
    function drawBaum(_x: number, _y: number): void {
         
        //Baumstamm
         
        crc2.beginPath();
        crc2.fillStyle ="#CD853F";
         
        crc2.fillRect(1080, 335, 35, 110);
        crc2.fillRect(1050, 350, 50, 6);
        
        //Baumkrone
         
        crc2.beginPath();
        crc2.fillStyle = "#6B8e23";
          
        crc2.arc(1110, 255, 35, 0, 2 * Math.PI);
        crc2.arc(1140, 285, 35, 0, 2 * Math.PI);
        crc2.arc(1110, 315, 35, 0, 2 * Math.PI);
        crc2.arc(1065, 305, 35, 0, 2 * Math.PI);
        crc2.arc(1065, 265, 35, 0, 2 * Math.PI);
         
        crc2.closePath();
        crc2.fill();}
        
     function drawBuschGross(_x: number, _y: number,_fillColor: string): void {
         

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
         
        crc2.arc(_x + 55,_y + 30, 25, 0, 2 * Math.PI);
        crc2.arc(_x + 75,_y + 10, 20, 0, 2 * Math.PI);
        crc2.arc(_x + 120,_y + 40, 24, 0, 2 * Math.PI);
        crc2.arc(_x + 90,_y + 30, 35, 0, 2 * Math.PI);
     
        crc2.closePath();
        crc2.fill();}
        
     function drawBuschKlein(_x: number, _y: number, _fillColor: string): void {
         
   
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
         
        crc2.arc(_x + 20,_y + 30, 28, 0, 2 * Math.PI);
        crc2.arc(_x + 50,_y + 10, 25, 0, 2 * Math.PI);
        crc2.arc(_x + 80,_y + 15, 20, 0, 2 * Math.PI);
        crc2.arc(_x + 55,_y + 30, 25, 0, 2 * Math.PI);
        
        crc2.closePath();
        crc2.fill();}
        
      function drawWolke(_x: number, _y: number,_fillColor: string): void {
         

        crc2.beginPath();
        crc2.fillStyle = _fillColor;
          
        crc2.arc(_x + 10, _y + 30, 25, 0, 2 * Math.PI);
        crc2.arc(_x + 50, _y + 25, 40, 0, 2 * Math.PI);
        crc2.arc(_x + 90,_y + 20, 35, 0, 2 * Math.PI);
        crc2.arc(_x + 130, _y + 20, 25, 0, 2 * Math.PI);
        
        crc2.closePath();
        crc2.fill();}
       
    function drawVogel (_x: number, _y: number, _strokeColor: string, _fillColor:string) : void {
         
        
        crc2.beginPath();
        crc2.strokeStyle = _strokeColor;
        crc2.fillStyle = _fillColor;
        
        //Koerper und Kopf
        
        crc2.arc(_x  + 22, _y + 20, 8, 0, 2 * Math.PI);
        crc2.arc(_x  + 32 ,_y + 16, 5, 0, 2 * Math.PI);
        
        //Schnabel
        
        crc2.lineTo(_x + 42, _y + 18);
        
        //Beine
        
        crc2.moveTo(_x + 24, _y + 28);
        crc2.lineTo(_x + 24,_y + 35);
        crc2.moveTo(_x + 20, _y + 28);
        crc2.lineTo(_x + 20,_y + 35);
        
        //Schwanz
        
        crc2.moveTo(_x + 14, _y + 18);
        crc2.lineTo(_x + 10,_y + 14);
        crc2.lineTo(_x + 10,_y + 17);
        
        crc2.closePath();
        crc2.fill();
        crc2.stroke();}
    
    


     function drawBienenkorb  (_x: number, _y: number): void {
         
        //Bienenkorb
         
        crc2.beginPath();
        crc2.fillStyle = "#A0522D";
         
        crc2.arc(_x,_y, 26, 0, 2 * Math.PI);
        crc2.moveTo(_x,_y - 10)
        crc2.arc(_x + 23,_y, 10, 0, 2 * Math.PI);
        crc2.moveTo(_x,_y)
        crc2.arc(_x + 23,_y + 20, 10, 0, 2 * Math.PI);
        crc2.moveTo(_x,_y  + 4)
        crc2.arc(_x + 23,_y + 41, 10, 0, 2 * Math.PI);
        crc2.arc(_x - 25,_y + 41, 10, 0, 2 * Math.PI);
        crc2.arc(_x - 25,_y + 20, 10, 0, 2 * Math.PI);
        crc2.arc(_x - 25,_y, 10, 0, 2 * Math.PI);
        crc2.fillRect(_x - 26, _y + 6, 51, 45);
        
        crc2.fill();
         
        crc2.beginPath();
        crc2.fillStyle = "#000000";
         
        //Oeffnung
         
        crc2.arc(_x - 5,_y + 33, 10, 0, 2 * Math.PI); 
         
        crc2.closePath();
        crc2.fill();}




}