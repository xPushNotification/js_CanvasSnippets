

//> Рисование арки с заливкою:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    var arc =
    {
        cx:150, cy:150,
        innerRadius:75, outerRadius:100,
        startAngle:-Math.PI/4, endAngle:Math.PI
    };

    drawArc(arc,'skyblue','gray',4);

    function drawArc(a,fill,stroke,strokewidth)
    {
        ctx.beginPath();
            ctx.arc(a.cx,a.cy,a.innerRadius,a.startAngle,a.endAngle);
            ctx.arc(a.cx,a.cy,a.outerRadius,a.endAngle,a.startAngle,true);
        ctx.closePath();

        ctx.fillStyle=fill;
        ctx.strokeStyle=stroke;
        ctx.lineWidth=strokewidth

        ctx.fill();
        ctx.stroke();

    } //f:drawArc

} //if:example