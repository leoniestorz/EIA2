namespace L5_Animation {
    window.addEventListener("load", init);

    let crc2: CanvasRenderingContext2D;
    let x: number[] = [];
    let y: number[] = [];
    let n: number = 30;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        for (let i: number = 0; i < n; i++) {
            x[i] = Math.random() * 200;
            y[i] = Math.random() * 200;
        }

        window.setTimeout(animate, 20);
    }

    function animate(): void {
        console.log("Animate called");

        crc2.fillStyle = "#ff0000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let i: number = 0; i < n; i++) {
            x[i] += Math.random() * 4 - 2;
            y[i] += Math.random() * 4 - 2;
            drawObject(x[i], y[i]);
        }

        window.setTimeout(animate);
    }

    function drawObject(_x: number, _y: number): void {
        crc2.fillStyle = "#000000";
        crc2.fillRect(_x, _y, 10, 10);
    }
}