

//> Доступ к пикселам канваса:
//  не работает на tained холсте
//  при желании, - можно получать данные пикселя из под мыши
//  ---
if(1 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";

    ctx.fillRect(0, 0, 500, 500);

    let imageData = ctx.getImageData(0,0,500,500);
    let pixelData = imageData.data;

    // the data[] array position of the pixel[x,y]:
    let x = 10;
    let y = 10;

    let n = y * canvas.width * x;

    let red = pixelData[n];
    let green = pixelData[n+1];
    let blue = pixelData[n+2];
    let alpha = pixelData[n+3];

    console.log([red,green,blue,alpha]);

} //if:example