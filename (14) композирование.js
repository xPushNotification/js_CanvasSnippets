

//> Композирование:
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
        if(0)
        {
            ctx.drawImage(img1, 0,0);
            ctx.globalCompositeOperation='destination-over';
            ctx.drawImage(img2, 0,0);
        }

        // new will erase existing:
        if(0)
        {
            ctx.drawImage(img1, 0,0);
            ctx.globalCompositeOperation='destination-out';
            ctx.drawImage(img2, 0,0);
        }

        // new over existing one:
        if(0)
        {
            ctx.drawImage(img1, 0,0);
            ctx.globalCompositeOperation='source-over';
            ctx.drawImage(img2, 0,0);
        }

        // clip existing inside the new:
        if(0)
        {
            ctx.drawImage(img1, 0,0);
            ctx.globalCompositeOperation='destination-in';
            ctx.drawImage(img2, 0,0);
        }

        // clip the new inside the existing ones:
        if(0)
        {
            ctx.drawImage(img1, 0,0);
            ctx.globalCompositeOperation='source-in';
            ctx.drawImage(img2, 0,0);
        }

        // inner shadow:
        if(0)
        {
            //ctx.globalCompositeOperation='source-atop';
            ctx.fillStyle='gold';
            ctx.fillRect(100,100,100,75);
            // shadow
            ctx.shadowColor='white';
            ctx.shadowBlur=10;
            // restrict new draw to cover existing pixels
            ctx.globalCompositeOperation='source-atop';
            // shadowed stroke
            // "source-atop" clips off the undesired outer shadow
            ctx.strokeRect(100,100,100,75);
            ctx.strokeRect(100,100,100,75);
        }

    } //f:start


} //if:example