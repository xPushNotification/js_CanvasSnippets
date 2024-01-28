

//> Перестраивание размера canvas-а под размер зоны размещения:
//  отталкиванием для размерности внутренних элементов послужит
//  показатель width этого канваса
//  ---
if(0 && "example")
{
    let canvas = null;
    let ctx = null;

    function createCanvas()
    {
        var canvas = document.createElement("canvas");
        canvas.style.position = "absolute";
        canvas.style.left     = "0px";
        canvas.style.top      = "0px";
        canvas.style.zIndex   = 1;
        document.body.appendChild(canvas);
        return canvas;

    } //f:createCanvas

    function removeCanvas()
    {
        if(canvas !== undefined)
        {
            window.removeEventListener("resize",sizeCanvas);
            document.body.removeChild(canvas);
            ctx = undefined;
            canvas = undefined;
         }

    } //f:removeCanvas

    function sizeCanvas()
    {
        if(canvas == null)
        {
            canvas = createCanvas();
            ctx = canvas.getContext("2d");
        }
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;

        drawExample();

    } //f:sizeCanvas

    function drawExample()
    {
        ctx.fillStyle = "black";
        ctx.fillRect(0,0, canvas.width, canvas.height);

        let widthOriginal = 500;
        let widthRatio = canvas.width / widthOriginal;
        let rect =
        {
            x: 200,
            y: 200,
            width: 100 * widthRatio,
            height: 100 * widthRatio,
        };
        ctx.fillStyle = "red";
        ctx.fillRect(rect.x,rect.y, rect.width, rect.height);

        console.log(rect);

    } //f:drawExample

    window.addEventListener("resize", sizeCanvas);
    sizeCanvas();

} //if:example