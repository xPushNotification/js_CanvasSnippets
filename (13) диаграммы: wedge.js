

//> Рисование зоны диаграммы (wedge):
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    let w = wedge =
    {
        cx:150, cy:150,
        radius:100,
        startAngle:0,
        endAngle:Math.PI*.65,
    };

    ctx.beginPath();
        ctx.moveTo(w.cx, w.cy);
        ctx.arc(w.cx, w.cy, w.radius, w.startAngle, w.endAngle);
        ctx.closePath();

    ctx.fillStyle = "skyblue";
    ctx.fill();

    ctx.strokeStyle = "gray";
    ctx.lineWidth = 4;
    ctx.stroke();

} //if:example