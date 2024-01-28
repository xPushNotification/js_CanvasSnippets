

//> Рисуем арку
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";

    let angle = 1;

    var onClick = function()
    {
        let degToRadiansRatio = 0.0174533;
        let centerX = 50;
        let centerY = 50;
        let radius = 30;
        let startingRadianAngle = 0  * degToRadiansRatio;
        let endingRadianAngle = angle * degToRadiansRatio;
        angle += 10;

        ctx.strokeStyle = "red";
        ctx.lineWidth = 10;

        ctx.beginPath();
            ctx.arc(centerX, centerY, radius, startingRadianAngle, endingRadianAngle);
            ctx.stroke();
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example