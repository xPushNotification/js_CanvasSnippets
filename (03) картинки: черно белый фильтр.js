

//> Черно белая картинка:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.strokeStyle = "blue";

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

        // new under existing:
        if(1)
        {
            ctx.drawImage(img1, 0, 0);

            ctx.globalCompositeOperation='color';
            ctx.fillStyle = "white";
            ctx.globalAlpha = 1; // alpha 0 = no effect 1 = full effect
            ctx.fillRect(0, 0, img1.width, img1.height);
        }

    } //f:start

} //if:example