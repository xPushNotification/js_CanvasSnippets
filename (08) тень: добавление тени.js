

//> Рисование с тенью
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";

    var onClick = function()
    {
        ctx.shadowColor = 'orange';
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 10;

        ctx.fillRect(10, 10, 200, 200);
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example