

//> Масштабирование картинок:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";

    let scaleToFit = function(img)
    {
        var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        var x = (canvas.width / 2) - (img.width / 2) * scale;
        var y = (canvas.height / 2) - (img.height / 2) * scale;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    var onClick = function()
    {
        var image = new Image();
        image.src = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg";
        image.onload = function()
        {
            scaleToFit(this);
        };
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example