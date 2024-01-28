

//> Рисуем полигон из линий:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";

    var onClick = function()
    {
        let begX = Math.trunc( Math.random() * 450 );
        let begY = Math.trunc( Math.random() * 450 );
        let endX = Math.trunc( Math.random() * 450 );
        let endY = Math.trunc( Math.random() * 450 );

        ctx.beginPath();
            ctx.moveTo(begX,begY);
            ctx.lineTo(endX,endY);
            ctx.lineTo(endX+50,endY+50);
            ctx.lineTo(begX,begY);
        ctx.fillStyle = "blue";
        ctx.fill();
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example