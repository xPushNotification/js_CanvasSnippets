

//> Картинка из канваса
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";

    var onClick = function()
    {
        let originalImage = new Image();
        originalImage.src = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg";
        originalImage.onload = function()
        {
            let oc = document.createElement('canvas');
            let octx = oc.getContext('2d');
            oc.width = 50;
            oc.height = 50;

            octx.drawImage(originalImage, 0, 0, oc.width, oc.height);
            let shrinkenImage = oc.toDataURL("image/png");

            ctx.drawImage(shrinkenImage, 0, 0, ctx.width, ctx.height);
        };
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example