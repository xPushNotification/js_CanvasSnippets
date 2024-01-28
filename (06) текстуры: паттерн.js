

//> Рисуем паттерном:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";

    var onClick = function()
    {
        var image = new Image();
        image.src = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg";
        image.onload = function()
        {
            let pattern = ctx.createPattern(image, "repeat");
            ctx.fillStyle = pattern;

            ctx.fillRect(50,50,150,100);
            ctx.fillRect(150,150,150,100);
        };
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example


//> Рисование паттерном
//  паттерн как подложка на весь холст
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";

    var onClick = function()
    {
        let patternImage = new Image();
        patternImage.src = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg";
        patternImage.onload = function()
        {
            let pattern = ctx.createPattern(patternImage, 'repeat');
            ctx.fillStyle = pattern;

            ctx.beginPath();
                ctx.rect(100,100,150,150);
                ctx.fill();
        };
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example