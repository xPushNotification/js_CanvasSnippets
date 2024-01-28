

//> Рисуем полигоны:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";

    let drawRegularPolygon = function(
        sideCount,
        radius,
        centerX, centerY,
        strokeWidth,
        strokeColor,
        fillColor,
        rotationRadians
    )
    {
        let angles=Math.PI*2/sideCount;

        ctx.translate(centerX,centerY);
            ctx.rotate(rotationRadians);

                ctx.beginPath();
                    ctx.moveTo(radius,0);
                    for(var i=1;i<sideCount;i++)
                    {
                        ctx.rotate(angles);
                        ctx.lineTo(radius,0);
                    }
                ctx.closePath();

                ctx.fillStyle=fillColor;
                ctx.strokeStyle = strokeColor;
                ctx.lineWidth = strokeWidth;
                ctx.stroke();
                ctx.fill();
                ctx.rotate(angles*-(sideCount-1));
            ctx.rotate(-rotationRadians);
        ctx.translate(-centerX,-centerY);

    };

    var onClick = function()
    {
        drawRegularPolygon(6,25,225,50,6,'gray','lightblue',0);
        drawRegularPolygon(10,25,300,50,6,'gray','lightgreen',0);
        drawRegularPolygon(3,25,75,50,6,'gray','red',0);
        drawRegularPolygon(5,25,150,50,6,'gray','gold',0);
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example