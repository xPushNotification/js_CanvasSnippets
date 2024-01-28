

//> Тень в виде стикера:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    let img = new Image();
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/320px-Coca-Cola_logo.svg.png";
    img.onload = function()
    {
        ctx.drawImage(img, 20,20);

        let sticker = stickerEffect(img, 5);
        ctx.drawImage(sticker, 150,20);
    };

    function stickerEffect(img, grow)
    {
        let canvas1=document.createElement("canvas");
        let ctx1=canvas1.getContext("2d");
        let canvas2=document.createElement("canvas");
        let ctx2=canvas2.getContext("2d");

        canvas1.width=canvas2.width=img.width+grow*2;
        canvas1.height=canvas2.height=img.height+grow*2;

        ctx1.drawImage(img,grow,grow);
        ctx2.shadowColor='white';

        ctx2.shadowBlur=2;
        for(var i=0;i<grow;i++)
        {
            ctx2.drawImage(canvas1,0,0);
            ctx1.drawImage(canvas2,0,0);
        }

        ctx2.shadowColor='rgba(0,0,0,0)';
        ctx2.drawImage(img,grow,grow);

        return(canvas2);

    } //f:stickerEffect

} //if:example