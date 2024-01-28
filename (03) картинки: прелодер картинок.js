

//> Прелодер для картинок:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";

    var onClick = function()
    {
        let img1 = new Image();
        img1.onload = start;
        img1.onerror = function() {console.log("error with loading");};
        img1.src = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg";

        let img2 = new Image();
        img2.onload = start;
        img2.onerror = function() {console.log("error with loading");};
        img2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/320px-Coca-Cola_logo.svg.png";

        let imgCount = 2;

        function start()
        {
            if(--imgCount > 0) {return;}

            ctx.drawImage(img1, 0,0);
            ctx.drawImage(img2, 100,150);
        }
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example