

//> Автоматическое соединение последней точки с начальной
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";

    var onClick = function()
    {
        let topVertexX=50;
        let topVertexY=50;
        let rightVertexX=75;
        let rightVertexY=75;
        let leftVertexX=25;
        let leftVertexY=75;

        ctx.strokeStyle = "red";
        ctx.lineWidth = 10;

        ctx.beginPath();
            ctx.moveTo(topVertexX,topVertexY);
            ctx.lineTo(rightVertexX,rightVertexY);
            ctx.lineTo(leftVertexX,leftVertexY);
            ctx.closePath()
            ctx.stroke();
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example