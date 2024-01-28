

//> Текстурированный текст:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";
    let img = new Image();
    img.src = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg";

    var onClick = function()
    {
        let cloneCanvas = canvas.cloneNode();
        let ctx = cloneCanvas.getContext("2d");

        let ox = canvas.width / 2;
        let oy = canvas.height / 2;
        ctx.font = "62px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#FFF";

        ctx.fillText("Hello World", ox, oy);

        ctx.globalCompositeOperation = "source-atop";
        ctx.drawImage(img, 0, 0);

        canvas.getContext("2d").drawImage(cloneCanvas,0,0);
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example
