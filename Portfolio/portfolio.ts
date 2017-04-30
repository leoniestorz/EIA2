
//Aufgabe:  Semester-Aufgabe Portfolio
//Name:     Leonie Storz
//Matrikel: 255077
//Datum:    30.04.17
//
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.




document.addEventListener('DOMContentLoaded', function () {
 
   
    
//offenes Aside-Menü einklappen
    
    
    
    
    document.getElementById("einklappen").addEventListener("click", function () {
     
        var menu = false;
          
        if (menu) {
                        document.getElementById("asidebereich").style.display = "block";
                        menu = true;}
                         
        else {
                        document.getElementById("asidebereich").style.display = "none";
                        menu = false;}
        
     });
    
 });    
    
//geschlossenes Aside -Menü auklappen  
 
document.addEventListener('DOMContentLoaded', function () {
         
    
    
    document.getElementById("aufklappen").addEventListener("click", function () {
        
         var menu = true;
        
        if (menu) {
                        document.getElementById("asidebereich").style.display = "block";
                        menu = false;}
                         
        else {
                        document.getElementById("asidebereich").style.display = "none";
                        menu = true;}
        
     });
    
    
});

//FILTER FÜR MEDIENKONZEPTION
//
//damit Medienkonzeption angezeigt wird 
//
//document.addEventListener('DOMContentLoaded', function () {
//     
//document.getElementById("button2").addEventListener("click", function () {
//        
//        var elems = document.getElementsByTagName("div");
//    
//    
//        for (var i = 0; i < elems.length; i++) {
//           
//         var medienkonzeption = elems[i].getElementsByClassName("medienkonzeption");
//               
//            if (medienkonzeption.length != 0) {
//                        
//                     elems[i].style.border = "3px solid white";  }
//           
//          
//            else { }}
//
//und Mediengestaltung ... 
//    
//        for (var i = 0; i < elems.length; i++) {
//            
//            var medienkonzeption = elems[i].getElementsByClassName("mediengestaltung");
//               
//            if (medienkonzeption.length != 0) {
//                        
//                     elems[i].style.display = "none";  }
//           
//            else { }
//        
//        }
//    
//... und EIA1 nicht angezeigt werden 
//    
//    for (var i = 0; i < elems.length; i++) {
//            
//            var medienkonzeption = elems[i].getElementsByClassName("EIA1");
//               
//            if (medienkonzeption.length != 0) {
//                        
//                     elems[i].style.display = "none";  }
//           
//            else { }
//        
//        }
//    
//und die Überschriften auch nicht
//    
//       for (var i = 0; i < elems.length; i++) {
//            
//            var medienkonzeption = elems[i].getElementsByClassName("h1");
//               
//            if (medienkonzeption.length != 0) {
//                        
//                     elems[i].style.display = "none";  }
//           
//            else { }
//        
//        }
//    
//      for (var i = 0; i < elems.length; i++) {
//            
//            var medienkonzeption = elems[i].getElementsByClassName("h3");
//               
//            if (medienkonzeption.length != 0) {
//                        
//                     elems[i].style.display = "none";  }
//           
//            else { }
//        
//        } 
//    });
//    
//});
//
//FILTER FÜR MEDIENGESTALTUNG
//
//damit Mediengestaltung angezeigt wird
//
//document.addEventListener('DOMContentLoaded', function () {
//     
//document.getElementById("button3").addEventListener("click", function () {
//        
//        var elems = document.getElementsByTagName("div");
//        
//        for (var i = 0; i < elems.length; i++) {
//           
//         var mediengestaltung = elems[i].getElementsByClassName("mediengestaltung");
//               
//            if (mediengestaltung.length != 0) {
//                        
//                     elems[i].style.border = "3px solid white";  }
//           
//           
//            else { }}
//    
//und Medienkonzeption ...  
//   
//        for (var i = 0; i < elems.length; i++) {
//            
//            var mediengestaltung = elems[i].getElementsByClassName("medienkonzeption");
//               
//            if (mediengestaltung.length != 0) {
//                        
//                     elems[i].style.display = "none";  }
//           
//            else { }
//        
//        }
//... und EIA1 nicht angezeigt werden   
//    
//        for (var i = 0; i < elems.length; i++) {
//            
//            var mediengestaltung = elems[i].getElementsByClassName("EIA1");
//               
//            if (mediengestaltung.length != 0) {
//                        
//                     elems[i].style.display = "none";  }
//           
//            else { }
//        
//        }
//    
//und die Überschriften auch nicht
//    
//       for (var i = 0; i < elems.length; i++) {
//            
//            var medienkonzeption = elems[i].getElementsByClassName("h2");
//               
//            if (medienkonzeption.length != 0) {
//                        
//                     elems[i].style.display = "none";  }
//           
//            else { }
//        
//        }   
//    
//          for (var i = 0; i < elems.length; i++) {
//            
//            var medienkonzeption = elems[i].getElementsByClassName("h3");
//               
//            if (medienkonzeption.length != 0) {
//                        
//                     elems[i].style.display = "none";  }
//           
//            else { }
//        
//        } 
//
//});
//    
//});
//
//FILTER FÜR ENTWICKLUNG INTERAKTIVER ANWENDUNGEN
//
//damit EIA1 angezeigt wird
//
//document.addEventListener('DOMContentLoaded', function () {
//     
//document.getElementById("button1").addEventListener("click", function () {
//        
//        var elems = document.getElementsByTagName("div");
//        
//        for (var i = 0; i < elems.length; i++) {
//           
//         var EIA1 = elems[i].getElementsByClassName("EIA1");
//               
//            if (EIA1.length != 0) {
//                        
//                     elems[i].style.border = "3px solid white";  }
//           
//           
//            else { 
//                    }
//            
//        }
//    
//und Medienkonzeption ...
//    
//    for (var i = 0; i < elems.length; i++) {
//            
//            var EIA1 = elems[i].getElementsByClassName("medienkonzeption");
//               
//            if (EIA1.length != 0) {
//                        
//                     elems[i].style.display = "none";  }
//           
//            else { }
//        
//        }
//    
//... und Mediengestaltung nicht angezeigt werden
//    
//    for (var i = 0; i < elems.length; i++) {
//            
//            var EIA1 = elems[i].getElementsByClassName("mediengestaltung");
//               
//            if (EIA1.length != 0) {
//                        
//                     elems[i].style.display = "none";  }
//           
//            else { }
//        
//        }
//    
//und die Überschriften auch nicht
//    
//       for (var i = 0; i < elems.length; i++) {
//            
//            var medienkonzeption = elems[i].getElementsByClassName("h1");
//               
//            if (medienkonzeption.length != 0) {
//                        
//                     elems[i].style.display = "none";  }
//           
//            else { }
//        
//        }   
//    
//          for (var i = 0; i < elems.length; i++) {
//            
//            var medienkonzeption = elems[i].getElementsByClassName("h2");
//               
//            if (medienkonzeption.length != 0) {
//                        
//                     elems[i].style.display = "none";  }
//           
//            else { }
//        
//        }     
//    
//    });
//    
//});
//
//ALLE PROJEKTE WIEDER ANZEIGEN 
//
//Reset für Mediengestaltung ...
//
//
//document.addEventListener('DOMContentLoaded', function () {
//     
//document.getElementById("button4").addEventListener("click", function () {
//        
//        var elems = document.getElementsByTagName("div");
//    
//        
//        for (var i = 0; i < elems.length; i++) {
//           
//         var mediengestaltung = elems[i].getElementsByClassName("mediengestaltung");
//               
//            if (mediengestaltung.length != 1) {}
//           
//           
//            else { 
//                   elems[i].style.display = "inline"; }
//            
//        }
//    
// ... und Reset für Überschriften
//       
//    for (var i = 0; i < elems.length; i++) {
//            
//            var medienkonzeption = elems[i].getElementsByClassName("h2");
//               
//            if (medienkonzeption.length != 0) {
//                        
//                     elems[i].style.display = "inline";  }
//           
//            else { }
//        
//        }   
//    
//     for (var i = 0; i < elems.length; i++) {
//            
//            var medienkonzeption = elems[i].getElementsByClassName("h3");
//               
//            if (medienkonzeption.length != 0) {
//                        
//                     elems[i].style.display = "inline";  }
//           
//            else { }
//        
//        }     
//    });
//    
//});
//
//Reset für Medienkonzeption
//
//document.addEventListener('DOMContentLoaded', function () {
//     
//document.getElementById("button4").addEventListener("click", function () {
//        
//        var elems = document.getElementsByTagName("div");
//    
//        
//        for (var i = 0; i < elems.length; i++) {
//           
//         var medienkonzeption = elems[i].getElementsByClassName("medienkonzeption");
//               
//            if (medienkonzeption.length != 1) {}
//           
//           
//            else { 
//                   elems[i].style.display = "inline"; }
//            
//        }
//    
// ... und Reset für Überschriften
//       
//    for (var i = 0; i < elems.length; i++) {
//            
//            var medienkonzeption = elems[i].getElementsByClassName("h1");
//               
//            if (medienkonzeption.length != 0) {
//                        
//                     elems[i].style.display = "inline";  }
//           
//            else { }
//        
//        }   
//    
//     for (var i = 0; i < elems.length; i++) {
//            
//            var medienkonzeption = elems[i].getElementsByClassName("h3");
//               
//            if (medienkonzeption.length != 0) {
//                        
//                     elems[i].style.display = "inline";  }
//           
//            else { }
//        
//        }      
//    });
//    
//});
//
//Reset für EIA1
//
//document.addEventListener('DOMContentLoaded', function () {
//     
//document.getElementById("button4").addEventListener("click", function () {
//        
//        var elems = document.getElementsByTagName("div");
//    
//        
//        for (var i = 0; i < elems.length; i++) {
//           
//         var EIA1 = elems[i].getElementsByClassName("EIA1");
//               
//            if (EIA1.length != 1) {}
//           
//           
//            else { 
//                   elems[i].style.display = "inline"; }
//            
//        }
// ... und Reset für Überschriften
//       
//    for (var i = 0; i < elems.length; i++) {
//            
//            var medienkonzeption = elems[i].getElementsByClassName("h1");
//               
//            if (medienkonzeption.length != 0) {
//                        
//                     elems[i].style.display = "inline";  }
//           
//            else { }
//        
//        }   
//    
//     for (var i = 0; i < elems.length; i++) {
//            
//            var medienkonzeption = elems[i].getElementsByClassName("h2");
//               
//            if (medienkonzeption.length != 0) {
//                        
//                     elems[i].style.display = "inline";  }
//           
//            else { }
//        
//        } 
// }); 
//});


//Kontakt (Senden-Button)

document.addEventListener('DOMContentLoaded', function () {
    
document.getElementById("kontaktButton").addEventListener ("click", contact);

    
    
    function contact() {
    
        
     var frage = confirm("Nachricht abschicken?");
    
    
            if (frage==true){
        
                        alert("Ihre Nachricht wurde erfolgreich versendet!");}
        
            else {
                        alert("Der Sendevorgang wurde abgebrochen.");}
        
        }
            
});

