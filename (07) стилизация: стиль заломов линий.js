

//> Стилизация для соединительных элементов линий
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

        let x = 10; let y = 10;
        ctx.lineJoin='miter';
        ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x+30,y+30);
            ctx.lineTo(x+60,y);
            ctx.lineTo(x+90,y+30);
            ctx.stroke();

        x += 50; y += 50;
        ctx.lineJoin='round';
        ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x+30,y+30);
            ctx.lineTo(x+60,y);
            ctx.lineTo(x+90,y+30);
            ctx.stroke();

        x += 50; y += 50;
        ctx.lineJoin='bevel';
        ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x+30,y+30);
            ctx.lineTo(x+60,y);
            ctx.lineTo(x+90,y+30);
            ctx.stroke();
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example