

//> Диаграммы: pie chart:
//  ---
if(0 && "example")
{
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    ctx.lineWidth = 2;
    ctx.font = "14px verdana";

    let PI2 = Math.PI*2;

    let myColor = ["Green", "Red", "Blue"];
    let myData = [30,60,10];
    let cx = 150;
    let cy = 150;
    let radius = 100;

    function pieChart(data, colors)
    {
        let total = 0;

        for (let i = 0; i < data.length; i++)
        {
            total += data[i];
        }

        var sweeps = []

        for(let i = 0; i < data.length; i++)
        {
            sweeps.push(data[i] / total * PI2);
        }

        let accumAngle = 0;

        for (let i = 0; i < sweeps.length; i++)
        {
            drawWedge(accumAngle, accumAngle + sweeps[i], colors[i], data[i]);
            accumAngle += sweeps[i];
        }

    } // f:pieChart

    function drawWedge(startAngle, endAngle, fill, label)
    {
        // draw the wedge
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, radius, startAngle, endAngle, false);
        ctx.closePath();
        ctx.fillStyle = fill;
        ctx.strokeStyle = 'black';
        ctx.fill();
        ctx.stroke();

        // draw the label
        var midAngle = startAngle + (endAngle - startAngle) / 2;
        var labelRadius = radius * .65;
        var x = cx + (labelRadius) * Math.cos(midAngle);
        var y = cy + (labelRadius) * Math.sin(midAngle);
        ctx.fillStyle = 'white';
        ctx.fillText(label, x, y);

    } //f:drawWedge

    pieChart(myData, myColor);

} //if:example