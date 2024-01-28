

//> Стилизация для stroke
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";

    var onClick = function()
    {
        ctx.lineWidth = 15;
        ctx.strokeStyle = "red";

        ctx.lineCap='butt';
        ctx.beginPath();
            ctx.moveTo(10,50);
            ctx.lineTo(10,150);
            ctx.stroke();

        ctx.lineCap='round';
        ctx.beginPath();
            ctx.moveTo(50,50);
            ctx.lineTo(50,150);
            ctx.stroke();

        ctx.lineCap='square';
        ctx.beginPath();
            ctx.moveTo(100,50);
            ctx.lineTo(100,150);
            ctx.stroke();
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example