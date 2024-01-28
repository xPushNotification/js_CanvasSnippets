

//> Текст в параграфы:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.font = "14px serif";
    ctx.fillStyle = "#FFF";

    let theText = "And so, we got it. Some text that very long in the width and that do not fill correctly in the canvas side";

    var onClick = function()
    {
        let x = 10;
        let y = 10;

        // unwrapped:
        //ctx.fillText(theText, x, y);

        // wrapped:
        let firstY = x;
        let words = theText.split(' ');
        let line = '';
        let lineHeight = 14*1.286;
        let maxWidth = 100;

        for(let n = 0; n < words.length; n++)
        {
            let testLine = line + words[n] + ' ';
            let metrics = ctx.measureText(testLine);
            let testWidth = metrics.width;
            if(testWidth > maxWidth)
            {
                ctx.fillText(line, x,y);
                if(n < words.length - 1)
                {
                    line = words[n] + ' ';
                    y += lineHeight;
                }
            }
            else
            {
                line = testLine;
            }
        }
        ctx.fillText(line, x, y);
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example