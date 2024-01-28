

//> Прямоугольники
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";

    var onClick = function()
    {
        let leftX=25;
        let topY=25;
        let width=40;
        let height=25;

        ctx.strokeStyle = "red";
        ctx.fillStyle = "green";
        ctx.lineWidth = 10;

        ctx.beginPath();
            ctx.rect(leftX, topY, width, height);
            ctx.stroke();

        ctx.beginPath();
            ctx.rect(leftX+100, topY+100, width, height);
            ctx.fill();

    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example