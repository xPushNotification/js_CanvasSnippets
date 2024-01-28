

//> Шаблон для канваса:
//  ---
if(0 && "example")
{
    let canvas = null;
    let ctx = null;
    let font = null;

    var clearCanvas = function()
    {
        ctx.fillStyle = "black";
        ctx.fillRect(0,0, canvas.width, canvas.height);
    };

    var onLoad = function()
    {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        font = "16px Arial";

        clearCanvas();

        ctx.fillStyle = "white";
        ctx.fillText("Canvas is loaded...", 10, 20);
    };

    var onClick = function()
    {
        clearCanvas();

        ctx.fillStyle = "white";
        ctx.fillText("Canvas is changed...", 10, 20);
    };

    document.addEventListener('DOMContentLoaded', function() {onLoad();}, false);
    document.addEventListener("click", function() {onClick();}, false);

} //if:example