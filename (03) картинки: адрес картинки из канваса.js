

//> Получение из канваса картинки для сохранения:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let ox = canvas.width / 2;
    let oy = canvas.height / 2;
    ctx.font = "42px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#FFF";
    ctx.fillText("Hello World", ox, oy);

    var onClick = function()
    {
        let imageURI = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");;
        window.location.href = imageURI;
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example