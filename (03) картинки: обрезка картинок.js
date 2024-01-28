

//> Обрезка картинок:
//  ---
if(0 && "example")
{

    let cropImage = function(image, croppingCoords)
    {
        let cc = croppingCoords;
        let workCan = document.createElement("canvas");
        workCan.width = Math.floor(cc.width);
        workCan.height = Math.floor(cc.height);
        let ctx = workCan.getContext("2d");
        ctx.drawImage(image, -Math.floor(cc.x), -Math.floor(cc.y));
        image.src = workCan.toDataURL();
        return image;
    };

    var onClick = function()
    {
        let image = new Image();
        image.src = "logo.svg";     // must have the same domain as script
        image.onload = function()
        {
            cropImage(
                this,
                {x: this.width/4, y:this.height/4, width:this.width/2, height:this.height/2}
            );
            document.body.appendChild(this);
        };
    };

    document.addEventListener("click", function() {onClick();}, false);
} //if:example