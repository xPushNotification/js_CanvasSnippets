

//> Воспроизведение видео:
//  видео для канваса это просто картинка достанная из объекта "video"
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let link = "https://file-examples-com.github.io/uploads/2020/03/file_example_WEBM_480_900KB.webm";

    let videoContainer;
    let video = document.createElement("video");

    video.src = link;
    video.autoplay = false;
    video.loop = true;
    videoContainer =
    {
        video: video,
        ready: false,
    };
    video.oncanplay = readyToPlayVideo;
    video.oncanplaythrough = readyToPlayVideo;

    //
    // достаем кадры
    function updateCanvas()
    {
        ctx.clearRect(0,0,canvas.width, canvas.height);

        if(videoContainer !== undefined && videoContainer.ready)
        {
            let scale = videoContainer.scale;
            let vidH = videoContainer.video.videoHeight;
            let vidW = videoContainer.video.videoWidth;
            let top = canvas.height / 2 - (vidH /2) * scale;
            let left = canvas.width / 2 - (vidW /2) * scale;

            ctx.drawImage(
                videoContainer.video,
                left, top,
                vidW * scale, vidH * scale
            );
        }

        requestAnimationFrame(updateCanvas);

    } //f:updateCanvas

    //
    // готовим видео контейнер
    function readyToPlayVideo(event)
    {
        videoContainer.scale = Math.min(
            canvas.width /this.videoWidth,
            canvas.height /this.videoHeight
        );
        videoContainer.ready = true;

        if(videoContainer.video.paused)
        {
            drawPayIcon();
        }

        requestAnimationFrame(updateCanvas);

    } //f:readyToPlayVideo

    //
    // иконка на запуск:
    function drawPayIcon()
    {
        ctx.fillStyle = "black";
        ctx.globalAlpha = 0.5;
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = "#DDD";
        ctx.globalAlpha = 0.75;
        let size = (canvas.height / 2) * 0.5;

        ctx.beginPath();
            ctx.moveTo(canvas.width/2 + size/2, canvas.height / 2);
            ctx.lineTo(canvas.width/2 - size/2, canvas.height / 2 + size);
            ctx.lineTo(canvas.width/2 - size/2, canvas.height / 2 - size);
        ctx.closePath();

        ctx.fill();
        ctx.globalAlpha = 1;

    } //f:drawPayIcon

    //
    // обработчик эвента на клик
    function playPauseClick()
    {
        if(videoContainer !== undefined && videoContainer.ready)
        {
            if(videoContainer.video.paused)
            {
                videoContainer.video.play();
            }
            else
            {
                videoContainer.video.pause();
            }
        }

    } //f:playPauseClick

    canvas.addEventListener("click", playPauseClick);

} //if:example