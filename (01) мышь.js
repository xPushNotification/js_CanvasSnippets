

//> Координаты мыши в канвасе:
//  ---
if(0 && "example")
{
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var font = "16px Arial";

    canvas.addEventListener(
        "mousemove",
        function(e)
        {
            let cRect = canvas.getBoundingClientRect();

            let canvasX = Math.round(e.clientX - cRect.left);
            let canvasY = Math.round(e.clientY - cRect.top);

            ctx.clearRect(0,0, canvas.width, canvas.height);
            ctx.fillText("X:"+canvasX+" Y:"+canvasY, 10, 20);
        }
    );

} //if:example