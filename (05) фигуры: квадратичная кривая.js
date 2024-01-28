

//> Квадратичная кривая
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";

    var onClick = function()
    {
        let startX=25;
        let startY=70;
        let controlX=75;
        let controlY=25;
        let endX=125;
        let endY=70;

        ctx.strokeStyle = "red";
        ctx.lineWidth = 10;

        ctx.beginPath();
            ctx.moveTo(startX,startY);
            ctx.quadraticCurveTo(controlX,controlY,endX,endY);
            ctx.stroke();
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example