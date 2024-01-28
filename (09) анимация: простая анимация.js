

//> Простая анимация:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "red";

    let circleX = 20;

    requestAnimationFrame(animate);

    // если не хочется нагружать процессор - можно
    // делать дроп 2 из 3 кадров - получим 20 fps
    function animate()
    {
        circleX++;

        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.beginPath();
            ctx.arc(circleX, 30,15,0, Math.PI*2);
            ctx.fill();

        requestAnimationFrame(animate);

    } //f:animate

} //if:example