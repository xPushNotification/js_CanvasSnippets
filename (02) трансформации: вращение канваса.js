

//> Вращение канваса:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let ox = canvas.width / 2;
    let oy = canvas.height / 2;
    ctx.font = "42px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#FFF";
    ctx.fillText("Hello World", ox, oy);

    var onClick = function()
    {
        ctx.translate(ox,oy);
        ctx.rotate((Math.PI / 180) * 15);
        ctx.fillText("Hello World", 0,0);
        ctx.translate(-ox,-oy);
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example