

//> Рисуем линию:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";

    var onClick = function()
    {
        ctx.strokeStyle = "red";
        ctx.lineWidth = 10;

        let begX = Math.trunc( Math.random() * 500 );
        let begY = Math.trunc( Math.random() * 500 );
        let endX = Math.trunc( Math.random() * 500 );
        let endY = Math.trunc( Math.random() * 500 );

        ctx.beginPath();
            ctx.moveTo(begX,begY);
            ctx.lineTo(endX,endY);
        ctx.stroke();
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example