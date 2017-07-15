//Aufgabe: Abschlussaufgabe
//Name: Leonie Storz
//Matrikel: 255077
//Datum: 21.07.17
//   
//Hiermit versichere ich, dass ich diesen Code selbst erstellt habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    var imgData;
    Abschlussaufgabe.z = 0;
    Abschlussaufgabe.allCircles = [];
    function init(_event) {
        Abschlussaufgabe.canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = Abschlussaufgabe.canvas.getContext("2d");
        drawStartscreen("#E9967A");
        drawStarttext("#000000");
        //      drawButton("red", "blue");    
        //      drawCircle("FF00GG",700,350);
        var div = document.createElement("div");
        document.body.appendChild(div);
        var s = div.style;
        s.backgroundColor = "red";
        s.marginTop = "-250px";
        s.marginLeft = "620px";
        s.height = "100px";
        s.width = "100px";
        s.position = "fixed";
        s.borderBottomLeftRadius = "100px";
        s.borderBottomRightRadius = "100px";
        s.borderTopLeftRadius = "100px";
        s.borderTopRightRadius = "100px";
        //      div.addEventListener("touchend", changeScreen); 
        //      div.addEventListener("click", changeScreen); 
        Abschlussaufgabe.canvas.addEventListener("touchend", addCircle);
        Abschlussaufgabe.canvas.addEventListener("click", addCircle);
        div.addEventListener("touchend", removeCircle);
        div.addEventListener("click", removeCircle);
        //      console.log(allCircles);  
        //      
        //        
        //        
        //
        //       for (var i = 0; i < 80; i++) {
        //                    
        //                    var randomFlower:number = Math.floor((Math.random() * 3));
        //                    var height:number = Math.floor((Math.random() * 255) + 380);
        //                    var width:number  = Math.floor((Math.random() * 1100) - 10); 
        //       switch (randomFlower) {
        //                        
        //                                case 0:
        //                                    drawSonnenblume(width,height);
        //                                    break;
        //                                case 1:
        //                                    drawMohnblume(width, height);
        //                                    break;
        //                                case 2:
        //                                    drawTulpe(width, height);
        //                                    break;} 
    }
    //        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //Speichern des Canvas als Bild
    //Erscheinen der 10 Bienen am Ausgang des Bienenstocks
    //        for (let i: number = 0; i < z; i++) {
    //            
    //            let b: Biene = {x: 0, y: 0, color: "", stachel: true};
    //            b.x = 1190; 
    //            b.y = 475;  
    //            
    //            b.color = "hsl(" + Math.random() * 60 + ", 100%, 50%)";
    //            b.stachel = Boolean(Math.round(Math.random()));
    //            
    //            alleBienen[i] = b;
    //        }
    //
    //        
    //      
    //        window.setTimeout(animate, 10);
    //    }
    //
    //    
    //
    //    function animate(): void {
    //        
    //        crc2.putImageData(imgData, 0, 0); 
    //Flugrichtung der Bienen 
    //        for (let i: number = 0; i < z; i++) {
    //           
    //            let b: Biene = alleBienen[i];
    //            b.x += Math.random() * 5 - 4;
    //            b.y += Math.random() * 6 - 3;
    //Erscheinen am gegenueberliegenden Rand nach Verlassen des Canvas            
    //            if (b.x < 0) {
    //                b.x = crc2.canvas.width;
    //            }
    //            if (b.y < 0) {
    //                b.y = crc2.canvas.height;
    //            }
    //            if (b.y >= crc2.canvas.height) {
    //                b.y = 0;
    //            }
    //            drawBiene(b); 
    //        }
    //        window.setTimeout(animate, 10);
    //Bei KLick / Touch auf den Canvas erscheint eine neue Biene am Ausgang des Bienenstocks       
    //        canvas.addEventListener("touchend", mehrBienen); 
    //        canvas.addEventListener("click", mehrBienen);
    //
    //    }
    //
    //    function mehrBienen(): void {
    //        alleBienen.push({
    //            
    //            x: 1190, 
    //            y: 475, 
    //            
    //            color: "hsl(" + Math.random() * 60 + ", 100%, 50%)", 
    //            stachel: Boolean(Math.round(Math.random()))});
    //        
    //        z++;
    //       
    //    }
    //Funktionen
    function drawStartscreen(_fillStyle) {
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = _fillStyle;
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc2.closePath();
        //       var image = new Image();
        //       image.src = 'Images/pfeilbutton.png';
        //       crc2.drawImage(image, 700, 350, 100, 100)
        ////       image.id += "button";
        //       let i: CSSStyleDeclaration = image.style;
        ////       i.position = "fixed";
    }
    function drawStarttext(_fillStyle) {
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = _fillStyle;
        Abschlussaufgabe.crc2.font = "50px Georgia";
        Abschlussaufgabe.crc2.fillText("Titel der Anwendung", 460, 300);
        Abschlussaufgabe.crc2.closePath();
        Abschlussaufgabe.crc2.fill();
    }
    function changeScreen() {
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "#FF7F50";
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
        Abschlussaufgabe.crc2.closePath();
        //      showWelcomeText();
    }
    ;
    // function showWelcomeText () : void {
    //     
    // 
    //     var action: string = prompt("Bitte Ihren Namen eingeben");
    //   
    // };  
    function addCircle(_event) {
        var c = new Abschlussaufgabe.Circle(10, 10);
        c.draw;
        //       c.setRandomStyle;
        Abschlussaufgabe.allCircles.push(c);
        Abschlussaufgabe.z++;
        console.log(Abschlussaufgabe.z);
    }
    function removeCircle() {
        this.parentNode.removeChild(this);
        //        this.makeCircleInvisible;
        Abschlussaufgabe.allCircles.push();
        Abschlussaufgabe.z--;
        console.log(Abschlussaufgabe.z);
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
;
//# sourceMappingURL=abschlussaufgabe.js.map