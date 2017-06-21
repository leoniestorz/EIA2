var L5_Animation;
(function (L5_Animation) {
    window.addEventListener("load", init);
    var crc2;
    var x = [];
    var y = [];
    var n = 30;
    function init(_event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        for (var i = 0; i < n; i++) {
            x[i] = Math.random() * 200;
            y[i] = Math.random() * 200;
        }
        window.setTimeout(animate, 20);
    }
    function animate() {
        console.log("Animate called");
        crc2.fillStyle = "#ff0000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        for (var i = 0; i < n; i++) {
            x[i] += Math.random() * 4 - 2;
            y[i] += Math.random() * 4 - 2;
            drawObject(x[i], y[i]);
        }
        window.setTimeout(animate);
    }
    function drawObject(_x, _y) {
        crc2.fillStyle = "#000000";
        crc2.fillRect(_x, _y, 10, 10);
    }
})(L5_Animation || (L5_Animation = {}));
//# sourceMappingURL=uebung.js.map