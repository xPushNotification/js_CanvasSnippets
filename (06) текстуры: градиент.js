

//> Рисование градиентом
//  градиент как подложка на весь холст
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";

    var onClick = function()
    {
        ctx.lineWidth = 15;

        let gBeginX = 75;
        let gBeginY = 75;
        let gEndX = 175;
        let gEndY = 75;

        let gradient = ctx.createLinearGradient(gBeginX,gBeginY,gEndX,gEndY);
        // gradient = ctx.createRadialGradient(100,110,15,100,110,45);
        gradient.addColorStop(0,'red');
        gradient.addColorStop(1,'green');
        ctx.strokeStyle=gradient;

        ctx.beginPath();
            ctx.moveTo(50,50);
            ctx.lineTo(300,50);
            ctx.stroke();

        ctx.beginPath();
            ctx.moveTo(60,50);
            ctx.lineTo(60,150);
            ctx.stroke();

        ctx.fillStyle=gradient;

        ctx.beginPath();
            ctx.rect(100, 100, 150, 150);
            ctx.fill();
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example