

//> Безье кривая
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";

    var onClick = function()
    {
        let startX=25;
        let startY=50;
        let controlX1=75;
        let controlY1=10;
        let controlX2=75;
        let controlY2=90;
        let endX=125;
        let endY=50;

        ctx.strokeStyle = "red";
        ctx.lineWidth = 10;

        ctx.beginPath();
            ctx.moveTo(startX,startY);
            ctx.bezierCurveTo(controlX1,controlY1,controlX2,controlY2,endX,endY);
            ctx.stroke();
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example