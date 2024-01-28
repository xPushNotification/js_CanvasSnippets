

//> Прозрачность:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");;

    ctx.fillStyle = "green";
    ctx.fillRect(10,10,100,100);

    ctx.globalAlpha = 0.50;

    ctx.fillStyle = "orange";
    ctx.fillRect(50,50,100,100);

} //if:example