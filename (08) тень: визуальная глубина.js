

//> Визуальная глубина с тенями:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "skyblue";
    ctx.strokeStyle = "lightgray";
    ctx.lineWidth = 5;

    // without shadow:
    ctx.beginPath();
        ctx.arc(60,60,30,0,Math.PI*2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

    // with a shadow:
    ctx.shadowColor = "black";
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 3;

    ctx.beginPath();
        ctx.arc(175,60,30,0,Math.PI*2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

    ctx.shadowColor = "rgba(0,0,0,0)";

} //if:example