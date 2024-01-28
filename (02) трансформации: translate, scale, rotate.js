

//> Трансляция ротация скалирование:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";

    let rect =
    {
        x:100, y:100, width:175, height:50
    };

    ctx.fillRect( rect.x, rect.y, rect.width, rect.height );

    ctx.save();
        ctx.translate( rect.x+rect.width/2, rect.y+rect.height/2 );
        ctx.rotate( Math.PI/4 );
        ctx.translate( -rect.x-rect.width/2, -rect.y-rect.height/2 );
        ctx.fillRect( rect.x, rect.y, rect.width, rect.height );
    ctx.restore();

    ctx.fillRect( rect.x + 200, rect.y, rect.width, rect.height );

    ctx.fillStyle = "red";
    ctx.save();
        ctx.setTransform(
                1.25,   0,  0,
                1.25,   0,  0
        );
        ctx.fillRect( rect.x , rect.y + 50, rect.width, rect.height );
    ctx.restore();

    ctx.fillStyle = "orange";
    ctx.save();
    ctx.scale(1.2,1.2)
    ctx.fillRect( rect.x , rect.y + 150, rect.width, rect.height );
    ctx.restore();

} //if:example