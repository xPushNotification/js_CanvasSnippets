

//> animationFrame + fps
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFF";
    ctx.strokeStyle = "green";

    let timeCurrent = +new Date();
    let fps = 0;
    let fpsCurrent = 0;

    setInterval(
        function()
        {
            fpsCurrent = fps;
            fps = 0;
        },
        1000
    );

    function frame(pms)
    {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.fillText(""+fpsCurrent, 10, 15);

        /*
            routers:
                - modes
                - read input to cfgs as a separate thread
                - dynamic loading/unloading assets as a separate thread
                - preloading assets as a stop all and load process
                - user/system cfgs
                - static maps
                - entities are trying to complete their goals
                - object interactions + separate threads
                - view
        */

    } //f:frame

    function doAnimate()
    {
        let time = +new Date();
        let timeLapse = time = timeCurrent;
        timeCurrent = time;
        fps += 1;

        frame(timeLapse);

        requestAnimationFrame(doAnimate);
        return;

    } //f:doAnimate

    doAnimate();

} //if:example