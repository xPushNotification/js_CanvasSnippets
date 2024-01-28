

//> Внутренние тени:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    ctx.shadowColor = "white";
    ctx.shadowBlur = 10;
    ctx.lineWidth = 4;

    ctx.beginPath();
        ctx.rect(10, 10, 150, 150);
    ctx.closePath();

    ctx.stroke();

    // а теперь сотрем все что снаружи элемента отрисованного
    ctx.globalCompositeOperation = "destination-in";
    ctx.fill();

    // и вернемся к нормальному режиму:
    ctx.globalCompositeOperation = "source-over";

} //if:example