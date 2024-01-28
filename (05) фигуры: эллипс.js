

//> Построение эллипса
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";
    ctx.strokeStyle = "green";

    function drawEllipse(x,y,width,height)
    {
        var PI2=Math.PI*2;
        var ratio=height/width;
        var radius=Math.max(width,height)/2;
        var increment = 1 / radius;
        var cx=x+width/2;
        var cy=y+height/2;

        ctx.beginPath();
            var x = cx + radius * Math.cos(0);
            var y = cy - ratio * radius * Math.sin(0);
            ctx.lineTo(x,y);
            for(var radians=increment; radians<PI2; radians+=increment)
            {
                var x = cx + radius * Math.cos(radians);
                var y = cy - ratio * radius * Math.sin(radians);
                ctx.lineTo(x,y);
            }
        ctx.closePath();
        ctx.stroke();
    }

    var onClick = function()
    {
        drawEllipse(100,100, 50,50);
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example