

//> Невозможность получить доступ к данным изображения за пределами домена канваса:
//  канвас помечается как "tained" и к побайтовке доступа уже нет
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";

    var onClick = function()
    {
        let image = new Image();
        image.src = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg";

        image.onload = function()
        {
            ctx.drawImage(this, 0,0);
            ctx.getImageData(0,0,canvas.width, canvas.height);  // security error
        };
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example